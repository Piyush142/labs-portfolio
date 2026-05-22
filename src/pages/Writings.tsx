import { useRef } from 'react'
import WritingCard from '../components/WritingCard'
import HeadlineReveal from '../components/HeadlineReveal'
import { writings } from '../data/writings'
import { useReveal } from '../hooks/useReveal'
import './writings.css'

export default function Writings() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref, { stagger: 0.07 })

  return (
    <div ref={ref} className="writings">
      <header className="lede">
        <p className="lede__eyebrow">Notes from the workbench.</p>
        <HeadlineReveal
          className="lede__title"
          text="Things we've written down so we don't forget what we learned."
        />
        <p className="lede__sub" data-reveal>
          Half technical, half philosophical, mostly written on a train. New ones
          appear when we have something we'd actually want to read.
        </p>
      </header>

      <section className="writings__grid">
        {writings.map((w) => (
          <WritingCard key={w.slug} writing={w} />
        ))}
      </section>
    </div>
  )
}
