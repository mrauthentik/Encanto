import image1 from '../assets/fashion (9).jpg'
import image2 from '../assets/fashion (12).jpg'
import alaran from '../assets/alaran logo3.png'
import { motion, AnimatePresence, useInView} from "framer-motion";
import { useState } from 'react';

const Unisex = () => {
  return (
    <div>
      <main className='unisex'>
        
        <div className="unisex-container">
            <div className="side">
              <img src={alaran} alt="" />
            </div>
            <div className="unisex-images">
              <img src={image1} className='unisex-img1' alt="" />
              <img src={image2} className='unisex-img2' alt="" />
              
            </div>
             <section>
               
             </section>
        </div>
      
      </main>
    </div>
  )
}

export default Unisex
