'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/navigation'

import right from "/public/images/right-arrow.png"
import img1 from "@/assets/Alabay Assets/Alabay Games/alabay guard prev 2 1.png"
import img2 from "@/assets/Alabay Assets/Alabay Games/alabay lost heritage prev 1.png"
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/navigation';
import './index.css';

const data=[
    {img:img1},
    {img:img2},
]

const GameSlider = () => {
    const router = useRouter()
    
  return (
    <div >
        <Swiper
        spaceBetween={30}
            navigation={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{ 
                delay:2500,
                disableOnInteraction:false,
                pauseOnMouseEnter:true,
                
            }}
            allowTouchMove={false}
            loop={true}
            modules={[Autoplay,Navigation]}
        >
        {
          data.map((item,index)=>(
            <SwiperSlide key={index}  style={{border:'10px solid white',height:window.innerWidth<720? '300px':'650px',overflow:'hidden'}}>
              
                <Image src={item.img} alt='section2-img' className='w-full h-full rounded-xl' objectFit='cover'/> 
                <button className={`${index==0 ?'bg-[#843AFC]':'bg-[#45D689]'} px-12 py-4 rounded-xl absolute bottom-20 max-md:bottom-2 box-btn hover:scale-105 flex justify-center items-center gap-2`}
                onClick={()=>{
                    if(index==0){
                        router.push('/game1')
                    }else{
                        router.push('/game2')
                    }
                }}
                >
                    <p className='text-white font-extrabold '>DISCOVER                
                    </p>
                    <Image src={right} alt='right' width={20} height={20} />
                </button>
            </SwiperSlide>
          ))
        }

        
      </Swiper>
    </div>
  )
}

export default GameSlider