export default function ProblemSection() {
  return (
    <section className="bg-[#17171f] px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight font-display">
          Você atende 1 aluno, gasta 3 horas criando o plano.
          <br />
          <span className="text-zinc-400">Atende 10, perde 30 horas.</span>
        </h2>

        <p className="text-zinc-400 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          E se você pudesse entregar um dossiê completo, personalizado, com a
          sua voz — em 5 minutos por aluno?
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-xl mx-auto">
          <div className="flex-1 bg-[#1a1a2e] border border-red-900/50 rounded-2xl p-7 text-left relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 bg-red-950/20 pointer-events-none" />
            <div className="relative">
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Hoje</span>
              <p className="text-white text-4xl font-extrabold mt-2 mb-1 font-display">3 horas</p>
              <p className="text-zinc-400 text-sm">por aluno, criado na mão</p>
            </div>
          </div>

          <div aria-hidden="true" className="flex items-center justify-center text-zinc-600 text-2xl">
            →
          </div>

          <div className="flex-1 bg-[#1a1a2e] border border-violet-600/40 rounded-2xl p-7 text-left relative overflow-hidden shadow-lg shadow-violet-950/20">
            <div aria-hidden="true" className="absolute inset-0 bg-violet-950/20 pointer-events-none" />
            <div className="relative">
              <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">Com Nexia</span>
              <p className="text-white text-4xl font-extrabold mt-2 mb-1 font-display">5 min</p>
              <p className="text-zinc-400 text-sm">com a sua metodologia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
