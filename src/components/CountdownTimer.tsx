import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
            }
          }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => String(value).padStart(2, '0')

  return (
    <div className="countdown-timer">
      <p className="countdown-label">Esta oferta expira em:</p>
      <div className="countdown-display">
        <div className="countdown-unit">
          <span className="countdown-value">{formatTime(timeLeft.hours)}</span>
          <span className="countdown-label-small">horas</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-value">{formatTime(timeLeft.minutes)}</span>
          <span className="countdown-label-small">minutos</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-value">{formatTime(timeLeft.seconds)}</span>
          <span className="countdown-label-small">segundos</span>
        </div>
      </div>
    </div>
  )
}

