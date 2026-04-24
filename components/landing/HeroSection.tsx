import CtaButton from './CtaButton'

interface HeroSectionProps {
  demoUrl: string
}

const STATS = [
  { value: '11', label: 'Seções por dossiê' },
  { value: '5min', label: 'Tempo de geração' },
  { value: '100%', label: 'White-label' },
]

export default function HeroSection({ demoUrl }: HeroSectionProps) {
  return (
    <section className="relative bg-[#0f0f13] px-6 py-24 md:py-36 text-center overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-violet-900/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">
            White-label · Zero Código · IA
          </span>
        </div>

        <p className="text-violet-300/80 text-base font-medium mb-5 italic">
          &ldquo;Era 23h. Mais um plano de ação para entregar amanhã cedo.&rdquo;
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 font-display">
          Seu aluno entra. O dossiê estratégico sai.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-300">
            Em 5 minutos
          </span>{' '}
          — com a sua metodologia e a sua marca.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Para mentores que ainda passam horas criando planejamentos manualmente
          para cada aluno.
        </p>

        <CtaButton href={demoUrl} label="Quero testar gratuitamente" />

        <p className="text-zinc-500 text-sm mt-4">
          Sem cartão de crédito · Acesso imediato
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-8 border-t border-zinc-800/60">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-white font-display">{stat.value}</p>
              <p className="text-zinc-500 text-xs mt-0.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
