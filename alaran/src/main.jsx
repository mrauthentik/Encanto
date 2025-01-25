import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutPage from './components/AboutPage.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import FAQs from './components/FAQs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/faqs' element={<FAQs/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
