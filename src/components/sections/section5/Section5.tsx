import Image from 'next/image'
import React from 'react'
import img from "@/assets/Alabay Assets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png"
import "./styles.css"

const Section5 = () => {
  return (
    <div className='w-full min-h-[1200px] bg-gradient-to-br from-[#FFF280] to-[#FFA800] pt-60 overflow-hidden'>
        <div className='max-md:flex justify-center'>
            <h1 className='text-[7rem] max-sm:text-[4rem] font-cheeseBurga text-white md:pl-20'>TOKENOMICS</h1>                
        </div>
        <div className="flex max-md:flex-col">
            <div className='flex-1 md:pl-20 max-md:mb-10 pt-20 flex flex-col gap-10 max-md:items-center'>
              <div className='w-[300px] h-24 bg-[#353535] rounded-2xl box flex flex-col justify-center'>
                  <h3 className='font-montserrat text-2xl text-white font-extrabold  pl-10'>LIQUIDITY</h3>
                  <h3 className='font-montserrat text-3xl text-yellow-400 font-extrabold pl-10'>LOCKED</h3>
              </div>
              <div className='w-[300px] h-24 bg-[#353535] rounded-2xl box flex flex-col justify-center'>
                  <h3 className='font-montserrat text-2xl text-white font-extrabold  pl-10'>CONTRACT</h3>
                  <h3 className='font-montserrat text-3xl text-yellow-400 font-extrabold pl-10'>RENOUNCED</h3>
              </div>
              <div className='w-[300px] h-24 bg-[#353535] rounded-2xl box flex flex-col justify-center'>
                  <h3 className='font-montserrat text-2xl text-white font-extrabold  pl-10'>TAXES</h3>
                  <h3 className='font-montserrat text-3xl text-yellow-400 font-extrabold pl-10'>0%</h3>
              </div>
            </div>
            <div className="flex-1 image-container  ">
                <Image  src={img}  alt="Alabay"  className='main-image ' />
            </div>
        </div>
    </div>
  )
}

export default Section5