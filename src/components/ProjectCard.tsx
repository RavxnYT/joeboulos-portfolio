import { motion } from 'framer-motion'
import { Button } from './Button'
import type { Project } from '../data/content'

type ProjectCardProps = {
  project: Project
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.7 },
  }),
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isComingSoon = project.comingSoon

  return (
    <motion.article
      className="glass-panel flex flex-col overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
    >
      {isComingSoon ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-12 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-white/40">Next Build</p>
          <h3 className="text-4xl font-semibold text-white">Coming Soon</h3>
          <p className="max-w-md text-white/60">{project.description}</p>
        </div>
      ) : (
        <>
          <div className="relative aspect-[16/9] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>

          <div className="flex flex-1 flex-col gap-4 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Featured Work</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
            </div>
            <p className="text-white/70">{project.description}</p>

            <ul className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-white/60">
              {project.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-white/10 px-3 py-1">
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <Button href={project.link} variant="secondary" className="w-fit">
                View Case Study
              </Button>
            </div>
          </div>
        </>
      )}
    </motion.article>
  )
}

