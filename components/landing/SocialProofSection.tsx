// components/landing/SocialProofSection.tsx

const STUDENTS = [
  { name: 'Carla Mendes', niche: 'Marketing Digital', status: 'Concluído', statusColor: 'text-green-400 bg-green-400/10' },
  { name: 'Rafael Costa', niche: 'Inteligência Artificial', status: 'Pendente', statusColor: 'text-yellow-400 bg-yellow-400/10' },
  { name: 'Juliana Reis', niche: 'Coaching de Carreira', status: 'Concluído', statusColor: 'text-green-400 bg-green-400/10' },
]

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#17171f] rounded-2xl border border-zinc-800 overflow-hidden shadow-xl shadow-black/30">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-[#1a1a2e]">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-2 bg-zinc-800/80 rounded px-3 py-1 text-zinc-500 text-xs truncate">
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}

function Sidebar({ active }: { active: string }) {
  const items = ['Dashboard', 'Alunos', 'Dossiês Gerados', 'Configurações']
  return (
    <div className="w-32 bg-[#0f0f13] border-r border-zinc-800 p-3 flex flex-col gap-0.5 shrink-0">
      <p className="text-violet-400 text-xs font-bold mb-3 truncate leading-tight">
        Estratégias<br />Digitais
      </p>
      {items.map((item) => (
        <div
          key={item}
          className={`text-xs px-2 py-1.5 rounded truncate ${
            item === active
              ? 'text-white bg-violet-600/25 border border-violet-600/30'
              : 'text-zinc-500'
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default function SocialProofSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4">
            Sistema Real
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-4 font-display">
            Veja na prática como fica
          </h2>
          <p className="text-zinc-400 text-lg">
            O sistema real. É isso que o seu aluno vai receber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Mockup 1: tela de alunos */}
          <BrowserFrame url="nexia-planning.vercel.app/alunos">
            <div className="flex" style={{ height: 260 }}>
              <Sidebar active="Alunos" />
              <div className="flex-1 p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-xs font-semibold">Meus Alunos</span>
                  <span className="bg-gradient-to-r from-violet-600 to-violet-500 text-white text-xs px-2.5 py-1 rounded-lg">
                    + Novo Aluno
                  </span>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left pb-2 text-zinc-500 font-normal">Nome</th>
                      <th className="text-left pb-2 text-zinc-500 font-normal">Nicho</th>
                      <th className="text-left pb-2 text-zinc-500 font-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STUDENTS.map((s) => (
                      <tr key={s.name} className="border-b border-zinc-800/40 last:border-0">
                        <td className="py-2 text-zinc-200 font-medium truncate max-w-[80px]">{s.name}</td>
                        <td className="py-2 text-zinc-400 truncate max-w-[90px]">{s.niche}</td>
                        <td className="py-2">
                          <span className={`text-xs px-1.5 py-0.5 rounded ${s.statusColor}`}>
                            {s.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-3 pt-3 border-t border-zinc-800/40 grid grid-cols-2 gap-2">
                  <div className="bg-zinc-800/40 rounded-lg p-2 text-center">
                    <p className="text-white text-base font-bold">3</p>
                    <p className="text-zinc-500 text-xs">Alunos</p>
                  </div>
                  <div className="bg-violet-600/10 border border-violet-600/20 rounded-lg p-2 text-center">
                    <p className="text-violet-300 text-base font-bold">67%</p>
                    <p className="text-zinc-500 text-xs">Concluídos</p>
                  </div>
                </div>
              </div>
            </div>
          </BrowserFrame>

          {/* Mockup 2: trecho de dossiê gerado */}
          <BrowserFrame url="nexia-planning.vercel.app/dossie/carla-mendes">
            <div className="flex" style={{ height: 260 }}>
              <Sidebar active="Dossiês Gerados" />
              <div className="flex-1 p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-none">Carla Mendes</p>
                    <p className="text-zinc-500 text-xs">Marketing Digital</p>
                  </div>
                  <span className="ml-auto text-green-400 text-xs bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                    ✓ Gerado
                  </span>
                </div>

                <div className="space-y-2 overflow-hidden">
                  <div className="bg-[#0f0f13] rounded-lg p-3 border border-zinc-800/60">
                    <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-1">
                      Big Idea
                    </p>
                    <p className="text-zinc-300 text-xs leading-relaxed italic">
                      &ldquo;Você não precisa de mais seguidores — precisa de um sistema que transforma os que já tem em clientes.&rdquo;
                    </p>
                  </div>
                  <div className="bg-[#0f0f13] rounded-lg p-3 border border-zinc-800/60">
                    <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-1">
                      Arquétipo de Marca
                    </p>
                    <p className="text-zinc-300 text-xs leading-relaxed">
                      <span className="text-white font-semibold">O Estrategista</span> — guia com clareza, dados e método, não com ruído de mercado.
                    </p>
                  </div>
                  <div className="bg-[#0f0f13] rounded-lg p-2.5 border border-zinc-800/60 flex items-center gap-2">
                    <span className="text-zinc-500 text-xs">+ 9 seções geradas</span>
                    <span className="ml-auto text-zinc-600 text-xs">📄 Baixar PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </BrowserFrame>

        </div>

        <p className="text-zinc-600 text-xs text-center mt-6">
          Dados de demonstração · Acesse o sistema real e gere o seu próprio dossiê gratuitamente
        </p>
      </div>
    </section>
  )
}
