import "./lib/error-capture";

import nodemailer from "nodemailer";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const CONTACT_FORM_PATH = "/api/contact";

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

type ContactFormPayload = {
  inquiryType?: string;
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  furnitureType?: string;
  materialPreference?: string;
  roomSpace?: string;
  budgetRange?: string;
  projectType?: string;
  propertySize?: string;
  location?: string;
  timeline?: string;
  message?: string;
};

function jsonResponse(body: Record<string, unknown>, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEnv(name: string) {
  return clean(process.env[name]);
}

async function handleContactForm(request: Request) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, { status: 405 });
  }

  let payload: ContactFormPayload;
  try {
    payload = (await request.json()) as ContactFormPayload;
  } catch {
    return jsonResponse({ error: "Invalid request body" }, { status: 400 });
  }

  const inquiryType = clean(payload.inquiryType);
  const name = clean(payload.name || payload.fullName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);

  if (!name || !email || !phone || !message) {
    return jsonResponse(
      { error: "Please provide name, email, phone, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return jsonResponse({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const smtpUser = getEnv("SMTP_USER");
  const smtpPassword = getEnv("SMTP_APP_PASSWORD").replace(/\s+/g, "");
  const toEmail = getEnv("CONTACT_TO_EMAIL") || smtpUser;

  if (!smtpUser || !smtpPassword || !toEmail) {
    console.error("Contact form email environment variables are missing.");
    return jsonResponse({ error: "Email service is not configured." }, { status: 500 });
  }

  const rows = [
    ["Inquiry type", inquiryType],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Furniture type", clean(payload.furnitureType)],
    ["Material preference", clean(payload.materialPreference)],
    ["Room/Space", clean(payload.roomSpace)],
    ["Budget range", clean(payload.budgetRange)],
    ["Project type", clean(payload.projectType)],
    ["Property size / area", clean(payload.propertySize)],
    ["Location / city", clean(payload.location)],
    ["Timeline", clean(payload.timeline)],
    ["Message", message],
  ].filter(([, value]) => value);

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #eee">${label}</th><td style="padding:8px 12px;border-bottom:1px solid #eee">${String(
          value,
        )
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</td></tr>`,
    )
    .join("");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  await transporter.sendMail({
    from: `"House of Kalaa Website" <${smtpUser}>`,
    to: toEmail,
    replyTo: email,
    subject: `New ${inquiryType || "website"} inquiry from ${name}`,
    text,
    html: `<div style="font-family:Arial,sans-serif;line-height:1.5"><h2>New House of Kalaa inquiry</h2><table cellpadding="0" cellspacing="0" style="border-collapse:collapse">${htmlRows}</table></div>`,
  });

  return jsonResponse({ ok: true });
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === CONTACT_FORM_PATH) {
        return await handleContactForm(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
