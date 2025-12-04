import Hero from './components/Hero'
import ValueGrid from './components/ValueGrid'
import Steps from './components/Steps'
import LeadForm from './components/LeadForm'
import Plans from './components/Plans'
import VideoTestimonials from './components/VideoTestimonials'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import CouponTimer from './components/CouponTimer'
import SocialProofPopups from './components/SocialProofPopups'

function App() {
  return (
    <div className="page">
      <Hero />
      <ValueGrid />
      <Steps />
      <Plans />
      <LeadForm />
      <VideoTestimonials />
      <Testimonials />
      <Faq />

      <footer>
        © {new Date().getFullYear()} Prátiko Supermercados • Curso Frango
        Atropelado de Sucesso
      </footer>

      <CouponTimer />
      <SocialProofPopups />
    </div>
  )
}

export default App

