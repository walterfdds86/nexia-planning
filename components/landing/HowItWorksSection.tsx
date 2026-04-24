import { UserPlus, Sparkles, FileDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STEPS: { number: string; Icon: LucideIcon; title: string; description: string }[] = [
  {
    number: '01',
    Icon: UserPlus,
    title: 'Cadastra o aluno',
    description: 'Nome, nicho, objetivos, desafios e metas financeiras. Leva menos de 2 minutos.',
  },
  {
    number: '02',
    Icon: Sparkles,
    title: 'Clica em Gerar',
    description:
      'A IA usa a sua metodologia para criar o documento completo em tempo real — você vê cada palavra surgindo na tela.',
  },
  {
    number: '03',
    Icon: FileDown,
    title: 'Entrega em PDF',
    description:
      'Com o seu nome, logo e identidade visual. O aluno recebe como se fosse um sistema exclusivo seu.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#001F35] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-display">
            Como funciona
          </h2>
          <p className="text-zinc-400 text-lg">Três passos. Sem complicação.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map(({ number, Icon, title, description }) => (
            <div
              key={number}
              className="group bg-[#002848] rounded-2xl p-8 border border-white/5 hover:border-[#C9A84C]/25 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4B85C] to-[#C9A84C] text-5xl font-extrabold font-display leading-none">
                  {number}
                </span>
                <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors duration-200">
                  <Icon size={16} strokeWidth={1.5} className="text-[#C9A84C]" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
