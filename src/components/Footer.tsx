import { socialLinks } from '../data/content'

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold tracking-[0.5em] text-white">JOE BOULOS</p>
          <p className="mt-2 text-white/50">Building fast, modern digital experiences.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-white/70">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="text-white/40">© {new Date().getFullYear()} Joe Boulos. All rights reserved.</p>
      </div>
    </footer>
  )
}

