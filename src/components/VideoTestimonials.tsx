import { useRef, useState } from 'react'

const testimonials = [
  { name: 'Depoimento 1', videoId: 'CCVlAbIU-Po' },
  { name: 'Depoimento 2', videoId: 'auZVcqNrCoI' },
  { name: 'Depoimento 3', videoId: 'XDQQeOwhoSk' },
  { name: 'Depoimento 4', videoId: 'R7qeGsklZBw' },
  { name: 'Depoimento 5', videoId: '1L_-T1LTd1s' },
  { name: 'Depoimento 6', videoId: 'l98PgdCeLew' },
  { name: 'Depoimento 7', videoId: 'pKhanqE3FqQ' },
  { name: 'Depoimento 8', videoId: 'mZysisBl4xs' },
  { name: 'Depoimento 9', videoId: 'ZdBe-Zx-OCA' },
]

export default function VideoTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const origin =
    typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''

  // Drag handlers para mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused'
      containerRef.current.style.webkitAnimationPlayState = 'paused'
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Retomar animação após um delay
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.animationPlayState = 'running'
        containerRef.current.style.webkitAnimationPlayState = 'running'
      }
    }, 2000)
  }

  const handleContainerMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch handlers para mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused'
      containerRef.current.style.webkitAnimationPlayState = 'paused'
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.animationPlayState = 'running'
        containerRef.current.style.webkitAnimationPlayState = 'running'
      }
    }, 2000)
  }

  const sendPlayerCommand = (
    iframe: HTMLIFrameElement,
    command: 'unMute' | 'mute' | 'playVideo'
  ) => {
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: command,
        args: [],
      }),
      '*'
    )
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const iframe = e.currentTarget.querySelector('iframe')
    if (iframe && iframe.contentWindow) {
      sendPlayerCommand(iframe, 'playVideo')
      sendPlayerCommand(iframe, 'unMute')
    }
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused'
      containerRef.current.style.webkitAnimationPlayState = 'paused'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const iframe = e.currentTarget.querySelector('iframe')
    if (iframe && iframe.contentWindow) {
      sendPlayerCommand(iframe, 'mute')
    }
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running'
      containerRef.current.style.webkitAnimationPlayState = 'running'
    }
  }

  const handleActivate = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const iframe = e.currentTarget.querySelector('iframe')
    if (iframe && iframe.contentWindow) {
      sendPlayerCommand(iframe, 'playVideo')
      sendPlayerCommand(iframe, 'unMute')
    }
  }

  return (
    <section className="section" id="depoimentos-video">
      <div className="section-header">
        <p className="section-tag">Quem compra, aprova</p>
        <h2 className="section-title">Veja o que nossos alunos estão falando</h2>
        <p className="section-description">
          Depoimentos reais de pessoas que já comeram o produto
        </p>
      </div>

      <div className="video-testimonials-wrapper" ref={wrapperRef}>
        <div
          className="video-testimonials-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleContainerMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
        >
          {/* Primeira cópia dos vídeos */}
          <div className="video-testimonials-track">
            {testimonials.map((testimonial, index) => {
              const iframeId = `testimonial-first-${index}`
              const src = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${testimonial.videoId}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1${
                origin ? `&origin=${origin}` : ''
              }`

              return (
                <div
                  key={`first-${index}`}
                  className="video-testimonial-item"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleActivate}
                  onTouchStart={handleActivate}
                >
                  <iframe
                    id={iframeId}
                    className="video-testimonial-youtube"
                    src={src}
                    title={`Depoimento de ${testimonial.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="video-testimonial-overlay">
                    <p className="video-testimonial-name">{testimonial.name}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Segunda cópia para loop infinito */}
          <div className="video-testimonials-track" aria-hidden="true">
            {testimonials.map((testimonial, index) => {
              const iframeId = `testimonial-second-${index}`
              const src = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${testimonial.videoId}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1${
                origin ? `&origin=${origin}` : ''
              }`

              return (
                <div
                  key={`second-${index}`}
                  className="video-testimonial-item"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleActivate}
                  onTouchStart={handleActivate}
                >
                  <iframe
                    id={iframeId}
                    className="video-testimonial-youtube"
                    src={src}
                    title={`Depoimento de ${testimonial.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="video-testimonial-overlay">
                    <p className="video-testimonial-name">{testimonial.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
