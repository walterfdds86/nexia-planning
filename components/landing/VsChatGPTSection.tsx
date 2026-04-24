import { XCircle, CheckCircle2 } from 'lucide-react'

const ROWS = [
  {
    feature: 'Metodologia injetada automaticamente',
    without: 'Cola manual a cada nova conversa',
    with: 'Até 500K caracteres da sua metodologia em todos os dossiês',
  },
  {
    feature: 'PDF com a sua identidade visual',
    without: 'Texto bruto — sem formatação, sem marca',
    with: 'PDF com logo, cores e nome — pronto para entregar',
  },
  {
    feature: 'Histórico dos alunos',
    without: 'Sem memória de uma sessão para outra',
    with: 'Cadastro permanente — contexto completo em cada geração',
  },
  {
    feature: 'White-label',
    without: '"Powered by OpenAI" — a marca é deles, não sua',
    with: '100% com o seu nome — o aluno nunca sabe',
  },
  {
    feature: 'Consistência entre dossiês',
    without: 'Cada geração é diferente — sem padrão',
    with: 'Estrutura uniforme + a sua voz em todos os documentos',
  },
  {
    feature: 'Tempo por aluno',
    without: '45–60 min copiando, colando e formatando',
    with: '5 minutos — do cadastro ao PDF',
  },
]

export default function VsChatGPTSection() {
  return (
    <section className="bg-[#001F35] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1 text-[#E0C870] text-xs font-bold uppercase tracking-wider mb-4">
            Diferencial
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-4 font-display">
            ChatGPT não tem a sua metodologia,<br className="hidden md:block" />
            a sua marca, nem a sua consistência.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            O ChatGPT é uma ferramenta genérica. O Nexia Planning foi construído
            do zero para mentores e coaches entregarem documentos profissionais.
          </p>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-0 mb-0">
          <div />
          <div className="px-5 py-3 text-center">
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
              ChatGPT / Claude direto
            </span>
          </div>
          <div className="px-5 py-3 text-center">
            <span className="text-[#D4B85C] text-xs font-bold uppercase tracking-widest">
              Nexia Planning
            </span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="rounded-2xl overflow-hidden border border-white/8">
          {ROWS.map(({ feature, without, with: withText }, i) => (
            <div
              key={feature}
              className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] ${
                i % 2 === 0 ? 'bg-[#002848]' : 'bg-[#001F35]'
              } ${i < ROWS.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              {/* Feature */}
              <div className="px-5 py-4 flex items-center">
                <span className="text-zinc-300 text-sm font-medium">{feature}</span>
              </div>

              {/* Without */}
              <div className="px-5 py-4 flex items-start gap-2.5 md:border-l border-white/5">
                <XCircle
                  size={15}
                  strokeWidth={1.5}
                  className="text-red-400/60 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-zinc-500 text-sm leading-relaxed">{without}</span>
              </div>

              {/* With */}
              <div className="px-5 py-4 flex items-start gap-2.5 md:border-l border-[#C9A84C]/15 bg-[#C9A84C]/[0.03]">
                <CheckCircle2
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#C9A84C] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-zinc-200 text-sm leading-relaxed">{withText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
