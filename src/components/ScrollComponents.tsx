
import React from 'react';
import Section1 from './sections/section1/Section1';
import "./index.css"
import Section2 from './sections/section2/Section2';
import Section3 from './sections/section3/Section3';
import Section4 from './sections/section4/Section4';
import Section5 from './sections/section5/Section5';
import Section6 from './sections/section6/Section6';
import Section7 from './sections/section7/Section7';
import Section8 from './sections/section8/Section8';

const ScrollComponents: React.FC = () => {
  

  return (
    <div className='bg-white w-full h-[10000px] rounded-t-3xl flex flex-col items-center relative'>
      <div className='absolute top-5 rounded-xl bg-[#FFF6A1] h-6 w-20 z-20'></div>

      <div className='w-full flex max-lg:flex-col  h-[900px] bg-gradient-to-br from-[#FFF280] to-[#FFA800] relative '>
          <Section1/>
          <div className='w-full skewed bg-white'>
          </div>
      </div>

      <div className='w-full mt-32 relative'>
        <Section2/>
      </div>  
      
      <div className='w-full mt-60 flex-col items-center relative'>
        <div className='w-full flex justify-center mb-20'>
          <h1 className='text-[6rem] max-md:text-[4rem] font-cheeseBurga text-yellow-400 text-center z-20'>PROJECT VISION</h1>
        </div>
        
        <div className='w-full skewed-top bg-white mt-[235px]  max-sm:mt-[350px] '>
          </div>
        <Section3/>
        <div className='w-full skewed bg-white'>
          </div>
      </div>

      <div className='mt[200px] w-full z-20 relative'>
        <Section4/>
      </div>

      <div className='w-full mt-80  relative max-md:mt-[2400px] max-sm:mt-[2200px]'>
        <div className='w-full skewed-reverse bg-white z-30 h-[156px] top-0 '>
          </div>
        <Section5/>
        <div className='w-full skewed bg-white z-30  '>
          </div>
      </div>

      <div className="w-full mt-24 max-md:mt-56 relative">
        <Section6/>
        <div className='w-full skewed-reverse bg-white z-30 h-[156px] -bottom-[300px] '>
          </div>
      </div>
      
      <div className='w-full relative'>
        <Section7/>
      </div>

      <div className='w-full relative'>
        <Section8/>
      </div>



    </div>
  );
};

export default ScrollComponents;
