"use server"

import nodemailer from "nodemailer"

// Configuração do email para onde serão enviados os formulários
// Substitua com suas credenciais reais
const EMAIL_CONFIG = {
  recipient: "seu-email@exemplo.com", // Email que receberá as mensagens
  smtp: {
    host: "smtp.exemplo.com",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: "seu-usuario@exemplo.com",
      pass: "sua-senha",
    },
  },
}

interface ContactFormData {
  nome: string
  email: string
  condominio: string
  telefone: string
  mensagem: string
}

export async function sendContactForm(data: ContactFormData) {
  try {
    // Validação básica
    if (!data.nome || !data.email || !data.telefone) {
      return { success: false, error: "Por favor, preencha todos os campos obrigatórios." }
    }

    // Configurar o transporter do Nodemailer
    const transporter = nodemailer.createTransport(EMAIL_CONFIG.smtp)

    // Conteúdo do email
    const mailOptions = {
      from: `"Formulário do Site" <${EMAIL_CONFIG.smtp.auth.user}>`,
      to: EMAIL_CONFIG.recipient,
      subject: `Nova solicitação de demonstração - ${data.condominio}`,
      text: `
        Nome: ${data.nome}
        Email: ${data.email}
        Condomínio: ${data.condominio}
        Telefone: ${data.telefone}
        Mensagem: ${data.mensagem || "Não informada"}
      `,
      html: `
        <h2>Nova solicitação de demonstração</h2>
        <p><strong>Nome:</strong> ${data.nome}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Condomínio:</strong> ${data.condominio}</p>
        <p><strong>Telefone:</strong> ${data.telefone}</p>
        <p><strong>Mensagem:</strong> ${data.mensagem || "Não informada"}</p>
      `,
    }

    // Enviar o email
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return {
      success: false,
      error: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
    }
  }
}
