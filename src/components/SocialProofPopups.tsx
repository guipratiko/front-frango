import { useEffect, useState } from 'react'

const names = [
  'Rafael Andrade',
  'Amanda Soares',
  'Gilberto Lovato',
  'João Vitor Mendes',
  'Lucas Moreira',
  'Ana Paula Ribeiro',
  'Mariana Castro',
  'Bruno Fernandes',
  'Daniel Cardoso',
  'Gabriela Martins',
  'Felipe Moura',
  'Carla Menezes',
  'Gustavo Almeida',
  'Patrícia Nogueira',
  'Thiago Azevedo',
  'Larissa Duarte',
  'Marcos Vinícius Costa',
  'Juliana Freitas',
  'Ricardo Xavier',
  'Bianca Pires',
  'André Silveira',
  'Fernanda Araújo',
  'Diego Camargo',
  'Camila Borges',
  'Eduardo Rezende',
  'Sabrina Lopes',
  'Matheus Ramalho',
  'Laura Figueiredo',
  'Caio Fernandes',
  'Tatiane Moraes',
  'Rodrigo Sampaio',
  'Paula Mirandas',
  'Henrique Bastos',
  'Isabela Teles',
  'Vitor Carvalho',
  'Bruna Chaves',
  'Everton Maciel',
  'Daiane Furtado',
  'Marcelo Teixeira',
  'Aline Mendonça',
  'Leonardo Guedes',
  'Vanessa Barros',
  'Pedro Henrique Lara',
  'Michele Santana',
  'Alexandre Porto',
  'Joyce Almeida',
  'Samuel Duarte',
  'Eliane Gonçalves',
  'Maurício Reis',
  'Keila Barcellos',
  'Roberto Santiago',
  'Cíntia Diniz',
  'Renato Amaral',
  'Nicole Vasconcelos',
  'Fábio Carvalho',
  'Flávia Rodrigues',
  'Douglas Nascimento',
  'Jéssica Prado',
  'Arthur Salles',
  'Renata Fagundes',
  'Luciano Pontes',
  'Mônica Ribeiro',
  'Wellington Dias',
  'Sara Santos',
  'Cristiano Paiva',
  'Sheila Bittencourt',
  'Álvaro Gomes',
  'Tainá Moreno',
  'Paulo Sérgio Costa',
  'Daniela Mendes',
  'Tiago Castro',
  'Lívia Peixoto',
  'Mateus Corrêa',
  'Eduarda Oliveira',
  'Rafael Messias',
  'Beatriz Lemos',
  'Jorge Pacheco',
  'Camila Serrano',
  'Leandro Godoy',
  'Thalita Moraes',
  'Edson Meireles',
  'Carolina Siqueira',
  'Igor Maciel',
  'Rafaela Simões',
  'Augusto Barroso',
  'Pamela Neves',
  'Sérgio Damasceno',
  'Natália Fontes',
  'Wallace Santana',
  'Stephany Ribeiro',
  'José Eduardo Lima',
  'Karina Ferreira',
  'Robson Aguiar',
  'Valéria Costa',
  'Hugo Farias',
  'Andreia Portela',
  'Enzo Martins',
  'Lorena Albuquerque',
  'Raul Pinheiro',
  'Mylena Castro',
  'Célio Andrade',
  'Paloma Duarte',
  'Fabrício Cunha',
  'Jhenifer Moretti',
  'Wesley Barbosa',
  'Jaqueline Dornelles',
  'Murilo Freitas',
  'Talita Moraes',
  'Heitor Pereira',
  'Maysa Melo',
  'Guilherme Prado',
  'Eloá Andrade',
  'Caíque Nogueira',
  'Tainara Barros',
  'Rodrigo Bernardes',
  'Nataly Rezende',
  'Sandro Correia',
  'Heloísa Campos',
  'Jefferson Machado',
  'Brunna Carvalho',
  'Danilo Torres',
  'Pietra Lopes',
  'Rômulo Farias',
  'Ingrid Gonçalves',
  'Breno Mota',
  'Vitória Assis',
  'Adriel Passos',
  'Letícia Vilar',
  'Robson Ferreira',
  'Yasmin Moreira',
  'Natan Vieira',
  'Priscila Nunes',
  'Caue Ramos',
  'Karen Milhomem',
  'Felipe Saldanha',
  'Samara Pessanha',
  'Jonathan Alves',
  'Camily Duarte',
  'Allan Fernandes',
  'Érika Ribeiro',
  'Sidney Costa',
  'Jéssica Moraes',
  'Vinícius Miranda',
  'Carolinie Souza',
  'Ramon Duarte',
  'Rayssa Matos',
  'Everton Lopes',
  'Nicole Barchel',
  'Márcio Peixoto',
  'Sheila Tavares',
]

type Popup = {
  id: string
  name: string
  top: number
  left: number
  visible: boolean
}

export default function SocialProofPopups() {
  const [popups, setPopups] = useState<Popup[]>([])

  const getRandomName = () => {
    return names[Math.floor(Math.random() * names.length)]
  }

  const getRandomPosition = () => {
    // Garantir que o popup não fique muito perto das bordas
    const minMargin = 20
    // Evitar área inferior onde fica o floating CTA (últimos 120px)
    const maxTop = window.innerHeight - 200
    const maxLeft = window.innerWidth - 320

    // Evitar área superior (primeiros 100px) e área inferior
    const minTop = 100
    const availableHeight = maxTop - minTop

    return {
      top: minTop + Math.random() * availableHeight,
      left: Math.max(minMargin, Math.random() * maxLeft),
    }
  }

  const createPopup = () => {
    const position = getRandomPosition()
    const newPopup: Popup = {
      id: Date.now().toString() + Math.random(),
      name: getRandomName(),
      top: position.top,
      left: position.left,
      visible: true,
    }

    setPopups((prev) => [...prev, newPopup])

    // Remover o popup após 4 segundos
    setTimeout(() => {
      setPopups((prev) =>
        prev.map((p) => (p.id === newPopup.id ? { ...p, visible: false } : p))
      )

      // Remover do estado após a animação
      setTimeout(() => {
        setPopups((prev) => prev.filter((p) => p.id !== newPopup.id))
      }, 300)
    }, 4000)
  }

  useEffect(() => {
    // Criar primeiro popup após 3 segundos
    const initialTimeout = setTimeout(() => {
      createPopup()
    }, 3000)

    // Criar popups em intervalos aleatórios (entre 5 e 12 segundos)
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 5000 // 5-12 segundos
      setTimeout(() => {
        createPopup()
      }, randomDelay)
    }, 12000)

    // Limpar ao desmontar
    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  // Limitar a 3 popups simultâneos
  const visiblePopups = popups.filter((p) => p.visible).slice(0, 3)

  return (
    <div className="social-proof-popups">
      {visiblePopups.map((popup) => (
        <div
          key={popup.id}
          className={`social-proof-popup ${popup.visible ? 'visible' : ''}`}
          style={{
            top: `${popup.top}px`,
            left: `${popup.left}px`,
          }}
        >
          <div className="social-proof-popup__icon">✓</div>
          <div className="social-proof-popup__content">
            <strong>{popup.name}</strong> acabou de comprar o curso
          </div>
        </div>
      ))}
    </div>
  )
}

