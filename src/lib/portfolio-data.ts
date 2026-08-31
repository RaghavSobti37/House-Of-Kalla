export type ProjectCategory = "Hospitality" | "Commercial";

// Taj Nashik — best available from Drive (source files are web-compressed)
import tajNashikMain from "../assets/portfolio/taj-nashik/taj-nashik-main.jpg";
import tajNashik1 from "../assets/portfolio/taj-nashik/taj-nashik-1.jpg";
import tajNashik2 from "../assets/portfolio/taj-nashik/taj-nashik-2.jpg";
import tajNashik3 from "../assets/portfolio/taj-nashik/taj-nashik-3.jpg";
import tajNashik6 from "../assets/portfolio/taj-nashik/taj-nashik-6.jpg";
import tajNashik11 from "../assets/portfolio/taj-nashik/taj-nashik-11.jpg";
import tajNashik12 from "../assets/portfolio/taj-nashik/taj-nashik-12.jpg";
import tajNashik13 from "../assets/portfolio/taj-nashik/taj-nashik-13.jpg";

// Taj Pune — high-res exports from source TIFF renders
import tajPuneHero from "../assets/portfolio/taj-pune/hq/lobby-b-336-main.jpg";
import tajPuneLobbyA from "../assets/portfolio/taj-pune/hq/lobby-a-216.jpg";
import tajPuneBoardroom from "../assets/portfolio/taj-pune/hq/boardroom-186.jpg";
import tajPuneDeli from "../assets/portfolio/taj-pune/hq/deli-238.jpg";
import tajPuneGym from "../assets/portfolio/taj-pune/hq/gym-479-main.jpg";
import tajPuneBanquet from "../assets/portfolio/taj-pune/hq/banquet-social-620-1.jpg";
import tajPuneBuzz from "../assets/portfolio/taj-pune/hq/buzz-buffet-266-main.jpg";
import tajPuneFacade from "../assets/portfolio/taj-pune/hq/facade-main-road-358-main.jpg";

// Bafna — full-resolution showroom photography (5MB originals)
import bafna1 from "../assets/portfolio/bafna/01.JPG";
import bafna2 from "../assets/portfolio/bafna/02.JPG";
import bafna3 from "../assets/portfolio/bafna/03.JPG";
import bafna4 from "../assets/portfolio/bafna/04.JPG";
import bafna10 from "../assets/portfolio/bafna/10.JPG";

// Bank of Baroda — HDR interior photography
import bobHero from "../assets/portfolio/bank-of-baroda/IMG_5039-HDR.jpg";
import bob1 from "../assets/portfolio/bank-of-baroda/IMG_4992-HDR.jpg";
import bob2 from "../assets/portfolio/bank-of-baroda/IMG_4988-Edit.jpg";
import bob3 from "../assets/portfolio/bank-of-baroda/IMG_5024-HDR.jpg";
import bob4 from "../assets/portfolio/bank-of-baroda/IMG_5033-HDR-Edit.jpg";
import bob5 from "../assets/portfolio/bank-of-baroda/IMG_5009-HDR.jpg";
import bob6 from "../assets/portfolio/bank-of-baroda/IMG_4977-HDR.jpg";
import bob7 from "../assets/portfolio/bank-of-baroda/IMG_4953-HDR-3.jpg";
import bob8 from "../assets/portfolio/bank-of-baroda/IMG_4965-HDR.jpg";
import bob9 from "../assets/portfolio/bank-of-baroda/IMG_4971-HDR-Edit.jpg";
import bob10 from "../assets/portfolio/bank-of-baroda/IMG_4998-HDR-Edit.jpg";
import bob11 from "../assets/portfolio/bank-of-baroda/IMG_5001-HDR-Edit.jpg";
import bob12 from "../assets/portfolio/bank-of-baroda/IMG_5012-HDR-Edit.jpg";
import bob13 from "../assets/portfolio/bank-of-baroda/IMG_5021-HDR.jpg";
import bob14 from "../assets/portfolio/bank-of-baroda/IMG_5051-HDR.jpg";

export const portfolioProjects = [
  {
    slug: "taj-nashik",
    name: "Taj Nashik",
    label: "Taj nashik",
    category: "Hospitality" as const,
    service: "Complete Room Interior Design",
    image: tajNashikMain,
    gallery: [
      tajNashikMain,
      tajNashik1,
      tajNashik2,
      tajNashik3,
      tajNashik6,
      tajNashik11,
      tajNashik12,
      tajNashik13,
    ],
    description:
      "Hospitality at its most considered. Each room's interior is crafted with a layered material palette, furniture design and spatial planning working in concert to meet the exacting standards of one of India's most iconic hotel brands.",
  },
  {
    slug: "taj-pune",
    name: "Taj Pune",
    label: "Taj pune",
    category: "Hospitality" as const,
    service: "Complete Room Interior Design",
    image: tajPuneHero,
    gallery: [
      tajPuneHero,
      tajPuneLobbyA,
      tajPuneBoardroom,
      tajPuneDeli,
      tajPuneGym,
      tajPuneBanquet,
      tajPuneBuzz,
      tajPuneFacade,
    ],
    description:
      "A continuation of the Taj legacy, interpreted for Pune. Refined furniture design and disciplined space planning produce interiors that feel both deeply comfortable and architecturally resolved.",
  },
  {
    slug: "bafna-jewellers",
    name: "Bafna Jewellers",
    label: "RC bafna",
    category: "Commercial" as const,
    service: "Complete Showroom Interior Design",
    image: bafna1,
    gallery: [bafna1, bafna2, bafna3, bafna4, bafna10, bafna2, bafna4, bafna3],
    description:
      "A jewellery house reimagined as an immersive retail experience. Considered space planning and bespoke furniture anchor a design that balances display precision with an atmosphere of quiet, understated luxury.",
  },
  {
    slug: "bank-of-baroda",
    name: "Corporate Office Spaces",
    label: "Bank of Baroda",
    category: "Commercial" as const,
    service: "Complete Interior Design",
    image: bobHero,
    gallery: [bobHero, bob1, bob2, bob3, bob4, bob5, bob6, bob7, bob8, bob9, bob10, bob11, bob12, bob13, bob14],
    description:
      "Workspaces designed with the rigour of bespoke craft. From space planning through to manufacturing and installation, each office interior is executed end-to-end — balancing functional precision with a considered design sensibility.",
  },
] as const;

export type PortfolioProject = (typeof portfolioProjects)[number];
