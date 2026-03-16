export const COMPANY = {
  name: "Roman Contractors",
  shortName: "Roman",
  email: "help@romancontractors.com",
  phone: "08101165440",
  colors: {
    light: "#D8D3CF",
    accent: "#9C8463",
    dark: "#2B2A28",
  },
} as const;

export const COMPANY_OVERVIEW =
  "Roman Contractors is a contract-based construction and interior fit-out company committed to delivering high-quality, well managed building solutions with precision, integrity, and professionalism.";

export const COMPANY_OVERVIEW_EXTENDED =
  "We operate as a design-build and project execution partner, providing clients with reliable end-to-end coordination from concept to completion.";

export const COMPANY_VISION =
  "To become a trusted name in construction and interior contracting, known for dependable execution, superior finishing, and professional project delivery across Nigeria.";

export const COMPANY_MISSION_POINTS = [
  "Executing contracts with strict adherence to scope, timelines, and budgets",
  "Maintaining high standards of workmanship and material selection",
  "Providing clients with transparent communication and structured processes",
  "Building long-term partnerships through integrity, consistency, and results",
] as const;

export const COMPANY_SERVICE_GROUPS = [
  {
    title: "Complete Interior Fit-Outs",
    description:
      "Apartment fit-outs, office fit-outs, retail shop fit-outs, short-let interior finishing, and renovation & refurbishment.",
    icon: "interior",
  },
  {
    title: "Flooring",
    description:
      "Tiles, vinyl, wooden floors, screeding, and leveling delivered with precise installation and finishing.",
    icon: "exterior",
  },
  {
    title: "Ceilings",
    description:
      "POP ceilings, gypsum boards, ceiling designs, and cornices tailored to project scope and finishing standards.",
    icon: "architecture",
  },
  {
    title: "Wall Finishes",
    description:
      "Painting, wall panels, wallpapers, and decorative finishes executed with durable materials and clean detailing.",
    icon: "urban",
  },
  {
    title: "Joinery & Fixtures",
    description:
      "Wardrobes, kitchen cabinets, TV consoles, and shelving designed for functional use and consistent finish quality.",
    icon: "model",
  },
  {
    title: "Solar & Smart Systems",
    description:
      "Solar installation, inverter systems, battery storage, smart lighting, CCTV, access control, and remote automation.",
    icon: "industrial",
  },
] as const;
