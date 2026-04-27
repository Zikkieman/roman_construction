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
  service: ServiceSlug;
};

export const serviceGalleryImages: ServiceGalleryImage[] = [
  {
    title: "Family Lounge Fit-Out",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859446/romancontractors/complete%20interior/andre-francois-mckenzie-XlGwDBZh_mM-unsplash_gi1pad.jpg",
    service: serviceSlugs.completeInteriorFitOuts,
  },
  {
    title: "Family Lounge Finishing",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859439/romancontractors/complete%20interior/jason-briscoe-UV81E0oXXWQ-unsplash_izfrdd.jpg",
    service: serviceSlugs.completeInteriorFitOuts,
  },
  {
    title: "Staircase Flooring Detail",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859424/romancontractors/floor/jessica-hearn-4w1-fhuBO00-unsplash_zlsgaq.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Bathroom Flooring Detail",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859415/romancontractors/floor/point3d-commercial-imaging-ltd-8RXUZg5h_QA-unsplash_h73eyk.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Staircase Detail",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859412/romancontractors/floor/neon-wang-KaA8vQB9Hdg-unsplash_beh7xh.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 01",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859412/romancontractors/floor/zeeshan-alam-VEF2IVr4iFQ-unsplash_ornkum.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 02",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859411/romancontractors/floor/rhema-kallianpur-jbJ-_hw2yag-unsplash_dqjzai.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 03",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859406/romancontractors/floor/background-foto-pixell-design-I4jkokpwh4o-unsplash_acbsso.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 04",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859387/romancontractors/floor/yivan-LG9wz6-ht_A-unsplash_f59qjp.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 05",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857203/romancontractors/tiles/bence-balla-schottner-VCKYuQ6R-28-unsplash_scutgy.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 06",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857199/romancontractors/tiles/darren-richardson-1zKFtv-TmWM-unsplash_mx234e.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 07",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857192/romancontractors/tiles/jon-stebbe-J9Gn8pV7tuI-unsplash_pdt87x.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 09",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859384/romancontractors/wall/alexander-fife-rDSwQ_6XFUs-unsplash_ig8si9.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Tiling 10",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859380/romancontractors/wall/toa-heftiba-PUMw1z67VmQ-unsplash_fqpney.jpg",
    service: serviceSlugs.flooring,
  },
  {
    title: "Ceiling 01",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857234/romancontractors/ceiling/chris-johnson-mbtMKIlcNHA-unsplash_fux0rm.jpg",
    service: serviceSlugs.ceilings,
  },
  {
    title: "Ceiling 02",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857231/romancontractors/ceiling/sven-brandsma-6U3ujgJdjAs-unsplash_s8uiki.jpg",
    service: serviceSlugs.ceilings,
  },
  {
    title: "Ceiling 03",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857189/romancontractors/tiles/scott-webb-tMuYJL96A_I-unsplash_qihmju.jpg",
    service: serviceSlugs.ceilings,
  },
  {
    title: "Joinery 01",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859622/romancontractors/joinery/alona-gross-f61KO4nDeJA-unsplash_kbaafm.jpg",
    service: serviceSlugs.joineryFixtures,
  },
  {
    title: "Joinery 02",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859620/romancontractors/joinery/eke-interior-Ud4rRqr0vFA-unsplash_hxuv8j.jpg",
    service: serviceSlugs.joineryFixtures,
  },
  {
    title: "Joinery 03",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859612/romancontractors/joinery/lotus-design-n-print-9b7wGJQaScw-unsplash_fcjczq.jpg",
    service: serviceSlugs.joineryFixtures,
  },
  {
    title: "Painting 01",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859675/romancontractors/painting/annie-spratt-njsRI3pTB6g-unsplash_oqewxw.jpg",
    service: serviceSlugs.wallFinishes,
  },
  {
    title: "Painting 02",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859668/romancontractors/painting/luca-romano-4gopZjL1bSg-unsplash_zo3zdo.jpg",
    service: serviceSlugs.wallFinishes,
  },
  {
    title: "Painting 03",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859662/romancontractors/painting/thomas-despeyroux-7gYjhBadDsQ-unsplash_ddx6zy.jpg",
    service: serviceSlugs.wallFinishes,
  },
  {
    title: "Painting 04",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859661/romancontractors/painting/annie-spratt-712YAykhAD8-unsplash_ktgnbv.jpg",
    service: serviceSlugs.wallFinishes,
  },
  {
    title: "Painting 05",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859645/romancontractors/painting/zac-gudakov-7K4LiMm0u14-unsplash_vzhuen.jpg",
    service: serviceSlugs.wallFinishes,
  },
  {
    title: "Painting 06",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859637/romancontractors/painting/an_vision-Q6jhKQoEtSA-unsplash_bwpej1.jpg",
    service: serviceSlugs.wallFinishes,
  },
   {
    title: "Joinery 04",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776859611/romancontractors/joinery/aalo-lens-XhMzBZrpQT4-unsplash_wu2hac.jpg",
    service: serviceSlugs.wallFinishes,
  },
  {
    title: "Smart Home Automation 01",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776870836/romancontractors/electricals/erik-mclean-fSLI8RdCdyk-unsplash_d6qojg.jpg",
    service: serviceSlugs.smartHomeAutomation,
  },
  {
    title: "Solar 01",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857265/romancontractors/solar/chirayu-trivedi-twOIx6I35tk-unsplash_kdxehj.jpg",
    service: serviceSlugs.solarEnergySolutions,
  },
  {
    title: "Solar 02",
    src: "https://res.cloudinary.com/ddeh31zhy/image/upload/v1776857262/romancontractors/solar/evgeniy-alyoshin-2ASQyjafflo-unsplash_jnscv8.jpg",
    service: serviceSlugs.solarEnergySolutions,
  },
  // {
  //   title: "Family Lounge Interior",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487462/family_lounge_1._efj5mi.png",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Bedroom Interior Finishing",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_ickhth.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Bedroom Wall And Ceiling Finish",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.26_ytigvp.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "TV Wall Finishing",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_1_ol4qkw.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.joineryFixtures,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Living Room Wall Finish",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/PHOTO-2026-02-23-03-04-42_jlgjzm.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Interior Fit Out Detail",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487440/WhatsApp_Image_2026-02-23_at_12.05.26_2_enilkd.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Kitchen Cabinetry",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/KITCHEN_01_CC_nb7up7.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.joineryFixtures,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Ceiling And Lighting Finish",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-41_d98ful.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Residential Interior Finish",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-44_r17hsj.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Interior Wall Treatment",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/WhatsApp_Image_2026-02-23_at_12.05.26_3_a8muc5.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Bedroom Finish Detail",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-43_byj6xb.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Residential Room Finishing",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-45_lv8qjw.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Kitchen Joinery Finish",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/KITCHEN_02_CC_bspb6u.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.joineryFixtures,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Kitchen And Dining Fit Out",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487437/WhatsApp_Image_2026-02-23_at_12.05.27_dnydbq.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.joineryFixtures,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Master Lounge",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/MASTER_LOUNGE_CC_jwhuwx.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Bedroom Fit Out",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/typical_bedroom_1_ce0bav.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
  // {
  //   title: "Typical Bedroom Finish",
  //   src: "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487435/typical_bed_bk3r4e.jpg",
  //   services: [
  //     serviceSlugs.completeInteriorFitOuts,
  //     serviceSlugs.flooring,
  //     serviceSlugs.ceilings,
  //     serviceSlugs.wallFinishes,
  //     serviceSlugs.lightingElectricalFinishes,
  //   ],
  // },
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
    image.service === slug as ServiceSlug,
  );
}
