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
        'Com certeza. É uma forma de aumentar o ticket médio, atrair novos clientes e diferenciar-se da concorrência.',
    },
    {
      question: 'Como terei acesso ao conteúdo?',
      answer:
        'A compra é realizada por meio de um link da plataforma Hotmart. Após a confirmação do pagamento, o acesso ao curso é liberado online, e a planilha pode ser baixada para uso imediato. Dessa forma, você pode assistir as aulas e utilizar a planilha pelo computador, tablet ou celular.',
    },
    {
      question: 'Quanto tempo dura o acesso ao curso/arquivo?',
      answer:
        'O acesso é vitalício. Ao adquirir o produto, você garante o curso, a planilha e as aulas extras para sempre, sem mensalidades ou renovações.',
    },
    {
      question: 'Quanto tempo dura o curso e terei acesso por quanto tempo?',
      answer:
        'As aulas já estão gravadas e você pode assistir no seu ritmo. O acesso é vitalício (para sempre)!',
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

