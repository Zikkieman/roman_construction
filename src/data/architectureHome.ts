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
  'Innovative Design Approach',
  'Highly Skilled Expertise and Specialization',
  'A client-centric approach for an architectural company',
  'Sustainable Design Practices',
]

export const serviceCards: ServiceCard[] = [
  {
    title: 'Design',
    description:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.',
  },
  {
    title: 'Construction',
    description:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.',
  },
  {
    title: 'Engineering',
    description:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations.',
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
  { title: '1x Pritzker Architecture', year: '2023' },
  { title: '2x Architecture MasterPrize', year: '2022, 2021' },
  { title: '3x AIA Gold Medal', year: '2020, 2019' },
  { title: '4x Ribba Architecture', year: '2017' },
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
      'We are a leading architecture firm dedicated to creating designs.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '02',
    title: 'Guide The Design',
    description:
      'We are a leading architecture firm dedicated to creating designs.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '03',
    title: 'Digitally Build',
    description:
      'We are a leading architecture firm dedicated to creating designs.',
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '04',
    title: 'Construct The Best',
    description:
      'We are a leading architecture firm dedicated to creating designs.',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.',
    name: 'Jonathon Ronan',
    role: 'CEO of HiBootstrap',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.',
    name: 'Angela Carter',
    role: 'CEO of EnvyTheme',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.',
    name: 'Skyler White',
    role: 'CEO of HiboTheme',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
  {
    quote:
      'We are a leading architecture firm dedicated to creating visionary designs that transcend expectations. With our team of highly skilled architects and designers, we specialize in crafting.',
    name: 'Angela Carter',
    role: 'CEO of Abc',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
  },
]

export const blogPosts: BlogPost[] = [
  {
    category: 'Interior',
    date: 'Jul 13, 2023',
    title:
      'Transforming Spaces: How [Architecture Agency] Redefines the Built Environment',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Interior',
    date: 'Jul 14, 2023',
    title:
      'From Concept to Construction: The Creative Journey of Roman In A Nutshell Architectural Marvels',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Interior',
    date: 'Jul 15, 2023',
    title:
      "Unveiling Architectural Marvels: [Architecture Agency]'s Impressive Portfolio",
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Interior',
    date: 'Jul 16, 2023',
    title:
      'From Concept to Construction: The Creative Journey of Roman In A Nutshell Architectural Marvels',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
]

export const marqueeItems: string[] = [
  'Creative Architecture Design Agency',
  'Best Architecture Design Agency',
  'Creative Interior Design Agency',
  'Trusted Architecture Design Agency',
  'Award Winning Architecture Design Company',
  'Best Service Provider Architecture Design Agency',
]
