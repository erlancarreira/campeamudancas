'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import campea_logo from '@/assets/images/campea_mudancas_logo.png'
import { URL_WHATSAPP_ORCAMENTO } from '@/constants'
import menu, { IMenu } from '@/components/Menu'

const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false)

  const colorText = isScrolled ? 'text-white' : 'text-primary'

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    // Define a altura do seu menu (ajuste conforme necessário)
    const menuHeight = 83.16 // Exemplo de altura do menu
    const targetElement = document.getElementById(id)
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - menuHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 w-full z-30 header-transition ${isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'}`}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/" aria-label="Página Inicial" className={`font-bold text-xl text-center ${colorText}`}>
              <Image 
                src={campea_logo} 
                alt="Campeã Mudanças Logo Header"
                
                style={{height: 'auto', width: '60px'}}
                quality={100}
              />
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            {menu.map((item: IMenu) => (
              <li key={item.name}>
                <Link 
                  href={item.url} 
                  className={`nav-link px-4 py-2 mx-2 ${colorText} transition-colors`} 
                  aria-label={item.name}
                  onClick={(e) => handleScrollTo(e, item.id)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link 
              href={URL_WHATSAPP_ORCAMENTO} 
              target="_blank" 
              className="px-6 py-2 bg-primary border-2 border-white text-white rounded-md hover:bg-white hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Solicitar orçamento via WhatsApp"
            >
              Orçamento
            </Link>
          </div>
        </nav>
      </header>
      <div style={{height: '83px'}}></div>
    </>
  )
}

export default Header
