import { useEffect, type ReactNode } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let cleanup: (() => void) | undefined
    let cancelled = false

    ;(async () => {
      const [{ default: Lenis }, gsapModule, stModule] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      const gsap = gsapModule.default
      const ScrollTrigger = stModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const onScroll = () => ScrollTrigger.update()
      lenis.on('scroll', onScroll)

      const tick = (time: number) => lenis.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)

      cleanup = () => {
        lenis.off('scroll', onScroll)
        gsap.ticker.remove(tick)
        lenis.destroy()
      }
    })()

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return <>{children}</>
}
