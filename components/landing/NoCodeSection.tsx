const CHAT_MESSAGES = [
  { role: 'mentor', text: 'Muda a cor principal para roxo' },
  { role: 'ai', text: '✓ Cor primária atualizada para #7c3aed em toda a plataforma.' },
  { role: 'mentor', text: 'Adiciona o meu logo no cabeçalho do PDF' },
  { role: 'ai', text: '✓ Logo inserida. Prévia do PDF atualizada.' },
]

export default function NoCodeSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-violet-400 text-sm font-bold uppercase tracking-wider">
            Zero Código
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4">
            Você não precisa saber programar. Nem um pouco.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Toda personalização é feita conversando com a IA em português. Em
            menos de 1 hora, a plataforma está com a sua cara — nome, cores,
            logo, prompt, tudo configurado.
          </p>
        </div>

        <div className="bg-[#0f0f13] rounded-2xl border border-zinc-800 p-5 space-y-3">
          {CHAT_MESSAGES.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === 'mentor' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm ${
                  msg.role === 'mentor'
                    ? 'bg-violet-600 text-white'
                    : 'bg-[#1a1a2e] text-zinc-300 border border-zinc-700'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
