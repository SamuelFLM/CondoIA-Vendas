"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)

    // Configuração dos círculos
    const circles = []
    const colors = [
      "rgba(147, 51, 234, 0.5)",
      "rgba(168, 85, 247, 0.4)",
      "rgba(192, 132, 252, 0.3)",
      "rgba(216, 180, 254, 0.2)",
    ]
    const count = 4
    const minRadius = Math.min(width, height) * 0.15
    const maxRadius = Math.min(width, height) * 0.4

    for (let i = 0; i < count; i++) {
      circles.push({
        x: width / 2,
        y: height / 2,
        radius: minRadius + (maxRadius - minRadius) * (i / count),
        color: colors[i % colors.length],
        angle: i * (Math.PI / 2),
        speed: 0.002 + i * 0.0005,
        offset: 50 + i * 30,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Desenha os círculos
      circles.forEach((circle) => {
        circle.angle += circle.speed

        const offsetX = Math.cos(circle.angle) * circle.offset
        const offsetY = Math.sin(circle.angle) * circle.offset

        const gradient = ctx.createRadialGradient(
          circle.x + offsetX,
          circle.y + offsetY,
          0,
          circle.x + offsetX,
          circle.y + offsetY,
          circle.radius,
        )

        gradient.addColorStop(0, circle.color)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x + offsetX, circle.y + offsetY, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 opacity-50 ${className}`} />
}
