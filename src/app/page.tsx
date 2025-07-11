'use client'

import React, { useState } from 'react'
import Header from './components/Header'
import Header2 from './components/Header2'
import ProductFrame from './components/ProductFrame'
import Footer from './components/Footer'

export default function Home() {
  const [useAltHeader, setUseAltHeader] = useState(false)

  const colors = [
    'bg-red-400','bg-blue-400','bg-green-400','bg-yellow-400',
    'bg-purple-400','bg-pink-400','bg-indigo-400','bg-orange-400',
    'bg-gray-400','bg-teal-400',
  ]

  return (
    <>
      <div className="w-full flex justify-center pt-8 mb-6">
        <div
          className="w-16 h-16 bg-blue-500 cursor-pointer"
          onClick={() => setUseAltHeader((prev) => !prev)}
        />
      </div>

      {useAltHeader ? <Header2 /> : <Header />}

      <div className="flex flex-col items-start bg-white px-8 pt-4 pb-15">
        <div className="w-full flex justify-center">
          <ProductFrame items={colors} />
        </div>
      </div>

      <Footer />
    </>
  )
}
