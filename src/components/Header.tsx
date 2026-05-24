import { NavLink, Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

const WRITINGS_URL = 'https://medium.com/the-mock-startup'

const NAV = [
  { to: '/', label: 'Projects', end: true },
  { href: WRITINGS_URL, label: 'Writings' },
  { to: '/about', label: 'About', end: false },
] as const

export default function Header() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return
      gsap.from('.header__inner > *', {
        y: 8,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.04,
      })
    },
    { scope: ref },
  )

  return (
    <header ref={ref} className="header">
      <div className="header__inner">
        <Link to="/" className="wordmark" aria-label="2469 Labs home">
          <span className="wordmark__num">2469</span>
          <span className="wordmark__word">Labs</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) =>
            'href' in item ? (
              <a key={item.href} href={item.href} className="nav__link">
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? 'nav__link nav__link--active' : 'nav__link'
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
