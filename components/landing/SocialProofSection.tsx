// components/landing/SocialProofSection.tsx
// TODO: Replace DOSSIER_EXAMPLE_URL with the actual Google Drive or hosted PDF link
import { FileDown } from 'lucide-react'

const DOSSIER_EXAMPLE_URL = '#'

const EMERALD = '#10b981'
const EMERALD_DARK = '#059669'

function PdfCover() {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl shadow-gray-300/60 flex-shrink-0"
      style={{ width: 200 }}
    >
      {/* Top green accent bar */}
      <div className="h-1.5 flex-shrink-0" style={{ backgroundColor: EMERALD }} />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-7 text-center gap-3">
        {/* Fingerprint/lock icon — replicates real PDF */}
        <div
          className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-2xl flex-shrink-0"
          style={{ boxShadow: `0 0 0 3px ${EMERALD}` }}
        >
          🔐
        </div>

        {/* Spaced title text matching PDF */}
        <div className="space-y-0.5 mt-1">
          <p className="text-gray-700 text-xs font-medium" style={{ letterSpacing: '0.3em' }}>
            D O S S I Ê
          </p>
          <p className="text-xs font-medium" style={{ letterSpacing: '0.15em', color: EMERALD }}>
            ESTRATÉGICO
          </p>
        </div>

        <div className="w-10 border-t border-gray-200" />

        {/* Expert name */}
        <div>
          <p className="text-gray-900 text-sm font-extrabold leading-tight tracking-wide">
            WALTER<br />FERREIRA
          </p>
          <p className="text-xs font-medium mt-1" style={{ color: EMERALD }}>
            Estratégias Digitais
          </p>
        </div>

        <div className="w-10 border-t border-gray-200" />

        {/* Student info */}
        <div>
          <p className="text-gray-400 text-xs">Elaborado para</p>
          <p className="text-gray-800 text-sm font-bold mt-0.5">Ana Paula</p>
          <p className="text-xs mt-0.5" style={{ color: EMERALD }}>
            Coaching de Carreira
          </p>
          <p className="text-gray-300 text-xs mt-1">Versão 1 — 24/04/2026</p>
        </div>
      </div>

      {/* Footer matching PDF */}
      <div className="px-4 py-2 border-t border-gray-100">
        <p className="text-gray-300 text-center" style={{ fontSize: 9 }}>
          Estratégias Digitais — Direitos Reservados — 2026
        </p>
      </div>

      {/* Bottom green accent bar */}
      <div className="h-1.5 flex-shrink-0" style={{ backgroundColor: EMERALD }} />
    </div>
  )
}

function PdfContentPage() {
  const rows = [
    { scenario: 'Conservador', ticket: 'R$1.500', clients: '7', revenue: 'R$10.500', bg: 'white' },
    { scenario: 'Realista', ticket: 'R$2.500', clients: '4', revenue: 'R$10.000', bg: '#f0fdf4' },
    { scenario: 'Otimista', ticket: 'R$5.000', clients: '2', revenue: 'R$10.000', bg: 'white' },
  ]

  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col shadow-xl shadow-gray-300/40">
      {/* Page header — matches real PDF header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0"
            style={{ boxShadow: `0 0 0 1.5px ${EMERALD}` }}
          >
            <span style={{ fontSize: 11 }}>🔐</span>
          </div>
          <div>
            <p className="text-gray-800 font-bold leading-none" style={{ fontSize: 10 }}>
              DOSSIÊ ESTRATÉGICO
            </p>
            <p className="text-gray-400" style={{ fontSize: 9 }}>Walter Ferreira</p>
          </div>
        </div>
        <p className="text-gray-300" style={{ fontSize: 9 }}>2/6</p>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {/* Section 2 — POSICIONAMENTO ESTRATÉGICO */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: EMERALD }} />
            <h3 className="text-gray-900 font-bold uppercase tracking-wide" style={{ fontSize: 10 }}>
              2. Posicionamento Estratégico
            </h3>
          </div>
          <div className="space-y-1.5" style={{ fontSize: 11, lineHeight: '1.5' }}>
            <p>
              <span className="font-bold text-gray-800">Arquétipo de marca:</span>{' '}
              <span className="text-gray-600">
                O Sábio — conhecimento e experiência para guiar decisões informadas.
              </span>
            </p>
            <p>
              <span className="font-bold text-gray-800">Big Idea:</span>{' '}
              <span className="text-gray-600 italic">
                &ldquo;Transforme sua estratégia em um fluxo constante de leads qualificados com IA personalizada.&rdquo;
              </span>
            </p>
            <p>
              <span className="font-bold text-gray-800">Headline:</span>{' '}
              <span className="text-gray-600">
                &ldquo;Aumente seu faturamento com inteligência em marketing.&rdquo;
              </span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Section 5 — CÁLCULO REVERSO */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: EMERALD }} />
            <h3 className="text-gray-900 font-bold uppercase tracking-wide" style={{ fontSize: 10 }}>
              5. Cálculo Reverso — Meta R$10.000
            </h3>
          </div>
          <table className="w-full border-collapse" style={{ fontSize: 11 }}>
            <thead>
              <tr style={{ backgroundColor: '#111827', color: 'white' }}>
                <th className="text-left px-2 py-1.5 font-semibold">Cenário</th>
                <th className="px-2 py-1.5 font-semibold text-center">Ticket</th>
                <th className="px-2 py-1.5 font-semibold text-center">Clientes</th>
                <th className="px-2 py-1.5 font-semibold text-center" style={{ color: EMERALD }}>
                  Faturamento
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.scenario}
                  className="border-b border-gray-100"
                  style={{ backgroundColor: row.bg }}
                >
                  <td className="px-2 py-1.5 text-gray-700">{row.scenario}</td>
                  <td className="px-2 py-1.5 text-center text-gray-500">{row.ticket}</td>
                  <td className="px-2 py-1.5 text-center text-gray-500">{row.clients}</td>
                  <td className="px-2 py-1.5 text-center font-semibold" style={{ color: EMERALD_DARK }}>
                    {row.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Page footer */}
      <div className="flex justify-between px-4 py-2 border-t border-gray-100">
        <p className="text-gray-300" style={{ fontSize: 9 }}>
          Estratégias Digitais — Direitos Reservados — 2026
        </p>
        <p className="text-gray-300" style={{ fontSize: 9 }}>Confidencial</p>
      </div>
    </div>
  )
}

export default function SocialProofSection() {
  return (
    <section className="bg-[#f5f4f0] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1 text-[#92650A] text-xs font-bold uppercase tracking-wider mb-4">
            Produto Real
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-display">
            Veja na prática como fica
          </h2>
          <p className="text-gray-600 text-lg">
            O dossiê que o seu aluno vai receber — gerado em 5 minutos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Left: PDF Cover */}
          <div className="flex flex-col items-center gap-3 flex-shrink-0 mx-auto md:mx-0">
            <PdfCover />
            <span className="text-gray-500 text-xs flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                style={{ backgroundColor: EMERALD }}
              />
              Capa do dossiê
            </span>
          </div>

          {/* Right: PDF Content */}
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            <PdfContentPage />
            <span className="text-gray-500 text-xs flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                style={{ backgroundColor: EMERALD }}
              />
              Conteúdo real gerado pela IA com a metodologia do mentor
            </span>
          </div>
        </div>

        {/* Download CTA */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <a
            href={DOSSIER_EXAMPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white border-2 border-[#C9A84C]/40 text-[#92650A] hover:border-[#C9A84C] hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-sm"
          >
            <FileDown size={16} strokeWidth={1.5} aria-hidden="true" />
            Baixar dossiê de exemplo (PDF)
          </a>
          <p className="text-gray-400 text-xs">Documento real gerado pela plataforma</p>
        </div>
      </div>
    </section>
  )
}
