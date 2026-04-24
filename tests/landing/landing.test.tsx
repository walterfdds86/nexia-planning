import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CtaButton from '@/components/landing/CtaButton'
import AnnouncementBar from '@/components/landing/AnnouncementBar'
import HeroSection from '@/components/landing/HeroSection'

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
