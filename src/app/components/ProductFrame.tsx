'use client'

import { useState } from 'react'

interface ProductFrameProps {
  items: string[]
}

export default function ProductFrame({ items }: ProductFrameProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const baseWidth = `${100 / items.length}%`

  return (
    <div
      className="w-full max-w-[800px] overflow-hidden border border-gray-200"
      style={{ aspectRatio: '16 / 9' }}
    >
      <div className="flex h-full">
        {items.map((bg, i) => {
          const width =
            selected === null
              ? baseWidth
              : i === selected
              ? '100%'
              : '0'
          return (
            <div
              key={i}
              className={`${bg} cursor-pointer h-full transition-[width] duration-500 ease-in-out relative overflow-hidden`}
              style={{ width }}
              onClick={() => setSelected(i)}
            >
              {selected === i && (
                <div className="absolute inset-0 bg-gray-200 p-6 flex flex-col">
                  <button
                    className="self-start text-xl font-bold text-gray-800 hover:text-gray-600 mb-4"
                    onClick={(e) => { e.stopPropagation(); setSelected(null)}}
                  >
                    ×
                  </button>
                  <h2 className="text-2xl font-bold mb-2">
                    Product {i + 1}
                  </h2>
                  <p className="text-gray-700 flex-1 overflow-auto">
                    Details for product {i + 1}. Swap in your images, pricing, description, etc.
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
