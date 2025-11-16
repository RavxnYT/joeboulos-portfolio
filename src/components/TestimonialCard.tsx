import type { Testimonial } from '../data/content'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="glass-panel flex flex-col gap-6 p-10 text-left">
      <p className="text-lg text-white/80">“{testimonial.quote}”</p>
      <div>
        <p className="text-base font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm uppercase tracking-widest text-white/50">{testimonial.role}</p>
      </div>
    </div>
  )
}

