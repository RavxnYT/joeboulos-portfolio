import { motion } from 'framer-motion'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/Button'
import { counters, skills } from '../data/content'

const skillVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + index * 0.1, duration: 0.6 },
  }),
}

export const About = () => {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div className="space-y-10">
          <SectionTitle
            eyebrow="About"
            title="Web & app developer bridging design, code, and security."
            description="Over the past 3 years I’ve delivered bespoke websites, desktop apps, and commerce builds for clients across 5 countries. I’m currently studying cybersecurity and hold multiple penetration testing and bug bounty certificates, so performance and protection are part of every decision."
          />

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="rounded-3xl border border-white/5 bg-white/5 p-6"
                variants={skillVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-lg font-semibold text-white">{skill.title}</p>
                <p className="mt-2 text-sm text-white/70">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <Button href="#contact" variant="secondary">
            Collaborate with me
          </Button>
        </div>

        <div className="space-y-10">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/20 to-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
              alt="Studio desk setup"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
          </motion.div>

          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 sm:grid-cols-2">
            {counters.map((counter) => (
              <AnimatedCounter key={counter.label} {...counter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

