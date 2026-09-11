export const SITE_URL = "https://www.houseofkalaa.studio";
export const SITE_NAME = "House of Kalaa";
export const SITE_TAGLINE = "Where Craft Becomes Home";
export const CONTACT_EMAIL = "kalpeet@houseofkalaa.studio";
export const CONTACT_PHONE = "+917774048818";
export const STUDIO_ADDRESS = "B-36, NICE, A Road, 5th street, MIDC, Satpur, Nashik - 422007";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createSeo({ title, description, path, type = "website", keywords }: SeoOptions) {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      keywords?.length ? { name: "keywords", content: keywords.join(", ") } : undefined,
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ].filter(Boolean),
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLd(schema: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(schema),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "FurnitureStore", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    slogan: SITE_TAGLINE,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-36, NICE, A Road, 5th street, MIDC, Satpur",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422007",
      addressCountry: "IN",
    },
    areaServed: ["Nashik", "Pune", "Maharashtra", "India"],
    priceRange: "$$$",
    knowsAbout: [
      "Luxury interior design",
      "Bespoke furniture",
      "Turnkey interiors",
      "Commercial interiors",
      "Hospitality interiors",
      "Residential furniture",
    ],
    founder: {
      "@type": "Person",
      name: "Kalpeet Lunawat",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
