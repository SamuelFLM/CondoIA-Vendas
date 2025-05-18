"use client"

import Link from "next/link"
import { Building } from "lucide-react"
import { AppleButton } from "@/components/ui/apple-button"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-gray-800/50 dark:bg-gray-900/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-medium text-xl">
          <Building className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <span className="text-purple-600 dark:text-purple-400">CondoAI</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#recursos"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
          >
            Recursos
          </Link>
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
          >
            Como Funciona
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
          >
            Depoimentos
          </Link>
          <Link
            href="#precos"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
          >
            Preços
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contato" className="hidden md:block">
            <AppleButton variant="outline">Fale Conosco</AppleButton>
          </Link>
          <Link href="#contato" className="hidden md:block">
            <AppleButton variant="primary">Demonstração</AppleButton>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
