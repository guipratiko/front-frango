export default function Steps() {
  const steps = [
    {
      title: 'O Segredo da Desossa',
      description:
        'Aprenda o corte "atropelado" em segundos, otimizando o cozimento e a apresentação.',
    },
    {
      title: 'O Tempero Mágico',
      description:
        'A fórmula exclusiva de especiarias que é a alma do negócio e faz o cliente voltar.',
    },
    {
      title: 'O Ponto da Crocância',
      description:
        'A técnica exata para um frango suculento por dentro e irresistivelmente crocante por fora.',
    },
    {
      title: 'Estratégia de Vendas e Precificação',
      description:
        'Saiba como calcular seu custo e vender com a margem de lucro máxima.',
    },
  ]

  return (
    <section className="section compact" id="conteudo">
      <div className="section-header">
        <p className="section-tag">Como funciona</p>
        <h2 className="section-title">
          🎯 Da Cozinha ao Lucro: Como o Método "Frango Atropelado" Funciona
        </h2>
        <p className="section-description">
          Neste curso, você não vai apenas aprender uma receita. Você vai dominar um
          Processo de Produção completo, desde a escolha da matéria-prima até a embalagem
          que vende. Mostraremos os segredos do tempero, o corte estratégico e o ponto de
          cocção que garantem o sucesso de vendas.
        </p>
      </div>

      <div className="section-header">
        <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '2rem' }}>
          Como Funciona em 4 Passos Simples:
        </h3>
      </div>

      <div className="steps__list">
        {steps.map((step, index) => (
          <article
            className="step-card"
            data-step={`ETAPA ${String(index + 1).padStart(2, '0')}`}
            key={step.title}
          >
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

