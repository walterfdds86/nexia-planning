// components/landing/EconomicsSection.tsx
const ROWS = [
  { label: 'Tempo por aluno', today: '3 horas', nexia: '5 minutos' },
  { label: 'Custo por dossiê', today: 'Seu tempo vale quanto?', nexia: 'R$0,50 a R$2,00' },
  { label: '10 alunos/mês', today: '30h perdidas', nexia: 'R$20 de custo' },
]

export default function EconomicsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
          Cada dossiê custa entre{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4B85C] to-[#C9A84C]">
            R$0,50 e R$2,00
          </span>{' '}
          de API.
        </h2>
        <p className="text-gray-600 text-lg mb-12">Você cobra o que quiser por cima.</p>

        <div className="rounded-2xl border border-gray-200 shadow-lg shadow-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-800">
                <th scope="col" aria-label="Métrica" className="text-left px-6 py-4 text-gray-400 font-medium w-[40%]"></th>
                <th scope="col" className="px-6 py-4 text-red-400 font-semibold">Hoje (manual)</th>
                <th scope="col" className="px-6 py-4 text-[#C9A84C] font-semibold">Com Nexia</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <th scope="row" className="text-left px-6 py-4 text-gray-600 font-normal">{row.label}</th>
                  <td className="px-6 py-4 text-red-500 text-center">{row.today}</td>
                  <td className="px-6 py-4 text-[#92650A] text-center font-semibold">{row.nexia}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  )
}
