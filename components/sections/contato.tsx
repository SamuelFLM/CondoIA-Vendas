"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { GlassCard } from "@/components/ui/glass-card"
import { ContactForm } from "@/components/contact-form"

export function ContatoSection() {
  return (
    <section id="contato" className="py-16 md:py-24 overflow-hidden bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-purple-600 text-white border-purple-600 dark:bg-purple-600 dark:text-white dark:border-purple-600">
              Contato
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">Fale conosco</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Entre em contato para tirar suas dúvidas ou solicitar uma demonstração da plataforma.
            </p>
          </div>
        </FadeIn>
        <div className="grid gap-8 md:gap-12 mt-12 lg:grid-cols-2">
          <FadeIn>
            <ContactForm />
          </FadeIn>
          <FadeIn direction="right" delay={0.2} className="space-y-4 md:space-y-6">
            <GlassCard className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-medium">Telefone</h3>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">+55 (11) 4002-8922</p>
            </GlassCard>
            <GlassCard className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-medium">Email</h3>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">contato@condoai.com.br</p>
            </GlassCard>
            <GlassCard className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-medium">Endereço</h3>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
              </p>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
