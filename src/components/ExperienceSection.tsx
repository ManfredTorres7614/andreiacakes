import { motion, useReducedMotion } from 'framer-motion'
import { smoothScrollTo } from '../lib/site'
import { fadeUp, imageReveal, staggerContainer, viewportOnce } from '../lib/motion'

function ExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-mint/50 py-20 lg:py-24">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image first (alternated position relative to the hero) */}
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : imageReveal}
          className="order-1 overflow-hidden rounded-[2rem] shadow-xl lg:order-none"
        >
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80"
            alt="Xícara de café ao lado de um doce em um ambiente iluminado por luz natural"
            width={1000}
            height={750}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          className="max-w-xl"
        >
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="font-serif text-3xl text-chocolate sm:text-4xl lg:text-5xl"
          >
            Permita-se aproveitar os pequenos prazeres.
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 text-base leading-relaxed text-chocolate/80 sm:text-lg"
          >
            Um café quentinho, um doce favorito e alguns minutos para respirar.
            Às vezes, são os detalhes mais simples que tornam o dia inesquecível.
          </motion.p>
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <button
              type="button"
              onClick={() => smoothScrollTo('localizacao')}
              className="mt-8 rounded-full bg-greenDeep px-7 py-3 text-sm font-semibold text-warmWhite transition-colors hover:bg-chocolate"
            >
              Venha nos conhecer
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
