import { motion, useReducedMotion } from 'framer-motion'
import { MAPS_EMBED_URL, MAPS_URL } from '../lib/site'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

function LocationSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="localizacao" className="bg-cream py-20 lg:py-24">
      <div className="section-container grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
        >
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="font-serif text-3xl text-chocolate sm:text-4xl lg:text-5xl"
          >
            Esperamos por você.
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 text-base leading-relaxed text-chocolate/80"
          >
            Venha conhecer a Andreia Camargo Cakes em Guariba e descubra suas
            próximas delícias favoritas.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-8 rounded-2xl bg-warmWhite p-6 shadow-sm ring-1 ring-beige/50"
          >
            <p className="font-serif text-xl text-greenDeep">
              Andreia Camargo Cakes
            </p>
            <address className="mt-2 not-italic leading-relaxed text-chocolate/80">
              Rua Nove de Julho, 1084
              <br />
              Vila Corona, Guariba — SP
              <br />
              CEP 14840-021
            </address>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-greenDeep">
              Telefone e WhatsApp
            </p>
            <p className="mt-1 text-lg text-chocolate">(16) 99644-5256</p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-greenDeep px-6 py-3 text-sm font-semibold text-warmWhite transition-colors hover:bg-chocolate"
            >
              Traçar rota no Google Maps
            </a>
          </motion.div>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 text-sm italic text-chocolate/65"
          >
            Para confirmar nossos horários de atendimento, fale conosco pelo
            WhatsApp.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="min-h-[320px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-beige/50"
        >
          <iframe
            title="Mapa com a localização da Andreia Camargo Cakes em Guariba, SP"
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[320px] w-full border-0"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default LocationSection
