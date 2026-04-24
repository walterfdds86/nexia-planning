// components/landing/SocialProofSection.tsx
export default function SocialProofSection() {
  return (
    <section className="bg-[#0f0f13] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-violet-400 text-sm font-bold uppercase tracking-wider">
          Prova Social
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-4">
          Veja na prática como fica
        </h2>
        <p className="text-zinc-500 text-sm mb-10">
          Prints do sistema real e dossiês gerados
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#17171f] rounded-2xl border border-zinc-800 h-48 flex items-center justify-center"
            >
              <p className="text-zinc-600 text-sm">
                [Print do sistema — em breve]
              </p>
            </div>
          ))}
        </div>

        <p className="text-zinc-600 text-xs mt-6">
          Depoimentos e prints reais serão adicionados em breve.
        </p>
      </div>
    </section>
  )
}
