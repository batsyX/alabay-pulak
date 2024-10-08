import img1 from "@/assets/Alabay Assets/Alabay Merch/black hoodie bck.png";
import img2 from "@/assets/Alabay Assets/Alabay Merch/black hoodie.png";
import img3 from "@/assets/Alabay Assets/Alabay Merch/blue cap bck.png";
import img4 from "@/assets/Alabay Assets/Alabay Merch/cap mockup.png";
import img5 from "@/assets/Alabay Assets/Alabay Merch/pink tee bck.png";
import img6 from "@/assets/Alabay Assets/Alabay Merch/pink tshirt.png";
import img7 from "@/assets/Alabay Assets/Alabay Merch/yellow tee bck.png";
import img8 from "@/assets/Alabay Assets/Alabay Merch/yellow tshirt.png";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import left from "/public/images/left.png";
import next from "/public/images/next.png";
import Image, { StaticImageData } from "next/image";

interface Slide {
  backgroundImage: StaticImageData;
  productImage: StaticImageData;
}

const slides: Slide[] = [
  {
    backgroundImage: img1,
    productImage: img2,
  },
  {
    backgroundImage: img3,
    productImage: img4,
  },
  {
    backgroundImage: img5,
    productImage: img6,
  },
  {
    backgroundImage: img7,
    productImage: img8,
  }
];

const ProductSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-3/5 h-[550px] max-md:w-full max-md:h-[300px] overflow-hidden rounded-xl ">
      <AnimatePresence >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: direction === 1 ? 800 : -800 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity:0, x: direction === 1 ? -800 : 800 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          
          <Image src={slides[currentSlide].backgroundImage} alt='background' layout='fill' objectFit='cover' />
            

          <motion.img
            src={slides[currentSlide].productImage.src}
            alt="Product"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[550px] h-[400px] max-md:h-[200px] max-md:w-[200px] rounded-xl"
          />

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 border-2 p-3 rounded-full bg-white"
          >
            <Image src={left} alt='left' width={20} height={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 border-2 p-3 rounded-full bg-white"
          >
            <Image src={next} alt='right' width={20} height={20} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductSlider;
