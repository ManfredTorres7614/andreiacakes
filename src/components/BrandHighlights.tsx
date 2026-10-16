import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface Highlight {
  title: string
  description: string
  icon: ReactNode
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Preparado com carinho',
    description:
      'Pequenos detalhes que tornam cada experiência especial.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 21s-7-4.35-9.5-8.5C1 9.5 2.5 6.5 5.5 6.5c1.8 0 3 1 2.5 2.5C9 7 10.2 6.5 12 6.5s3 .5 4 2.5c-.5-1.5.7-2.5 2.5-2.5 3 0 4.5 3 3 6C19 16.65 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: 'Sabores para cada momento',
    description:
      'Bolos, doces, salgados e bebidas para diferentes ocasiões.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20h16" />
        <path d="M5 20v-5a7 7 0 0 1 14 0v5" />
        <path d="M12 8V4" />
        <path d="M10 4h4" />
      </svg>
    ),
  },
  {
    title: 'Um cantinho em Guariba',
    description:
      'Uma pausa acolhedora para aproveitar os pequenos prazeres do dia.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
]

function BrandHighlights() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-mint/40">
      <motion.div
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={viewportOnce}
        className="section-container grid gap-8 py-14 sm:gap-10 md:grid-cols-3 md:gap-0 md:py-16"
      >
        {HIGHLIGHTS.map((item, index) => (
          <motion.div
            key={item.title}
            variants={reduceMotion ? undefined : fadeUp}
            className={`flex flex-col items-center px-4 text-center md:px-8 ${
              index > 0 ? 'md:border-l md:border-greenDeep/20' : ''
            }`}
          >
            <span className="text-greenDeep">{item.icon}</span>
            <h3 className="mt-4 font-serif text-2xl text-chocolate">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-chocolate/75">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default BrandHighlights
