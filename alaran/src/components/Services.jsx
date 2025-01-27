import NavBar from './NavBar'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faMoneyBillTransfer, faRecycle, faTape, faTruck} from "@fortawesome/free-solid-svg-icons";
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
           <div className="service-set">
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
          
          </section>    
       <Footer />
    </div>
  )
}

export default Services
