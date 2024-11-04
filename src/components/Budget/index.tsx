import { URL_WHATSAPP_ORCAMENTO } from '@/constants'
import Link from 'next/link'

const Budget = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md service-card" role="region" aria-labelledby="budget-heading">
            <div className='relative w-full'>
                <div className="rounded-xl sm:py-6 md:px-6 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10">
                    <div className="flex flex-col text-left w-full sm:w-7/12 lg:w-8/12 mb-6 sm:mb-0">
                        <h3 id="budget-heading" className="text-xl font-semibold mb-2">
                            Precisa se mudar?
                        </h3>
                        <p className="text-gray-600">Clique no botão ao lado para solicitar um orçamento.</p>
                    </div>
                    <div className="w-full sm:w-5/12 lg:w-4/12 flex justify-center">
                        <Link 
                            title="Solicitar orçamento via WhatsApp"
                            href={URL_WHATSAPP_ORCAMENTO}
                            className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-primary hover:bg-green-600 transition-all outline-none"
                            aria-label="Solicitar orçamento via WhatsApp"
                        >
                            Solicitar Orçamento
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget
