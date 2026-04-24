'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'O dossiê vai soar como eu, ou vai parecer texto genérico de IA?',
    a: 'Você injeta sua metodologia, seus frameworks e exemplos de como você escreve — são até 500 mil caracteres de contexto. O sistema usa isso como base para cada geração. Quanto mais material você inserir, mais próximo do seu estilo o output fica. A maioria dos mentores relata que precisou ajustar mínimos detalhes ou nada na primeira geração.',
  },
  {
    q: 'Como minha metodologia entra no sistema?',
    a: 'Na seção de Configurações, você cola seus materiais — textos, frameworks, scripts de atendimento, exemplos de como você escreve planos. Sem código, sem formulário complicado: é só colar o conteúdo e salvar. A IA usa esse contexto automaticamente em todos os dossiês gerados.',
  },
  {
    q: 'E se a IA inventar informações que o aluno não forneceu?',
    a: 'O dossiê é gerado exclusivamente com base nos dados preenchidos no cadastro do aluno — nicho, objetivos, desafios e metas financeiras. A IA estrutura e articula essas informações com a sua metodologia; ela não cria perfis do zero. Nenhuma informação é inventada sem origem nos dados do formulário.',
  },
  {
    q: 'Preciso saber programar ou contratar alguém técnico?',
    a: 'Não. A configuração inteira é feita conversando com a IA em português, direto no painel. Em menos de 1 hora você tem a plataforma com seu nome, logo, cores e metodologia configurados — sem tocar em uma linha de código.',
  },
  {
    q: 'Os dados dos meus alunos ficam seguros?',
    a: 'Sim. Os dados são armazenados com segurança e não são utilizados para treinar modelos de IA. Você tem controle total sobre o que entra e o que sai da plataforma. Os dossiês gerados pertencem exclusivamente a você e ao seu aluno.',
  },
  {
    q: 'Qual é o custo depois do acesso de teste?',
    a: 'O acesso demo é gratuito e sem cartão de crédito — você já pode gerar seu primeiro dossiê real agora. O custo de API por documento gerado fica entre R$0,50 e R$2,00, dependendo do modelo de IA escolhido. Os planos da plataforma são apresentados dentro do sistema após o período de testes.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-1 text-[#92650A] text-xs font-bold uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-display">
            Suas perguntas respondidas
          </h2>
          <p className="text-gray-600 text-lg">
            Antes de testar, é normal ter dúvidas. Aqui estão as mais comuns.
          </p>
        </div>

        <div className="space-y-2">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C9A84C]/40 bg-amber-50/20'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-gray-900 font-semibold text-sm md:text-base leading-snug">
                    {q}
                  </span>
                  <span className="shrink-0">
                    {isOpen ? (
                      <Minus
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#C9A84C]"
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        size={16}
                        strokeWidth={1.5}
                        className="text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
