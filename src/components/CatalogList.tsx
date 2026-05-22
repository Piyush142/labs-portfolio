import type { ReactNode } from 'react'

type CatalogRow = {
  primary: string
  secondary?: string
  trailing?: string
}

export default function CatalogList({
  title,
  rows,
  children,
}: {
  title: string
  rows?: CatalogRow[]
  children?: ReactNode
}) {
  return (
    <section className="catalog" data-reveal>
      <h2 className="catalog__title">{title}</h2>
      {rows && (
        <ul className="catalog__list">
          {rows.map((row, i) => (
            <li key={i} className="catalog__row">
              <div className="catalog__primary">
                <span className="catalog__name">{row.primary}</span>
                {row.secondary && (
                  <span className="catalog__note">
                    <em>{row.secondary}</em>
                  </span>
                )}
              </div>
              {row.trailing && (
                <span className="catalog__trailing">{row.trailing}</span>
              )}
            </li>
          ))}
        </ul>
      )}
      {children}
    </section>
  )
}
