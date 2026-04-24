import { Palette, BookMarked, Wand2, Bot } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const FEATURES: { Icon: LucideIcon; text: string }[] = [
  { Icon: Palette,     text: 'Seu nome, sua logo, suas cores no PDF' },
  { Icon: BookMarked,  text: 'Até 500K caracteres da sua metodologia injetados em cada geração' },
  { Icon: Wand2,       text: 'Prompt personalizado: o dossiê soa exatamente como você escreveria' },
  { Icon: Bot,         text: 'Funciona com Claude, GPT-4o ou Gemini — você escolhe' },
]

export default function WhiteLabelSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1 text-[#92650A] text-xs font-bold uppercase tracking-wider mb-4">
            100% Você
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-display">
            O aluno nunca sabe que é uma plataforma terceirizada.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            O sistema aprende a sua metodologia. Você injeta seus materiais,
            frameworks e linguagem. O aluno recebe um documento que parece ter
            sido escrito por você — porque, na prática, foi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {FEATURES.map(({ Icon, text }) => (
            <div
              key={text}
              className="group flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-[#C9A84C]/50 hover:bg-amber-50/30 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors duration-200">
                <Icon size={18} strokeWidth={1.5} className="text-[#C9A84C]" aria-hidden="true" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed self-center">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
