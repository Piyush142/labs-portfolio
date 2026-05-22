import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  selector?: string
  y?: number
  stagger?: number
  duration?: number
  delay?: number
  scrub?: boolean
  start?: string
  once?: boolean
}

/**
 * Fade-up-on-scroll reveal scoped to a ref. Skips entirely when the user prefers
 * reduced motion. Uses ScrollTrigger; cleanup is handled by useGSAP's context.
 */
export function useReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  opts: RevealOptions = {},
) {
  const {
    selector = '[data-reveal]',
    y = 18,
    stagger = 0.08,
    duration = 0.7,
    delay = 0,
    start = 'top 85%',
    once = true,
  } = opts

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      const targets = gsap.utils.toArray<HTMLElement>(selector)
      if (!targets.length) return

      gsap.set(targets, { y, opacity: 0 })

      targets.forEach((el, i) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration,
          delay: delay + i * stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        })
      })
    },
    { scope: ref, dependencies: [] },
  )
}
