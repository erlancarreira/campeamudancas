import Link from 'next/link'

const MobileNav = () => {
  return (
    <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 bg-primary mobile-nav">
      <div className="px-4 py-2">
        <ul className="flex justify-around items-center text-white">
          {[
            { name: 'Início'    , id: 'inicio'    , icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            { name: 'Sobre'     , id: 'quem-somos', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
            { name: 'Serviços'  , id: 'servicos'  , icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
            { name: 'Avaliações', id: 'avaliacoes', icon: 'M5 13l4 4L19 7' },
          ].map((item) => (
            <li key={item.name} className="flex flex-col items-center">
              <Link href={`#${item.id}`} className="flex flex-col items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav