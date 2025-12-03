import Hero from './components/Hero'
import ValueGrid from './components/ValueGrid'
import Steps from './components/Steps'
import Plans from './components/Plans'
import VideoTestimonials from './components/VideoTestimonials'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import FloatingCTA from './components/FloatingCTA'
import SocialProofPopups from './components/SocialProofPopups'

function App() {
  return (
    <div className="page">
      <Hero />
      <ValueGrid />
      <Steps />
      <Plans />
      <VideoTestimonials />
      <Testimonials />
      <Faq />

      <footer>
        © {new Date().getFullYear()} Prátiko Supermercados • Curso Frango
        Atropelado de Sucesso
      </footer>

      <FloatingCTA />
      <SocialProofPopups />
    </div>
  )
}

export default App

