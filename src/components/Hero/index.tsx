import { URL_WHATSAPP_ORCAMENTO } from '@/constants'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="inicio" className="pt-32 px-6" aria-labelledby="hero-title">
            <div className="max-w-screen-xl mx-auto text-center">
                <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Mudanças com Segurança e Profissionalismo
                </h1>
                <p className="text-gray-600 text-lg md:text-xl mb-8">
                    Sua mudança em boas mãos, do início ao fim.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <Link 
                        href="#servicos" 
                        className="bg-primary text-white px-8 py-3 rounded-md hover:bg-green-800 transition-colors"
                        aria-label="Ver nossos serviços"
                    >
                        Nossos Serviços
                    </Link>
                    <Link 
                        href={URL_WHATSAPP_ORCAMENTO} 
                        target="_blank" 
                        className="border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors"
                        aria-label="Solicitar orçamento via WhatsApp"
                    >
                        Solicitar Orçamento
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
