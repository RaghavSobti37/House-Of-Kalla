/** Client logos sourced via Google favicon service (256px) with Clearbit fallback. */
export const clientLogos = [
  ["Taj Hotels", "tajhotels.com"],
  ["Capgemini", "capgemini.com"],
  ["Infosys", "infosys.com"],
  ["Tech Mahindra", "techmahindra.com"],
  ["Siemens", "siemens.com"],
  ["SPJIMR", "spjimr.org"],
  ["HP Gas", "hindustanpetroleum.com"],
  ["State Bank of India", "sbi.co.in"],
  ["NDCC", "ndcc.in"],
  ["Bank of Baroda", "bankofbaroda.in"],
  ["HDFC Bank", "hdfcbank.com"],
  ["PIMCO", "pimco.com"],
  ["Paranjpe Brothers", "paranjpebrothers.com"],
  ["Solitaire", "solitairehomes.in"],
  ["GSCID", "gscid.com"],
  ["Ashoka Buildcon", "ashokabuildcon.com"],
  ["WNS", "wns.com"],
  ["Skoda", "skoda-auto.com"],
  ["Reliance Trends", "reliancetrends.com"],
  ["Bafna Jewellers", "bafnajewellers.com"],
  ["Hero", "heromotocorp.com"],
  ["Tejaswi Jewellers", "tejaswijewellers.com"],
  ["ELPRC", "elpro.com"],
  ["Hexaware", "hexaware.com"],
  ["Infra.Market", "infra.market"],
  ["Hapag-Lloyd", "hapag-lloyd.de"],
  ["H.B. Fuller", "hbfuller.com"],
  ["Knorr-Bremse", "www.knorr-bremse.com"],
  ["Vodafone", "vodafone.com"],
  ["QuinStreet", "quinstreet.com"],
  ["MDIndia", "mdindiaonline.com"],
  ["Mylan", "viatris.com"],
  ["Puratos", "puratos.com"],
  ["Shubhada", "shubhadapolymers.com"],
] as const;

export function googleLogoUrl(domain: string, size = 128) {
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=${size}`;
}

export function googleLogoFallbackUrl(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}
