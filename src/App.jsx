import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Interest from './components/Interest'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Interest />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
