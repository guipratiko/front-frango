import {
  HOTMART_PLANO_BASICO,
  HOTMART_PLANO_PROFISSIONAL,
} from '../constants/links'
import CountdownTimer from './CountdownTimer'

export default function Plans() {
  return (
    <section className="section" id="planos">
      <div className="section-header">
        <p className="section-tag">Oferta Relâmpago</p>
        <h2 className="section-title">
          🔥 OFERTA RELÂMPAGO: Garanta Seu Lucro Extra Hoje!
        </h2>
        <CountdownTimer />
      </div>

      <div className="offer-card">
        <div className="offer-pricing">
          <p className="offer-old-price">De R$ 497,00</p>
          <p className="offer-new-price">
            por APENAS: <strong>12x de R$ 19,78</strong>
          </p>
          <p className="offer-cash-price">ou R$ 197,00 à vista</p>
        </div>

        <div className="bonus-section">
          <h3 className="bonus-title">
            🎁 BÔNUS EXCLUSIVOS PARA OS PRÓXIMOS ALUNOS:
          </h3>
          <ul className="bonus-list-offer">
            <li>
              <strong>Bônus #1:</strong> Ebook "Checklist do Empreendedor de Frango
              Atropelado"
            </li>
            <li>
              <strong>Bônus #2:</strong> Grupo VIP de Alunos no Telegram (Networking e
              Dicas Diárias)
            </li>
            <li>
              <strong>Bônus #3:</strong> Planilha Financeira de Custos e Precificação
              (Exclusiva!)
            </li>
            <li>
              <strong>Bônus #4:</strong> Certificado de Conclusão para Aumentar Sua
              Autoridade.
            </li>
          </ul>
        </div>

        <div className="offer-buttons" id="botoes-compra">
          <a
            className="btn btn--primary offer-cta"
            href={HOTMART_PLANO_BASICO}
            target="_blank"
            rel="noreferrer"
          >
            COMPRAR POR R$ 97,00
          </a>
          <a
            className="btn btn--primary offer-cta"
            href={HOTMART_PLANO_PROFISSIONAL}
            target="_blank"
            rel="noreferrer"
          >
            COMPRAR POR R$ 147,00
          </a>
        </div>

        <p className="guarantee">
          Garantia incondicional de 7 dias. Não gostou? Receba 100% do seu
          investimento.
        </p>
      </div>
    </section>
  )
}

