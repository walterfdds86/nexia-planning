'use client'

import { useState } from 'react'

const EMERALD = '#10b981'
const EMERALD_BG = 'rgba(16,185,129,0.12)'

type ScreenId = 'dashboard' | 'alunos' | 'cadastro' | 'gerando' | 'config' | 'dossie'

const SCREENS: { id: ScreenId; label: string; desc: string; url: string }[] = [
  { id: 'dashboard', label: 'Dashboard', desc: 'Visão geral do negócio em tempo real', url: '' },
  { id: 'alunos', label: 'Alunos', desc: 'Gestão completa da sua base de alunos', url: 'alunos' },
  { id: 'cadastro', label: 'Cadastrar Aluno', desc: 'Formulário de entrada — 2 minutos para preencher', url: 'alunos/novo' },
  { id: 'gerando', label: 'IA Gerando', desc: 'Dossiê sendo gerado em tempo real pela IA', url: 'dossies/gerar' },
  { id: 'config', label: 'Configurações', desc: 'White-label: sua logo, suas cores, sua voz', url: 'configuracoes' },
  { id: 'dossie', label: 'Dossiê Pronto', desc: 'Resultado final — pronto para entregar ao aluno', url: 'dossies/ana-paula' },
]

/* ─── Sidebar ─────────────────────────────────────────────── */

function Sidebar({ active }: { active: ScreenId }) {
  const items = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'alunos', label: 'Alunos' },
    { id: 'dossies', label: 'Dossiês Gerados' },
    { id: 'config', label: 'Configurações' },
  ]
  const isActive = (id: string) =>
    active === id ||
    (active === 'cadastro' && id === 'alunos') ||
    (active === 'gerando' && id === 'dossies') ||
    (active === 'dossie' && id === 'dossies')

  return (
    <div
      className="w-36 flex flex-col flex-shrink-0 border-r border-zinc-800"
      style={{ backgroundColor: '#0a0a12', height: '100%' }}
    >
      {/* Brand */}
      <div className="p-3 border-b border-zinc-800 flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 text-xs"
          style={{ boxShadow: `0 0 0 1.5px ${EMERALD}` }}
        >
          🔐
        </div>
        <p className="text-white text-xs font-bold leading-tight">
          Estratégias<br />Digitais
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 space-y-0.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="px-2 py-1.5 rounded text-xs truncate transition-colors"
            style={{
              color: isActive(item.id) ? '#fff' : '#71717a',
              fontWeight: isActive(item.id) ? 600 : 400,
              backgroundColor: isActive(item.id) ? EMERALD_BG : 'transparent',
              borderLeft: `2px solid ${isActive(item.id) ? EMERALD : 'transparent'}`,
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>

      <div className="p-2 border-t border-zinc-800">
        <div className="px-2 py-1.5 text-zinc-600 text-xs">Sair</div>
      </div>
    </div>
  )
}

/* ─── Screen: Dashboard ───────────────────────────────────── */

function DashboardContent() {
  const stats = [
    { label: 'Total de Alunos', value: '3', color: EMERALD },
    { label: 'Dossiês Gerados', value: '3', color: EMERALD },
    { label: 'Aguardando Dossiê', value: '1', color: '#f59e0b' },
    { label: 'Taxa de Conclusão', value: '67%', color: '#818cf8' },
  ]
  const actions = ['+ Cadastrar Aluno', 'Ver Todos os Alunos', 'Ver Dossiês', 'Configurações']
  const activities = [
    { icon: '📄', text: 'Dossiê gerado — Teste · Marketing', time: '18/03' },
    { icon: '👤', text: 'Aluno cadastrado — Carla Mendes', time: '15/03' },
    { icon: '📄', text: 'Dossiê gerado — Rafael Costa · IA', time: '12/03' },
  ]

  return (
    <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#0f0f13' }}>
      <p className="text-white text-sm font-bold mb-4">Bom dia, Walter 👋</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#17171f] rounded-lg p-3 border border-zinc-800">
            <p className="text-zinc-500 text-xs mb-1 truncate">{s.label}</p>
            <p className="text-xl font-extrabold font-display" style={{ color: s.color }}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">
        Ações Rápidas
      </p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {actions.map((a, i) => (
          <div
            key={a}
            className="rounded-lg px-3 py-2 text-xs font-medium cursor-pointer"
            style={
              i === 0
                ? { backgroundColor: EMERALD, color: '#fff' }
                : { backgroundColor: '#17171f', border: '1px solid #27272a', color: '#d4d4d8' }
            }
          >
            {a}
          </div>
        ))}
      </div>

      <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">
        Atividade Recente
      </p>
      <div className="space-y-1.5">
        {activities.map((act) => (
          <div
            key={act.text}
            className="flex items-center gap-2 text-xs text-zinc-400 bg-[#17171f] rounded-lg px-3 py-2 border border-zinc-800/50"
          >
            <span>{act.icon}</span>
            <span className="flex-1 truncate">{act.text}</span>
            <span className="text-zinc-600 flex-shrink-0">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Screen: Alunos ──────────────────────────────────────── */

function AlunosContent() {
  const students = [
    { name: 'Teste', niche: 'Marketing', status: 'Concluído', date: '18/03' },
    { name: 'Carla Mendes', niche: 'Coaching', status: 'Concluído', date: '15/03' },
    { name: 'Rafael Costa', niche: 'Int. Artificial', status: 'Pendente', date: '12/03' },
  ]

  return (
    <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#0f0f13' }}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-white text-sm font-bold">Meus Alunos</p>
        <div className="flex gap-2">
          <button className="text-zinc-400 text-xs px-3 py-1.5 rounded border border-zinc-700 bg-transparent">
            Sincronizar
          </button>
          <button
            className="text-white text-xs px-3 py-1.5 rounded font-medium"
            style={{ backgroundColor: EMERALD }}
          >
            + Novo Aluno
          </button>
        </div>
      </div>

      <div className="bg-[#17171f] rounded-xl border border-zinc-800 overflow-hidden">
        <table className="w-full text-xs">
          <thead className="border-b border-zinc-800">
            <tr>
              {['Nome', 'Nicho', 'Status', 'Enviado', 'Ações'].map((h) => (
                <th key={h} className="text-left px-3 py-2.5 text-zinc-500 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr
                key={s.name}
                className={i < students.length - 1 ? 'border-b border-zinc-800/40' : ''}
              >
                <td className="px-3 py-2.5 text-zinc-200 font-medium">{s.name}</td>
                <td className="px-3 py-2.5 text-zinc-400">{s.niche}</td>
                <td className="px-3 py-2.5">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={
                      s.status === 'Concluído'
                        ? { color: EMERALD, backgroundColor: 'rgba(16,185,129,0.1)' }
                        : { color: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)' }
                    }
                  >
                    {s.status}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-zinc-500">{s.date}</td>
                <td className="px-3 py-2.5 text-zinc-500 space-x-2">
                  <span className="cursor-pointer hover:text-zinc-300">👁</span>
                  <span className="cursor-pointer hover:text-zinc-300">⚡</span>
                  <span className="cursor-pointer hover:text-zinc-300">📄</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="flex-1 bg-[#17171f] rounded-lg p-3 border border-zinc-800 text-center">
          <p className="text-white text-lg font-extrabold">3</p>
          <p className="text-zinc-500 text-xs">Total de alunos</p>
        </div>
        <div className="flex-1 bg-[#17171f] rounded-lg p-3 border border-zinc-800 text-center">
          <p className="text-lg font-extrabold" style={{ color: EMERALD }}>67%</p>
          <p className="text-zinc-500 text-xs">Dossiês concluídos</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Screen: Cadastro ────────────────────────────────────── */

function CadastroContent() {
  const fields = [
    { label: 'Nome completo', placeholder: 'Ex: Ana Paula Ferreira' },
    { label: 'Nicho de mercado', placeholder: 'Ex: Coaching de carreira executiva' },
    { label: 'Background / Experiência', placeholder: 'Ex: 10 anos como coach, ex-diretora de RH' },
    { label: 'Meta financeira mensal', placeholder: 'Ex: R$ 20.000' },
  ]

  return (
    <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#0f0f13' }}>
      <p className="text-white text-sm font-bold mb-4">Cadastrar Novo Aluno</p>

      <div className="bg-[#17171f] rounded-xl border border-zinc-800 p-4 space-y-3">
        {fields.map((f) => (
          <div key={f.label}>
            <label className="block text-zinc-400 text-xs font-medium mb-1">{f.label}</label>
            <div className="bg-[#0f0f13] border border-zinc-700 rounded-lg px-3 py-2 text-zinc-500 text-xs">
              {f.placeholder}
            </div>
          </div>
        ))}

        <div>
          <label className="block text-zinc-400 text-xs font-medium mb-1">
            Principais objetivos
          </label>
          <div className="bg-[#0f0f13] border border-zinc-700 rounded-lg px-3 py-2 text-zinc-500 text-xs h-14">
            O que quer alcançar nos próximos 6 meses?
          </div>
        </div>

        <button
          className="w-full text-white text-sm font-bold py-2.5 rounded-lg"
          style={{ backgroundColor: EMERALD }}
        >
          Salvar e Gerar Dossiê →
        </button>
      </div>
    </div>
  )
}

/* ─── Screen: Gerando ─────────────────────────────────────── */

function GerandoContent() {
  return (
    <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#0f0f13' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ backgroundColor: EMERALD, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="text-white text-sm font-bold">Gerando Dossiê — Ana Paula</p>
        <span className="ml-auto text-zinc-500 text-xs bg-[#17171f] px-2 py-0.5 rounded border border-zinc-800">
          Coaching de Carreira
        </span>
      </div>

      <div className="bg-[#17171f] rounded-xl border border-zinc-800 p-4 space-y-3 mb-4">
        <div>
          <p className="text-xs font-bold mb-1.5 uppercase tracking-wide" style={{ color: EMERALD }}>
            1. Parabéns!
          </p>
          <p className="text-zinc-300 text-xs leading-relaxed">
            Ana Paula, você dá os primeiros passos em uma jornada incrível. Como coach executiva com 10 anos de experiência, você já tem uma base sólida...
          </p>
        </div>

        <div className="border-t border-zinc-800/60 pt-3">
          <p className="text-xs font-bold mb-1.5 uppercase tracking-wide" style={{ color: EMERALD }}>
            2. Posicionamento Estratégico
          </p>
          <p className="text-zinc-300 text-xs leading-relaxed">
            <strong className="text-zinc-200">Arquétipo de marca:</strong> O Sábio — guia com clareza e dados.{' '}
            <strong className="text-zinc-200">Big Idea:</strong> &ldquo;Transforme sua metodologia em
            <span
              className="inline-block w-0.5 h-3 ml-0.5 align-middle rounded-full cursor-blink"
              style={{ backgroundColor: '#e4e4e7' }}
            />
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
          <span>Progresso da geração</span>
          <span style={{ color: EMERALD }}>45% — seção 2 de 6</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: '45%', backgroundColor: EMERALD }}
          />
        </div>
        <p className="text-zinc-600 text-xs mt-1.5">⏱ Estimativa: 2 minutos restantes</p>
      </div>
    </div>
  )
}

/* ─── Screen: Configurações ───────────────────────────────── */

function ConfigContent() {
  return (
    <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#0f0f13' }}>
      <p className="text-white text-sm font-bold mb-3">Configurações</p>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 w-fit">
        {['Expert & Visual', 'Cores do PDF', 'Base de Conhecimento'].map((tab, i) => (
          <div
            key={tab}
            className="px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer"
            style={
              i === 0
                ? { backgroundColor: EMERALD, color: '#fff' }
                : { backgroundColor: '#17171f', border: '1px solid #27272a', color: '#71717a' }
            }
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {/* Logo upload */}
        <div className="bg-[#17171f] rounded-xl border border-zinc-800 p-3">
          <p className="text-zinc-300 text-xs font-semibold mb-2">Logo da Plataforma</p>
          <div className="border-2 border-dashed border-zinc-700 rounded-lg p-3 text-center">
            <p className="text-zinc-500 text-xs">📁 Clique para fazer upload</p>
            <p className="text-zinc-600 text-xs mt-0.5">PNG, JPG ou SVG · máx 512KB</p>
          </div>
        </div>

        {/* Fields */}
        {[
          { label: 'Nicho de mercado', value: 'Marketing Digital e Inteligência Artificial' },
          { label: 'Promessa do programa', value: 'Resultados mensuráveis em 90 dias com IA' },
        ].map((f) => (
          <div key={f.label} className="bg-[#17171f] rounded-xl border border-zinc-800 p-3">
            <p className="text-zinc-300 text-xs font-semibold mb-1.5">{f.label}</p>
            <div className="bg-[#0f0f13] border border-zinc-700 rounded-lg px-3 py-2 text-zinc-300 text-xs">
              {f.value}
            </div>
          </div>
        ))}

        {/* Colors */}
        <div className="bg-[#17171f] rounded-xl border border-zinc-800 p-3">
          <p className="text-zinc-300 text-xs font-semibold mb-2">Cores do PDF</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Cor primária', hex: '#7c3aed', bg: '#7c3aed' },
              { label: 'Cor de destaque', hex: '#10b981', bg: '#10b981' },
              { label: 'Cor de texto', hex: '#111827', bg: '#111827' },
              { label: 'Fundo das seções', hex: '#f0fdf4', bg: '#f0fdf4' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded flex-shrink-0 border border-zinc-700"
                  style={{ backgroundColor: c.bg }}
                />
                <div>
                  <p className="text-zinc-400 text-xs leading-none">{c.label}</p>
                  <p className="text-zinc-600 font-mono" style={{ fontSize: 9 }}>{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-3 w-full text-white text-xs py-1.5 rounded-lg font-medium"
            style={{ backgroundColor: EMERALD }}
          >
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Screen: Dossiê Pronto ───────────────────────────────── */

function DossieContent() {
  const sections = [
    '1. Parabéns!',
    '2. Posicionamento Estratégico',
    '3. Duas Personas de Cliente Ideal',
    '4. Ideias de Produtos com IA',
    '5. Cálculo Reverso',
    '6. Funis de Venda',
    '7. Calendário de Conteúdo',
    '8. Escopos de Projeto',
    '9. Lista de Tarefas',
    '10. Ferramentas e Encerramento',
  ]

  return (
    <div className="flex-1 p-4 overflow-y-auto" style={{ backgroundColor: '#0f0f13' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white text-sm font-bold">Ana Paula — Coaching de Carreira</p>
          <p className="text-zinc-500 text-xs">Gerado em 4m 32s · 10 seções completas</p>
        </div>
        <button
          className="flex items-center gap-1.5 text-white text-xs px-3 py-2 rounded-lg font-medium"
          style={{ backgroundColor: EMERALD }}
        >
          📄 Baixar PDF
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {sections.slice(0, 6).map((s, i) => (
          <div
            key={s}
            className="bg-[#17171f] rounded-lg p-2.5 border border-zinc-800 flex items-start gap-2"
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5"
              style={{ backgroundColor: EMERALD, fontSize: 9 }}
            >
              {i + 1}
            </div>
            <p className="text-zinc-300 text-xs leading-tight">{s.replace(/^\d+\.\s/, '')}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#17171f] rounded-xl border border-zinc-800 p-3">
        <p
          className="text-xs font-bold uppercase tracking-wide mb-2"
          style={{ color: EMERALD }}
        >
          Preview — Posicionamento Estratégico
        </p>
        <p className="text-zinc-300 text-xs leading-relaxed italic mb-2">
          &ldquo;Transforme sua metodologia em um fluxo constante de clientes de alto valor.&rdquo;
        </p>
        <p className="text-zinc-400 text-xs">
          <span className="font-semibold text-zinc-300">Arquétipo:</span> O Sábio — guia clientes com clareza e dados.
        </p>
      </div>
    </div>
  )
}

/* ─── Main Section ────────────────────────────────────────── */

export default function SystemShowcaseSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + SCREENS.length) % SCREENS.length)
  const next = () => setCurrent((i) => (i + 1) % SCREENS.length)

  const screen = SCREENS[current]

  return (
    <section className="bg-[#fafaf8] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1 text-[#92650A] text-xs font-bold uppercase tracking-wider mb-4">
            Tour pelo Sistema
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-display">
            Conheça o sistema por dentro
          </h2>
          <p className="text-gray-600 text-lg">
            Do cadastro do aluno até o dossiê entregue — tudo em uma plataforma.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={
                i === current
                  ? { backgroundColor: EMERALD, color: '#fff' }
                  : { backgroundColor: 'rgba(0,0,0,0.06)', color: '#6b7280' }
              }
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Screen description */}
        <p className="text-center text-gray-500 text-sm mb-6">{screen.desc}</p>

        {/* Browser frame */}
        <div className="bg-[#1a1a2e] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40">
          {/* Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-[#17171f]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-2 bg-zinc-800/60 rounded px-3 py-1 text-zinc-500 text-xs truncate">
              nexia-planning.vercel.app/{screen.url}
            </div>
          </div>

          {/* Content */}
          <div className="flex" style={{ height: 360 }}>
            <Sidebar active={screen.id} />
            <div className="flex-1 overflow-hidden">
              {current === 0 && <DashboardContent />}
              {current === 1 && <AlunosContent />}
              {current === 2 && <CadastroContent />}
              {current === 3 && <GerandoContent />}
              {current === 4 && <ConfigContent />}
              {current === 5 && <DossieContent />}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
            aria-label="Tela anterior"
          >
            ←
          </button>

          <div className="flex gap-2">
            {SCREENS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{ backgroundColor: i === current ? EMERALD : '#d1d5db' }}
                aria-label={`Ir para tela ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
            aria-label="Próxima tela"
          >
            →
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          Acesse o sistema real e teste gratuitamente →{' '}
          <a
            href="https://nexia-planning.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#92650A] underline hover:text-[#C9A84C] transition-colors"
          >
            nexia-planning.vercel.app
          </a>
        </p>
      </div>
    </section>
  )
}
