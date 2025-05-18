"use client"

import type React from "react"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "text"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  iconPosition?: "left" | "right"
  fullWidth?: boolean
  className?: string
}

export function AppleButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}: AppleButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantStyles = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-600 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-200 border border-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700",
    outline:
      "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-200 border border-gray-200 dark:text-white dark:hover:bg-gray-800 dark:border-gray-700",
    text: "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-800",
  }

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 h-8",
    md: "text-sm px-4 py-2 h-10",
    lg: "text-base px-6 py-3 h-12",
  }

  const iconSpacing = {
    left: icon ? "gap-2" : "",
    right: icon ? "gap-2 flex-row-reverse" : "",
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        iconSpacing[iconPosition],
        fullWidth ? "w-full" : "",
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
