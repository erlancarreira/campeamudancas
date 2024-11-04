import { IServiceCard } from "@/interfaces/IServiceCard"
import Budget from "../Budget"

const ServiceCard = ({ icon, title, description }: IServiceCard) => (
    <div className="service-card bg-white p-6 rounded-lg shadow-md">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
)

const services = [
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Mudança Residencial",
        description: "Realizamos mudanças residenciais com todo cuidado e atenção que seus pertences merecem."
    },
    {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        title: "Mudança Comercial",
        description: "Especialistas em mudanças empresariais, com planejamento e execução profissional."
    },
    {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        title: "Embalagem",
        description: "Serviço completo de embalagem com materiais de qualidade e técnicas apropriadas."
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Transporte de Cofres",
        description: "Equipe especializada e equipamentos adequados para o transporte seguro de cofres."
    },
    {
        icon: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z",
        title: "Içamento",
        description: "Serviço de içamento para movimentação vertical de móveis e objetos pesados."
    },
    {
        icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
        title: "Transporte de Grandes Volumes",
        description: "Soluções personalizadas para o transporte de cargas volumosas e especiais."
    }
] as IServiceCard[]

const Services = () => {
    return (
        <section id="servicos" className="py-16 px-6 bg-gray-50" aria-labelledby="services-title">
            <div className="max-w-screen-xl mx-auto">
                <h2 id="services-title" className="text-3xl font-bold text-center text-primary mb-8">Nossos Serviços</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <Budget />
            </div>
        </section>
    )
}

export default Services
