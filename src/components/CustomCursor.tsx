'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Basic mobile/touch device detection
    const checkIfMobile = () => {
      return (
        typeof window !== 'undefined' &&
        (window.innerWidth < 768 || 'ontouchstart' in window)
      )
    }

    setIsMobile(checkIfMobile())

    if (checkIfMobile()) return

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
      }
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  if (isMobile) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 bg-red-500 rounded-full mix-blend-difference transition-transform duration-150 ease-out transform -translate-x-1/3 -translate-y-1/9 shadow-lg shadow-red-500/50 cursor-none"
    />
  )
}
