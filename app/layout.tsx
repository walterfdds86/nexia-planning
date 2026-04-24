import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://launchos-deploy.vercel.app'),
  title: {
    default: 'Nexia Planning — Dossiês Estratégicos com IA',
    template: '%s | Nexia Planning',
  },
  description: 'Gere dossiês estratégicos personalizados para cada aluno em minutos, com a sua metodologia e a sua marca. White-label 100%. Sem código.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
