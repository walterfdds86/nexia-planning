import { Check, ShieldCheck, Shield } from 'lucide-react'
import CtaButton from './CtaButton'

interface PricingSectionProps {
  purchaseUrl: string
  demoUrl: string
}

const INCLUDES = [
  'Sessão de implementação guiada de 1h30',
  'Configuração completa: logo, cores e nome da sua plataforma',
  'Sua metodologia e frameworks incorporados',
  'Treinamento completo de uso',
  'Suporte direto por 30 dias após a entrega',
  'Acesso ao sistema para sempre — sem mensalidade',
]

export default function PricingSection({ purchaseUrl, demoUrl }: PricingSectionProps) {
  return (
    <section className="bg-[#001F35] px-6 py-24">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1 text-[#E0C870] text-xs font-bold uppercase tracking-wider mb-4">
            Investimento
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4 font-display">
            Pagamento único.<br className="hidden md:block" /> O sistema é seu para sempre.
          </h2>
          <p className="text-zinc-400 text-lg max-w-sm mx-auto">
            Sem mensalidade. Sem renovação. Uma vez implementado, a plataforma roda com a sua marca indefinidamente.
          </p>
        </div>

        <div className="rounded-2xl border border-[#C9A84C]/20 overflow-hidden shadow-2xl shadow-black/30">
          {/* Gold accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#C9A84C] to-[#D4B85C]" />

          <div className="bg-[#002848] p-8">
            {/* Price block */}
            <div className="text-center mb-8 pb-8 border-b border-white/8">
              <p className="text-zinc-500 text-sm mb-2">Implementação completa</p>
              <div className="flex items-end justify-center gap-2 mb-1">
                <span className="text-zinc-400 text-xl font-medium mb-1.5">12x</span>
                <span className="text-6xl font-extrabold text-white font-display leading-none">R$250</span>
              </div>
              <p className="text-[#C9A84C] text-sm font-semibold mt-3">
                ou R$2.700 à vista — economia de R$300
              </p>
            </div>

            {/* What's included */}
            <ul className="space-y-3.5 mb-8">
              {INCLUDES.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check size={16} strokeWidth={2.5} className="text-[#C9A84C] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* No monthly fee highlight */}
            <div className="flex items-start gap-3 bg-[#C9A84C]/8 border border-[#C9A84C]/20 rounded-xl px-4 py-3.5 mb-8">
              <Shield size={16} strokeWidth={1.5} className="text-[#C9A84C] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[#E0C870] text-sm leading-relaxed">
                <span className="font-bold">Zero mensalidade</span> depois da implementação. O sistema roda com a sua marca para sempre.
              </p>
            </div>

            <CtaButton href={purchaseUrl} label="Quero implementar agora" />

            <p className="text-zinc-500 text-xs text-center mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} strokeWidth={1.5} aria-hidden="true" />
              <span>
                Ainda em dúvida?{' '}
                <a href={demoUrl} className="text-[#C9A84C] hover:underline">
                  Teste o demo gratuitamente primeiro
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
