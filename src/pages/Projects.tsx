import { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import HeadlineReveal from '../components/HeadlineReveal'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import './projects.css'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref, { selector: '[data-reveal]', stagger: 0.09 })

  return (
    <div ref={ref} className="projects">
      <header className="lede">
        <p className="lede__eyebrow">A two-person studio building software since 2016.</p>
        <HeadlineReveal
          className="lede__title"
          text="We make products on purpose - for clients we like, and for ourselves when nobody's asking."
        />
        <p className="lede__sub" data-reveal>
          Below: things we've built and shipped. Some pay the rent, some don't,
          all of them taught us something we couldn't have learned by reading.
        </p>
      </header>

      <section className="projects__grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </div>
  )
}
