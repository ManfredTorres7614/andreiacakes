import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { INSTAGRAM_URL } from '../lib/site'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface GalleryImage {
  src: string
  full: string
  alt: string
  /** Tailwind classes controlling the asymmetric grid span. */
  span: string
}

const buildUrl = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

const IMAGES: GalleryImage[] = [
  {
    src: buildUrl('1578985545062-69928b1d9587', 800),
    full: buildUrl('1578985545062-69928b1d9587', 1400),
    alt: 'Bolo decorado inteiro visto de cima',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: buildUrl('1488477181946-6428a0291777', 600),
    full: buildUrl('1488477181946-6428a0291777', 1200),
    alt: 'Fatia de bolo com recheio cremoso em um prato',
    span: '',
  },
  {
    src: buildUrl('1558326567-98ae2405596b', 600),
    full: buildUrl('1558326567-98ae2405596b', 1200),
    alt: 'Doces coloridos variados dispostos lado a lado',
    span: '',
  },
  {
    src: buildUrl('1495474472287-4d71bcdd2085', 600),
    full: buildUrl('1495474472287-4d71bcdd2085', 1200),
    alt: 'Xícara de café com espuma cremosa sobre a mesa',
    span: '',
  },
  {
    src: buildUrl('1619535860434-ba1d8fa12536', 600),
    full: buildUrl('1619535860434-ba1d8fa12536', 1200),
    alt: 'Salgados assados dourados servidos em uma tábua',
    span: '',
  },
  {
    src: buildUrl('1559925393-8be0ec4767c8', 800),
    full: buildUrl('1559925393-8be0ec4767c8', 1400),
    alt: 'Ambiente acolhedor da cafeteria com mesa posta',
    span: 'sm:col-span-2',
  },
]

function GallerySection() {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setActiveIndex(null)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab') return

      // Trap Tab/Shift+Tab within the dialog's focusable elements.
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeEl = document.activeElement

      if (event.shiftKey) {
        if (activeEl === first || !dialog.contains(activeEl)) {
          event.preventDefault()
          last.focus()
        }
      } else if (activeEl === last || !dialog.contains(activeEl)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    // Move focus into the dialog.
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeIndex, close])

  const active = activeIndex !== null ? IMAGES[activeIndex] : null

  return (
    <section id="galeria" className="bg-mintLight py-20 lg:py-24">
      <div className="section-container">
        <motion.div
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="font-serif text-3xl text-chocolate sm:text-4xl lg:text-5xl"
          >
            Cada detalhe tem seu encanto.
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 text-base leading-relaxed text-chocolate/75"
          >
            Explore mais do nosso universo de sabores.
          </motion.p>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {IMAGES.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              variants={reduceMotion ? undefined : fadeUp}
              onClick={(event) => {
                triggerRef.current = event.currentTarget
                setActiveIndex(index)
              }}
              aria-label={`Ampliar imagem: ${image.alt}`}
              className={`group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-greenDeep focus-visible:ring-offset-2 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-greenDeep px-7 py-3 text-sm font-semibold text-warmWhite transition-colors hover:bg-chocolate"
          >
            Ver Instagram
          </a>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-chocolate/80 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Fechar imagem ampliada"
                className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-warmWhite text-chocolate shadow-lg transition-colors hover:bg-mintLight focus:outline-none focus-visible:ring-2 focus-visible:ring-greenDeep"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <img
                src={active.full}
                alt={active.alt}
                className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
