const testimonials = [
  {
    text:
      'Comecei a vender no meu bairro com o plano profissional e fechei 40 encomendas só no Natal. O recheio em larga escala salvou meu tempo.',
    author: 'Camila Rocha',
    detail: 'Empreendedora em Goiânia',
  },
  {
    text:
      'Sempre tive medo de desossar. Depois do módulo 1 fiz meu primeiro frango completo em menos de 20 minutos.',
    author: 'João Mendes',
    detail: 'Chef em confrarias particulares',
  },
  {
    text:
      'A planilha de precificação abriu meus olhos. Hoje sei exatamente quanto cobrar sem perder dinheiro.',
    author: 'Patrícia Alves',
    detail: 'Empresario no ramo do frango assado',
  },
]

export default function Testimonials() {
  return (
    <section className="section compact" id="prova-social">
      <div className="section-header">
        <p className="section-tag">Quem compra aprova</p>
        <h2 className="section-title">Clientes que vendem tudo que produzem</h2>
        <p className="section-description">
          Cada depoimento vem de alunos que aplicaram a técnica e viram o
          frango atropelado se tornar o prato mais elogiado do cardápio.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.author}>
            <p>&ldquo;{item.text}&rdquo;</p>
            <strong>{item.author}</strong>
            <span>{item.detail}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

