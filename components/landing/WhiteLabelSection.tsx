const FEATURES = [
  { icon: '🏷️', text: 'Seu nome, sua logo, suas cores no PDF' },
  { icon: '🧠', text: 'Até 500K caracteres da sua metodologia injetados em cada geração' },
  { icon: '🎙️', text: 'Prompt personalizado: o dossiê soa exatamente como você escreveria' },
  { icon: '🤖', text: 'Funciona com Claude, GPT-4o ou Gemini — você escolhe' },
]

export default function WhiteLabelSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">
            100% Você
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-4 font-display">
            O aluno nunca sabe que é uma plataforma terceirizada.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            O sistema aprende a sua metodologia. Você injeta seus materiais,
            frameworks e linguagem. O aluno recebe um documento que parece ter
            sido escrito por você — porque, na prática, foi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {FEATURES.map((feature) => (
            <div
              key={feature.text}
              className="group flex gap-4 bg-[#17171f] rounded-xl p-5 border border-zinc-800 hover:border-violet-700/50 hover:bg-zinc-800/30 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0 text-xl group-hover:bg-violet-500/20 transition-colors duration-200">
                {feature.icon}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed self-center">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
