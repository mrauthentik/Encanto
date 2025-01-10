import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/fashion (1).jpg";
import image2 from "../assets/fashion (2).jpg";
import image3 from "../assets/fashion (3).jpg";
import image4 from "../assets/fashion (5).jpg";
import image5 from "../assets/fashion (7).jpg";

const Card = () => {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {      
        setPositionIndex((prevIndex) => {
            const updateIndex = prevIndex.map((index) => {
                return (index + 1) % 5;
            });
            return updateIndex;
        });
    };

    const images = [image1, image2, image3, image4, image5];
    const positions = ['center', 'left', 'right', 'left1', 'right1'];

    const imageVariants = {
        center: {
            zIndex: 5,
            x: "0%",
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        left1: {
            zIndex: 2,
            x: "-50%",
            scale: 0.7,
        },
        left: {
            zIndex: 1,
            x: "-90%",
            scale: 0.5,
        },
        right: {
            zIndex: 1,
            x: "90%",
            scale: 0.5,
        },
        right1: {
            zIndex: 2,
            x: "50%",
            scale: 0.7,
        },
    };

    return (
        <main>
            <h2>A Glimpse </h2>
        <div className="card flex items-center justify-center h-screen flex-col sm:block md:flex">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="card-img rounded-[12px]"
                    initial={false}
                    animate={positions[positionIndex[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: '25%', position: 'absolute' }}
                />
            ))} 
            <br /> <br /> <br />
            <button className="card-btn text-black rounded-md py-2 px-4" onClick={handleNext}>Next</button>
            {/* <button className="card-button" > Next Pic</button> */}
        </div>
        </main>
    );
};

export default Card;