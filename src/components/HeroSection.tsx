import { motion, useReducedMotion } from 'framer-motion'
import { smoothScrollTo, waLink } from '../lib/site'
import { fadeUp, imageReveal, staggerContainer } from '../lib/motion'

const HERO_WHATSAPP_MESSAGE =
  'Olá! Gostaria de conversar com a Andreia Camargo Cakes sobre as opções disponíveis.'

function HeroSection() {
  const reduceMotion = useReducedMotion()

  const motionProps = reduceMotion
    ? {}
    : {
        variants: staggerContainer,
        initial: 'hidden' as const,
        animate: 'visible' as const,
      }

  const itemVariants = reduceMotion ? undefined : fadeUp

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-mintLight pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div {...motionProps} className="max-w-xl">
          <motion.p
            variants={itemVariants}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-greenDeep"
          >
            {'CONFEITARIA & CAFETERIA · GUARIBA, SP'}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl leading-[1.08] text-chocolate sm:text-5xl lg:text-6xl"
          >
            Seu dia merece um toque{' '}
            <span className="italic text-greenDeep">mais doce</span>.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-relaxed text-chocolate/80 sm:text-lg"
          >
            Bolos, doces, salgados e cafés para transformar pequenas pausas em
            momentos especiais. Tudo com aquele carinho que faz a diferença.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => smoothScrollTo('sabores')}
              className="rounded-full bg-greenDeep px-7 py-3 text-sm font-semibold text-warmWhite transition-colors hover:bg-chocolate"
            >
              Descubra nossos sabores
            </button>
            <a
              href={waLink(HERO_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-greenDeep px-7 py-3 text-center text-sm font-semibold text-greenDeep transition-colors hover:bg-greenDeep hover:text-warmWhite"
            >
              Converse com a gente
            </a>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm italic text-chocolate/60"
          >
            Um cantinho especial para apreciar cada momento.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? undefined : 'visible'}
          variants={reduceMotion ? undefined : imageReveal}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
              alt="Bolo decorado com cobertura delicada sobre mesa clara na Andreia Camargo Cakes"
              width={1200}
              height={1400}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-mint/50 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
