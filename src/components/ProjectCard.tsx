import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const img600 = project.imageBase ? `${project.imageBase}-600.jpg` : undefined
  const img1200 = project.imageBase ? `${project.imageBase}-1200.jpg` : undefined

  const body = (
    <article className="card" data-reveal>
      <div
        className={
          project.imageBase ? 'card__media card__media--image' : 'card__media'
        }
        style={project.imageBase ? undefined : { background: project.swatch }}
        aria-hidden={project.imageBase ? undefined : true}
      >
        {project.imageBase && img600 && img1200 ? (
          <img
            src={img1200}
            srcSet={`${img600} 600w, ${img1200} 1200w`}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 520px"
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
