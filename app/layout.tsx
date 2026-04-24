import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexia Planning',
  description: 'Dossiês estratégicos com IA para mentores e coaches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
