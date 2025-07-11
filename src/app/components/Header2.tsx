// src/app/components/Header2.tsx
'use client'

import { useEffect, useRef } from 'react'

interface Header2Props {
  className?: string
  /** px per second; bump this higher for a faster scroll */
  speed?: number
}

export default function Header2({
  className = 'mb-8 mt-12 w-screen overflow-hidden',
  speed = 500,
}: Header2Props) {
  const poem =
    "In the silent glow of dawn the city wakes • " +
    "Whispers trace the hollow streets • " +
    "Dreams unfurl on gentle breeze • " +
    "Hearts awaken, ever free • "

  const wrapperRef = useRef<HTMLDivElement>(null)
  const stripRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current!
    const strip   = stripRef.current!
    // Measure width of one poem block
    const blockWidth = strip.getBoundingClientRect().width

    let offset = 0
    let lastTime = performance.now()

    function tick(now: number) {
      const dt = now - lastTime
      lastTime = now

      // advance and wrap
      offset += (speed * dt) / 1000
      if (offset >= blockWidth) offset -= blockWidth

      // slide whole strip
      wrapper.style.transform = `translateX(${-offset}px)`

      requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [speed])

  return (
    <header className={className}>
      <div
        ref={wrapperRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* two back-to-back copies */}
        <div ref={stripRef} className="inline-block">
          <span className="inline-block text-black text-7xl sm:text-8xl md:text-[5rem] font-bold uppercase mr-8">
            {poem}
          </span>
        </div>
        <div className="inline-block">
          <span className="inline-block text-black text-7xl sm:text-8xl md:text-[5rem] font-bold uppercase mr-8">
            {poem}
          </span>
        </div>
      </div>
    </header>
  )
}
