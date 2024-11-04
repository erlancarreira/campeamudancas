// app/api/sendEmail/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface EmailRequest {
    name: string
    email: string
    message: string
}

export async function POST(req: Request) {

    const { EMAIL_USER, EMAIL_PASS } = process.env

    if (!EMAIL_USER || !EMAIL_PASS) {
        return NextResponse.json({ error: 'Configurações de e-mail não estão definidas.' }, { status: 500 })
    }

    const { name, email, message }: EmailRequest = await req.json()

    // Configurar o transportador
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
            
        },
    })

    // Configurar os dados do e-mail
    const mailOptions = {
        from: email, // Remetente
        to: EMAIL_USER, // Destinatário
        subject: `Mensagem de ${name}`,
        text: message,
        html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`,
    }

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 })
    } catch (error) {
        console.log(error, 'error')
        return NextResponse.json({ error: 'Erro ao enviar o e-mail.' }, { status: 500 })
    }
}
