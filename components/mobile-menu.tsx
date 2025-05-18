"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AppleButton } from "@/components/ui/apple-button"
import { motion, AnimatePresence } from "framer-motion"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Impedir rolagem quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="md:hidden">
      <AppleButton variant="text" onClick={toggleMenu} aria-label="Menu" className="p-2">
        <Menu className="h-6 w-6" />
      </AppleButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 font-medium text-xl">
                <span className="text-purple-600 dark:text-purple-400">CondoAI</span>
              </div>
              <AppleButton variant="text" onClick={closeMenu} aria-label="Fechar menu" className="p-2">
                <X className="h-6 w-6" />
              </AppleButton>
            </div>
            <motion.nav
              className="container flex-1 mt-8 flex flex-col gap-6 overflow-auto pb-20"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="#recursos"
                  className="block py-4 text-lg font-medium text-gray-800 hover:text-purple-600 hover:bg-purple-100/50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-purple-900/30 rounded-xl px-4 transition-all"
                  onClick={closeMenu}
                >
                  Recursos
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="#como-funciona"
                  className="block py-4 text-lg font-medium text-gray-800 hover:text-purple-600 hover:bg-purple-100/50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-purple-900/30 rounded-xl px-4 transition-all"
                  onClick={closeMenu}
                >
                  Como Funciona
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="#depoimentos"
                  className="block py-4 text-lg font-medium text-gray-800 hover:text-purple-600 hover:bg-purple-100/50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-purple-900/30 rounded-xl px-4 transition-all"
                  onClick={closeMenu}
                >
                  Depoimentos
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="#precos"
                  className="block py-4 text-lg font-medium text-gray-800 hover:text-purple-600 hover:bg-purple-100/50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-purple-900/30 rounded-xl px-4 transition-all"
                  onClick={closeMenu}
                >
                  Preços
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-8">
                <Link href="#contato" onClick={closeMenu}>
                  <AppleButton variant="outline" fullWidth className="py-4 text-base">
                    Fale Conosco
                  </AppleButton>
                </Link>
                <Link href="#contato" onClick={closeMenu}>
                  <AppleButton variant="primary" fullWidth className="py-4 text-base">
                    Agendar Demonstração
                  </AppleButton>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
