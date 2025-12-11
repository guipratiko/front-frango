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
  const videoRefs = useRef<Map<number, HTMLIFrameElement>>(new Map())
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0, time: 0, moved: false })
  const dragStateRef = useRef({ startX: 0, scrollLeft: 0 })
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(
    new Set(testimonials.map((_, i) => i))
  )

  const origin =
    typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : ''

  // Função melhorada para enviar comandos ao player do YouTube com retry
  const sendPlayerCommand = (
    iframe: HTMLIFrameElement,
    command: 'unMute' | 'mute' | 'playVideo',
    retries = 3
  ): Promise<void> => {
    return new Promise((resolve) => {
      if (!iframe || !iframe.contentWindow) {
        resolve()
        return
      }

      const sendMessage = (attempt: number) => {
        try {
          iframe.contentWindow?.postMessage(
            JSON.stringify({
              event: 'command',
              func: command,
              args: [],
            }),
            '*'
          )

          // Aguardar um pouco antes de considerar sucesso
          setTimeout(() => {
            if (attempt < retries) {
              sendMessage(attempt + 1)
            }
            resolve()
          }, 100)
        } catch (error) {
          if (attempt < retries) {
            setTimeout(() => sendMessage(attempt + 1), 200)
          } else {
            resolve()
          }
        }
      }

      sendMessage(1)
    })
  }

  // Handler melhorado de clique no vídeo
  const handleVideoClick = async (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // Verificar se foi um drag (movimento > 5px ou tempo > 200ms)
    const { x, y, time, moved } = dragStartRef.current
    const now = Date.now()
    const timeDiff = now - time
    const distance = Math.sqrt(
      Math.pow(e.clientX - x, 2) + Math.pow(e.clientY - y, 2)
    )

    if (moved || distance > 5 || timeDiff > 200) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    const iframe = videoRefs.current.get(index)
    if (!iframe) return

    const isMuted = mutedVideos.has(index)

    if (isMuted) {
      // Desmutar e tocar
      await sendPlayerCommand(iframe, 'unMute')
      await sendPlayerCommand(iframe, 'playVideo')
      setMutedVideos(prev => {
        const newSet = new Set(prev)
        newSet.delete(index)
        return newSet
      })
    } else {
      // Mutar
      await sendPlayerCommand(iframe, 'mute')
      setMutedVideos(prev => new Set(prev).add(index))
    }
  }

  // Mouse handlers melhorados
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsDragging(true)
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
      moved: false,
    }
    dragStateRef.current = {
      startX: e.pageX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
    }
    containerRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    
    const distance = Math.sqrt(
      Math.pow(e.clientX - dragStartRef.current.x, 2) +
      Math.pow(e.clientY - dragStartRef.current.y, 2)
    )
    
    if (distance > 3) {
      dragStartRef.current.moved = true
    }

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - dragStateRef.current.startX) * 2
    containerRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
    // Resetar após um delay
    setTimeout(() => {
      dragStartRef.current = { x: 0, y: 0, time: 0, moved: false }
    }, 150)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab'
    }
  }

  // Touch handlers melhorados
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsDragging(true)
    const touch = e.touches[0]
    dragStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
      moved: false,
    }
    dragStateRef.current = {
      startX: touch.pageX - containerRef.current.offsetLeft,
      scrollLeft: containerRef.current.scrollLeft,
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return
    const touch = e.touches[0]
    
    const distance = Math.sqrt(
      Math.pow(touch.clientX - dragStartRef.current.x, 2) +
      Math.pow(touch.clientY - dragStartRef.current.y, 2)
    )
    
    if (distance > 3) {
      dragStartRef.current.moved = true
    }

    const x = touch.pageX - containerRef.current.offsetLeft
    const walk = (x - dragStateRef.current.startX) * 2
    containerRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setTimeout(() => {
      dragStartRef.current = { x: 0, y: 0, time: 0, moved: false }
    }, 150)
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

      <div className="video-testimonials-carousel-wrapper">
        <div
          className="video-testimonials-carousel"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => {
            const src = `https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${testimonial.videoId}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1${
              origin ? `&origin=${origin}` : ''
            }`

            return (
              <div 
                key={index} 
                className="presto-iframe-fallback-container"
                onClick={(e) => handleVideoClick(e, index)}
                onMouseDown={(e) => {
                  if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === 'IFRAME') {
                    dragStartRef.current = {
                      x: e.clientX,
                      y: e.clientY,
                      time: Date.now(),
                      moved: false,
                    }
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <iframe
                  ref={(el) => {
                    if (el) {
                      videoRefs.current.set(index, el)
                    }
                  }}
                  id={`video-testimonial-${index}`}
                  className="presto-fallback-iframe"
                  data-src={src}
                  src={src}
                  title={`Depoimento de ${testimonial.name}`}
                  allowFullScreen
                  allowTransparency
                  allow="autoplay"
                  frameBorder="0"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
