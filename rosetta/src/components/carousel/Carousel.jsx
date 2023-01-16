// import React, { useState, useEffect } from 'react';
// import './carousel.css';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

//   return (
//     <div className="carousel-container">
//       <div className="carousel-slider">
//         {images.slice(currentIndex).concat(images.slice(0, currentIndex)).map((image, index) => (
//           <div
//             key={index}
//             className="carousel-slide"
//             style={{ width: `${100 / (images.length)}%` }}
//           >
//             <img src={image} alt="Carousel" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Carousel






import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-slider" style={{ transition: 'transform 2s ease-out' }}>
        {images.slice(currentIndex).concat(images.slice(0, currentIndex)).map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ width: `${100 / (images.length)}%` }}
          >
            <img src={image} alt="Carousel" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel