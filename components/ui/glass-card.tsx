import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: "sm" | "md" | "lg"
  border?: boolean
  hoverEffect?: boolean
}

export function GlassCard({ children, className, blur = "md", border = true, hoverEffect = false }: GlassCardProps) {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  }

  return (
    <div
      className={cn(
        "bg-white/70 dark:bg-gray-900/70",
        blurMap[blur],
        border && "border border-white/20 dark:border-gray-800/30",
        "rounded-2xl shadow-xl",
        hoverEffect && "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  )
}
