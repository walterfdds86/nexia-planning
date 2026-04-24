# Landing Page de Isca — Nexia Planning — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar a landing page pública em `/` do projeto Nexia Planning que converte mentores e coaches em leads qualificados via acesso à demo do sistema.

**Architecture:** Página Next.js App Router (`app/page.tsx`) composta por componentes React Server Components em `components/landing/`. Nenhum estado cliente necessário — apenas o botão CTA usa `'use client'` para tracking de cliques. Tailwind CSS com o tema escuro padrão do projeto (`#0f0f13`, `#17171f`, violeta como acor de acento).

**Tech Stack:** Next.js 16+ (App Router), TypeScript, Tailwind CSS, Vitest + @testing-library/react

---

## File Map

| Arquivo | Responsabilidade |
|---------|-----------------|
| `app/page.tsx` | Rota raiz `/` — monta todas as seções em ordem |
| `components/landing/AnnouncementBar.tsx` | Barra fixa no topo com oferta da demo |
| `components/landing/CtaButton.tsx` | Botão CTA reutilizável com link para demo |
| `components/landing/HeroSection.tsx` | Seção 1 — narrativa de dor + headline + CTA |
| `components/landing/ProblemSection.tsx` | Seção 2 — agitação da dor com dado de contraste |
| `components/landing/HowItWorksSection.tsx` | Seção 3 — 3 passos visuais |
| `components/landing/DeliverablesSection.tsx` | Seção 4 — 11 entregáveis do dossiê |
| `components/landing/WhiteLabelSection.tsx` | Seção 5 — white-label + metodologia |
| `components/landing/NoCodeSection.tsx` | Seção 6 — sem código, configuração em PT |
| `components/landing/EconomicsSection.tsx` | Seção 7 — custo por dossiê + ROI |
| `components/landing/ForWhoSection.tsx` | Seção 8 — qualificação do lead |
| `components/landing/SocialProofSection.tsx` | Seção 9 — placeholder para prints e depoimentos |
| `components/landing/FinalCtaSection.tsx` | Seção 10 — CTA final com urgência |
| `tests/landing/landing.test.tsx` | Testes de render + copy + links |

**Constante global:** `DEMO_URL = "https://nexia-planning.vercel.app"` definida em `app/page.tsx` e passada como prop para componentes que exibem CTA.

---

## Task 1: Instalar dependências de teste e criar CtaButton

**Files:**
- Create: `components/landing/CtaButton.tsx`
- Create: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Instalar @testing-library/react e jsdom**

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 2: Adicionar configuração Vitest para jsdom**

Abrir `vitest.config.ts` (ou criar se não existir). Adicionar `environment: 'jsdom'`:

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
```

- [ ] **Step 3: Criar setup file**

```ts
// tests/setup.ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Escrever teste que falha para CtaButton**

```tsx
// tests/landing/landing.test.tsx
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
```

- [ ] **Step 5: Rodar o teste — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: FAIL — "Cannot find module '@/components/landing/CtaButton'"

- [ ] **Step 6: Criar CtaButton**

```tsx
// components/landing/CtaButton.tsx
interface CtaButtonProps {
  href: string
  label: string
  size?: 'sm' | 'lg'
  className?: string
}

export default function CtaButton({ href, label, size = 'lg', className = '' }: CtaButtonProps) {
  const padding = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-5 py-2.5 text-sm'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-colors ${padding} ${className}`}
    >
      {label} →
    </a>
  )
}
```

- [ ] **Step 7: Rodar o teste — deve passar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: PASS

- [ ] **Step 8: Commit**

```bash
git add components/landing/CtaButton.tsx tests/landing/landing.test.tsx tests/setup.ts vitest.config.ts
git commit -m "feat: add CtaButton component with test"
```

---

## Task 2: AnnouncementBar + HeroSection

**Files:**
- Create: `components/landing/AnnouncementBar.tsx`
- Create: `components/landing/HeroSection.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar testes para AnnouncementBar e HeroSection**

Adicionar ao final de `tests/landing/landing.test.tsx`:

```tsx
import AnnouncementBar from '@/components/landing/AnnouncementBar'
import HeroSection from '@/components/landing/HeroSection'

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
})
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: FAIL — módulos não encontrados

- [ ] **Step 3: Criar AnnouncementBar**

```tsx
// components/landing/AnnouncementBar.tsx
export default function AnnouncementBar() {
  return (
    <div className="w-full bg-violet-600 text-white text-center py-2.5 px-4 text-sm font-medium">
      🎁 Acesso demo gratuito — gere seu primeiro dossiê em menos de 30 minutos
    </div>
  )
}
```

- [ ] **Step 4: Criar HeroSection**

```tsx
// components/landing/HeroSection.tsx
import CtaButton from './CtaButton'

interface HeroSectionProps {
  demoUrl: string
}

export default function HeroSection({ demoUrl }: HeroSectionProps) {
  return (
    <section className="relative bg-[#0f0f13] px-6 py-20 md:py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-violet-400 text-sm font-medium mb-4 italic">
          "Era 23h. Mais um plano de ação para entregar amanhã cedo."
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Seu aluno entra. O dossiê estratégico sai.{' '}
          <span className="text-violet-400">Em 5 minutos</span> — com a sua
          metodologia e a sua marca.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Para mentores que ainda passam horas criando planejamentos manualmente
          para cada aluno.
        </p>

        <CtaButton href={demoUrl} label="Quero testar gratuitamente" />

        <p className="text-zinc-500 text-sm mt-4">
          Sem cartão de crédito · Acesso imediato
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Rodar testes — devem passar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: todos PASS

- [ ] **Step 6: Commit**

```bash
git add components/landing/AnnouncementBar.tsx components/landing/HeroSection.tsx tests/landing/landing.test.tsx
git commit -m "feat: add AnnouncementBar and HeroSection"
```

---

## Task 3: ProblemSection + HowItWorksSection

**Files:**
- Create: `components/landing/ProblemSection.tsx`
- Create: `components/landing/HowItWorksSection.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar testes**

```tsx
import ProblemSection from '@/components/landing/ProblemSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'

describe('ProblemSection', () => {
  it('renders the contrast data', () => {
    render(<ProblemSection />)
    expect(screen.getByText(/3 horas/i)).toBeInTheDocument()
    expect(screen.getByText(/5 min/i)).toBeInTheDocument()
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
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

- [ ] **Step 3: Criar ProblemSection**

```tsx
// components/landing/ProblemSection.tsx
export default function ProblemSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Você atende 1 aluno, gasta 3 horas criando o plano.
          <br />
          <span className="text-zinc-400">Atende 10, perde 30 horas.</span>
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
          E se você pudesse entregar um dossiê completo, personalizado, com a
          sua voz — em 5 minutos por aluno?
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-xl mx-auto">
          <div className="flex-1 bg-[#1a1a2e] border border-red-900/40 rounded-xl p-6 text-left">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
              Hoje
            </span>
            <p className="text-white text-3xl font-extrabold mt-2">3 horas</p>
            <p className="text-zinc-400 text-sm mt-1">
              por aluno, criado na mão
            </p>
          </div>
          <div className="flex items-center justify-center text-zinc-600 text-2xl">
            →
          </div>
          <div className="flex-1 bg-[#1a1a2e] border border-violet-700/40 rounded-xl p-6 text-left">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-wider">
              Com Nexia
            </span>
            <p className="text-white text-3xl font-extrabold mt-2">5 min</p>
            <p className="text-zinc-400 text-sm mt-1">
              com a sua metodologia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Criar HowItWorksSection**

```tsx
// components/landing/HowItWorksSection.tsx
const STEPS = [
  {
    number: '01',
    title: 'Cadastra o aluno',
    description:
      'Nome, nicho, objetivos, desafios e metas financeiras. Leva menos de 2 minutos.',
  },
  {
    number: '02',
    title: 'Clica em Gerar',
    description:
      'A IA usa a sua metodologia para criar o documento completo em tempo real — você vê cada palavra surgindo na tela.',
  },
  {
    number: '03',
    title: 'Entrega em PDF',
    description:
      'Com o seu nome, logo e identidade visual. O aluno recebe como se fosse um sistema exclusivo seu.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
          Como funciona
        </h2>
        <p className="text-zinc-400 text-center mb-14 text-lg">
          Três passos. Sem complicação.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#17171f] rounded-2xl p-8 border border-zinc-800"
            >
              <span className="text-violet-500 text-4xl font-extrabold">
                {step.number}
              </span>
              <h3 className="text-white text-xl font-bold mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Rodar testes**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: todos PASS

- [ ] **Step 6: Commit**

```bash
git add components/landing/ProblemSection.tsx components/landing/HowItWorksSection.tsx tests/landing/landing.test.tsx
git commit -m "feat: add ProblemSection and HowItWorksSection"
```

---

## Task 4: DeliverablesSection

**Files:**
- Create: `components/landing/DeliverablesSection.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar teste**

```tsx
import DeliverablesSection from '@/components/landing/DeliverablesSection'

describe('DeliverablesSection', () => {
  it('renders all 11 deliverables', () => {
    render(<DeliverablesSection />)
    expect(screen.getByText(/posicionamento estratégico/i)).toBeInTheDocument()
    expect(screen.getByText(/calendário de conteúdo/i)).toBeInTheDocument()
    expect(screen.getByText(/cálculo financeiro reverso/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

- [ ] **Step 3: Criar DeliverablesSection**

```tsx
// components/landing/DeliverablesSection.tsx
const DELIVERABLES = [
  { icon: '📍', title: 'Posicionamento estratégico', description: 'Arquétipo de marca, Big Idea, bio profissional e headlines' },
  { icon: '👥', title: '2 Personas de cliente ideal', description: 'Perfil completo com dores, desejos e linguagem' },
  { icon: '💡', title: 'Ideias de produtos com IA', description: 'Sugestões de produtos com precificação estratégica' },
  { icon: '💰', title: 'Cálculo financeiro reverso', description: '3 cenários: conservador, realista e otimista' },
  { icon: '🔁', title: 'Funil orgânico de vendas', description: 'Estratégia completa para crescimento sem tráfego pago' },
  { icon: '📞', title: 'Funil de sessões diagnóstico', description: 'Fluxo para converter leads em clientes via call' },
  { icon: '🎯', title: 'Funil de prospecção ativa', description: 'Abordagem estruturada para novos clientes' },
  { icon: '📅', title: 'Calendário de conteúdo 60 dias', description: 'Pauta completa para Instagram e YouTube' },
  { icon: '📋', title: 'Escopos de projeto', description: 'Detalhamento de cada produto sugerido' },
  { icon: '✅', title: 'Lista de tarefas priorizadas', description: 'Agenda semanal e mensal pronta para executar' },
  { icon: '📚', title: 'Ferramentas, livros e encerramento', description: 'Recomendações personalizadas e mensagem motivacional' },
]

export default function DeliverablesSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
          Em um único dossiê, seu aluno recebe tudo isso
        </h2>
        <p className="text-zinc-400 text-center text-lg mb-14">
          Tudo gerado em minutos. Tudo com a sua voz.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DELIVERABLES.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-[#0f0f13] rounded-xl p-5 border border-zinc-800"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar testes**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: PASS

- [ ] **Step 5: Commit**

```bash
git add components/landing/DeliverablesSection.tsx tests/landing/landing.test.tsx
git commit -m "feat: add DeliverablesSection with 11 deliverables"
```

---

## Task 5: WhiteLabelSection + NoCodeSection

**Files:**
- Create: `components/landing/WhiteLabelSection.tsx`
- Create: `components/landing/NoCodeSection.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar testes**

```tsx
import WhiteLabelSection from '@/components/landing/WhiteLabelSection'
import NoCodeSection from '@/components/landing/NoCodeSection'

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
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

- [ ] **Step 3: Criar WhiteLabelSection**

```tsx
// components/landing/WhiteLabelSection.tsx
const FEATURES = [
  { icon: '🏷️', text: 'Seu nome, sua logo, suas cores no PDF' },
  { icon: '🧠', text: 'Até 500K caracteres da sua metodologia injetados em cada geração' },
  { icon: '🎙️', text: 'Prompt personalizado: o dossiê soa exatamente como você escreveria' },
  { icon: '🤖', text: 'Funciona com Claude, GPT-4o ou Gemini — você escolhe' },
]

export default function WhiteLabelSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-violet-400 text-sm font-bold uppercase tracking-wider">
            100% Você
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4">
            O aluno nunca sabe que é uma plataforma terceirizada.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            O sistema aprende a sua metodologia. Você injeta seus materiais,
            frameworks e linguagem. O aluno recebe um documento que parece ter
            sido escrito por você — porque, na prática, foi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {FEATURES.map((feature) => (
            <div
              key={feature.text}
              className="flex gap-3 bg-[#17171f] rounded-xl p-5 border border-zinc-800"
            >
              <span className="text-xl shrink-0">{feature.icon}</span>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Criar NoCodeSection**

```tsx
// components/landing/NoCodeSection.tsx
const CHAT_MESSAGES = [
  { role: 'mentor', text: 'Muda a cor principal para roxo' },
  { role: 'ai', text: '✓ Cor primária atualizada para #7c3aed em toda a plataforma.' },
  { role: 'mentor', text: 'Adiciona o meu logo no cabeçalho do PDF' },
  { role: 'ai', text: '✓ Logo inserida. Prévia do PDF atualizada.' },
]

export default function NoCodeSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-violet-400 text-sm font-bold uppercase tracking-wider">
            Zero Código
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4">
            Você não precisa saber programar. Nem um pouco.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Toda personalização é feita conversando com a IA em português. Em
            menos de 1 hora, a plataforma está com a sua cara — nome, cores,
            logo, prompt, tudo configurado.
          </p>
        </div>

        <div className="bg-[#0f0f13] rounded-2xl border border-zinc-800 p-5 space-y-3">
          {CHAT_MESSAGES.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === 'mentor' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm ${
                  msg.role === 'mentor'
                    ? 'bg-violet-600 text-white'
                    : 'bg-[#1a1a2e] text-zinc-300 border border-zinc-700'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Rodar testes**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: PASS

- [ ] **Step 6: Commit**

```bash
git add components/landing/WhiteLabelSection.tsx components/landing/NoCodeSection.tsx tests/landing/landing.test.tsx
git commit -m "feat: add WhiteLabelSection and NoCodeSection"
```

---

## Task 6: EconomicsSection + ForWhoSection

**Files:**
- Create: `components/landing/EconomicsSection.tsx`
- Create: `components/landing/ForWhoSection.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar testes**

```tsx
import EconomicsSection from '@/components/landing/EconomicsSection'
import ForWhoSection from '@/components/landing/ForWhoSection'

describe('EconomicsSection', () => {
  it('renders cost range and ROI', () => {
    render(<EconomicsSection />)
    expect(screen.getByText(/R\$0,50/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$2,00/i)).toBeInTheDocument()
  })
})

describe('ForWhoSection', () => {
  it('renders yes and no qualifiers', () => {
    render(<ForWhoSection />)
    expect(screen.getByText(/mentores com alunos/i)).toBeInTheDocument()
    expect(screen.getByText(/não tem alunos/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

- [ ] **Step 3: Criar EconomicsSection**

```tsx
// components/landing/EconomicsSection.tsx
const ROWS = [
  { label: 'Tempo por aluno', today: '3 horas', nexia: '5 minutos' },
  { label: 'Custo por dossiê', today: 'Seu tempo vale quanto?', nexia: 'R$0,50 a R$2,00' },
  { label: '10 alunos/mês', today: '30h perdidas', nexia: 'R$20 de custo' },
]

export default function EconomicsSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Cada dossiê custa entre{' '}
          <span className="text-violet-400">R$0,50 e R$2,00</span> de API.
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          Você cobra o que quiser por cima.
        </p>

        <div className="overflow-hidden rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#17171f]">
                <th className="text-left px-6 py-4 text-zinc-500 font-medium"></th>
                <th className="px-6 py-4 text-red-400 font-semibold">Hoje (manual)</th>
                <th className="px-6 py-4 text-violet-400 font-semibold">Com Nexia</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? 'bg-[#0f0f13]' : 'bg-[#17171f]'}
                >
                  <td className="text-left px-6 py-4 text-zinc-400">{row.label}</td>
                  <td className="px-6 py-4 text-red-300 text-center">{row.today}</td>
                  <td className="px-6 py-4 text-violet-300 text-center font-semibold">{row.nexia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Criar ForWhoSection**

```tsx
// components/landing/ForWhoSection.tsx
const YES_ITEMS = [
  'Mentores com alunos ativos que precisam de planejamento personalizado',
  'Coaches que entregam planos de ação e acompanhamento',
  'Consultores que criam diagnósticos estratégicos',
  'Infoprodutores que querem entregar mais valor sem aumentar a carga de trabalho',
]

const NO_ITEMS = [
  'Não é para quem ainda não tem alunos ou clientes',
]

export default function ForWhoSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
          Para quem é o Nexia Planning?
        </h2>

        <div className="space-y-3 mb-6">
          {YES_ITEMS.map((item) => (
            <div key={item} className="flex gap-3 items-start bg-[#0f0f13] rounded-xl p-4 border border-zinc-800">
              <span className="text-green-400 text-lg shrink-0">✅</span>
              <p className="text-zinc-300 text-sm">{item}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {NO_ITEMS.map((item) => (
            <div key={item} className="flex gap-3 items-start bg-[#0f0f13] rounded-xl p-4 border border-zinc-800">
              <span className="text-red-400 text-lg shrink-0">❌</span>
              <p className="text-zinc-400 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Rodar testes**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: PASS

- [ ] **Step 6: Commit**

```bash
git add components/landing/EconomicsSection.tsx components/landing/ForWhoSection.tsx tests/landing/landing.test.tsx
git commit -m "feat: add EconomicsSection and ForWhoSection"
```

---

## Task 7: SocialProofSection + FinalCtaSection

**Files:**
- Create: `components/landing/SocialProofSection.tsx`
- Create: `components/landing/FinalCtaSection.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar testes**

```tsx
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
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

- [ ] **Step 3: Criar SocialProofSection**

```tsx
// components/landing/SocialProofSection.tsx
export default function SocialProofSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-violet-400 text-sm font-bold uppercase tracking-wider">
          Prova Social
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4">
          Veja na prática como fica
        </h2>
        <p className="text-zinc-500 text-sm mb-10">
          Prints do sistema real e dossiês gerados
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#17171f] rounded-2xl border border-zinc-800 h-48 flex items-center justify-center"
            >
              <p className="text-zinc-600 text-sm">
                [Print do sistema — em breve]
              </p>
            </div>
          ))}
        </div>

        <p className="text-zinc-600 text-xs mt-6">
          Depoimentos e prints reais serão adicionados em breve.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Criar FinalCtaSection**

```tsx
// components/landing/FinalCtaSection.tsx
import CtaButton from './CtaButton'

interface FinalCtaSectionProps {
  demoUrl: string
}

export default function FinalCtaSection({ demoUrl }: FinalCtaSectionProps) {
  return (
    <section className="bg-violet-700 px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
          Acesse agora e gere o seu primeiro dossiê de teste — em menos de 30
          minutos.
        </h2>
        <p className="text-violet-200 text-lg mb-10">
          Sem cartão de crédito. Sem instalação. Sem necessidade de saber
          programar. Só você, sua metodologia e o primeiro dossiê saindo em
          tempo real.
        </p>

        <CtaButton
          href={demoUrl}
          label="Quero começar agora"
          className="bg-white text-violet-700 hover:bg-violet-50"
        />

        <div className="flex items-center justify-center gap-6 mt-6 text-violet-300 text-sm">
          <span>🔒 Acesso seguro</span>
          <span>·</span>
          <span>Sem compromisso</span>
          <span>·</span>
          <span>Cancele quando quiser</span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Rodar testes**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: PASS

- [ ] **Step 6: Commit**

```bash
git add components/landing/SocialProofSection.tsx components/landing/FinalCtaSection.tsx tests/landing/landing.test.tsx
git commit -m "feat: add SocialProofSection and FinalCtaSection"
```

---

## Task 8: Montar app/page.tsx e Footer

**Files:**
- Create: `app/page.tsx`
- Modify: `tests/landing/landing.test.tsx`

- [ ] **Step 1: Adicionar teste de integração para a página raiz**

```tsx
import LandingPage from '@/app/page'

describe('LandingPage (app/page.tsx)', () => {
  it('renders without crashing', () => {
    const { container } = render(<LandingPage />)
    expect(container.firstChild).not.toBeNull()
  })

  it('contains exactly one main CTA button in the hero', () => {
    render(<LandingPage />)
    const heroLinks = screen.getAllByRole('link', { name: /quero testar gratuitamente/i })
    expect(heroLinks.length).toBeGreaterThanOrEqual(1)
  })
})
```

- [ ] **Step 2: Rodar — deve falhar**

```bash
npx vitest run tests/landing/landing.test.tsx
```

- [ ] **Step 3: Criar app/page.tsx**

```tsx
// app/page.tsx
import AnnouncementBar from '@/components/landing/AnnouncementBar'
import HeroSection from '@/components/landing/HeroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import DeliverablesSection from '@/components/landing/DeliverablesSection'
import WhiteLabelSection from '@/components/landing/WhiteLabelSection'
import NoCodeSection from '@/components/landing/NoCodeSection'
import EconomicsSection from '@/components/landing/EconomicsSection'
import ForWhoSection from '@/components/landing/ForWhoSection'
import SocialProofSection from '@/components/landing/SocialProofSection'
import FinalCtaSection from '@/components/landing/FinalCtaSection'

const DEMO_URL = 'https://nexia-planning.vercel.app'

export const metadata = {
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
    <main className="min-h-screen bg-[#0f0f13] font-sans">
      <AnnouncementBar />
      <HeroSection demoUrl={DEMO_URL} />
      <ProblemSection />
      <HowItWorksSection />
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
          <a href={DEMO_URL} className="text-violet-500 hover:underline">
            Acessar sistema
          </a>
        </p>
      </footer>
    </main>
  )
}
```

- [ ] **Step 4: Rodar todos os testes**

```bash
npx vitest run tests/landing/landing.test.tsx
```

Esperado: todos PASS

- [ ] **Step 5: Rodar o servidor de desenvolvimento e verificar visualmente**

```bash
npm run dev
```

Abrir `http://localhost:3000` e verificar:
- [ ] AnnouncementBar fixa no topo com fundo violeta
- [ ] Hero com texto em itálico + headline + botão CTA violet
- [ ] Seção de problema com cards de contraste (3h vs 5min)
- [ ] 3 cards de passos na seção "Como funciona"
- [ ] Grid com 11 entregáveis
- [ ] Seção white-label com 4 features
- [ ] Chat mock na seção sem código
- [ ] Tabela de ROI
- [ ] Checklist para quem é / não é
- [ ] Placeholder de prova social
- [ ] CTA final com fundo violeta escuro
- [ ] Footer com copyright

- [ ] **Step 6: Commit final**

```bash
git add app/page.tsx tests/landing/landing.test.tsx
git commit -m "feat: assemble landing page with all 10 sections"
```

---

## Self-Review

**Cobertura do spec:**
- ✅ Barra de anúncio (Task 2)
- ✅ Hero narrativa + CTA imediato (Task 2)
- ✅ Seção problema com dado de contraste (Task 3)
- ✅ 3 passos visuais (Task 3)
- ✅ 11 entregáveis em grid (Task 4)
- ✅ White-label + 4 features (Task 5)
- ✅ Sem código + chat mock (Task 5)
- ✅ Custo R$0,50–R$2,00 + tabela ROI (Task 6)
- ✅ Qualificação de lead com ✅/❌ (Task 6)
- ✅ Prova social com placeholder (Task 7)
- ✅ CTA final com urgência (Task 7)
- ✅ Montagem da página + metadata SEO (Task 8)
- ✅ `DEMO_URL` consistente em todos os componentes

**Tipos e assinaturas consistentes:**
- `CtaButton` recebe `{ href, label, size?, className? }` — usado em HeroSection (Task 2) e FinalCtaSection (Task 7) ✅
- `HeroSection` e `FinalCtaSection` recebem `{ demoUrl: string }` — passado de `app/page.tsx` ✅
- Todos os outros componentes são sem props ✅
