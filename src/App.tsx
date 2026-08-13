import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Laboratory from './pages/Laboratory'
import Clinics from './pages/Clinics'
import Rights from './pages/Rights'
import FamilyPlanning from './pages/FamilyPlanning'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
