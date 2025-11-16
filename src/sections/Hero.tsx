import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../components/Button'

export const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-mesh opacity-80 blur-3xl"
          style={{ y: parallaxY }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
          animate={{ y: [0, 50, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -left-10 bottom-10 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
          animate={{ y: [0, -60, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.7em] text-white/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Portfolio 2025
        </motion.p>

        <motion.h1
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Joe Boulos
        </motion.h1>

        <motion.p
          className="text-2xl font-light text-white/90 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Web & app developer crafting modern, high-performing experiences.
        </motion.p>

        <motion.p
          className="text-base text-white/70 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          UI/UX designer • Cybersecurity student • Pen-testing certified
        </motion.p>

        <motion.p
          className="text-sm text-white/50 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72 }}
        >
          Currently studying cybersecurity with multiple penetration testing & bug bounty certificates.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button href="#projects">View My Work</Button>
          <Button href="#about" variant="secondary" className="text-white/80">
            About Me
          </Button>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        >
          <span>Web & app development</span>
          <span>Website design systems</span>
          <span>Cybersecurity-informed builds</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -ml-3 hidden h-12 w-6 items-center justify-center rounded-full border border-white/30 sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <span className="block h-2 w-2 rounded-full bg-white" />
      </motion.div>
    </section>
  )
}

