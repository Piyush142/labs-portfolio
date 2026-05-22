export type Writing = {
  slug: string
  title: string
  blurb: string
  date: string
  href?: string
  swatch: string
}

export const writings: Writing[] = [
  {
    slug: 'why-2469',
    title: 'Why 2469?',
    blurb:
      'A small story about a number that started as a joke between two engineering students and quietly became the name of a company.',
    date: '2026-05-12',
    swatch: '#dc5a1f',
  },
  {
    slug: 'building-crms-for-people-who-hate-crms',
    title: 'Building CRMs for People Who Hate CRMs',
    blurb:
      'What we learned designing 64Facets — a software tool for a craft, not a sales funnel.',
    date: '2026-04-02',
    swatch: '#b6884d',
  },
  {
    slug: 'tiny-apps-big-feelings',
    title: 'Tiny Apps, Big Feelings',
    blurb:
      'How Pebble teaches kids to code by making the first thirty seconds feel magical.',
    date: '2026-02-19',
    swatch: '#5a7fb3',
  },
  {
    slug: 'the-quiet-case-for-the-two-person-studio',
    title: 'The Quiet Case for the Two-Person Studio',
    blurb:
      'Why the smallest companies in the world keep making the most interesting software.',
    date: '2025-11-08',
    swatch: '#6b8b6e',
  },
  {
    slug: 'engineering-as-conversation',
    title: 'Engineering as Conversation',
    blurb:
      'Notes on writing code as if a human you respect will read it next.',
    date: '2025-09-21',
    swatch: '#7e6cb0',
  },
  {
    slug: 'what-design-school-couldnt-tell-us',
    title: "What Design School Couldn't Tell Us",
    blurb:
      'On taste, restraint, and learning to delete things we just finished making.',
    date: '2025-07-14',
    swatch: '#c97a6b',
  },
]
