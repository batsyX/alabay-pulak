import React from 'react'

import dogImg from "@/assets/Alabay Assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png"
import Image from 'next/image'

const Section1 = () => {
  return (
    <>
    <div className='lg:mt-52 max-lg:mt-32 flex justify-center'>
        <Image src={dogImg}  className='w-[600px] h-[600px] max-lg:w-[300px] max-lg:h-[300px]' alt='section1-img'/>
    </div>
    <div className='lg:flex-1 flex justify-end items-center px-10 max-lg:px-3'>
        <div className='flex flex-col items-end '>
            <h2 className='text-[#F76902] text-6xl max-lg:text-2xl font-montserrat font-bold '>History Of </h2>
            <h2 className='text-white font-cheeseBurga text-[8rem]
            max-lg:text-8xl'>ALABAY</h2>
            <p className='text-4xl max-lg:text-2xl font-bold text-right'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
        </div>
    </div>
    </>
  )
}

export default Section1