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
        <div className="card flex items-center justify-center h-screen flex-col sm:block md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="##F6B523" fill-opacity="1" d="M0,64L0,32L96,32L96,224L192,224L192,256L288,256L288,320L384,320L384,256L480,256L480,128L576,128L576,160L672,160L672,224L768,224L768,128L864,128L864,192L960,192L960,128L1056,128L1056,256L1152,256L1152,32L1248,32L1248,160L1344,160L1344,0L1440,0L1440,0L1344,0L1344,0L1248,0L1248,0L1152,0L1152,0L1056,0L1056,0L960,0L960,0L864,0L864,0L768,0L768,0L672,0L672,0L576,0L576,0L480,0L480,0L384,0L384,0L288,0L288,0L192,0L192,0L96,0L96,0L0,0L0,0Z"></path></svg>
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="rounded-[12px]"
                    initial={false}
                    animate={positions[positionIndex[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: '40%', position: 'absolute' }}
                />
            ))}
            <button className="card-btn text-black mt-[400px] rounded-md py-2 px-4" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Card;