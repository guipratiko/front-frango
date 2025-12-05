import Hero from './components/Hero'
import ValueGrid from './components/ValueGrid'
import Steps from './components/Steps'
import Plans from './components/Plans'
import VideoTestimonials from './components/VideoTestimonials'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import CouponTimer from './components/CouponTimer'
import SocialProofPopups from './components/SocialProofPopups'
import SupportButton from './components/SupportButton'

function App() {
  return (
    <div className="page">
      <Hero />
      <ValueGrid />
      <VideoTestimonials />
      <Steps />
      <Plans />
      <Testimonials />
      <Faq />

      <footer>
        <SupportButton />
        <p style={{ marginTop: '2rem' }}>
          © {new Date().getFullYear()} Prátiko Supermercados • Curso Frango
          Atropelado de Sucesso
        </p>
      </footer>

      <CouponTimer />
      <SocialProofPopups />
    </div>
  )
}

export default App

