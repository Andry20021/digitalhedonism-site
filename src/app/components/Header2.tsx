'use client'

interface Header2Props {
  className?: string
}

export default function Header2({
  className = 'mb-8 mt-12 w-screen overflow-hidden',
}: Header2Props) {
  const poem =
    "In the silent glow of dawn the city wakes • " +
    "Whispers trace the hollow streets • " +
    "Dreams unfurl on gentle breeze • " +
    "Hearts awaken, ever free • "

  return (
    <>
      <header className={className}>
        <div
          className="inline-block whitespace-nowrap"
          style={{ paddingLeft: '100%' }}
        >
          <span className="inline-block text-black text-7xl sm:text-8xl md:text-[5rem] font-bold uppercase marquee">
            {poem}
          </span>
        </div>
      </header>

      <style jsx>{`
        .marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  )
}
