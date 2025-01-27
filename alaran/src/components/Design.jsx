import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import design1a from '../assets/fashion (5).jpg'
import design1b from '../assets/design (2).jpg'
import design2a from '../assets/img.JPG'
import design2b from '../assets/fashion (1).jpg'
import Setter from "./Setter";


const Design = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Elegant Dress",
      size: ["S", "M", "L"],
      color: "Red",
      category: "Female",
      latest: true,
      images: [design1a, design1b],
      liked: false,
    },
    {
      id: 2,
      name: "Classic Suit",
      size: ["M", "L", "XL"],
      color: "Black",
      category: "Male",
      latest: false,
      images: [design2a, design2b],
      liked: false,
    },
    // Add more products here
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({
    size: "",
    color: "",
    category: "",
    latest: false,
  });

  // Handle Search
  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.size.some((size) => size.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  // Handle Filters
  useEffect(() => {
    let filtered = [...products];
    if (filter.size) filtered = filtered.filter((product) => product.size.includes(filter.size));
    if (filter.color) filtered = filtered.filter((product) => product.color === filter.color);
    if (filter.category) filtered = filtered.filter((product) => product.category === filter.category);
    if (filter.latest) filtered = filtered.filter((product) => product.latest === true);
    setFilteredProducts(filtered);
  }, [filter, products]);

  const toggleLike = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <div>
      <NavBar setSearchQuery={setSearchQuery} />
     <Setter 
        set='Design'
        where={'/design'}
      />
      <section className="designs-section">
        <div className="filters">
          <select onChange={(e) => setFilter({ ...filter, size: e.target.value })}>
            <option value="">All Sizes</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
          <select onChange={(e) => setFilter({ ...filter, color: e.target.value })}>
            <option value="">All Colors</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
          </select>
          <select onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
            <option value="">All Categories</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked={filter.latest}
              onChange={(e) => setFilter({ ...filter, latest: e.target.checked })}
            />
            Latest
          </label>
        </div>
        <motion.div className="product-grid">
          {filteredProducts.map((product) => (
            <motion.div
              className="product-card"
              key={product.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="product-image">
                <motion.img
                  src={product.images[0]}
                  alt={product.name}
                  onMouseEnter={(e) => (e.currentTarget.src = product.images[1])}
                  onMouseLeave={(e) => (e.currentTarget.src = product.images[0])}
                />
              </div>
              <h3>{product.name}</h3>
              <p>Available Sizes: {product.size.join(", ")}</p>
              <p>Color: {product.color}</p>
              <div className="product-actions">
                <button onClick={() => toggleLike(product.id)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={product.liked ? "liked" : "not-liked"}
                  />
                </button>
                <button>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Design;
