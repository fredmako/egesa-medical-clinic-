import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

type Props = { drawerOpen?: boolean }

/**
 * Floating WhatsApp assistant.
 * - 20% smaller than a default 56px FAB (≈45px).
 * - 24px safe margin from screen edges/content.
 * - Appears only after the user scrolls 20% of the page.
 * - Hidden while the mobile nav drawer is open (avoids overlap).
 */
export default function FloatingAssistant({ drawerOpen = false }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const threshold = (document.documentElement.scrollHeight - window.innerHeight) * 0.2
      setShow(scrolled > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show || drawerOpen) return null

  return (
    <a
      href={`https://wa.me/${site.phone.replace(/[^0-9]/g, '').replace(/^0/, '254')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Egesa Medical Clinic on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-black/20 ring-2 ring-white/30 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 md:hidden"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
