"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { GlassCard } from "@/components/ui/glass-card"
import { AppleButton } from "@/components/ui/apple-button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32">
      <AnimatedGradient />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:grid-cols-2 items-center">
          <FadeIn className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl xl:text-6xl/none">
                Gerenciamento de Condomínio com{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300 dark:from-purple-300 dark:to-purple-600">
                  Inteligência Artificial
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
                Simplifique a administração do seu condomínio com nosso assistente de IA no WhatsApp. Atendimento 24/7,
                respostas instantâneas e gestão eficiente.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contato" className="w-full sm:w-auto">
                <AppleButton
                  variant="primary"
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full py-4 text-base"
                >
                  Agendar Demonstração
                </AppleButton>
              </Link>
              <Link href="#como-funciona" className="w-full sm:w-auto">
                <AppleButton variant="secondary" size="lg" className="gap-1 w-full py-4 text-base">
                  Saiba Mais <ChevronRight className="h-4 w-4" />
                </AppleButton>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-600 dark:text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Fácil de usar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-600 dark:text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Resposta imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-purple-600 dark:text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Seguro</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2} className="flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-[400px] aspect-square"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Image
                src="/placeholder-uxz75.png"
                alt="Assistente de IA para condomínio no WhatsApp"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl"
                priority
              />
              <motion.div
                className="absolute -bottom-6 -right-6 max-w-[200px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <GlassCard className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-600 rounded-full p-2 dark:bg-purple-500 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Assistente IA</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Resposta em segundos</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
