'use client'

import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const links = [
    'About',
    'Careers',
    'Stockists',
    'Shipping & Returns',
    'Contact & Legal',
  ]

  return (
    <footer className="w-full mt-12 py-8 bg-white flex items-center justify-between px-8">
      <nav className="space-x-6">
        {links.map((label) => (
          <Link
            key={label}
            href="#"
            className="text-sm font-medium text-black hover:underline"
          >
            <span className="dangle">{label}</span>
          </Link>
        ))}
      </nav>

      <div className="flex-1 flex justify-center">
        <div className="transform -rotate-12 text-center">
          <p className="italic text-red-500 text-sm">
            “Pessimism of the spirit; optimism of the will.”
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Antonio Gramsci (1891-1937)
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        ©032c System GmbH
      </div>

      <style jsx>{`
        .dangle {
          display: inline-block;
          transform-origin: top center;
          transition: transform 0.3s ease-in-out;
        }
        .dangle:hover {
          transform: rotate(10deg);
        }
      `}</style>
    </footer>
  )
}
