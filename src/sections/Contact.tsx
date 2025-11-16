import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { socialLinks } from '../data/content'

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <SectionTitle
          eyebrow="Contact"
          title="Ready for the next flagship launch?"
          description="I keep things personal—reach out via WhatsApp, Instagram, or email with a quick brief and I’ll respond within 24 hours."
        />

        <motion.div
          className="glass-panel flex flex-col gap-6 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-lg font-semibold text-white">Direct contact channels</p>
          <p className="text-sm text-white/70">
            Reach out for collaboration, security reviews, or to chat about a new build.
          </p>

          <div className="mt-4 flex flex-col gap-3 text-white/80">
            {socialLinks.map((social) => {
              const isExternal = social.href.startsWith('http')
              const displayValue = social.value ?? social.href
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm transition hover:text-white"
                >
                  <span className="uppercase tracking-[0.3em] text-white/40">{social.label}</span>
                  <span className="font-semibold text-white">{displayValue}</span>
                </a>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

