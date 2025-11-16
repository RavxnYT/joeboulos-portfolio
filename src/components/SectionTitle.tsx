type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export const SectionTitle = ({ eyebrow, title, description, align = 'left' }: SectionTitleProps) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : ''

  return (
    <div className={`flex flex-col gap-3 ${alignment} max-w-2xl`}>
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-white/70">{description}</p> : null}
    </div>
  )
}

