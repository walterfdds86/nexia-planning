const STEPS = [
  {
    number: '01',
    title: 'Cadastra o aluno',
    description:
      'Nome, nicho, objetivos, desafios e metas financeiras. Leva menos de 2 minutos.',
  },
  {
    number: '02',
    title: 'Clica em Gerar',
    description:
      'A IA usa a sua metodologia para criar o documento completo em tempo real — você vê cada palavra surgindo na tela.',
  },
  {
    number: '03',
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
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group bg-[#002848] rounded-2xl p-8 border border-zinc-800 hover:border-[#7A5C20]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1A0E00]/20"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4B85C] to-[#C9A84C] text-5xl font-extrabold block mb-5 font-display">
                {step.number}
              </span>
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
