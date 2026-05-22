import type { Writing } from '../data/writings'

const fmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export default function WritingCard({ writing }: { writing: Writing }) {
  const date = fmt.format(new Date(writing.date))

  return (
    <article className="writing" data-reveal>
      <div
        className="writing__media"
        style={{ background: writing.swatch }}
        aria-hidden="true"
      />
      <div className="writing__body">
        <h3 className="writing__title">
          <a href={writing.href ?? '#'} className="writing__link">
            {writing.title}
          </a>
        </h3>
        <p className="writing__blurb">
          <em>{writing.blurb}</em>
        </p>
        <p className="writing__date">Posted {date}</p>
      </div>
    </article>
  )
}
