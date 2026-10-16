/**
 * Shared site-wide constants and helpers for Andreia Camargo Cakes.
 * Every outbound link (WhatsApp, Instagram, Google Maps) is a real destination.
 */

/** WhatsApp number in international format (no symbols), used by wa.me links. */
export const WHATSAPP_NUMBER = '5516996445256'

/**
 * Build a WhatsApp deep link to the business number with a prefilled,
 * URL-encoded message. Works on both desktop and mobile.
 */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Official Instagram profile. */
export const INSTAGRAM_URL = 'https://www.instagram.com/andreia.camargo_cakes/'

/** Google Maps directions/search link for the physical address. */
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Nove+de+Julho%2C+1084%2C+Guariba%2C+SP'

/** Keyless Google Maps embed URL for the same address (no paid API key). */
export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Rua+Nove+de+Julho%2C+1084%2C+Vila+Corona%2C+Guariba%2C+SP&output=embed'

/** A navigation section: the in-page anchor id and its display label. */
export interface NavSection {
  id: string
  label: string
}

/** Navigation sections shared by the header, mobile menu and footer. */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sabores', label: 'Sabores' },
  { id: 'essencia', label: 'Nossa essência' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'localizacao', label: 'Localização' },
]

/**
 * Smoothly scroll to a section by its element id. Respects the user's
 * reduced-motion preference (the browser falls back to an instant jump via
 * the CSS media query in index.css).
 */
export function smoothScrollTo(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
