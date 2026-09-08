import logoAshoka from "@/assets/client-logos/ashoka.png";
import logoBafna from "@/assets/client-logos/bafna.png";
import logoBob from "@/assets/client-logos/bob.png";
import logoCapgemini from "@/assets/client-logos/capgemini.png";
import logoElpro from "@/assets/client-logos/elpro.png";
import logoGscid from "@/assets/client-logos/gscid.png";
import logoHapagLloyd from "@/assets/client-logos/hapag-lloyd.png";
import logoHbFuller from "@/assets/client-logos/hb-fuller.png";
import logoHdfcbank from "@/assets/client-logos/hdfcbank.png";
import logoHero from "@/assets/client-logos/hero.png";
import logoHexaware from "@/assets/client-logos/hexaware.png";
import logoHpgas from "@/assets/client-logos/hpgas.png";
import logoInfosys from "@/assets/client-logos/infosys.png";
import logoInfraMarket from "@/assets/client-logos/infra-market.png";
import logoKnorrBremse from "@/assets/client-logos/knorr-bremse.png";
import logoMdindia from "@/assets/client-logos/mdindia.png";
import logoMylan from "@/assets/client-logos/mylan.png";
import logoNdcc from "@/assets/client-logos/ndcc.png";
import logoParanjpe from "@/assets/client-logos/paranjpe.png";
import logoPimco from "@/assets/client-logos/pimco.png";
import logoPuratos from "@/assets/client-logos/puratos.png";
import logoQuinstreet from "@/assets/client-logos/quinstreet.png";
import logoRelianceTrends from "@/assets/client-logos/reliance-trends.png";
import logoSbi from "@/assets/client-logos/sbi.png";
import logoShubhada from "@/assets/client-logos/shubhada.png";
import logoSiemens from "@/assets/client-logos/siemens.png";
import logoSkoda from "@/assets/client-logos/skoda.png";
import logoSolitaire from "@/assets/client-logos/solitaire.png";
import logoSpjimr from "@/assets/client-logos/spjimr.png";
import logoTajhotels from "@/assets/client-logos/tajhotels.png";
import logoTechmahindra from "@/assets/client-logos/techmahindra.png";
import logoTejaswi from "@/assets/client-logos/tejaswi.png";
import logoVodafone from "@/assets/client-logos/vodafone.png";
import logoWns from "@/assets/client-logos/wns.png";

/** Client logos — each entry maps to a bundled asset in `src/assets/client-logos/`. */
export const clientLogos = [
  ["Taj Hotels", "tajhotels"],
  ["Capgemini", "capgemini"],
  ["Infosys", "infosys"],
  ["Tech Mahindra", "techmahindra"],
  ["Siemens", "siemens"],
  ["SPJIMR", "spjimr"],
  ["HP Gas", "hpgas"],
  ["State Bank of India", "sbi"],
  ["NDCC", "ndcc"],
  ["Bank of Baroda", "bob"],
  ["HDFC Bank", "hdfcbank"],
  ["PIMCO", "pimco"],
  ["Paranjpe Brothers", "paranjpe"],
  ["Solitaire", "solitaire"],
  ["GSCID", "gscid"],
  ["Ashoka Buildcon", "ashoka"],
  ["WNS", "wns"],
  ["Skoda", "skoda"],
  ["Reliance Trends", "reliance-trends"],
  ["Bafna Jewellers", "bafna"],
  ["Hero", "hero"],
  ["Tejaswi Jewellers", "tejaswi"],
  ["ELPRC", "elpro"],
  ["Hexaware", "hexaware"],
  ["Infra.Market", "infra-market"],
  ["Hapag-Lloyd", "hapag-lloyd"],
  ["H.B. Fuller", "hb-fuller"],
  ["Knorr-Bremse", "knorr-bremse"],
  ["Vodafone", "vodafone"],
  ["QuinStreet", "quinstreet"],
  ["MDIndia", "mdindia"],
  ["Mylan", "mylan"],
  ["Puratos", "puratos"],
  ["Shubhada", "shubhada"],
] as const;

export type ClientLogoName = (typeof clientLogos)[number][0];
export type ClientLogoSlug = (typeof clientLogos)[number][1];

const clientLogoSources: Record<ClientLogoSlug, string> = {
  tajhotels: logoTajhotels,
  capgemini: logoCapgemini,
  infosys: logoInfosys,
  techmahindra: logoTechmahindra,
  siemens: logoSiemens,
  spjimr: logoSpjimr,
  hpgas: logoHpgas,
  sbi: logoSbi,
  ndcc: logoNdcc,
  bob: logoBob,
  hdfcbank: logoHdfcbank,
  pimco: logoPimco,
  paranjpe: logoParanjpe,
  solitaire: logoSolitaire,
  gscid: logoGscid,
  ashoka: logoAshoka,
  wns: logoWns,
  skoda: logoSkoda,
  "reliance-trends": logoRelianceTrends,
  bafna: logoBafna,
  hero: logoHero,
  tejaswi: logoTejaswi,
  elpro: logoElpro,
  hexaware: logoHexaware,
  "infra-market": logoInfraMarket,
  "hapag-lloyd": logoHapagLloyd,
  "hb-fuller": logoHbFuller,
  "knorr-bremse": logoKnorrBremse,
  vodafone: logoVodafone,
  quinstreet: logoQuinstreet,
  mdindia: logoMdindia,
  mylan: logoMylan,
  puratos: logoPuratos,
  shubhada: logoShubhada,
};

export function getClientLogoSrc(slug: ClientLogoSlug) {
  return clientLogoSources[slug];
}
