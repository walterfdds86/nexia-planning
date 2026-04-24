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
