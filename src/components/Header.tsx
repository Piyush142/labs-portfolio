import { NavLink, Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import Logo from './Logo'

const NAV = [
  { to: '/', label: 'Projects', end: true },
  { to: '/writings', label: 'Writings', end: false },
  { to: '/about', label: 'About', end: false },
]

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
        <Link to="/" className="logo-link" aria-label="2469 Labs home">
          <Logo className="logo" />
        </Link>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
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
          ))}
        </nav>
      </div>
    </header>
  )
}
