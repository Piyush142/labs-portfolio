import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const NAV = [
  { to: '/', label: 'Projects', end: true },
  { to: '/writings', label: 'Writings', end: false },
  { to: '/about', label: 'About', end: false },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="logo-link" aria-label="2469 Labs home">
          <Logo className="logo" />
        </Link>
        <nav className="nav" aria-label="Footer">
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
      <div className="footer__line">
        <span>© {new Date().getFullYear()} 2469 Labs.</span>
        <span>
          Made by two guys who like making things.{' '}
          <a href="mailto:hello@2469labs.com" className="link">
            Say hello.
          </a>
        </span>
      </div>
    </footer>
  )
}
