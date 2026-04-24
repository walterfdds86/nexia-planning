const CHAT_MESSAGES = [
  { role: 'mentor', text: 'Muda a cor principal para roxo', delay: '0.2s' },
  { role: 'ai', text: '✓ Cor primária atualizada para #7c3aed em toda a plataforma.', delay: '0.9s' },
  { role: 'mentor', text: 'Adiciona o meu logo no cabeçalho do PDF', delay: '1.7s' },
  { role: 'ai', text: '✓ Logo inserida. Prévia do PDF atualizada.', delay: '2.5s', cursor: true },
]

export default function NoCodeSection() {
  return (
    <section className="bg-[#17171f] px-6 py-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">
            Zero Código
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4 font-display">
            Você não precisa saber programar. Nem um pouco.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Toda personalização é feita conversando com a IA em português. Em
            menos de 1 hora, a plataforma está com a sua cara — nome, cores,
            logo, prompt, tudo configurado.
          </p>
        </div>

        <div className="bg-[#0f0f13] rounded-2xl border border-zinc-800 overflow-hidden shadow-xl shadow-black/30">
          {/* Fake window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-[#17171f]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-zinc-600 text-xs ml-1">Nexia AI — Configuração</span>
          </div>

          <div className="p-5 space-y-3">
            {CHAT_MESSAGES.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg flex gap-3 ${msg.role === 'mentor' ? 'justify-end' : 'justify-start'}`}
                style={{ animationDelay: msg.delay }}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === 'mentor'
                      ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-md shadow-violet-900/30'
                      : 'bg-[#1a1a2e] text-zinc-300 border border-zinc-700/60'
                  }`}
                >
                  {msg.text}
                  {msg.cursor && (
                    <span
                      className="cursor-blink inline-block w-0.5 h-3.5 bg-zinc-400 ml-1 align-middle rounded-full"
                      style={{ animationDelay: '3.2s' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
