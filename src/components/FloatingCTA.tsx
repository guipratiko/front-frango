export default function FloatingCTA() {
  const scrollToPlans = () => {
    // Procura primeiro pelos botões de compra específicos
    const botoesCompra = document.getElementById('botoes-compra')
    if (botoesCompra) {
      const elementRect = botoesCompra.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2
      window.scrollTo({
        top: middle,
        behavior: 'smooth',
      })
      return
    }
    // Fallback para a seção de planos se os botões não forem encontrados
    const planosSection = document.getElementById('planos')
    if (planosSection) {
      const elementRect = planosSection.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2
      window.scrollTo({
        top: middle,
        behavior: 'smooth',
      })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    scrollToPlans()
  }

  return (
    <button
      className="btn btn--primary floating-cta"
      onClick={handleClick}
      aria-label="Garantir minha vaga no curso de frango atropelado"
    >
      Garantir minha vaga agora
    </button>
  )
}

