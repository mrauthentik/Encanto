
import img1 from "../assets/design.jpg";
import img2 from "../assets/design (1).jpg";
import img3 from "../assets/design (2).jpg";
import img4 from "../assets/fashion (4).jpg";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const Curved = () => {
  return (
    <div className="female-section"> 
         {/* Image Grid with Horizontal Scroll */}
         <div className="image-grid-wrapper">
        <div className="image-grid">
          {images.slice(0, 3).map((image, i) => (
            <div key={i}>
              <img src={image} alt={`Design ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Curved
