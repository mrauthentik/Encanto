import { useState } from "react";
import image1 from "../assets/fashion (1).jpg";
import image2 from "../assets/fashion (2).jpg";
import image3 from "../assets/fashion (3).jpg";
import image4 from "../assets/fashion (4).jpg";

const Card = () => {
    const [postionIndex, setPositionIndex] = useState([0, 1, 2, 3]);

    const handleNext = () => {      
        setPositionIndex((prevIndex) => {
            const updateIndex = prevIndex.map((prevIndex) => {
                (prevIndex + 1) % 4;
                return updateIndex;
            });
        });
    }
    const images = [image1, image2, image3, image4];
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
    }
  return (
    <div className="flex items-center justify-center h-screen flex-col">
        {
            images.map((image, index) => {
                return (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="rounded-[12px]"
                        initial={false}
                        animate={positions[postionIndex[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ width }}
                    />
                )
        }
    
    </div>
  )
}

export default Card
