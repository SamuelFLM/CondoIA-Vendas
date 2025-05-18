"use client"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { WhatsAppButton } from "@/components/whatsapp-config"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  plan: string
}

export function PricingCard({ title, price, description, features, popular, plan }: PricingCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
      <GlassCard
        className={`h-full flex flex-col ${popular ? "border-2 border-purple-600 dark:border-purple-400" : ""}`}
        hoverEffect
      >
        {popular && (
          <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-purple-600 px-3 py-1 text-xs font-medium text-white dark:bg-purple-500">
            Mais Popular
          </div>
        )}
        <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg md:text-xl font-medium">{title}</h3>
          <div className="mt-3 md:mt-4 text-2xl md:text-4xl font-bold">
            {price}
            <span className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">/mês</span>
          </div>
          <p className="mt-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <div className="p-4 md:p-6 flex-grow">
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-purple-600 dark:text-purple-400"
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
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 md:p-6 pt-0 mt-auto">
          <WhatsAppButton variant="primary" fullWidth plan={plan} className="py-3 md:py-4 text-sm md:text-base">
            Contratar Agora
          </WhatsAppButton>
        </div>
      </GlassCard>
    </motion.div>
  )
}
