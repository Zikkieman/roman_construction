import type {
  AwardItem,
  BlogPost,
  HighlightCard,
  NavigationItem,
  ProcessStep,
  ProjectCard,
  ServiceCard,
  Testimonial,
} from '../types/architecture'

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

export const aboutPoints: string[] = [
  'Structured project execution from concept to completion',
  'Skilled workmanship with dependable finishing standards',
  'Client-focused coordination with transparent communication',
  'Reliable delivery across construction and interior fit-out works',
]

export const serviceCards: ServiceCard[] = [
  {
    title: 'Fit-Out Delivery',
    description:
      'Complete interior fit-out execution for residential, office, retail, and short-let spaces with structured delivery.',
  },
  {
    title: 'Construction',
    description:
      'Reliable project execution with coordinated site management, workmanship control, and timely completion.',
  },
  {
    title: 'Finishing Works',
    description:
      'Ceilings, wall finishes, flooring, joinery, lighting, and final installations completed to a high finishing standard.',
  },
]

export const highlightCards: HighlightCard[] = [
  {
    title: 'Urban Architecture',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Home Interior',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80',
  },
]

export const awardItems: AwardItem[] = [
  { title: '1x Interior Fit-Out Excellence', year: '2023' },
  { title: '2x Project Delivery Recognition', year: '2022, 2021' },
  { title: '3x Finishing Quality Commendation', year: '2020, 2019' },
  { title: '4x Trusted Contractor Mention', year: '2017' },
]

export const projectCards: ProjectCard[] = [
  {
    title: 'Tower House',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    column: 1,
    imageClassName: 'h-[360px] sm:h-[440px] lg:h-[468px]',
  },
  {
    title: 'Roof Top',
    category: 'Exterior',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    column: 1,
    imageClassName: 'h-[360px] sm:h-[420px] lg:h-[454px]',
  },
  {
    title: 'Triangle House',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    column: 2,
    imageClassName: 'h-[340px] sm:h-[390px] lg:h-[368px]',
  },
  {
    title: 'Glass Building',
    category: 'Exterior',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    column: 2,
    imageClassName: 'h-[360px] sm:h-[450px] lg:h-[510px]',
  },
  {
    title: 'Building Decor',
    category: 'Exterior',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    column: 3,
    imageClassName: 'h-[360px] sm:h-[420px] lg:h-[468px]',
    showArrow: true,
  },
  {
    title: 'Museum',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1200&q=80',
    column: 3,
    imageClassName: 'h-[360px] sm:h-[420px] lg:h-[422px]',
    showArrow: true,
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Align With Goals',
    description:
      'We define scope, priorities, timelines, and the project direction before execution begins.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '02',
    title: 'Guide The Design',
    description:
      'We coordinate design intent, finishes, and technical decisions to keep the project clear and buildable.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '03',
    title: 'Digitally Build',
    description:
      'We organize drawings, measurements, and planning details needed for accurate execution on site.',
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '04',
    title: 'Construct The Best',
    description:
      'We deliver the work with close supervision, dependable workmanship, and attention to finishing quality.',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Roman Contractors handled our fit-out with strong coordination, clear communication, and a finishing quality that matched what was promised.',
    name: 'Aisha Bello',
    role: 'Residential Client',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote:
      'The team stayed focused on delivery, managed the site professionally, and kept the project moving within the expected timeline.',
    name: 'Chinedu Okafor',
    role: 'Commercial Client',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote:
      'Their workmanship, material finishing, and responsiveness made the execution process easier than we expected.',
    name: 'Fatima Yusuf',
    role: 'Private Client',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote:
      'Roman Contractors delivered a well-managed project with dependable supervision and good attention to the final details.',
    name: 'Emeka Daniels',
    role: 'Project Partner',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
  },
]

export const blogPosts: BlogPost[] = [
  {
    category: 'Fit-Out',
    date: 'Jul 13, 2023',
    title:
      'What It Takes To Deliver A Well-Finished Interior Fit-Out Project',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Construction',
    date: 'Jul 14, 2023',
    title:
      'From Planning To Handover: Roman Contractors Project Delivery Approach',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Finishing',
    date: 'Jul 15, 2023',
    title:
      'How Quality Finishing Improves Residential And Commercial Spaces',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Execution',
    date: 'Jul 16, 2023',
    title:
      'Why Structured Coordination Matters In Construction And Fit-Out Works',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
]

export const marqueeItems: string[] = [
  'Trusted Construction Partner',
  'Reliable Interior Fit-Out Company',
  'Professional Project Delivery Team',
  'Quality Finishing And Execution',
  'Structured Construction Coordination',
  'Dependable Fit-Out And Building Solutions',
]
