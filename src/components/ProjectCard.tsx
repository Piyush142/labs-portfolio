import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const body = (
    <article className="card" data-reveal>
      <div
        className={
          project.image ? 'card__media card__media--image' : 'card__media'
        }
        style={project.image ? undefined : { background: project.swatch }}
        aria-hidden={project.image ? undefined : true}
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="card__image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="card__monogram" aria-hidden="true">
            {project.monogram}
          </span>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">
          <span className="card__title-text">{project.title}</span>
          {project.href && (
            <span className="card__arrow" aria-hidden="true">
              ↗
            </span>
          )}
        </h3>
        <p className="card__blurb">{project.blurb}</p>
        <p className="card__meta">{project.year}</p>
      </div>
    </article>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        {body}
      </a>
    )
  }
  return body
}
