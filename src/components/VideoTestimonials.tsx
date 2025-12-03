import { useRef } from 'react'

const testimonials = [
  { name: 'Carol', video: '/depo/DEPOIMENTO CAROL .mp4' },
  { name: 'Cintia', video: '/depo/DEPOIMENTO CINTIA .mp4' },
  { name: 'Cristiane', video: '/depo/DEPOIMENTO CRISTIANE.mp4' },
  { name: 'Diovana', video: '/depo/DEPOIMENTO DIOVANA.mp4' },
  { name: 'Elizangela', video: '/depo/Depoimento Elizangela.mp4' },
  { name: 'Humberto', video: '/depo/DEPOIMENTO HUMBERTO.mp4' },
  { name: 'Michele', video: '/depo/DEPOIMENTO MICHELE.mp4' },
]

export default function VideoTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      video.muted = false
    }
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused'
      containerRef.current.style.webkitAnimationPlayState = 'paused'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      video.muted = true
    }
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running'
      containerRef.current.style.webkitAnimationPlayState = 'running'
    }
  }

  return (
    <section className="section" id="depoimentos-video">
      <div className="section-header">
        <p className="section-tag">Quem compra, aprova</p>
        <h2 className="section-title">Veja o que nossos alunos estão falando</h2>
        <p className="section-description">
          Depoimentos reais de quem já transformou o frango atropelado em fonte de renda
        </p>
      </div>

      <div className="video-testimonials-wrapper">
        <div
          className="video-testimonials-container"
          ref={containerRef}
        >
          {/* Primeira cópia dos vídeos */}
          <div className="video-testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="video-testimonial-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  src={testimonial.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video-testimonial"
                />
                <div className="video-testimonial-overlay">
                  <p className="video-testimonial-name">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda cópia para loop infinito */}
          <div className="video-testimonials-track" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="video-testimonial-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  src={testimonial.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video-testimonial"
                />
                <div className="video-testimonial-overlay">
                  <p className="video-testimonial-name">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

