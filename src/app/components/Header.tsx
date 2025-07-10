'use client'

import React, { useEffect, useState } from 'react'

interface HeaderProps {
  poem: string
  className?: string
}

export default function Header({
  poem,
  className = 'mb-2 w-full h-[8rem] overflow-hidden text-6xl font-bold text-black flex items-center justify-center',
}: HeaderProps) {
  const initialLines = poem.split(' • ').map((line) => line.split(' '))
  const [lines] = useState<string[][]>(initialLines)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const duration = lines[current].length * 200 + 1000
    const timer = setTimeout(
      () => setCurrent((c) => (c + 1) % lines.length),
      duration
    )
    return () => clearTimeout(timer)
  }, [current, lines])

  const words = lines[current]

  return (
    <header className={className}>
      <div
        key={current}
        className="overflow-hidden whitespace-nowrap"
        style={{
          animation: `fadeOut 0.5s forwards ${words.length * 0.2 + 0.5}s`,
        }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-block opacity-0"
            style={{
              animation: `fadeIn 0.5s forwards`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {w}&nbsp;
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-1rem);
          }
        }
      `}</style>
    </header>
  )
}
