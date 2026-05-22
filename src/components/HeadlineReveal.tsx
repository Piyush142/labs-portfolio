import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, type ElementType } from 'react'

type Props = {
  text: string
  as?: ElementType
  className?: string
  delay?: number
}

/**
 * Splits a string into words wrapped in spans and reveals them on mount with a
 * staggered fade-up. Cleanly skips animation when prefers-reduced-motion.
 */
export default function HeadlineReveal({
  text,
  as: Tag = 'h1',
  className,
  delay = 0.05,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const words = text.split(/(\s+)/)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return
      gsap.from('.hl-word > span', {
        yPercent: 110,
        opacity: 0,
        duration: 0.85,
        ease: 'expo.out',
        stagger: 0.045,
        delay,
      })
    },
    { scope: ref, dependencies: [text] },
  )

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) =>
        w.match(/^\s+$/) ? (
          <span key={i}> </span>
        ) : (
          <span
            key={i}
            className="hl-word"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'baseline',
              lineHeight: 'inherit',
            }}
          >
            <span style={{ display: 'inline-block', willChange: 'transform' }}>
              {w}
            </span>
          </span>
        ),
      )}
    </Tag>
  )
}
