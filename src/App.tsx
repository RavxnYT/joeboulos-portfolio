import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Testimonials } from './sections/Testimonials'

function App() {
  return (
    <div className="bg-background text-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
