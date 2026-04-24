const DELIVERABLES = [
  { icon: '📍', title: 'Posicionamento estratégico', description: 'Arquétipo de marca, Big Idea, bio profissional e headlines' },
  { icon: '👥', title: '2 Personas de cliente ideal', description: 'Perfil completo com dores, desejos e linguagem' },
  { icon: '💡', title: 'Ideias de produtos com IA', description: 'Sugestões de produtos com precificação estratégica' },
  { icon: '💰', title: 'Cálculo financeiro reverso', description: '3 cenários: conservador, realista e otimista' },
  { icon: '🔁', title: 'Funil orgânico de vendas', description: 'Estratégia completa para crescimento sem tráfego pago' },
  { icon: '📞', title: 'Funil de sessões diagnóstico', description: 'Fluxo para converter leads em clientes via call' },
  { icon: '🎯', title: 'Funil de prospecção ativa', description: 'Abordagem estruturada para novos clientes' },
  { icon: '📅', title: 'Calendário de conteúdo 60 dias', description: 'Pauta completa para Instagram e YouTube' },
  { icon: '📋', title: 'Escopos de projeto', description: 'Detalhamento de cada produto sugerido' },
  { icon: '✅', title: 'Lista de tarefas priorizadas', description: 'Agenda semanal e mensal pronta para executar' },
  { icon: '📚', title: 'Ferramentas, livros e encerramento', description: 'Recomendações personalizadas e mensagem motivacional' },
]

export default function DeliverablesSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
          Em um único dossiê, seu aluno recebe tudo isso
        </h2>
        <p className="text-zinc-400 text-center text-lg mb-14">
          Tudo gerado em minutos. Tudo com a sua voz.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DELIVERABLES.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-[#0f0f13] rounded-xl p-5 border border-zinc-800"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
