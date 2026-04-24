import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CtaButton from '@/components/landing/CtaButton'

const DEMO_URL = 'https://nexia-planning.vercel.app'

describe('CtaButton', () => {
  it('renders with correct href and label', () => {
    render(<CtaButton href={DEMO_URL} label="Quero testar gratuitamente" />)
    const link = screen.getByRole('link', { name: /quero testar gratuitamente/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', DEMO_URL)
  })
})
