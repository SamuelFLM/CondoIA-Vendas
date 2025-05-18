"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <GlassCard className="h-full p-6" hoverEffect>
        <div className="p-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4 md:mb-5 dark:bg-purple-900/30">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-medium mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{description}</p>
      </GlassCard>
    </motion.div>
  )
}
