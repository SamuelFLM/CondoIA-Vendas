"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { Carousel } from "@/components/ui/carousel"

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 overflow-hidden bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-purple-600 text-white border-purple-600 dark:bg-purple-600 dark:text-white dark:border-purple-600">
              Como Funciona
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
              Simples e eficiente
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conheça como nossa solução transforma a gestão do seu condomínio em poucos passos.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-8 mt-12 md:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <span className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-medium">Cadastre seu condomínio</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Registre seu condomínio em nossa plataforma com informações básicas e personalize as configurações.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <span className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-medium">Adicione os moradores</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Cadastre os moradores com seus números de WhatsApp para que possam interagir com o assistente.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <span className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-medium">Comece a usar</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                O assistente de IA já está pronto para atender solicitações, registrar ocorrências e facilitar a
                comunicação.
              </p>
            </div>
          </FadeIn>
        </div>
        <ParallaxSection className="mt-16 md:mt-20">
          <FadeIn direction="up" delay={0.4}>
            <div className="relative w-full max-w-4xl mx-auto">
              <Carousel
                images={[
                  {
                    src: "/dashboard-interface.png",
                    alt: "Dashboard de gerenciamento de condomínio",
                    caption: "Interface intuitiva e moderna",
                    description:
                      "Nossa plataforma foi desenvolvida pensando na facilidade de uso, com design moderno inspirado nas melhores interfaces digitais.",
                  },
                  {
                    src: "/mobile-app-interface.png",
                    alt: "Aplicativo móvel para moradores",
                    caption: "Acesso em qualquer dispositivo",
                    description:
                      "Acesse todas as funcionalidades pelo celular, tablet ou computador, com a mesma experiência de usuário.",
                  },
                  {
                    src: "/chat-interface.png",
                    alt: "Interface de chat com IA",
                    caption: "Assistente de IA integrado",
                    description:
                      "Nosso assistente de IA responde dúvidas e solicitações dos moradores a qualquer hora do dia.",
                  },
                  {
                    src: "/reports-interface.png",
                    alt: "Interface de relatórios e análises",
                    caption: "Relatórios detalhados",
                    description:
                      "Visualize dados importantes do seu condomínio com gráficos e estatísticas em tempo real.",
                  },
                ]}
              />
            </div>
          </FadeIn>
        </ParallaxSection>
      </div>
    </section>
  )
}
