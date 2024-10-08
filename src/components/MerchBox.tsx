
import React from 'react';
import {  motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductSlider from './ProductSlider';

const Merchbox: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,   
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: .5},
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }} 
      animate={controls}
      className='flex justify-center'
    > 
      <ProductSlider />
    </motion.div>
  );
};

export default Merchbox;
