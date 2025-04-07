import NavBar from './NavBar'
import Footer from './Footer'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
           </section>

           {/*Catalogs*/}
           <section className="fashion-catalog px-6 py-10">
  <h2 className="text-center text-3xl font-bold mb-8">Our Fashion Catalog</h2>
  <div className="catalog-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        className="catalog-item flex flex-col overflow-hidden rounded-2xl shadow-md bg-white"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-60 object-cover" 
        />
        <div className="px-4 py-3 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.name}</p>
        </div>
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
