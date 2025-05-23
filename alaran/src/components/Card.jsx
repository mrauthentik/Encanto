import { useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndex((prevIndex) => {
            return prevIndex.map((index) => (index + 1) % 5);
        });
    };

    const handlePrev = () => {
        setPositionIndex((prevIndex) => {
            return prevIndex.map((index) => (index - 1 + 5) % 5);
        });
    };
    

    const handleSwipe = (event, info) => {
        // Detect swipe direction based on velocity
        if (info.offset.x < 0) {
            // Swiped left, go to the next image
            handleNext();
        } else if (info.offset.x > 0) {
            // Swiped right, go to the previous image
            handlePrev();
        }
    };

    const images = [
                    "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747159987/img_3_pyuimq.jpg",
                     "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747159989/img_2_jzarjn.jpg",
                      "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747160024/img_16_vbmtpe.jpg", 
                      "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747159986/img_7_qnyr6j.jpg", 
                     "https://res.cloudinary.com/dnjfc8uhs/image/upload/v1747159986/img_11_bomdv0.jpg"
                ];
    const positions = ["center", "left", "right", "left1", "right1"];

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
            <h2>A Glimpse</h2>
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
                        style={{ width: "25%", position: "absolute" }}
                        drag="x" // Enable horizontal drag
                        dragConstraints={{ left: 0, right: 0 }} // Lock drag to horizontal direction
                        onDragEnd={handleSwipe} // Detect swipe on drag end
                    />
                ))}
                <br />
                <br />
                <br />
                <button
                    className="card-btn text-black rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default Card;
