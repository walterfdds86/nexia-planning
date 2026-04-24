// components/landing/ForWhoSection.tsx
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
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
          Para quem é o Nexia Planning?
        </h2>

        <div className="space-y-3 mb-6">
          {YES_ITEMS.map((item) => (
            <div key={item} className="flex gap-3 items-start bg-[#0f0f13] rounded-xl p-4 border border-zinc-800">
              <span className="text-green-400 text-lg shrink-0">✅</span>
              <p className="text-zinc-300 text-sm">{item}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {NO_ITEMS.map((item) => (
            <div key={item} className="flex gap-3 items-start bg-[#0f0f13] rounded-xl p-4 border border-zinc-800">
              <span className="text-red-400 text-lg shrink-0">❌</span>
              <p className="text-zinc-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
