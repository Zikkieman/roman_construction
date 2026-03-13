export interface NavigationItem {
  label: string
  href: string
}

export interface ServiceCard {
  title: string
  description: string
}

export interface HighlightCard {
  title: string
  image: string
}

export interface AwardItem {
  title: string
  year: string
}

export interface ProjectCard {
  title: string
  category: string
  image: string
  column: 1 | 2 | 3
  imageClassName: string
  showArrow?: boolean
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  image: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export interface BlogPost {
  category: string
  date: string
  title: string
  image: string
}
