"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AppleButton } from "@/components/ui/apple-button"
import Image from "next/image"

interface CarouselProps {
  images: {
    src: string
    alt: string
    caption?: string
    description?: string
  }[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
}

export function Carousel({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return

    const timer = setInterval(() => {
      handleNext()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, currentIndex, isPaused, images.length])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-2xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[16/9]"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-3 md:p-6 lg:p-8 text-white">
              {images[currentIndex].caption && (
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-1 md:mb-2">
                  {images[currentIndex].caption}
                </h3>
              )}
              {images[currentIndex].description && (
                <p className="text-xs sm:text-sm md:text-base max-w-xl line-clamp-3 md:line-clamp-none">
                  {images[currentIndex].description}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <>
          <AppleButton
            variant="text"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-1 sm:p-2 rounded-full"
            onClick={handlePrevious}
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </AppleButton>
          <AppleButton
            variant="text"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-1 sm:p-2 rounded-full"
            onClick={handleNext}
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </AppleButton>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const CarouselContent = () => {
  return null
}
export const CarouselItem = () => {
  return null
}
export const CarouselPrevious = () => {
  return null
}
export const CarouselNext = () => {
  return null
}
