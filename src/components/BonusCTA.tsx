import { WHATSAPP_URL } from '../constants/links'

export default function BonusCTA() {
  const bonuses = [
    'Planilha automática para calcular custo, markup e lucro por unidade',
    'Modelo de cardápio digital para vender pelo WhatsApp e Instagram',
    'Checklist de produção em lote e cronograma para festas',
  ]

  return (
    <section className="section" id="bonus">
      <div className="bonus-cta">
        <p className="section-tag">Bônus exclusivo de Black Friday</p>
        <h2 className="section-title">
          Compre agora e leve a planilha de precificação + templates de venda
        </h2>
        <p className="section-description">
          Disponível por tempo limitado. Esses materiais agilizam a produção e
          facilitam a comunicação com seus clientes.
        </p>

        <ul className="bonus-list">
          {bonuses.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          className="btn btn--primary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          Quero o bônus agora
        </a>
      </div>
    </section>
  )
}

