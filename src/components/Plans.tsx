import {
  HOTMART_PLANO_BASICO,
  HOTMART_PLANO_PROFISSIONAL,
} from '../constants/links'

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
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

export default function Plans() {
  return (
    <section className="section" id="planos">
      <div className="section-header">
        <p className="section-tag">Oferta Relâmpago</p>
        <h2 className="section-title">
          🔥 OFERTA RELÂMPAGO: Garanta Seu Lucro Extra Hoje!
        </h2>
        <p className="section-description">
          Escolha o plano que mais te atende!
        </p>
      </div>

      <div className="plans-grid" id="botoes-compra">
        {/* Plano Profissional */}
        <div className="plan-card plan-card--featured">
          <div className="plan-badge">
            <span className="plan-badge-icon">⭐</span>
            O mais vendido!!
          </div>
          <div className="plan-header">
            <h3 className="plan-title">Plano Profissional</h3>
          </div>
          <p className="plan-description">
            Perfeito pra quem quer transformar a receita em renda extra ou um negócio e lucrar muito nesse fim de ano!
          </p>
          <div className="plan-features">
            <p className="plan-features-title">Inclui tudo do plano básico, mais:</p>
            <ul className="plan-features-list">
              <li>
                <CheckIcon />
                Preparo do recheio em larga escala
              </li>
              <li>
                <CheckIcon />
                Dicas para otimizar sua produção e vender mais
              </li>
            </ul>
            <div className="plan-bonus">
              <div className="plan-bonus-header">
                <span className="plan-bonus-icon">🎁</span>
                <strong>Bônus exclusivo!</strong>
              </div>
              <p className="plan-bonus-text">
                Planilha exclusiva para calcular o custo e precificar seu produto
              </p>
            </div>
          </div>
          <div className="plan-pricing">
            <p className="plan-old-price">R$ 199,00</p>
            <p className="plan-price-label">por apenas</p>
            <p className="plan-price">R$ 147,00</p>
          </div>
          <a
            className="btn btn--primary plan-cta"
            href={HOTMART_PLANO_PROFISSIONAL}
            target="_blank"
            rel="noreferrer"
          >
            Quero comprar agora!
          </a>
        </div>

        {/* Plano Básico */}
        <div className="plan-card">
          <div className="plan-header">
            <h3 className="plan-title">Plano Básico</h3>
          </div>
          <p className="plan-description">
            Ideal pra quem quer aprender a fazer o frango atropelado perfeito em
            casa.
          </p>
          <div className="plan-features">
            <p className="plan-features-title">Incluso no plano:</p>
            <ul className="plan-features-list">
              <li>
                <CheckIcon />
                Passo a passo de como desossar o frango;
              </li>
              <li>
                <CheckIcon />
                Lista completa de ingredientes;
              </li>
              <li>
                <CheckIcon />
                Como rechear e amarrar corretamente;
              </li>
              <li>
                <CheckIcon />
                Dicas e cuidados no assamento;
              </li>
            </ul>
          </div>
          <div className="plan-pricing">
            <p className="plan-old-price">R$ 147,00</p>
            <p className="plan-price-label">por apenas</p>
            <p className="plan-price">R$ 97,00</p>
          </div>
          <a
            className="btn btn--primary plan-cta"
            href={HOTMART_PLANO_BASICO}
            target="_blank"
            rel="noreferrer"
          >
            Quero comprar agora!
          </a>
        </div>
      </div>
    </section>
  )
}

