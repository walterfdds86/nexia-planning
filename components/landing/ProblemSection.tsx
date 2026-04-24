export default function ProblemSection() {
  return (
    <section className="bg-[#17171f] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Você atende 1 aluno, gasta 3 horas criando o plano.
          <br />
          <span className="text-zinc-400">Atende 10, perde 30 horas.</span>
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
          E se você pudesse entregar um dossiê completo, personalizado, com a
          sua voz — em 5 minutos por aluno?
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-xl mx-auto">
          <div className="flex-1 bg-[#1a1a2e] border border-red-900/40 rounded-xl p-6 text-left">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
              Hoje
            </span>
            <p className="text-white text-3xl font-extrabold mt-2">3 horas</p>
            <p className="text-zinc-400 text-sm mt-1">
              por aluno, criado na mão
            </p>
          </div>
          <div aria-hidden="true" className="flex items-center justify-center text-zinc-600 text-2xl">
            →
          </div>
          <div className="flex-1 bg-[#1a1a2e] border border-violet-700/40 rounded-xl p-6 text-left">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-wider">
              Com Nexia
            </span>
            <p className="text-white text-3xl font-extrabold mt-2">5 min</p>
            <p className="text-zinc-400 text-sm mt-1">
              com a sua metodologia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
