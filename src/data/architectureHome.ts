import type {
  AwardItem,
  BlogPost,
  HighlightCard,
  NavigationItem,
  ProcessStep,
  ProjectCard,
  ServiceCard,
  Testimonial,
} from "../types/architecture";

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const aboutPoints: string[] = [
  "Structured, efficient project management and execution",
  "Skilled craftsmanship with high end, durable finishing",
  "Clear, transparent communication throughout every phase",
  "Reliable delivery across construction and interior fit out services",
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Complete Interior Fit Outs",
    description:
      "Comprehensive interior solutions from structural preparation to final detailing for residential and commercial spaces.",
  },
  {
    title: "Flooring",
    description:
      "Expertly installed flooring systems designed for durability, performance, and visual appeal.",
  },
  {
    title: "Ceilings",
    description:
      "POP ceilings, gypsum boards, cornices, and ceiling designs finished with clean execution.",
  },
  {
    title: "Wall Finishing",
    description:
      "Painting, wall panels, wallpapers, and decorative finishing delivered with precise application.",
  },
  {
    title: "Joinery & Fixtures",
    description:
      "Wardrobes, kitchen cabinets, TV consoles, and shelving crafted for function and clean aesthetics.",
  },
  {
    title: "Lighting & Electrical Finishing",
    description:
      "Light fittings, switches, spotlights, and concealed lighting integrated with refined finishing.",
  },
  {
    title: "Solar Energy Solutions",
    description:
      "Solar panels, inverter systems, battery storage, and system integration for reliable power supply.",
  },
  {
    title: "Smart Home Automation",
    description:
      "Smart lighting, climate control, CCTV, access control, and remote automation systems.",
  },
];

export const highlightCards: HighlightCard[] = [
  {
    title: "Space Transformation",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/KITCHEN_01_CC_nb7up7.jpg",
  },
  {
    title: "Home Interior",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487473/family_lounge_2_uknmas.png",
  },
];

export const awardItems: AwardItem[] = [
  { title: "Residential Interior Fit Outs", year: "Project Scope" },
  { title: "Office And Retail Execution", year: "Delivery Focus" },
  { title: "Finishing, Quality And Detailing", year: "Core Strength" },
  { title: "Abuja Based Professional Delivery", year: "Operating Base" },
];

export const projectCards: ProjectCard[] = [
  {
    title: "Kitchen Fit Out",
    category: "Interior",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/KITCHEN_01_CC_nb7up7.jpg",
    column: 1,
    imageClassName: "h-[360px] sm:h-[440px] lg:h-[468px]",
  },
  {
    title: "Staircase Detailing",
    category: "Finishing",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487471/stair_2_lqc9oa.png",
    column: 1,
    imageClassName: "h-[360px] sm:h-[420px] lg:h-[454px]",
  },
  {
    title: "Master Lounge",
    category: "Interior",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/MASTER_LOUNGE_CC_jwhuwx.jpg",
    column: 2,
    imageClassName: "h-[340px] sm:h-[390px] lg:h-[368px]",
  },
  {
    title: "Family Lounge",
    category: "Interior",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487477/family_lounge_3_ctgogw.png",
    column: 2,
    imageClassName: "h-[360px] sm:h-[450px] lg:h-[510px]",
  },
  {
    title: "Kitchen Finishing",
    category: "Fit Out",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/KITCHEN_02_CC_bspb6u.jpg",
    column: 3,
    imageClassName: "h-[360px] sm:h-[420px] lg:h-[468px]",
    showArrow: true,
  },
  {
    title: "Bedroom Interior",
    category: "Residential",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/typical_bedroom_1_ce0bav.jpg",
    column: 3,
    imageClassName: "h-[360px] sm:h-[420px] lg:h-[422px]",
    showArrow: true,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Align With Goals",
    description:
      "We define scope, priorities, timelines, and the project direction before execution begins.",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-41_d98ful.jpg",
  },
  {
    number: "02",
    title: "Guide The Design",
    description:
      "We coordinate design intent, finishing, and technical decisions to keep the project clear and buildable.",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/KITCHEN_02_CC_bspb6u.jpg",
  },
  {
    number: "03",
    title: "Digitally Build",
    description:
      "We organize drawings, measurements, and planning details needed for accurate execution on site.",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487437/WhatsApp_Image_2026-02-23_at_12.05.27_dnydbq.jpg",
  },
  {
    number: "04",
    title: "Construct The Best",
    description:
      "We deliver the work with close supervision, dependable workmanship, and attention to finishing quality.",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487477/family_lounge_3_ctgogw.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Roman Contractors handled our fit out with strong coordination, clear communication, and a finishing quality that matched what was promised.",
    name: "Aisha Bello",
    role: "Residential Client",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487441/WhatsApp_Image_2026-02-23_at_12.05.25_ickhth.jpg",
  },
  {
    quote:
      "The team stayed focused on delivery, managed the site professionally, and kept the project moving within the expected timeline.",
    name: "Chinedu Okafor",
    role: "Commercial Client",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/MASTER_LOUNGE_CC_jwhuwx.jpg",
  },
  {
    quote:
      "Their workmanship, material finishing, and responsiveness made the execution process easier than we expected.",
    name: "Fatima Yusuf",
    role: "Private Client",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487436/typical_bedroom_1_ce0bav.jpg",
  },
  {
    quote:
      "Roman Contractors delivered a well-managed project with dependable supervision and good attention to the final details.",
    name: "Emeka Daniels",
    role: "Project Partner",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487473/family_lounge_2_uknmas.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    category: "Fit Out",
    date: "Jul 13, 2023",
    title: "What It Takes To Deliver A Well-Finished Interior Fit Out Project",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/KITCHEN_01_CC_nb7up7.jpg",
  },
  {
    category: "Construction",
    date: "Jul 14, 2023",
    title:
      "From Planning To Handover: Roman Contractors Project Delivery Approach",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487438/PHOTO-2026-02-23-03-04-45_lv8qjw.jpg",
  },
  {
    category: "Finishing",
    date: "Jul 15, 2023",
    title: "How Quality Finishing Improves Residential And Commercial Spaces",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487435/typical_bed_bk3r4e.jpg",
  },
  {
    category: "Execution",
    date: "Jul 16, 2023",
    title:
      "Why Structured Coordination Matters In Construction And Fit Out Works",
    image:
      "https://res.cloudinary.com/dja8mx05m/image/upload/v1774487439/PHOTO-2026-02-23-03-04-44_r17hsj.jpg",
  },
];

export const marqueeItems: string[] = [
  "Trusted Construction Partner",
  "Reliable Interior Fit Out Company",
  "Professional Project Delivery Team",
  "Quality Finishing And Execution",
  "Structured Construction Coordination",
  "Dependable Fit Out And Building Solutions",
];
