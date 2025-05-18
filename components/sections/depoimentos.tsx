"use client"

import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { GlassCard } from "@/components/ui/glass-card"

export function DepoimentosSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 overflow-hidden bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-purple-600 text-white border-purple-600 dark:bg-purple-600 dark:text-white dark:border-purple-600">
              Depoimentos
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
              O que dizem sobre nós
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Veja o que nossos clientes estão falando sobre a experiência de usar nossa plataforma.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/diverse-profile-avatars.png"
                  alt="Avatar do cliente"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">João Silva</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Síndico</p>
                </div>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">
                "A plataforma facilitou muito a comunicação com os moradores e a gestão das ocorrências. Recomendo!"
              </p>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/woman-profile-avatar.png"
                  alt="Avatar do cliente"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">Maria Souza</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Moradora</p>
                </div>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">
                "O assistente de IA no WhatsApp é muito prático e rápido. Consigo resolver tudo sem precisar ligar para
                a administração."
              </p>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.3}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/man-profile-avatar.png"
                  alt="Avatar do cliente"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">Carlos Pereira</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Conselheiro</p>
                </div>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">
                "A gestão financeira ficou muito mais transparente e organizada com a plataforma. Todos os relatórios
                estão disponíveis em um só lugar."
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
