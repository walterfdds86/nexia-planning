import type { Metadata } from 'next'
import AnnouncementBar from '@/components/landing/AnnouncementBar'
import HeroSection from '@/components/landing/HeroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import JourneySection from '@/components/landing/JourneySection'
import SystemShowcaseSection from '@/components/landing/SystemShowcaseSection'
import DeliverablesSection from '@/components/landing/DeliverablesSection'
import WhiteLabelSection from '@/components/landing/WhiteLabelSection'
import NoCodeSection from '@/components/landing/NoCodeSection'
import EconomicsSection from '@/components/landing/EconomicsSection'
import VsChatGPTSection from '@/components/landing/VsChatGPTSection'
import ForWhoSection from '@/components/landing/ForWhoSection'
import PricingSection from '@/components/landing/PricingSection'
import SocialProofSection from '@/components/landing/SocialProofSection'
import FAQSection from '@/components/landing/FAQSection'
import FinalCtaSection from '@/components/landing/FinalCtaSection'

const DEMO_URL = 'https://nexia-planning.vercel.app/'
// TODO: Replace with payment link (Hotmart, Stripe etc.) when available
const PURCHASE_URL =
  'https://wa.me/5561999354363?text=Ol%C3%A1%2C%20quero%20implementar%20o%20Nexia%20Planning%20para%20meus%20alunos'

export const metadata: Metadata = {
  title: 'Nexia Planning — Dossiês Estratégicos com IA para Mentores e Coaches',
  description:
    'Gere dossiês estratégicos personalizados para cada aluno em minutos, com a sua metodologia e a sua marca. White-label 100%. Sem código.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexia Planning — Dossiês Estratégicos com IA',
    description: 'De 3 horas por aluno para 5 minutos. Sua metodologia. Sua marca.',
    url: '/',
    siteName: 'Nexia Planning',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Nexia Planning — Dossiês Estratégicos com IA em 5 minutos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexia Planning — Dossiês Estratégicos com IA',
    description: 'De 3 horas por aluno para 5 minutos. Sua metodologia. Sua marca.',
    images: ['/api/og'],
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#001F35] font-sans antialiased">
      <AnnouncementBar />
      <HeroSection demoUrl={DEMO_URL} />
      <ProblemSection />
      <HowItWorksSection />
      <JourneySection />
      <SystemShowcaseSection />
      <DeliverablesSection />
      <WhiteLabelSection />
      <NoCodeSection />
      <EconomicsSection />
      <VsChatGPTSection />
      <ForWhoSection />
      <PricingSection purchaseUrl={PURCHASE_URL} demoUrl={DEMO_URL} />
      <SocialProofSection />
      <FAQSection />
      <FinalCtaSection demoUrl={DEMO_URL} />

      <footer className="bg-[#001527] border-t border-zinc-900 px-6 py-8 text-center">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Nexia Planning — NexIA Lab ·{' '}
          <a href={DEMO_URL} className="text-[#C9A84C] hover:underline">
            Acessar sistema
          </a>
        </p>
      </footer>
    </main>
  )
}
