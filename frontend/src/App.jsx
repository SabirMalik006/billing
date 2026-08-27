import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Capabilities from './pages/Capabilities'
import About from './pages/About'
import Contact from './pages/Contact'
import Insights from './pages/Insights'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology-and-ai" element={<Technology />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect-us" element={<Contact />} />
            <Route path="/our-insights" element={<Insights />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
