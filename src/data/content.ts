export type CounterStat = {
  label: string
  value: number
  suffix?: string
}

export type Project = {
  title: string
  description: string
  tools: string[]
  image: string
  link: string
  comingSoon?: boolean
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type Service = {
  title: string
  description: string
  icon: 'code' | 'design' | 'mobile' | 'brand'
}

export type SocialLink = {
  label: string
  href: string
  value?: string
}

export const counters: CounterStat[] = [
  { label: 'Years of Experience', value: 3 },
  { label: 'Projects Delivered', value: 5 },
  { label: 'Global Clients', value: 5 },
  { label: 'Security Certifications', value: 3, suffix: '+' },
]

export const skills = [
  {
    title: 'Web & App Development',
    description: 'Responsive marketing sites, desktop apps, and custom admin tools powered by modern JavaScript stacks.',
  },
  {
    title: 'Website & Product Design',
    description: 'Clean, conversion-focused layouts, design systems, and prototypes that keep brand and UX aligned.',
  },
  {
    title: 'Commerce & Operations',
    description: 'WordPress and custom back-office solutions with secure admin panels and efficient content workflows.',
  },
  {
    title: 'Cybersecurity Mindset',
    description: 'Actively studying cybersecurity with multiple penetration testing and bug bounty certificates.',
  },
]

export const projects: Project[] = [
  {
    title: "Austin's Architecture Platform",
    description:
      "Desktop + web experience for a US-based architecture firm with synced project libraries, client portals, and real-time updates.",
    tools: ['Node.js', 'Express', 'Electron', 'HTML', 'CSS', 'JavaScript', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80&blend=0A0A0F&sat=-35',
    link: '#',
  },
  {
    title: 'enemyofthewait.com',
    description:
      'Lean landing website to promote an upcoming book launch, focused on storytelling and clear conversion paths.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80&blend=0A0A0F&sat=-30',
    link: 'https://enemyofthewait.com',
  },
  {
    title: 'plambat.net',
    description:
      'End-to-end ecommerce experience with inventory management, secure checkout, and a customized WordPress admin.',
    tools: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80&blend=0A0A0F&sat=-40',
    link: 'https://plambat.net',
  },
  {
    title: 'atozee.agency',
    description:
      'Sourcing platform that helps people discover local restaurants and coffee shops with curated listings and admin controls.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80&blend=0A0A0F&sat=-40',
    link: 'https://atozee.agency',
  },
  {
    title: 'Joe Boulos Personal Portfolio',
    description:
      'This portfolio you are viewing—built to showcase premium neon aesthetics, motion, and a reusable component system.',
    tools: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80&blend=0A0A0F&sat=-60',
    link: '#',
  },
  {
    title: 'Coming Soon',
    description:
      '',
    tools: [],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&blend=0A0A0F&sat=-50',
    link: '#',
    comingSoon: true,
  },
]

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'High-performance web apps built with modern stacks, DX, and observability baked in.',
    icon: 'code',
  },
  {
    title: 'UI/UX Design',
    description: 'Experience ecosystems with systems thinking, motion principles, and crafted layouts.',
    icon: 'design',
  },
  {
    title: 'Mobile Apps',
    description: 'Native-feel mobile apps leveraging React Native & Expo for rapid deployment.',
    icon: 'mobile',
  },
  {
    title: 'Security Reviews',
    description: 'Cybersecurity-informed audits, pen-testing insights, and hardening guidance for modern stacks.',
    icon: 'brand',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Joe Boulos blends engineering rigor with artful experience design. Every release feels premium, intentional, and obsessively polished.',
    name: 'Maya Lin',
    role: 'Head of Experience, Lumen Labs',
  },
  {
    quote:
      'From system architecture to micro-animations, the craft level is unmatched. We shipped a flagship product in record time.',
    name: 'Daniel Kline',
    role: 'Product Director, Pulse Health',
  },
  {
    quote:
      'A true partner that leads with clarity, vision, and execution. Our brand voice and product experience finally feel unified.',
    name: 'Ariana Fox',
    role: 'Creative Lead, Halo Systems',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'WhatsApp', href: 'https://wa.me/96176403131', value: '+961 76 403 131' },
  { label: 'Instagram', href: 'https://instagram.com/_joe_boulos_', value: '@_joe_boulos_' },
  { label: 'Email', href: 'mailto:businessravxn@gmail.com', value: 'businessravxn@gmail.com' },
]

