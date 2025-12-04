export default function Steps() {
  const steps = [
    {
      title: '1- Segredo da desossa',
      description:
        'Aprenda a desossar, com todos os detalhes que precisa saber, vídeo aula com alta definição para você não perder nenhum detalhe',
    },
    {
      title: '2- Segredo dos ingredientes',
      description:
        'Veja quais ingredientes usar, como prepará-los e um bônus com sugestões extras de ingredientes',
    },
    {
      title: '3- O cuidados com o recheamento',
      description:
        'Aprenda os cuidados e detalhes que fazem a diferença em uma amarração firme e que vai trazer uma boa estética ao seu produto.',
    },
    {
      title: '4- Assamento',
      description:
        'Aprenda tudo que precisa para o produto ficar na suculência perfeita por dentro e crocancia irresistível por fora',
    },
    {
      title: '5- Precificação',
      description:
        'Com uma planilha disponível no plano profissional, você consegue calcular o custo exato do seu produto, garantindo lucro na sua operação!',
    },
  ]

  return (
    <section className="section compact" id="conteudo">
      <div className="section-header">
        <p className="section-tag">Como funciona</p>
        <h2 className="section-title">
          🎯 Da Produção ao Lucro: Como o Método "Frango Atropelado" Funciona
        </h2>
        <p className="section-description">
          Neste curso, você não vai apenas aprender uma receita. Você vai dominar um Processo de Produção completo, desde a escolha dos ingredientes até o produto pronto para consumo! Mostramos segredo dos temperos e dicas estratégicas
        </p>
      </div>

      <div className="section-header">
        <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '2rem' }}>
          Como Funciona em 5 Passos Simples:
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

