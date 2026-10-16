import { motion, useReducedMotion } from 'framer-motion'
import { waLink } from '../lib/site'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

interface Product {
  name: string
  description: string
  message: string
  image: string
  alt: string
}

const PRODUCTS: Product[] = [
  {
    name: 'Bolos',
    description:
      'Uma escolha especial para acompanhar o café e celebrar bons momentos.',
    message:
      'Olá! Gostaria de conhecer as opções de bolos da Andreia Camargo Cakes.',
    image:
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80',
    alt: 'Bolo com camadas e cobertura cremosa decorado com delicadeza',
  },
  {
    name: 'Doces',
    description:
      'Pequenos prazeres para transformar qualquer pausa em algo especial.',
    message:
      'Olá! Gostaria de conhecer as opções de doces da Andreia Camargo Cakes.',
    image:
      'https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=800&q=80',
    alt: 'Variedade de doces coloridos dispostos em uma bandeja',
  },
  {
    name: 'Salgados',
    description: 'Opções saborosas para aquela pausa que o dia merece.',
    message:
      'Olá! Gostaria de conhecer as opções de salgados da Andreia Camargo Cakes.',
    image:
      'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80',
    alt: 'Salgados assados dourados servidos em uma tábua',
  },
  {
    name: 'Cafés e bebidas',
    description:
      'A companhia perfeita para aproveitar suas delícias favoritas.',
    message:
      'Olá! Gostaria de conhecer as opções de cafés e bebidas da Andreia Camargo Cakes.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    alt: 'Xícara de café quentinho sobre a mesa com espuma cremosa',
  },
]

function ProductsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="sabores" className="bg-cream py-20 lg:py-24">
      <div className="section-container">
        <motion.div
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-greenDeep"
          >
            FEITO PARA DESPERTAR OS SENTIDOS
          </motion.p>
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="font-serif text-3xl text-chocolate sm:text-4xl lg:text-5xl"
          >
            Encontre seu novo sabor favorito.
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 text-base leading-relaxed text-chocolate/75"
          >
            Uma seleção de delícias para acompanhar seu café, adoçar o dia ou
            deixar uma ocasião ainda mais especial.
          </motion.p>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((product) => (
            <motion.article
              key={product.name}
              variants={reduceMotion ? undefined : fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl bg-warmWhite shadow-sm ring-1 ring-beige/50 transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl text-chocolate">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-chocolate/75">
                  {product.description}
                </p>
                <a
                  href={waLink(product.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full border border-greenDeep px-5 py-2 text-center text-sm font-semibold text-greenDeep transition-colors hover:bg-greenDeep hover:text-warmWhite"
                >
                  Consultar opções
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
