import React from 'react'

export interface ITestimonial { 
    name: string 
    rating: number 
    comment: string 
}

const TestimonialCard = ({ name, rating, comment }: ITestimonial) => (
    <div className="testimonial-card bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col h-full">
        <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-200 rounded-full flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-6 0-10 3-10 6v2h20v-2c0-3-4-6-10-6z" />
                </svg>
            </div>
            <div className="ml-4 overflow-hidden">
                <h4 className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap" aria-label={`Depoimento de ${name}`}>
                    {name}
                </h4>
                <div className="flex text-yellow-400" aria-label={`Classificação: ${rating} estrelas`}>
                    {'★'.repeat(rating).padEnd(5, '☆')}
                </div>
            </div>
        </div>
        <p className="text-gray-600 line-clamp-4 flex-grow" aria-label={comment}>
            {comment}
            {comment.length > 150 && <span className="text-primary">...</span>}
        </p>
    </div>
)

const Testimonials = () => {
    const testimonials = [
        {
            name: "Paulo Guimarães",
            rating: 5,
            comment: "Empresa muito competente, ótimo atendimento, desde a contratação, empacotamento da mudança e entrega da mesma. Funcionários competentes e focados na satisfação do cliente, se preocupando em detalhes no manuseio tanto na retirada quanto na entrega. Mesmo sendo por aproveitamento, minha mudança de Fortaleza para Porto Alegre durou somente 9 dias. Com certeza farei negócios novamente com eles. Indico pelo compromisso, seriedade e pontualidade."
        },
        {
            name: "Samara Myria",
            rating: 5,
            comment: "Obrigada a todos que ajudaram com que a minhas coisas fossem bem embaladas e entregue. Desde a pessoa que me atendeu pelo whatsapp, por telefone, os rapazes que embalaram e o sr. Francisco que fez a entrega no endereço final. Obrigada pela atenção, cuidado e prazo cumprido."
        },
        {
            name: "Fernanda Branco",
            rating: 5,
            comment: "A minha experiência com a Campeã Mudanças foi Excelente. A Neurimar é muito profissional e mais importante, nos compreende no momento de estresse e ajuda durante todo o processo. A equipe dela é muito atenciosa e competente, desde a embalagem até a entrega. O prazo de entrega da mudança foi muito rápido, e não tive nenhuma perda. Agradeço a Campeã Mudanças, na pessoa de Neurimar."
        },
        {
            name: "Bruno Agra",
            rating: 5,
            comment: "Empresa muito profissional e responsável, realizam um trabalho impecável e não economizam em nada para embalar bem os móveis detalhadamente e organizá-los com numeração e inventário, além de um preço muito bom. Dona Neurimar muito atenciosa e paciente. Estão de parabéns!"
        },
        {
            name: "Dhomynick Luna Silva Mello Maia",
            rating: 5,
            comment: "Foi espetacular. Contato, as pessoas que fazem o operacional, foi tudo espetacular. Os meninos que estão ligados diretamente na mudança são grandes pessoas, ótimos profissionais, comprometidos, cuidadosos. Só temos a agradecer pelo envolvimento de todos na nossa mudança. Gratidão."
        },
        {
            name: "Josy Freire",
            rating: 5,
            comment: "Muito bem atendida desde o primeiro contato lá em Fortaleza, uma empresa ímpar, super confiável, atendimento excelente, os meninos que fazem a coleta e a entrega super educados, cuidadosos com as coisas, embalagem perfeita, nota 10000, para campeã mudanças, obrigada por tudo que Deus abençoe sempre o trabalho de vocês 🙌🙏"
        },
    ]

    return (
        <section id="avaliacoes" className="py-16 px-6 bg-white" aria-labelledby="avaliacoes-header">
            <div className="max-w-screen-xl mx-auto">
                <h2 id="avaliacoes-header" className="text-3xl font-bold text-center text-primary mb-8">O que dizem nossos clientes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
