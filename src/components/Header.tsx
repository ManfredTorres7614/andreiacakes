import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { NAV_SECTIONS, smoothScrollTo, waLink } from '../lib/site'

const HEADER_WHATSAPP_MESSAGE =
  'Olá! Gostaria de falar com a Andreia Camargo Cakes.'

function Header() {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    // Move focus into the drawer when it opens.
    firstMenuItemRef.current?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    smoothScrollTo(id)
  }

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'bg-warmWhite/95 shadow-sm backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between py-4"
        aria-label="Navegação principal"
      >
        <button
          type="button"
          onClick={() => handleNavClick('inicio')}
          className="font-serif text-xl leading-none tracking-tight text-greenDeep transition-colors hover:text-chocolate sm:text-2xl"
        >
          Andreia Camargo Cakes
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(section.id)}
                  className="text-sm font-medium text-chocolate/80 transition-colors hover:text-greenDeep"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={waLink(HEADER_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-greenDeep px-5 py-2 text-sm font-semibold text-warmWhite transition-colors hover:bg-chocolate"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full text-chocolate transition-colors hover:bg-mintLight lg:hidden"
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-beige/60 bg-warmWhite lg:hidden"
        >
          <ul className="section-container flex flex-col gap-1 py-4">
            {NAV_SECTIONS.map((section, index) => (
              <li key={section.id}>
                <button
                  ref={index === 0 ? firstMenuItemRef : undefined}
                  type="button"
                  onClick={() => handleNavClick(section.id)}
                  className="w-full rounded-lg px-3 py-3 text-left text-base font-medium text-chocolate transition-colors hover:bg-mintLight"
                >
                  {section.label}
                </button>
              </li>
            ))}
            <li className="px-3 pt-2">
              <a
                href={waLink(HEADER_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-greenDeep px-5 py-3 text-center text-sm font-semibold text-warmWhite transition-colors hover:bg-chocolate"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}

export default Header
