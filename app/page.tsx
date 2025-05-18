"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { RecursosSection } from "@/components/sections/recursos"
import { ComoFuncionaSection } from "@/components/sections/como-funciona"
import { DashboardSection } from "@/components/sections/dashboard"
import { DepoimentosSection } from "@/components/sections/depoimentos"
import { PrecosSection } from "@/components/sections/precos"
import { ContatoSection } from "@/components/sections/contato"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <RecursosSection />
        <ComoFuncionaSection />
        <DashboardSection />
        <DepoimentosSection />
        <PrecosSection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  )
}
