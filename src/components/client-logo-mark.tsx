import { useState } from "react";
import { googleLogoFallbackUrl, googleLogoUrl } from "@/lib/client-logos";

export function ClientLogoMark({ name, domain }: { name: string; domain: string }) {
  const [src, setSrc] = useState(googleLogoUrl(domain, 256));
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
      {src ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-0.5"
          width={256}
          height={256}
          loading="lazy"
          onError={() => {
            if (src.includes("faviconV2")) {
              setSrc(googleLogoFallbackUrl(domain, 256));
              return;
            }
            if (!src.includes("clearbit.com")) {
              setSrc(`https://logo.clearbit.com/${domain}`);
              return;
            }
            setSrc("");
          }}
        />
      ) : (
        <span className="text-[10px] font-bold tracking-[0.08em] text-navy/70">{initials}</span>
      )}
    </div>
  );
}
