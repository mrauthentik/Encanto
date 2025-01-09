import image1 from '../assets/fashion (3).jpg'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Landing = () => {
  return (
    <div>
      
      <h1> Welcome to Arana</h1>
      <img src={image1} alt="" />
    </div>
  )
}

export default Landing
