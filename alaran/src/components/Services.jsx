import NavBar from './NavBar'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {   faMoneyBillTransfer, faRecycle, faTape, faTruck} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import img1 from '../assets/design (1).jpg'
import img2 from '../assets/design (2).jpg'
import img3 from '../assets/fashion (1).jpg'
import img4 from '../assets/fashion (2).jpg'
import img5 from '../assets/fashion (3).jpg'
import img6 from '../assets/fashion (4).jpg'
import img7 from '../assets/fashion (12).jpg'
import img8 from '../assets/fashion (11).jpg'
import Setter from './Setter';
import Curved from './Curved';

const Services = () => {
  return (
    <div className='services'>
      <NavBar/>
         <Setter where={'/services'} set={'Services'}/>
     
         <section>
           <h2>Our Services</h2>
           <main>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil libero cumque repudiandae pariatur atque cupiditate explicabo sapiente adipisci alias dolorum voluptates consectetur dolores, earum nulla voluptatem quia assumenda necessitatibus quam.</p>
           </main>
           <section>
              <Curved />
           </section>

           {/*Catalogs*/}
           <section className="fashion-catalog px-6 py-10">
  <h2 className="text-center text-3xl font-bold mb-8">Our Fashion Catalog</h2>
  <div className="catalog-grid">
    {[
      { img: img1, title: "Elegant Suit", name: "Classic Menswear" },
      { img: img2, title: "Modern Gown", name: "Luxury Couture" },
      { img: img3, title: "Agbada", name: "Urban Streetwear" },
      { img: img4, title: "Bridal Dress", name: "Wedding Collection" },
      { img: img5, title: "Summer Wear", name: "Breezy Styles" },
      { img: img6, title: "Traditional Attire", name: "Cultural Heritage" },
      { img: img7, title: "Traditional Attire", name: "Cultural Heritage" },
      { img: img8, title: "Traditional Attire", name: "Cultural Heritage" },
    ].map((item, index) => (
      <motion.div 
        key={index} 
        className="catalog-item relative overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <FontAwesomeIcon icon="tshirt" className="text-3xl mb-2" />
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm">{item.name}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>
           {/* <div className="service-set">
                  <div className="service-box">
                     <h3>Measurement</h3>
                    <FontAwesomeIcon icon={faTape} className='service-icons'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis animi, provident ad eaque sint corporis doloribus facere ipsum, eum ipsa delectus harum sapiente accusantium temporibus nulla dicta suscipit ea.</p>
                  </div>
                  <div className="service-box">
                     <h3>Payment</h3>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} className='service-icons'/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ipsa mollitia, corrupti ratione quidem voluptas distinctio eaque quos, ex facilis, minus aperiam culpa et? Numquam voluptatibus delectus nihil provident repellendus!</p>
                  </div>
                  <div className="service-box">
                    <h3>Delivery</h3>
                    <FontAwesomeIcon icon={faTruck} className='service-icons'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas quod, quaerat maiores voluptatem praesentium velit dolores soluta eum quas quasi et tenetur saepe temporibus eos, ratione voluptate aspernatur officiis.</p>
                  </div>
                  <div className="service-box">
                    <h3>Refunding</h3>
                    <FontAwesomeIcon icon={faRecycle} className='service-icons'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita consectetur voluptatem incidunt? Repudiandae veniam aperiam reiciendis? Enim dolores neque fugiat beatae dignissimos vitae dolorem, assumenda unde accusamus perspiciatis reiciendis?</p>
                  </div>
           </div>
           */}
          </section>    
       <Footer />
    </div>
  )
}

export default Services
