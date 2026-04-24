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
