export default function ProblemSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
          Você atende 1 aluno, gasta 3 horas criando o plano.
          <br />
          <span className="text-gray-500">Atende 10, perde 30 horas.</span>
        </h2>

        <p className="text-gray-600 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          E se você pudesse entregar um dossiê completo, personalizado, com a
          sua voz — em 5 minutos por aluno?
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-xl mx-auto">
          <div className="flex-1 bg-white border border-red-200 rounded-2xl p-7 text-left relative overflow-hidden shadow-md shadow-red-50">
            <div aria-hidden="true" className="absolute inset-0 bg-red-50/60 pointer-events-none" />
            <div className="relative">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Hoje</span>
              <p className="text-gray-900 text-4xl font-extrabold mt-2 mb-1 font-display">3 horas</p>
              <p className="text-gray-500 text-sm">por aluno, criado na mão</p>
            </div>
          </div>

          <div aria-hidden="true" className="flex items-center justify-center text-gray-400 text-2xl">
            →
          </div>

          <div className="flex-1 bg-white border border-[#C9A84C]/50 rounded-2xl p-7 text-left relative overflow-hidden shadow-md shadow-amber-50">
            <div aria-hidden="true" className="absolute inset-0 bg-amber-50/50 pointer-events-none" />
            <div className="relative">
              <span className="text-[#92650A] text-xs font-bold uppercase tracking-widest">Com Nexia</span>
              <p className="text-gray-900 text-4xl font-extrabold mt-2 mb-1 font-display">5 min</p>
              <p className="text-gray-500 text-sm">com a sua metodologia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
