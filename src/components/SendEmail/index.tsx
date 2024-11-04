'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
    name: string
    email: string
    phone?: string
    message: string
}

const SendEmail = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const [status, setStatus] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('Enviando...')

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('Mensagem enviada com sucesso!')
                setFormData({ name: '', email: '', phone: '', message: '' }) // Limpa o formulário
            } else {
                setStatus('Erro ao enviar a mensagem. Tente novamente.')
            }
        } catch (error) {
            console.log(error, 'ERROR')
            setStatus('Erro ao enviar a mensagem. Tente novamente.')
        }
    }

    return (
        <section id="contato" className="py-16 px-6 bg-gray-50 my-2" aria-labelledby="contato-header">
            <div className="max-w-screen-xl mx-auto">
                <h1 id="contato-header" className="text-3xl font-bold text-center text-primary mb-8">Entre em Contato</h1>

                <div className="rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full shadow-lg bg-white">
                    
                    <form className="space-y-4" onSubmit={handleSubmit} aria-label="Formulário de contato">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 text-base"
                                required
                                aria-required="true"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 text-base"
                                required
                                aria-required="true"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 text-base"
                                placeholder="Digite seu telefone (opcional)"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-4 text-base"
                                required
                                aria-required="true"
                                placeholder="Digite sua mensagem"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors text-base font-medium"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                    {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
                </div>
            </div>
        </section>
    )
}

export default SendEmail
