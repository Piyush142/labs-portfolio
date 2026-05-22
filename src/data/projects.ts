export type Project = {
  slug: string
  title: string
  monogram: string
  blurb: string
  description: string
  year: string
  href?: string
  caseStudy?: string
  swatch: string
}

export const projects: Project[] = [
  {
    slug: '64facets-crm',
    title: '64Facets CRM',
    monogram: '64',
    blurb:
      'A full-stack CRM for a rose-cut diamond house. Tracks every stone, design, and conversation from supplier to showroom.',
    description:
      'Custom inventory + sales OS for 64Facets, a luxury jewellery brand. Replaces spreadsheets, ad-hoc photos, and a lot of WhatsApp with one source of truth.',
    year: '2023 — ongoing',
    swatch: '#b6884d',
  },
  {
    slug: 'sofascript',
    title: 'SofaScript',
    monogram: 'Sś',
    blurb:
      'Turns photos, sketches, and moodboards into buildable, client-ready interior concepts.',
    description:
      'For interior designers, architects, and home stagers who want to explore more, present better, and win more projects without redrawing the same room twelve times.',
    year: '2024',
    href: 'https://sofascript.com',
    swatch: '#c4b5a0',
  },
  {
    slug: 'pebble',
    title: 'Pebble',
    monogram: 'Pb',
    blurb:
      'Makes learning to code feel like playing. Tiny apps, art, and games with an AI tutor in the loop.',
    description:
      'A learn-by-doing environment for K–12 students. They write a little code, something happens on screen, the AI tutor nudges them when they get stuck. Repeat until curious.',
    year: '2024',
    href: 'https://getpebble.in',
    swatch: '#5a7fb3',
  },
  {
    slug: 'helloai',
    title: 'HelloAI',
    monogram: 'h.',
    blurb:
      'One app for every AI you actually use. Discover, customize, and chat with specialised assistants.',
    description:
      'A unified home for AI personas — coding, research, creativity, the daily-help kind. Persistent memory, real-time conversations, and the ability to make assistants that feel like yours.',
    year: '2024',
    href: 'https://helloai.in',
    swatch: '#9a6bb0',
  },
]
