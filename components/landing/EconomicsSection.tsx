// components/landing/EconomicsSection.tsx
const ROWS = [
  { label: 'Tempo por aluno', today: '3 horas', nexia: '5 minutos' },
  { label: 'Custo por dossiê', today: 'Seu tempo vale quanto?', nexia: 'R$0,50 a R$2,00' },
  { label: '10 alunos/mês', today: '30h perdidas', nexia: 'R$20 de custo' },
]

export default function EconomicsSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-display">
          Cada dossiê custa entre{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B85C] to-[#E0C870]">
            R$0,50 e R$2,00
          </span>{' '}
          de API.
        </h2>
        <p className="text-zinc-400 text-lg mb-12">Você cobra o que quiser por cima.</p>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 shadow-xl shadow-black/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#17171f] border-b border-zinc-800">
                <th scope="col" aria-label="Métrica" className="text-left px-6 py-4 text-zinc-500 font-medium w-[40%]"></th>
                <th scope="col" className="px-6 py-4 text-red-400 font-semibold">Hoje (manual)</th>
                <th scope="col" className="px-6 py-4 text-[#D4B85C] font-semibold">Com Nexia</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-zinc-800/40 last:border-0 ${i % 2 === 0 ? 'bg-[#0f0f13]' : 'bg-[#17171f]/50'}`}
                >
                  <th scope="row" className="text-left px-6 py-4 text-zinc-400 font-normal">{row.label}</th>
                  <td className="px-6 py-4 text-red-300 text-center">{row.today}</td>
                  <td className="px-6 py-4 text-[#E0C870] text-center font-semibold">{row.nexia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
