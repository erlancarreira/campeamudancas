import Image from 'next/image'
import campeamBackground from '@/assets/images/ricky_teixeira_mudanca_campea_mudancas.jpg'

const About = () => {
    return (
        <section id="quem-somos" className="py-16 px-6 bg-white" aria-labelledby="about-title">
            <div className="max-w-screen-xl mx-auto">
                <h2 id="about-title" className="text-3xl font-bold text-center text-primary mb-8">Quem Somos</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-auto aspect-video rounded-lg overflow-hidden">
                        <Image 
                            src={campeamBackground} 
                            alt="Imagem de fundo representando a equipe da Campeã Mudanças, destacando a experiência e profissionalismo."
                          
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                objectPosition: '100% 53%',
                                width: '100%',  // Define a largura para 100% do contêiner
                                height: '100%', // Define a altura para 100% do contêiner
                                position: 'absolute', // Para preencher o contêiner
                            }}
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Com mais de 25 anos de experiência, a Campeã Mudanças se destaca no mercado de transportes e mudanças residenciais e comerciais.
                        </p>
                        <p className="text-gray-600">
                            Nossa equipe é formada por profissionais altamente treinados e comprometidos com a segurança e satisfação dos nossos clientes.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Profissionais experientes e treinados</li>
                            <li>Equipamentos modernos e seguros</li>
                            <li>Pontualidade e comprometimento</li>
                            <li>Atendimento personalizado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
