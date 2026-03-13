import { useEffect, useState } from 'react'

export function useRotatingIndex(length: number, delay = 5000) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (length <= 1) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % length)
    }, delay)

    return () => window.clearInterval(timer)
  }, [delay, length])

  return [activeIndex, setActiveIndex] as const
}
