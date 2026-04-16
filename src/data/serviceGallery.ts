export const serviceSlugs = {
  completeInteriorFitOuts: "complete-interior-fit-outs",
  flooring: "flooring",
  ceilings: "ceilings",
  wallFinishes: "wall-finishes",
  joineryFixtures: "joinery-fixtures",
  lightingElectricalFinishes: "lighting-electrical-finishes",
  solarEnergySolutions: "solar-energy-solutions",
  smartHomeAutomation: "smart-home-automation",
} as const;

export type ServiceSlug = (typeof serviceSlugs)[keyof typeof serviceSlugs];

const serviceTitleSlugs: Record<string, ServiceSlug> = {
  "Complete Interior Fit-Outs": serviceSlugs.completeInteriorFitOuts,
  Flooring: serviceSlugs.flooring,
  Ceilings: serviceSlugs.ceilings,
  "Wall Finishes": serviceSlugs.wallFinishes,
  "Joinery & Fixtures": serviceSlugs.joineryFixtures,
  "Lighting & Electrical Finishes": serviceSlugs.lightingElectricalFinishes,
  "Solar Energy Solutions": serviceSlugs.solarEnergySolutions,
  "Smart Home Automation": serviceSlugs.smartHomeAutomation,
};

export type ServiceGalleryImage = {
  title: string;
  src: string;
  services: ServiceSlug[];
};

export const serviceGalleryImages: ServiceGalleryImage[] = [
  {
    title: "Family Lounge Fit-Out",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487477/family_lounge_3_ctgogw.png",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Family Lounge Finishing",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487473/family_lounge_2_uknmas.png",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Staircase Flooring Detail",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487471/stair_2_lqc9oa.png",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Family Lounge Interior",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487462/family_lounge_1._efj5mi.png",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Bedroom Interior Finishing",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_ickhth.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Bedroom Wall And Ceiling Finish",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.26_ytigvp.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "TV Wall Finishing",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_1_ol4qkw.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.wallFinishes,
      serviceSlugs.joineryFixtures,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Living Room Wall Finish",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/PHOTO-2026-02-23-03-04-42_jlgjzm.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Interior Fit-Out Detail",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/WhatsApp_Image_2026-02-23_at_12.05.26_2_enilkd.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Kitchen Cabinetry",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/KITCHEN_01_CC_nb7up7.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.joineryFixtures,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Ceiling And Lighting Finish",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-41_d98ful.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Residential Interior Finish",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-44_r17hsj.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Interior Wall Treatment",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/WhatsApp_Image_2026-02-23_at_12.05.26_3_a8muc5.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Bedroom Finish Detail",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-43_byj6xb.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Residential Room Finishing",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-45_lv8qjw.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Kitchen Joinery Finish",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/KITCHEN_02_CC_bspb6u.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.joineryFixtures,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Kitchen And Dining Fit-Out",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487437/WhatsApp_Image_2026-02-23_at_12.05.27_dnydbq.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.joineryFixtures,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Master Lounge",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/MASTER_LOUNGE_CC_jwhuwx.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Bedroom Fit-Out",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/typical_bedroom_1_ce0bav.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
  {
    title: "Typical Bedroom Finish",
    src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487435/typical_bed_bk3r4e.jpg",
    services: [
      serviceSlugs.completeInteriorFitOuts,
      serviceSlugs.flooring,
      serviceSlugs.ceilings,
      serviceSlugs.wallFinishes,
      serviceSlugs.lightingElectricalFinishes,
    ],
  },
];

export function serviceSlugFromTitle(title: string) {
  if (serviceTitleSlugs[title]) {
    return serviceTitleSlugs[title];
  }

  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") as ServiceSlug;
}

export function getServiceGalleryImages(slug: string) {
  return serviceGalleryImages.filter((image) =>
    image.services.includes(slug as ServiceSlug),
  );
}
