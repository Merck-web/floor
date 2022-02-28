import React, { useState, useEffect } from "react";

function Carousel() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const handlePrev = () => {
    setIndex((index - 1) % images.length);
    setIndex1((index1 - 1) % images.length);
  };
  const handleNext = () => {
    setIndex((index + 1) % images.length);
    setIndex1((index1 + 1) % images.length);
  };
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  return (
    <>
      <div className='flex justify-center space-x-4 mt-16'>
        <button
          className='h-auto w-10 bg-yellow-800 font-extrabold text-3xl'
          onClick={handlePrev}>
          {"<"}
        </button>
        <div className='relative w-96 border-2 h-56 overflow-hidden rounded-x1'>
          <img
            className={`absolute object-contain z-20 w-full h-full p-4`}
            src={images[index]}
            alt=''
          />
          <img
            className={`absolute object-contain z-0 w-full h-full p-4`}
            src={images[index1]}
            alt=''
          />
        </div>
        <button
          className='h-auto w-10 bg-yellow-800 font-extrabold text-3xl'
          onClick={handleNext}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default Carousel;
