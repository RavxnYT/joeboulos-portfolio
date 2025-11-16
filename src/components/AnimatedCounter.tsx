import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { CounterStat } from '../data/content'

type AnimatedCounterProps = CounterStat

export const AnimatedCounter = ({ value, label, suffix = '' }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' })

  useEffect(() => {
    if (!isInView) return
    const animation = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(Math.round(latest))
      },
    })

    return () => animation.stop()
  }, [isInView, value])

  return (
    <div className="flex flex-col gap-2">
      <span ref={ref} className="text-4xl font-semibold text-white md:text-5xl">
        {displayValue}
        {suffix}
      </span>
      <p className="text-sm uppercase tracking-[0.4em] text-white/40">{label}</p>
    </div>
  )
}

