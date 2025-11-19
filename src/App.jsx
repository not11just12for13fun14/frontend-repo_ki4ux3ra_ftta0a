import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Opportunities from './components/Opportunities'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import About from './pages/About'

function Home(){
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Opportunities />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
    </Routes>
  )
}

export default App
