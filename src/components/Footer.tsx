import { INSTAGRAM_URL, NAV_SECTIONS, smoothScrollTo, waLink } from '../lib/site'

const FOOTER_WHATSAPP_MESSAGE =
  'Olá! Gostaria de falar com a Andreia Camargo Cakes.'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-chocolate text-cream/85">
      <div className="section-container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-warmWhite">
            Andreia Camargo Cakes
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/75">
            Feito com carinho para adoçar seus momentos.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            Navegação
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => smoothScrollTo(section.id)}
                  className="text-sm text-cream/80 transition-colors hover:text-warmWhite"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            Contato
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 transition-colors hover:text-warmWhite"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={waLink(FOOTER_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 transition-colors hover:text-warmWhite"
              >
                WhatsApp
              </a>
            </li>
          </ul>
          <address className="mt-4 not-italic text-sm leading-relaxed text-cream/75">
            Rua Nove de Julho, 1084 — Vila Corona, Guariba — SP
          </address>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="section-container py-6">
          <p className="text-xs text-cream/60">
            © {currentYear} Andreia Camargo Cakes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
