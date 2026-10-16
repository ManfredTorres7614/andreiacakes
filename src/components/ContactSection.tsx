import { motion, useReducedMotion } from 'framer-motion'
import { waLink } from '../lib/site'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const CONTACT_WHATSAPP_MESSAGE =
  'Olá! Conheci a Andreia Camargo Cakes pelo site e gostaria de saber mais sobre os produtos e as opções disponíveis.'

function ContactSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-chocolate py-20 text-warmWhite lg:py-24">
      <motion.div
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={viewportOnce}
        className="section-container mx-auto max-w-2xl text-center"
      >
        <motion.h2
          variants={reduceMotion ? undefined : fadeUp}
          className="font-serif text-3xl text-warmWhite sm:text-4xl lg:text-5xl"
        >
          Vamos adoçar o seu dia?
        </motion.h2>
        <motion.p
          variants={reduceMotion ? undefined : fadeUp}
          className="mt-5 text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Quer conhecer nossas opções, consultar a disponibilidade de um produto
          ou saber mais sobre a confeitaria? Fale com a gente. Será um prazer
          ajudar.
        </motion.p>
        <motion.div variants={reduceMotion ? undefined : fadeUp}>
          <a
            href={waLink(CONTACT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-mint px-8 py-3 text-sm font-semibold text-chocolate transition-colors hover:bg-greenMid"
          >
            Conversar pelo WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection
