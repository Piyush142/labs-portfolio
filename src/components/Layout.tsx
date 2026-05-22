import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import SmoothScroll from './SmoothScroll'
import './layout.css'

const TITLES: Record<string, string> = {
  '/': '2469 Labs — Projects',
  '/writings': '2469 Labs — Writings',
  '/about': '2469 Labs — About',
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? '2469 Labs'
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <SmoothScroll>
      <div className="frame">
        <Header />
        <main className="main" key={pathname}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
