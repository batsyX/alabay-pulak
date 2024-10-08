import React from 'react'
import img3 from "@/assets/Alabay Assets/Alabay Games/Abilities 2.png"
import img4 from "@/assets/Alabay Assets/Alabay Games/Alabay Adventure - The Lost Heritage/locations preview.png"
import img5 from "@/assets/Alabay Assets/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png"
import frame2 from "@/assets/Alabay Assets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png"
import Image from 'next/image'
import right from "/public/images/play-button.png"
import frame from "/public/images/frame.png"
import "./styles.css"

const Section8 = () => {
  return (
    <div className='mt-96 max-md:mt-44 max-md:flex max-md:flex-col justify-center items-center'>
        <h2 className='md:pl-20 font-montserrat font-extrabold text-4xl'> <span className='text-[#FFA800]'>GAME</span> PREVIEWS</h2>
        <div className="flex max-md:flex-col gap-5 max-md:justify-center items-center">
            <div className='flex flex-wrap max-md:justify-center md:pl-20 gap-2 pt-10'>
                <Image src={img4} alt='game'   className='rounded-xl border-4 border-white h-[200px] w-[350px] max-lg:h-[100px] max-lg:w-[150px]'/>
                <Image src={img3} alt='game'  className='rounded-xl border-4 border-white h-[200px] w-[250px] max-lg:h-[100px] max-lg:w-[150px]'/>
                <Image src={img5} alt='game'   className='rounded-xl border-4 border-white h-[200px] w-[350px] max-lg:h-[100px] max-lg:w-[150px]'/>
            </div>
            <div className='bg-black rounded-full p-6 cursor-pointer hover:scale-105 transition-all duration-300'>
                <Image src={right} alt='right' width={30} height={30} />
            </div>
        </div>
        <div className='max-md:flex max-md:flex-col items-center'>
            <h3 className='text-[#FFA800] text-[7rem] max-md:text-[3rem] font-cheeseBurga font-bold md:pl-20 pt-32 tracking-wider'>SOCIAL MEDIA <br />LINKS</h3>
            <div className='flex max-md:flex-col  gap-3 w-full justify-center items-center md:mt-44 max-md:mt-10'>
                <Image src={frame} alt='frame' className=' w-[450px] h-[400px] max-md:w-[250px] max-md:h-[200px]' />
                <Image src={frame2} alt='frame' className=' w-[600px] h-[600px] max-md:w-[300px] max-md:h-[300px] mimage' />
            </div>
        </div>
    </div>
  )
}

export default Section8

