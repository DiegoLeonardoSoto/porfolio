import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
