import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, imageReveal, staggerContainer, viewportOnce } from '../lib/motion'

function BrandStorySection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="essencia" className="bg-cream py-20 lg:py-24">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
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
            Mais do que sabores, momentos para guardar.
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 text-base leading-relaxed text-chocolate/80 sm:text-lg"
          >
            Na Andreia Camargo Cakes, acreditamos que os pequenos momentos
            merecem ser celebrados. Seja em uma pausa para o café, em um encontro
            especial ou na vontade de comer algo gostoso, queremos fazer parte
            desses momentos com delícias que despertam sorrisos e tornam o dia
            mais leve.
          </motion.p>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 font-serif text-2xl italic text-greenDeep"
          >
            Será um prazer receber você.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          variants={reduceMotion ? undefined : imageReveal}
          className="overflow-hidden rounded-[2rem] shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=1000&q=80"
            alt="Mesa com doces e café preparada com cuidado na confeitaria"
            width={1000}
            height={750}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default BrandStorySection
