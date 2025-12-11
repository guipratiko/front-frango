import { useState, useEffect } from 'react'

export default function CouponTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 5,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else {
          if (minutes > 0) {
            minutes--
            seconds = 59
          } else {
            if (hours > 0) {
              hours--
              minutes = 59
              seconds = 59
            } else {
              // Reinicia para 5 minutos quando chegar a zero
              hours = 0
              minutes = 5
              seconds = 0
            }
          }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => String(value).padStart(2, '0')

  const scrollToPlans = () => {
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
      className="btn btn--primary coupon-timer"
      onClick={handleClick}
      aria-label="Cupom ATRROPELADO10 - Use o cupom com desconto"
    >
      <div className="coupon-timer__message">
        Use o cupom a baixo para ganhar 10% de desconto. Limitadíssimo!!
      </div>
      <div className="coupon-timer__code">
        <span className="coupon-timer__label">Cupom:</span>
        <span className="coupon-timer__code-text">ATRROPELADO10</span>
      </div>
      <div className="coupon-timer__countdown">
        <span className="coupon-timer__countdown-label">Expira em:</span>
        <span className="coupon-timer__countdown-time">
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </span>
      </div>
    </button>
  )
}


