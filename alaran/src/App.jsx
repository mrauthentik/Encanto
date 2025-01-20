import './App.css'
import './font.css'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Card from './components/Card'
import Female from './components/Female'
import Landing from './components/Landing'
import Male from './components/Male'
import NavBar from './components/NavBar'
import Unisex from './components/Unisex'
import Footer from './components/Footer'



function App() {
  const choose = 'Alaran is a fashion brand that offers a wide range of clothing and accessories for you to choose from. We are committed to providing our customers with high-quality products that are both stylish and affordable. Our team of designers works tirelessly to create unique pieces that are inspired by the rich cultural heritage of Africa. Whether you are looking for a casual outfit for everyday wear or a special occasion dress, we have something for everyone. Shop with us today and experience the beauty of African fashion! ';
  const chooseText = 'Alaran is a fashion brand that offers a wide range of clothing and accessories for you to choose from...';
  const secondAboutText = 'Explore the world of African fashion, where tradition meets modernity to create timeless pieces.';
   return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <WhyChooseUs 
        text={choose} 
        chooseText={chooseText}
        secondAboutText={secondAboutText}
        />
      <Card />
      <Unisex />
      <Female />
      <Male />
      <Footer />
    </div>
   )
}

export default App
