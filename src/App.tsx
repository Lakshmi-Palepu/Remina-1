import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import ROI from './pages/ROI'
import Testimonials from './pages/Testimonials'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/roi" element={<ROI />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
