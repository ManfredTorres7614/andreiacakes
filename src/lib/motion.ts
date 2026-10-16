/**
 * Shared Framer Motion animation variants and helpers.
 *
 * All variants are consumed by components that ALSO call `useReducedMotion()`
 * and pass empty/disabled props when the user prefers reduced motion, so the
 * content always renders instantly and statically in that case.
 */
import type { Variants } from 'framer-motion'

/** Soft upward fade used for on-scroll text/section reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Container that staggers its children's reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

/** Gentle fade + scale used for image entrances. */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Shared viewport config for whileInView reveals (animate once). */
export const viewportOnce = { once: true, amount: 0.25 } as const
