import { SectionTitle } from '../components/SectionTitle'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/content'

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionTitle
          eyebrow="Featured"
          title="The five builds that define my current journey."
          description="From architecture platforms to ecommerce, sourcing, and this portfolio, each project blends custom code, clean design, and practical admin tooling."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

