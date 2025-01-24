import  { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import image1a from "../assets/img.JPG";
import image1b from "../assets/fashion (1).jpg";
import image2a from "../assets/img.JPG";
import image2b from "../assets/fashion (2).jpg";
import image3a from "../assets/img.JPG";
import image3b from "../assets/fashion (3).jpg";

const Male = () => {
  const products = [
    {
      id: 1,
      title: "Classic Suit",
      price: "$120",
      defaultImage: image1a,
      hoverImage: image1b,
    },
    {
      id: 2,
      title: "Casual Jacket",
      price: "$95",
      defaultImage: image2a,
      hoverImage: image2b,
    },
    {
      id: 3,
      title: "Designer Blazer",
      price: "$150",
      defaultImage: image3a,
      hoverImage: image3b,
    },
  ];

  return (
    <div className="male-section">
      <h2 className="section-title">Our Male Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <motion.div
            className="product-card"
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-container">
              <motion.img
                src={product.defaultImage}
                alt={product.title}
                className="default-image"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src={product.hoverImage}
                alt={product.title}
                className="hover-image"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button className="shop-now-btn">
                <FontAwesomeIcon icon={faShoppingCart} /> Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Male;
