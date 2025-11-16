import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { SectionTitle } from '../components/SectionTitle'
import { TestimonialCard } from '../components/TestimonialCard'
import { testimonials } from '../data/content'

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => setActiveIndex((index + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by founders who need secure, high-speed builds."
          description="Clients highlight the blend of clean design, full-stack execution, and cybersecurity-aware thinking across every engagement."
          align="center"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <TestimonialCard testimonial={testimonials[activeIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-primary' : 'w-3 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
                aria-label="Next testimonial"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

