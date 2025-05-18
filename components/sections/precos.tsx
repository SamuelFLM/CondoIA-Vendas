"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { PricingCard } from "@/components/pricing-card"

export function PrecosSection() {
  return (
    <section id="precos" className="py-16 md:py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-purple-600 text-white border-purple-600 dark:bg-purple-600 dark:text-white dark:border-purple-600">
              Preços
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu condomínio e comece a transformar a gestão agora mesmo.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <PricingCard
              title="Plano Básico"
              price="R$ 99"
              description="Ideal para condomínios menores, com até 50 unidades."
              features={[
                "Assistente de IA no WhatsApp",
                "Gestão de ocorrências",
                "Controle de acesso",
                "Suporte por e-mail",
              ]}
              plan="Básico"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <PricingCard
              title="Plano Premium"
              price="R$ 199"
              description="Para condomínios médios, com até 200 unidades."
              features={[
                "Todos os recursos do plano básico",
                "Agendamento de áreas comuns",
                "Gestão financeira",
                "Suporte prioritário",
              ]}
              popular
              plan="Premium"
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <PricingCard
              title="Plano Master"
              price="R$ 299"
              description="Para condomínios grandes, com mais de 200 unidades."
              features={[
                "Todos os recursos do plano premium",
                "Comunicados e avisos",
                "Relatórios personalizados",
                "Suporte VIP",
              ]}
              plan="Master"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
