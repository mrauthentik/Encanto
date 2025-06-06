import { useState } from "react";
import { Link } from "react-router-dom";
import {  easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import image1a from "../assets/images/img (5).JPG";
import image1b from "../assets/images/img (6).JPG";
import image2a from "../assets/images/img (13).JPG";
import image2b from "../assets/images/img (15).JPG";
import image3a from "../assets/img.JPG";
import image3b from "../assets/images/img (3).PNG";

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

  const [currentHover, setCurrentHover] = useState(null);

  const handleMouseEnter = (id) => {
    setCurrentHover(id);
  };

  const handleMouseLeave = () => {
    setCurrentHover(null);
  };

  return (
    <div className="male-section">
      <h2 className="section-title">OUR DESIGNS</h2>
      <div className="product-grid">
        {products.map((product) => (
          <motion.div
            className="product-card"
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, opacity:1, transition: 1 }}
            transition={{ duration: 1, ease:easeInOut, opacity:0.5 }}
          >
            <div className="image-container">
              <motion.img
                src={currentHover === product.id ? product.hoverImage : product.defaultImage}
                alt={product.title}
                className="product-image"
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <Link to='/design' >
              <button className="shop-now-btn">
                <FontAwesomeIcon icon={faShoppingCart} />  Shop Now
              </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Male;
