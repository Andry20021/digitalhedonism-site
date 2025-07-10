'use client'

interface HeaderProps {
  poem: string

  className?: string
}

export default function Header({
  poem,
  className = 'mb-16 w-screen -mx-8 overflow-hidden whitespace-nowrap',
}: HeaderProps) {
  return (
    <>
      <header className={className}>
        <div className="inline-block text-7xl sm:text-8xl md:text-[6rem] font-extrabold uppercase text-black marquee">
          {poem}
        </div>
      </header>
      <style jsx>{`
        .marquee {
          padding-left: 100%;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  )
}
