import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Let the page render, then jump to the anchored section
      requestAnimationFrame(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
        } else {
          window.scrollTo(0, 0)
        }
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
