export default function ValueGrid() {
  const benefits = [
    {
      id: '01',
      title: 'Lucre de 2x a 5x por Unidade',
      description:
        'Sua margem de lucro nunca mais será a mesma. Venda com preço premium por um produto premium.',
    },
    {
      id: '02',
      title: 'Receita Rápida e Simples',
      description:
        'O preparo é incrivelmente fácil e otimizado para produção em escala.',
    },
    {
      id: '03',
      title: 'Baixo Custo de Implementação',
      description:
        'Da para fazer com equipamentos mais simples e também industriais',
    },
    {
      id: '04',
      title: 'Alta Aceitação e Demanda Imediata',
      description:
        'É o tempero, é a crocância, e a suculência! Seu público vai amar o frango atropelado',
    },
    {
      id: '05',
      title: 'Método Validado e Comprovado',
      description:
        'Receita que já gerou toneladas de vendas',
    },
    {
      id: '06',
      title: 'Suporte Exclusivo (Bônus)',
      description:
        'Não fique sozinho! Tenha acesso direto a quem mais entende do negócio para tirar todas as suas dúvidas.',
    },
  ]

  return (
    <section className="section" id="beneficios">
      <div className="section-header">
        <p className="section-tag">Por que escolher</p>
        <h2 className="section-title">
          🚀 Por Que o Frango Atropelado Vai Multiplicar Seu Lucro?
        </h2>
      </div>

      <div className="value-grid">
        {benefits.map((item) => (
          <article className="value-card" data-icon={item.id} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

