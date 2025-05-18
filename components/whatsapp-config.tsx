"use client"

import type React from "react"
import { AppleButton } from "@/components/ui/apple-button"

// Configuração para links de WhatsApp
// Você pode facilmente alterar o número de telefone e a mensagem padrão aqui
export const whatsappConfig = {
  phoneNumber: "5511999999999", // Formato: código do país + DDD + número (sem espaços ou caracteres especiais)
  defaultMessage: "Olá! Gostaria de saber mais sobre o serviço de gerenciamento de condomínio com IA.",
}

// Função para gerar link do WhatsApp com mensagem personalizada
export function generateWhatsAppLink(message?: string, plan?: string) {
  const baseMessage = message || whatsappConfig.defaultMessage
  const planMessage = plan ? `Estou interessado no plano ${plan}.` : ""
  const fullMessage = `${baseMessage} ${planMessage}`.trim()

  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(fullMessage)}`
}

// Componente de botão que redireciona para o WhatsApp
export function WhatsAppButton({
  children,
  message,
  plan,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  message?: string
  plan?: string
  className?: string
}) {
  const handleClick = () => {
    const whatsappLink = generateWhatsAppLink(message, plan)
    window.open(whatsappLink, "_blank")
  }

  return (
    <AppleButton onClick={handleClick} className={className} {...props}>
      {children}
    </AppleButton>
  )
}
