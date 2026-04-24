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
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
          Como funciona
        </h2>
        <p className="text-zinc-400 text-center mb-14 text-lg">
          Três passos. Sem complicação.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#17171f] rounded-2xl p-8 border border-zinc-800"
            >
              <span className="text-violet-500 text-4xl font-extrabold">
                {step.number}
              </span>
              <h3 className="text-white text-xl font-bold mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
