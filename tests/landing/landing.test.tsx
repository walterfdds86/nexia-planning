import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CtaButton from '@/components/landing/CtaButton'
import AnnouncementBar from '@/components/landing/AnnouncementBar'
import HeroSection from '@/components/landing/HeroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import DeliverablesSection from '@/components/landing/DeliverablesSection'
import WhiteLabelSection from '@/components/landing/WhiteLabelSection'
import NoCodeSection from '@/components/landing/NoCodeSection'

const DEMO_URL = 'https://nexia-planning.vercel.app'

describe('CtaButton', () => {
  it('renders with correct href and label', () => {
    render(<CtaButton href={DEMO_URL} label="Quero testar gratuitamente" />)
    const link = screen.getByRole('link', { name: /quero testar gratuitamente/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', DEMO_URL)
  })
})

describe('AnnouncementBar', () => {
  it('renders demo offer text', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText(/acesso demo gratuito/i)).toBeInTheDocument()
  })
})

describe('HeroSection', () => {
  it('renders headline and CTA link', () => {
    render(<HeroSection demoUrl={DEMO_URL} />)
    expect(screen.getByText(/dossiê estratégico/i)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: /quero testar gratuitamente/i })
    expect(cta).toHaveAttribute('href', DEMO_URL)
  })

  it('renders the narrative hook', () => {
    render(<HeroSection demoUrl={DEMO_URL} />)
    expect(screen.getByText(/era 23h/i)).toBeInTheDocument()
  })

  it('renders trust signal', () => {
    render(<HeroSection demoUrl={DEMO_URL} />)
    expect(screen.getByText(/sem cartão de crédito/i)).toBeInTheDocument()
  })
})

describe('ProblemSection', () => {
  it('renders the contrast data', () => {
    render(<ProblemSection />)
    expect(screen.getAllByText(/3 horas/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/5 min/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/com a sua metodologia/i)).toBeInTheDocument()
  })
})

describe('HowItWorksSection', () => {
  it('renders all 3 steps', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText(/cadastra o aluno/i)).toBeInTheDocument()
    expect(screen.getByText(/clica em gerar/i)).toBeInTheDocument()
    expect(screen.getByText(/entrega em pdf/i)).toBeInTheDocument()
  })
})

describe('DeliverablesSection', () => {
  it('renders deliverable titles and correct count', () => {
    render(<DeliverablesSection />)
    expect(screen.getByText(/posicionamento estratégico/i)).toBeInTheDocument()
    expect(screen.getByText(/calendário de conteúdo/i)).toBeInTheDocument()
    expect(screen.getByText(/cálculo financeiro reverso/i)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(11)
  })
})

describe('WhiteLabelSection', () => {
  it('renders white-label key message', () => {
    render(<WhiteLabelSection />)
    expect(screen.getByText(/aluno nunca sabe/i)).toBeInTheDocument()
    expect(screen.getByText(/500K caracteres/i)).toBeInTheDocument()
  })
})

describe('NoCodeSection', () => {
  it('renders no-code message', () => {
    render(<NoCodeSection />)
    expect(screen.getByText(/não precisa saber programar/i)).toBeInTheDocument()
    expect(screen.getByText(/muda a cor principal/i)).toBeInTheDocument()
  })
})

import EconomicsSection from '@/components/landing/EconomicsSection'
import ForWhoSection from '@/components/landing/ForWhoSection'

describe('EconomicsSection', () => {
  it('renders cost range and ROI', () => {
    render(<EconomicsSection />)
    expect(screen.getAllByText(/R\$0,50/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/R\$2,00/i)[0]).toBeInTheDocument()
  })
})

describe('ForWhoSection', () => {
  it('renders yes and no qualifiers', () => {
    render(<ForWhoSection />)
    expect(screen.getByText(/mentores com alunos/i)).toBeInTheDocument()
    expect(screen.getByText(/não tem alunos/i)).toBeInTheDocument()
  })
})

import SocialProofSection from '@/components/landing/SocialProofSection'
import FinalCtaSection from '@/components/landing/FinalCtaSection'

describe('SocialProofSection', () => {
  it('renders proof section heading', () => {
    render(<SocialProofSection />)
    expect(screen.getByText(/veja na prática/i)).toBeInTheDocument()
  })
})

describe('FinalCtaSection', () => {
  it('renders CTA link to demo', () => {
    render(<FinalCtaSection demoUrl={DEMO_URL} />)
    const link = screen.getByRole('link', { name: /quero começar agora/i })
    expect(link).toHaveAttribute('href', DEMO_URL)
  })

  it('renders trust signals', () => {
    render(<FinalCtaSection demoUrl={DEMO_URL} />)
    expect(screen.getByText(/sem cartão de crédito/i)).toBeInTheDocument()
  })
})
