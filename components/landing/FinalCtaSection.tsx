// components/landing/FinalCtaSection.tsx
import CtaButton from './CtaButton'

interface FinalCtaSectionProps {
  demoUrl: string
}

export default function FinalCtaSection({ demoUrl }: FinalCtaSectionProps) {
  return (
    <section className="relative px-6 py-28 text-center overflow-hidden bg-[#0f0f13]">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/25 via-violet-900/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 font-display leading-tight">
          Acesse agora e gere o seu primeiro dossiê de teste — em menos de 30
          minutos.
        </h2>
        <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
          Sem cartão de crédito. Sem instalação. Sem necessidade de saber
          programar. Só você, sua metodologia e o primeiro dossiê saindo em
          tempo real.
        </p>

        <CtaButton href={demoUrl} label="Quero começar agora" />

        <div className="flex items-center justify-center gap-6 mt-6 text-zinc-500 text-sm">
          <span><span aria-hidden="true">🔒</span> Acesso seguro</span>
          <span>·</span>
          <span>Sem compromisso</span>
          <span>·</span>
          <span>Cancele quando quiser</span>
        </div>
      </div>
    </section>
  )
}
