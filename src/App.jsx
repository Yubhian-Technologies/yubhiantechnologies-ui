import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

// Page components
import Services from './sections/Services'
import About from './sections/About'
import Careers from './pages/Careers'
import Contact from './sections/Contact'
import MainPage from './pages/MainPage'
import Testimonial from './sections/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
