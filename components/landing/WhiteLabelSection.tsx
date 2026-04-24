const FEATURES = [
  { icon: '🏷️', text: 'Seu nome, sua logo, suas cores no PDF' },
  { icon: '🧠', text: 'Até 500K caracteres da sua metodologia injetados em cada geração' },
  { icon: '🎙️', text: 'Prompt personalizado: o dossiê soa exatamente como você escreveria' },
  { icon: '🤖', text: 'Funciona com Claude, GPT-4o ou Gemini — você escolhe' },
]

export default function WhiteLabelSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-violet-400 text-sm font-bold uppercase tracking-wider">
            100% Você
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4">
            O aluno nunca sabe que é uma plataforma terceirizada.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            O sistema aprende a sua metodologia. Você injeta seus materiais,
            frameworks e linguagem. O aluno recebe um documento que parece ter
            sido escrito por você — porque, na prática, foi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {FEATURES.map((feature) => (
            <div
              key={feature.text}
              className="flex gap-3 bg-[#17171f] rounded-xl p-5 border border-zinc-800"
            >
              <span className="text-xl shrink-0">{feature.icon}</span>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
