import { MousePointerClick, FileText, Wrench, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STEPS: {
  Icon: LucideIcon
  number: string
  title: string
  description: string
  tag: string
  tagColor: 'gold' | 'muted'
}[] = [
  {
    Icon: MousePointerClick,
    number: '01',
    title: 'Teste agora, de graça',
    description:
      'Acesse o demo, cadastre um aluno e veja o dossiê completo sendo gerado em tempo real. Sem cartão. Sem compromisso.',
    tag: 'Gratuito',
    tagColor: 'gold',
  },
  {
    Icon: FileText,
    number: '02',
    title: 'Veja o resultado',
    description:
      'Baixe o PDF gerado. Leia as 11 seções. Imagine entregando esse documento — com a sua marca — para os seus alunos.',
    tag: 'Na hora',
    tagColor: 'muted',
  },
  {
    Icon: Wrench,
    number: '03',
    title: 'Sessão de configuração',
    description:
      'Após contratar, agendamos 1h30. Configuramos sua plataforma com logo, cores, nome e toda a sua metodologia.',
    tag: 'Em até 48h',
    tagColor: 'muted',
  },
  {
    Icon: Sparkles,
    number: '04',
    title: 'Sistema 100% seu',
    description:
      'Plataforma white-label no ar. Zero mensalidade. Nenhum prazo de expiração. O sistema roda com a sua marca para sempre.',
    tag: 'Para sempre',
    tagColor: 'gold',
  },
]

export default function JourneySection() {
  return (
    <section className="bg-[#001527] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1 text-[#E0C870] text-xs font-bold uppercase tracking-wider mb-4">
            Sua Jornada
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4 font-display">
            Do primeiro clique ao sistema funcionando
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Quatro etapas. Da curiosidade à entrega do primeiro dossiê para um aluno real.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute top-[26px] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent"
          />

          {STEPS.map(({ Icon, number, title, description, tag, tagColor }) => (
            <div key={number} className="flex flex-col items-center text-center px-5">
              {/* Icon circle */}
              <div className="relative mb-5 z-10">
                <div className="w-[52px] h-[52px] rounded-full bg-[#002848] border border-[#C9A84C]/30 flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.5} className="text-[#C9A84C]" aria-hidden="true" />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#001527] border border-[#C9A84C]/40 text-[#E0C870] text-[9px] font-bold flex items-center justify-center">
                  {number}
                </span>
              </div>

              {/* Tag */}
              <span
                className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3 ${
                  tagColor === 'gold'
                    ? 'bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/25'
                    : 'bg-zinc-800/60 text-zinc-500 border border-zinc-700'
                }`}
              >
                {tag}
              </span>

              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {STEPS.map(({ Icon, number, title, description, tag, tagColor }, i) => (
            <div key={number} className="flex gap-5">
              {/* Left: icon + connector */}
              <div className="flex flex-col items-center">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#002848] border border-[#C9A84C]/30 flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.5} className="text-[#C9A84C]" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#001527] border border-[#C9A84C]/40 text-[#E0C870] text-[9px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="w-px flex-1 bg-gradient-to-b from-[#C9A84C]/25 to-transparent my-2 min-h-[32px]"
                  />
                )}
              </div>

              {/* Right: content */}
              <div className={`${i < STEPS.length - 1 ? 'pb-8' : ''}`}>
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${
                    tagColor === 'gold'
                      ? 'bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/25'
                      : 'bg-zinc-800/60 text-zinc-500 border border-zinc-700'
                  }`}
                >
                  {tag}
                </span>
                <h3 className="text-white font-bold text-base mb-1.5">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
