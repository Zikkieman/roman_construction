import { useEffect, useState } from 'react'

function IconChevronUp() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m6 14 6-6 6 6" />
    </svg>
  )
}

export function ScrollToHeroButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')

      if (!heroSection) {
        setIsVisible(window.scrollY > window.innerHeight * 0.8)
        return
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight * 0.72
      setIsVisible(window.scrollY > heroBottom)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  function scrollToHero() {
    const heroSection = document.getElementById('home')

    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      aria-label="Back to hero section"
      className={`fixed bottom-5 right-5 z-40 flex size-[46px] items-center justify-center rounded-full bg-[#948b84] text-white shadow-[0_18px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#C39B7B] ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      onClick={scrollToHero}
      type="button"
    >
      <IconChevronUp />
    </button>
  )
}
