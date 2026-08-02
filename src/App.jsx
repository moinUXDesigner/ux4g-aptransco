import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Tenders from './pages/Tenders'
import Reports from './pages/Reports'
import Employees from './pages/Employees'
import RTI from './pages/RTI'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/rti" element={<RTI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sitemap" element={<Legal />} />
        <Route path="/privacy-policy" element={<Legal />} />
        <Route path="/disclaimer" element={<Legal />} />
        <Route path="/terms" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
