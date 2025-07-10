'use client'

import Header from './components/Header'
import ProductFrame from './components/ProductFrame'
import Footer from './components/Footer'

export default function Home() {
  const colors = [
    'bg-red-400','bg-blue-400','bg-green-400','bg-yellow-400',
    'bg-purple-400','bg-pink-400','bg-indigo-400','bg-orange-400',
    'bg-gray-400','bg-teal-400',
  ]

  const poem =
    "In the silent glow of dawn the city wakes • " +
    "Whispers trace the hollow streets • " +
    "Dreams unfurl on gentle breeze • " +
    "Hearts awaken, ever free •"

  return (
    <main className="h-screen flex flex-col overflow-x-hidden lg:overflow-y-hidden">
      <div className="w-full flex justify-center pt-8 mb-6">
        <div className="w-16 h-16 bg-blue-500" />
      </div>

      <Header poem={poem} />

      <div className="flex-grow flex flex-col items-start bg-white px-8 pt-4 pb-6 lg:pb-4">
        <div className="flex-grow w-full flex justify-center">
          <ProductFrame items={colors} />
        </div>
      </div>

      <Footer />
    </main>
  )
}