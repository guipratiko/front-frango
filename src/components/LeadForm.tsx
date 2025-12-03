import { useState } from 'react'
import type { FormEvent } from 'react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    observacao: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Aqui você pode integrar com sua API ou serviço de captura
      // Por enquanto, vamos apenas simular um envio
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // TODO: Integrar com API do backend
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      setSubmitStatus('success')
      setFormData({ nome: '', telefone: '', email: '', observacao: '' })

      // Resetar status após 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section compact" id="captura">
      <div className="section-header">
        <p className="section-tag">Garanta sua vaga</p>
        <h2 className="section-title">
          📝 Preencha seus dados e garanta seu acesso
        </h2>
        <p className="section-description">
          Preencha o formulário abaixo e receba todas as informações sobre o
          curso
        </p>
      </div>

      <div className="lead-form-container">
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone *</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="observacao">Observação</label>
            <textarea
              id="observacao"
              name="observacao"
              value={formData.observacao}
              onChange={handleChange}
              rows={4}
              placeholder="Alguma dúvida ou observação? (opcional)"
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar dados'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-message form-message--success">
              ✓ Dados enviados com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-message form-message--error">
              ✗ Erro ao enviar. Tente novamente.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

