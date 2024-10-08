import React from 'react'

import img from "@/assets/Alabay Assets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png"
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className='mt-20 w-full md:min-h-[900px] bg-gradient-to-br from-[#FFF280] to-[#FFA800]'>
        <Image src={img} objectFit='cover' className=' absolute md:top-[100px] w-full h-[800px]  max-md:h-[300px]' alt='section3-img'/>
        <div className='w-full h-[200px] pt-[800px] max-md:pt-[350px] md:px-20'>
            <p className='font-montserrat text-2xl md:text-3xl text-center font-extrabold'>
                Out mission is to honour the heritage of the Alabay by creating a vibrant, loyal and powerful community. Just as the Alabay products its flock, we aim to build a pack that stands strong together.
            </p>
        </div>
        <div className='py-44 md:pl-20 max-md:pb-20 max-md:pt-72'>
            <h2 className='text-[8rem] max-md:text-[5rem] font-cheeseBurga text-white max-md:text-center'>ROAD MAP</h2>
        </div>
    </div>
  )
}

export default Section3