import { WHATSAPP_URL } from '../constants/links'

export default function FloatingCTA() {
  return (
    <a
      className="btn btn--primary floating-cta"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Garantir minha vaga no curso de frango atropelado"
    >
      Garantir minha vaga agora
    </a>
  )
}

