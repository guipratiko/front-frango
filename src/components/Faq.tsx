export default function Faq() {
  const faqs = [
    {
      question: 'Eu não sei cozinhar. O curso serve para mim?',
      answer:
        'Sim! O método é passo a passo e ensinado do zero, ideal tanto para iniciantes quanto para chefs.',
    },
    {
      question: 'Funciona para quem já tem açougue/supermercado?',
      answer:
        'Com certeza. É uma forma de aumentar o ticket médio, atrair novos clientes e se diferenciar da concorrência.',
    },
    {
      question: 'Como terei acesso ao conteúdo?',
      answer:
        'A compra é realizada por meio de um link da plataforma Hotmart. Após a confirmação do pagamento, o acesso ao curso é liberado online, as aulas podem ser assistidas quando quiser, no seu tempo e as planilhas de custo e ingredientes de recheios baixadas para seu celular/computador',
    },
    {
      question: 'Quanto tempo dura o curso e terei acesso por quanto tempo?',
      answer:
        'Plano básico 27 min e profissional 1hora',
    },
  ]

  return (
    <section className="section compact" id="faq">
      <div className="section-header">
        <p className="section-tag">Dúvidas comuns</p>
        <h2 className="section-title">
          ❓ Dúvidas Comuns (E Nossas Respostas Sinceras)
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((item) => (
          <article className="faq-item" key={item.question}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

