import image1 from '../assets/fashion (9).jpg'
import image2 from '../assets/fashion (12).jpg'

const Unisex = () => {
  return (
    <div>
      <main className='unisex'>
        <h2>Unisex</h2>
        <div className="container">
            <div className="side">
               Alaran <i>for the culture...</i>
            </div>
            <div className="unisex-images">
              <img src={image1} className='unisex-img1' alt="" />
              <img src={image2} className='unisex-img2' alt="" />
            </div>
        </div>
      
      </main>
    </div>
  )
}

export default Unisex
