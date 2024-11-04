import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Campeã Mudanças - Mudanças Residenciais e Comerciais em Fortaleza',
  description: 'Sua mudança em boas mãos em Fortaleza. Oferecemos serviços de mudanças residenciais e comerciais com segurança e eficiência.',
  keywords: 'mudanças, Fortaleza, mudanças residenciais, mudanças comerciais, transporte, serviços de mudança',
  
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}