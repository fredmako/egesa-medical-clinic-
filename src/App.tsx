import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyFooterCTA from './components/StickyFooterCTA'
import FloatingAssistant from './components/FloatingAssistant'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Laboratory from './pages/Laboratory'
import Clinics from './pages/Clinics'
import Rights from './pages/Rights'
import FamilyPlanning from './pages/FamilyPlanning'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import Privacy from './pages/Privacy'
import ServicePolicy from './pages/ServicePolicy'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <HelmetProvider>
      <Router>
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar open={navOpen} setOpen={setNavOpen} />
          <main className="flex-1 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/laboratory" element={<Laboratory />} />
              <Route path="/clinics" element={<Clinics />} />
              <Route path="/rights" element={<Rights />} />
              <Route path="/family-planning" element={<FamilyPlanning />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/service-policy" element={<ServicePolicy />} />
            </Routes>
          </main>
          <Footer />
          <StickyFooterCTA />
          <FloatingAssistant drawerOpen={navOpen} />
        </div>
      </Router>
    </HelmetProvider>
  )
}
