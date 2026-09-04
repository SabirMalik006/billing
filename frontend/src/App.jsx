import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import HIPAA from './pages/HIPAA'
import Admin from './pages/Admin'
import Company from './pages/Company'
import Resources from './pages/Resources'
import Software from './pages/Software'
import MedicalAssistant from './pages/MedicalAssistant'
import RSMServices from './pages/RSMServices'
import Solution from './pages/Solution'

function AppContent() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdmin && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect-us" element={<Contact />} />
          <Route path="/hipaa" element={<HIPAA />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/software" element={<Software />} />
          <Route path="/medical-assistant" element={<MedicalAssistant />} />
          <Route path="/rsm-services" element={<RSMServices />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

export default App
