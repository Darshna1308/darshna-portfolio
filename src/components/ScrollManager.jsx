import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the hash target after every navigation (including a repeat click on
// the same link), or to the top on a new page.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}
