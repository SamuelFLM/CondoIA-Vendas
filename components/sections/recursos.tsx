"use client"

import { Building, MessageCircle, Shield, Clock } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { FeatureCard } from "@/components/feature-card"

export function RecursosSection() {
  return (
    <section id="recursos" className="py-16 md:py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-purple-600 text-white border-purple-600 dark:bg-purple-500 dark:text-white dark:border-purple-500">
              Recursos
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
              Tudo que você precisa para gerenciar seu condomínio
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nossa plataforma oferece recursos completos para facilitar a gestão do seu condomínio com a praticidade do
              WhatsApp.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <FeatureCard
              icon={<MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
              title="Atendimento 24/7"
              description="Assistente de IA disponível a qualquer hora para atender moradores e visitantes."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureCard
              icon={<Building className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
              title="Gestão de Ocorrências"
              description="Registro e acompanhamento de ocorrências e solicitações dos moradores."
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
              title="Controle de Acesso"
              description="Gerenciamento de visitantes e prestadores de serviço com segurança."
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
              title="Agendamento de Áreas Comuns"
              description="Reserva de espaços como salão de festas, churrasqueira e academia."
            />
          </FadeIn>
          <FadeIn delay={0.5}>
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              }
              title="Gestão Financeira"
              description="Controle de pagamentos, taxas condominiais e prestação de contas."
            />
          </FadeIn>
          <FadeIn delay={0.6}>
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              }
              title="Comunicados e Avisos"
              description="Envio de comunicados importantes para todos os moradores via WhatsApp."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
