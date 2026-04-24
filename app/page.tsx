import type { Metadata } from 'next'
import AnnouncementBar from '@/components/landing/AnnouncementBar'
import HeroSection from '@/components/landing/HeroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import SystemShowcaseSection from '@/components/landing/SystemShowcaseSection'
import DeliverablesSection from '@/components/landing/DeliverablesSection'
import WhiteLabelSection from '@/components/landing/WhiteLabelSection'
import NoCodeSection from '@/components/landing/NoCodeSection'
import EconomicsSection from '@/components/landing/EconomicsSection'
import ForWhoSection from '@/components/landing/ForWhoSection'
import SocialProofSection from '@/components/landing/SocialProofSection'
import FinalCtaSection from '@/components/landing/FinalCtaSection'

const DEMO_URL = 'https://nexia-planning.vercel.app/'

export const metadata: Metadata = {
  title: 'Nexia Planning — Dossiês Estratégicos com IA para Mentores e Coaches',
  description:
    'Gere dossiês estratégicos personalizados para cada aluno em minutos, com a sua metodologia e a sua marca. White-label 100%. Sem código.',
  openGraph: {
    title: 'Nexia Planning — Dossiês Estratégicos com IA',
    description: 'De 3 horas por aluno para 5 minutos. Sua metodologia. Sua marca.',
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0f0f13] font-sans antialiased">
      <AnnouncementBar />
      <HeroSection demoUrl={DEMO_URL} />
      <ProblemSection />
      <HowItWorksSection />
      <SystemShowcaseSection />
      <DeliverablesSection />
      <WhiteLabelSection />
      <NoCodeSection />
      <EconomicsSection />
      <ForWhoSection />
      <SocialProofSection />
      <FinalCtaSection demoUrl={DEMO_URL} />

      <footer className="bg-[#0a0a0f] border-t border-zinc-900 px-6 py-8 text-center">
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
