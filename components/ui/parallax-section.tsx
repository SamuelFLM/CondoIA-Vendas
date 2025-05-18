"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({ children, className = "", speed = 0.2, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const { scrollY } = useScroll()

  // Calcula a posição do elemento quando a página carrega ou redimensiona
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const setValues = () => {
      setElementTop(element.offsetTop)
      setClientHeight(window.innerHeight)
    }

    setValues()
    window.addEventListener("resize", setValues)

    return () => {
      window.removeEventListener("resize", setValues)
    }
  }, [])

  const baseOffset = direction === "up" ? -speed : speed
  const yOffset = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [baseOffset * 100, -baseOffset * 100],
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: yOffset }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
