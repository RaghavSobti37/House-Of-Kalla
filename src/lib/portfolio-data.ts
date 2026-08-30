import projectBar from "@/assets/project-bar.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import productKorta from "@/assets/product-korta.jpg";
import handsCraft from "@/assets/hands-craft.jpg";
import showroom from "@/assets/showroom.jpg";

export type ProjectCategory = "Hospitality" | "Commercial";

export const portfolioProjects = [
  {
    slug: "taj-nashik",
    name: "Taj Nashik",
    label: "Taj nashik",
    category: "Hospitality",
    service: "Complete Room Interior Design",
    image: projectHotel,
    gallery: [projectHotel, handsCraft, showroom],
    description:
      "Hospitality at its most considered. Each room's interior is crafted with a layered material palette, furniture design and spatial planning working in concert to meet the exacting standards of one of India's most iconic hotel brands.",
  },
  {
    slug: "taj-pune",
    name: "Taj Pune",
    label: "Taj pune",
    category: "Hospitality",
    service: "Complete Room Interior Design",
    image: showroom,
    gallery: [showroom, projectHotel, handsCraft],
    description:
      "A continuation of the Taj legacy, interpreted for Pune. Refined furniture design and disciplined space planning produce interiors that feel both deeply comfortable and architecturally resolved.",
  },
  {
    slug: "bafna-jewellers",
    name: "Bafna Jewellers",
    label: "RC bafna",
    category: "Commercial",
    service: "Complete Showroom Interior Design",
    image: projectBar,
    gallery: [projectBar, productKorta, showroom],
    description:
      "A jewellery house reimagined as an immersive retail experience. Considered space planning and bespoke furniture anchor a design that balances display precision with an atmosphere of quiet, understated luxury.",
  },
  {
    slug: "bank-of-baroda",
    name: "Corporate Office Spaces",
    label: "Bank of Baroda",
    category: "Commercial",
    service: "Complete Interior Design",
    image: productKorta,
    gallery: [productKorta, projectBar, handsCraft],
    description:
      "Workspaces designed with the rigour of bespoke craft. From space planning through to manufacturing and installation, each office interior is executed end-to-end, balancing functional precision with a considered design sensibility.",
  },
] as const;

export type PortfolioProject = (typeof portfolioProjects)[number];
