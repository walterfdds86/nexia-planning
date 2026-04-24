import { CheckCircle2, XCircle } from 'lucide-react'

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
    <section className="bg-white px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-14 font-display">
          Para quem é o Nexia Planning?
        </h2>

        <div className="space-y-3 mb-4">
          {YES_ITEMS.map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-emerald-200 transition-colors duration-200"
            >
              <CheckCircle2
                size={18}
                strokeWidth={1.5}
                className="text-emerald-500 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {NO_ITEMS.map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start bg-gray-50 rounded-xl p-4 border border-gray-200"
            >
              <XCircle
                size={18}
                strokeWidth={1.5}
                className="text-red-400/70 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-gray-500 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
