import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const baseClass =
  'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variantClass = {
  primary: 'bg-primary text-white shadow-glow hover:bg-primary/90 focus-visible:outline-primary/60',
  secondary:
    'border border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white/60',
}

export const Button = ({
  children,
  href,
  className = '',
  variant = 'primary',
  icon,
  type = 'button',
}: ButtonProps) => {
  const sharedProps = {
    className: `${baseClass} ${variantClass[variant]} ${className}`,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {children}
        {icon}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} {...sharedProps}>
      {children}
      {icon}
    </motion.button>
  )
}

