"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AppleButton } from "@/components/ui/apple-button"
import { sendContactForm } from "@/app/actions"
import { motion } from "framer-motion"

interface FormData {
  nome: string
  email: string
  condominio: string
  telefone: string
  mensagem: string
}

interface FormErrors {
  nome?: string
  email?: string
  condominio?: string
  telefone?: string
  mensagem?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    condominio: "",
    telefone: "",
    mensagem: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const [isFormValid, setIsFormValid] = useState(false)

  // Validar o formulário sempre que os dados mudarem
  useEffect(() => {
    validateForm()
  }, [formData, touched])

  // Verificar se o formulário é válido
  useEffect(() => {
    const isValid =
      Object.keys(errors).length === 0 &&
      formData.nome !== "" &&
      formData.email !== "" &&
      formData.condominio !== "" &&
      formData.telefone !== ""
    setIsFormValid(isValid)
  }, [errors, formData])

  const validateForm = () => {
    const newErrors: FormErrors = {}

    // Validar nome
    if (touched.nome && !formData.nome) {
      newErrors.nome = "Nome é obrigatório"
    }

    // Validar email
    if (touched.email) {
      if (!formData.email) {
        newErrors.email = "Email é obrigatório"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email inválido"
      }
    }

    // Validar condomínio
    if (touched.condominio && !formData.condominio) {
      newErrors.condominio = "Nome do condomínio é obrigatório"
    }

    // Validar telefone
    if (touched.telefone) {
      if (!formData.telefone) {
        newErrors.telefone = "Telefone é obrigatório"
      } else {
        // Remove caracteres não numéricos para validação
        const phoneDigits = formData.telefone.replace(/\D/g, "")
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
          newErrors.telefone = "Telefone inválido (DDD + número)"
        }
      }
    }

    setErrors(newErrors)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Formatação especial para telefone
    if (name === "telefone") {
      // Remove caracteres não numéricos
      let phoneDigits = value.replace(/\D/g, "")

      // Limita a 11 dígitos (DDD + 9 dígitos)
      phoneDigits = phoneDigits.slice(0, 11)

      // Formata o número conforme digita
      let formattedPhone = ""
      if (phoneDigits.length > 0) {
        // Adiciona parênteses no DDD
        formattedPhone = `(${phoneDigits.slice(0, 2)}`

        if (phoneDigits.length > 2) {
          // Adiciona fechamento de parênteses e espaço após DDD
          formattedPhone += `) ${phoneDigits.slice(2, 7)}`

          if (phoneDigits.length > 7) {
            // Adiciona hífen antes dos últimos 4 dígitos
            formattedPhone += `-${phoneDigits.slice(7)}`
          }
        }
      }

      setFormData((prev) => ({ ...prev, [name]: formattedPhone }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Marca o campo como tocado
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Marca todos os campos como tocados para mostrar todos os erros
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true
        return acc
      },
      {} as Record<string, boolean>,
    )

    setTouched(allTouched)

    // Valida novamente antes de enviar
    validateForm()

    // Verifica se há erros
    if (!isFormValid) {
      setFormStatus({
        success: false,
        message: "Por favor, corrija os erros no formulário antes de enviar.",
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus({})

    try {
      const result = await sendContactForm(formData)

      if (result.success) {
        setFormStatus({
          success: true,
          message: "Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.",
        })
        // Limpar o formulário após envio bem-sucedido
        setFormData({
          nome: "",
          email: "",
          condominio: "",
          telefone: "",
          mensagem: "",
        })
        // Resetar campos tocados
        setTouched({})
      } else {
        setFormStatus({
          success: false,
          message: result.error || "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
        })
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-gray-300 p-3 sm:p-4 text-gray-900 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:focus:ring-purple-500 text-sm sm:text-base"

  const errorInputClasses =
    "w-full rounded-xl border border-red-300 p-3 sm:p-4 text-gray-900 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 dark:border-red-700 dark:bg-gray-800/70 dark:text-white dark:focus:ring-red-500 text-sm sm:text-base"

  return (
    <form id="formulario-contato" onSubmit={handleSubmit} className="space-y-5">
      {formStatus.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            formStatus.success
              ? "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
              : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200"
          }`}
        >
          {formStatus.message}
        </motion.div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="nome" className="text-base font-medium text-gray-900 dark:text-white">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={errors.nome ? errorInputClasses : inputClasses}
            placeholder="Seu nome"
          />
          {errors.nome && <p className="text-sm text-red-500 mt-1">{errors.nome}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-base font-medium text-gray-900 dark:text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={errors.email ? errorInputClasses : inputClasses}
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="condominio" className="text-base font-medium text-gray-900 dark:text-white">
          Nome do Condomínio <span className="text-red-500">*</span>
        </label>
        <input
          id="condominio"
          name="condominio"
          type="text"
          value={formData.condominio}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={errors.condominio ? errorInputClasses : inputClasses}
          placeholder="Nome do seu condomínio"
        />
        {errors.condominio && <p className="text-sm text-red-500 mt-1">{errors.condominio}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="telefone" className="text-base font-medium text-gray-900 dark:text-white">
          Telefone <span className="text-red-500">*</span>
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          value={formData.telefone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={errors.telefone ? errorInputClasses : inputClasses}
          placeholder="(00) 00000-0000"
        />
        {errors.telefone && <p className="text-sm text-red-500 mt-1">{errors.telefone}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="mensagem" className="text-base font-medium text-gray-900 dark:text-white">
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.mensagem ? errorInputClasses : inputClasses}
          placeholder="Conte-nos mais sobre seu condomínio"
          rows={3}
        ></textarea>
        {errors.mensagem && <p className="text-sm text-red-500 mt-1">{errors.mensagem}</p>}
      </div>
      <div className="flex flex-col space-y-2">
        <AppleButton
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting || !isFormValid}
          className={`py-4 text-base ${!isFormValid && Object.keys(touched).length > 0 ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
        </AppleButton>
        <p className="text-xs text-gray-500 text-center">
          Campos marcados com <span className="text-red-500">*</span> são obrigatórios
        </p>
      </div>
    </form>
  )
}
