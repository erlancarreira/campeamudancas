'use client'
import Link from 'next/link'
import { Facebook, Instagram, Whatsapp } from '@/components/SocialLinks'
import Contact from '../Contact'
import { URL_FACEBOOK, URL_INSTAGRAM, URL_WHATSAPP_ORCAMENTO } from '@/constants'

const Footer = () => {

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

    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Campeã Mudanças</h3>
                        <Contact />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Início'    , id: 'inicio' },
                                { name: 'Quem Somos', id: 'quem-somos' },
                                { name: 'Serviços'  , id: 'servicos' }
                            ].map((item) => (
                                <li key={item.id}>
                                    <Link 
                                        href={`#${item.id}`} 
                                        className="text-gray-400 hover:text-white"
                                        onClick={(e) => handleScrollTo(e, item.id)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
                        <div className="flex space-x-4">
                            <Link href={URL_WHATSAPP_ORCAMENTO} aria-label="Conversar no WhatsApp com Campeã Mudanças" target="_blank">
                                <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md">
                                    <Whatsapp className="h-6 w-6 text-primary" />
                                </div>
                            </Link>
                            <Link href={URL_FACEBOOK} aria-label="Visitar nossa página no Facebook" target="_blank">
                                <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md">
                                    <Facebook className="h-6 w-6 text-primary" />
                                </div>
                            </Link>
                            <Link href={URL_INSTAGRAM} aria-label="Seguir-nos no Instagram" target="_blank">
                                <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md">
                                    <Instagram className="h-6 w-6 text-primary" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Campeã Mudanças. Todos os direitos reservados.</p>
                    <p >Desenvolvido por Erlan Carreira.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
