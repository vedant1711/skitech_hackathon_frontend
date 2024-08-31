// 'use client'
// import React, { useState, useEffect } from 'react';

// const images = [
//   '/assets/imgs/pages/cotton.jpg',
//   '/assets/imgs/pages/corn.jpeg',
//   '/assets/imgs/pages/coffee.jpg',
// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3000ms

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative max-w-lg mx-auto">
//       {/* Arrow buttons outside the image */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-200 z-10"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-200 z-10"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Carousel Container */}
//       <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
//         <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {images.map((src, index) => (
//             <div key={index} className="flex-shrink-0 w-full h-full">
//               <img
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots Indicator */}
//       <div className="flex justify-center mt-4">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'
import React, { useState, useEffect } from 'react';

const images = [
  '/assets/imgs/pages/cotton.jpg',
  '/assets/imgs/pages/corn.jpeg',
  '/assets/imgs/pages/coffee.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3000ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-neutral-400 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-neutral-400 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container with Increased Size */}
      <div className="w-full h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}

