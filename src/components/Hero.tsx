import bannerImg from '/banner.png'

const stats = [
  { value: '1º curso', label: 'Frango Atropelado do Brasil' },
  { value: '1h+', label: 'Conteúdo Rápido e prático' },
  { value: 'Planilha', label: 'Precificação inteligente' },
  { value: 'Suporte', label: 'Tira-dúvidas rápido' },
]

const checklist = [
  'Técnica de desossa sem desperdício',
  'Recheios exclusivos e saborosos',
  'Amarração segura e bonita',
  'Truques de forno para dourar por igual',
]

const trustBadges = [
  'Pagamento 100% seguro',
  'Acesso imediato ao curso',
  'Garantia de 7 dias',
]

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PlayIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 6.5v11l9-5.5-9-5.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 8.5 6.5 11l5.5-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Hero() {
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

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    scrollToPlans()
  }

  return (
    <header className="hero" id="inicio">
      <div className="hero__banner-wrapper">
        <img src={bannerImg} alt="Frango Atropelado" className="hero__banner" />
      </div>
      <div className="hero__grid">
        <div className="hero__content">
          <div className="hero__badge badge badge--accent">
            Oferta Relâmpago • Válida por tempo limitado
          </div>
          <h1 className="hero__title">
            PARE DE VENDER FRANGO COMUM: Aprenda a Produzir o{' '}
            <span>Frango Atropelado Mais Vendido e Lucrativo do Brasil</span>
          </h1>
          <p className="hero__lead">
            O método simples que transforma um frango de <strong>R$11,99/kg</strong> em uma
            máquina de lucro de <strong>R$39,99/kg</strong>. Validado por centenas de
            empreendedores!
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={handleCTAClick}
            >
              QUERO TRANSFORMAR MINHA RENDA AGORA
              <ArrowIcon />
            </button>
          </div>
          <div className="hero__stats">
            {stats.map((item) => (
              <div className="hero__stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__video-wrapper">
            <div className="hero__video-tag">
              <PlayIcon />
              Vídeo de apresentação
            </div>
            <div className="hero__video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QSYeEKxzBu8?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=QSYeEKxzBu8&iv_load_policy=3&disablekb=1&cc_load_policy=0"
                title="Vídeo de apresentação do curso Frango Atropelado"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="hero__video"
                loading="lazy"
              />
              <div className="hero__video-title-blocker"></div>
            </div>
          </div>
          <div className="hero__card">
            <h3>Dentro do curso</h3>
            <div className="hero__checklist">
              {checklist.map((item) => (
                <p className="check-item" key={item}>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="trust-badges">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

