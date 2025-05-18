"use client"

import Link from "next/link"
import { Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-gray-800/50 dark:bg-gray-900/80">
      <div className="container flex flex-col items-center justify-between p-6 md:flex-row">
        <div className="flex items-center gap-2 font-medium text-xl mb-4 md:mb-0">
          <Building className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <span className="text-purple-600 dark:text-purple-400">CondoAI</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:mt-0">
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
          >
            Termos de Uso
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300 dark:hover:text-purple-400"
          >
            Política de Privacidade
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0 md:ml-4">
            © 2023 CondoAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
