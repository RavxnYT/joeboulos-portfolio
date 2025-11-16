import { motion } from 'framer-motion'
import { FiCode, FiPenTool, FiSmartphone, FiLayers } from 'react-icons/fi'
import { SectionTitle } from '../components/SectionTitle'
import { services } from '../data/content'

const iconMap = {
  code: FiCode,
  design: FiPenTool,
  mobile: FiSmartphone,
  brand: FiLayers,
}

export const Services = () => {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionTitle
          eyebrow="Services"
          title="End-to-end leadership across product, design, and engineering."
          description="I partner with ambitious teams to concept, design, and ship signature experiences with measurable impact."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                className="glass-panel flex flex-col gap-6 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-lg font-semibold text-white">{service.title}</p>
                </div>
                <p className="text-sm text-white/70">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

