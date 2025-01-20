import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutPage from './components/AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
