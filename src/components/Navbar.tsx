import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from './Button'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyles = scrolled
    ? 'bg-background/80 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]'
    : 'bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${navStyles}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-[0.6em] text-white">
          JOE BOULOS
        </a>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.4em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" className="text-xs" variant="primary">
            Let&apos;s Talk
          </Button>
        </div>

        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <motion.span
            className="absolute block h-0.5 w-5 bg-white"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 0 : -4 }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? 0 : 4 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto mb-4 w-[90%] max-w-md rounded-3xl border border-white/10 bg-background/90 p-8 text-center md:hidden"
          >
            <div className="flex flex-col gap-6 text-sm uppercase tracking-[0.4em] text-white/70">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <Button href="#contact" className="w-full justify-center">
                Start a Project
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

