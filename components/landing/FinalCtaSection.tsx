import { ShieldCheck, Zap, X } from 'lucide-react'
import CtaButton from './CtaButton'

interface FinalCtaSectionProps {
  demoUrl: string
}

export default function FinalCtaSection({ demoUrl }: FinalCtaSectionProps) {
  return (
    <section className="relative px-6 py-28 text-center overflow-hidden bg-[#001F35]">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1A00]/25 via-[#2C1A00]/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C9A84C]/15 rounded-full blur-[100px]" />
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

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-zinc-500 text-sm">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} strokeWidth={1.5} aria-hidden="true" />
            Acesso seguro
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Zap size={14} strokeWidth={1.5} aria-hidden="true" />
            Sem compromisso
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <X size={14} strokeWidth={1.5} aria-hidden="true" />
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  )
}
