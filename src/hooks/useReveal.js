import { useEffect } from 'react'

import { prefersReducedMotion } from './useReducedMotion.js'

// Adds `is-in` to every [data-reveal] / [data-mark] element as it scrolls into view.
// Content stays visible without JS, and with reduced motion it is shown immediately.
export default function useReveal(key) {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal], [data-mark]')

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      targets.forEach((el) => el.classList.add('is-in'))
      return undefined
    }

    document.documentElement.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])
}
