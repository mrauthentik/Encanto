import './App.css'
import './font.css'
import About from './components/About'
import Card from './components/Card'
import Female from './components/Female'
import Landing from './components/Landing'
import Male from './components/Male'
import NavBar from './components/NavBar'
import Unisex from './components/Unisex'
import Footer from './components/Footer'



function App() {
   return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Card />
      <Unisex />
      <Female />
      <Male />
      <Footer />
    </div>
   )
}

export default App
