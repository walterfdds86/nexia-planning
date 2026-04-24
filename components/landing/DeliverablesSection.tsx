import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  GitBranch,
  MessageSquare,
  Search,
  CalendarDays,
  ClipboardList,
  CheckSquare,
  BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const DELIVERABLES: { Icon: LucideIcon; title: string; description: string }[] = [
  { Icon: Target,        title: 'Posicionamento estratégico',        description: 'Arquétipo de marca, Big Idea, bio profissional e headlines' },
  { Icon: Users,         title: '2 Personas de cliente ideal',        description: 'Perfil completo com dores, desejos e linguagem' },
  { Icon: Lightbulb,     title: 'Ideias de produtos com IA',          description: 'Sugestões de produtos com precificação estratégica' },
  { Icon: TrendingUp,    title: 'Cálculo financeiro reverso',         description: '3 cenários: conservador, realista e otimista' },
  { Icon: GitBranch,     title: 'Funil orgânico de vendas',           description: 'Estratégia completa para crescimento sem tráfego pago' },
  { Icon: MessageSquare, title: 'Funil de sessões diagnóstico',       description: 'Fluxo para converter leads em clientes via call' },
  { Icon: Search,        title: 'Funil de prospecção ativa',          description: 'Abordagem estruturada para novos clientes' },
  { Icon: CalendarDays,  title: 'Calendário de conteúdo 60 dias',     description: 'Pauta completa para Instagram e YouTube' },
  { Icon: ClipboardList, title: 'Escopos de projeto',                 description: 'Detalhamento de cada produto sugerido' },
  { Icon: CheckSquare,   title: 'Lista de tarefas priorizadas',       description: 'Agenda semanal e mensal pronta para executar' },
  { Icon: BookOpen,      title: 'Ferramentas, livros e encerramento', description: 'Recomendações personalizadas e mensagem motivacional' },
]

export default function DeliverablesSection() {
  return (
    <section className="bg-[#002848] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-display">
            Em um único dossiê, seu aluno recebe tudo isso
          </h2>
          <p className="text-zinc-400 text-lg">Tudo gerado em minutos. Tudo com a sua voz.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {DELIVERABLES.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group flex gap-4 bg-[#001F35] rounded-xl p-5 border border-white/5 hover:border-[#C9A84C]/25 hover:bg-[#002848] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors duration-200">
                <Icon size={18} strokeWidth={1.5} className="text-[#C9A84C]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
