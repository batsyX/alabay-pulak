'use client'
import React, { useEffect } from 'react'

import img1 from "@/assets/Alabay Assets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png"
import img2 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png"
import img3 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png"
import img4 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png"
import img5 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png"
import img6 from "@/assets/Alabay Assets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png"

import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay , EffectCoverflow , Navigation} from 'swiper/modules';
import Image from 'next/image'

const data=[
    {img:img1},
    {img:img2},
    {img:img3},
    {vid:'https://www.youtube.com/embed/O8K6Q9W2WPE?si=HGCcYNKKMQYXhfr6'},
    {img:img5},
    {vid:'https://www.youtube.com/embed/O8K6Q9W2WPE?si=HGCcYNKKMQYXhfr6'},
    {vid:'https://www.youtube.com/embed/O8K6Q9W2WPE?si=HGCcYNKKMQYXhfr6'},
    {img:img4},
    {vid:'https://www.youtube.com/embed/O8K6Q9W2WPE?si=HGCcYNKKMQYXhfr6'},
    {img:img6},
]

const Section2 = () => {
  const [slidesPerView,setSlidesPerView]=React.useState(3);
  const [currenChoice,setCurrentChoice]=React.useState('all')
  
  useEffect(()=>{
    if(window.innerWidth<768){
        setSlidesPerView(1)
    }else{
        setSlidesPerView(3)
    }
  },[window.innerWidth])

  const handleClick=(e:React.MouseEvent<HTMLHeadingElement>)=>{
    const target=e.target as HTMLHeadingElement;
    setCurrentChoice(target.innerText.toLowerCase())
    console.log(target.innerText.toLowerCase())
  }

  return (
    <div>
      <div className='flex w-full justify-center mb-20 gap-10'>
          <h3 onClick={handleClick} className={`text-2xl font-extrabold cursor-pointer  ${currenChoice==='all' && 'text-yellow-500'} `}>All</h3>
          <h3 onClick={handleClick} className={`text-2xl font-extrabold cursor-pointer  ${currenChoice==='photos' && 'text-yellow-500'}`}>Photos</h3>
          <h3 onClick={handleClick} className={`text-2xl font-extrabold cursor-pointer  ${currenChoice==='videos' && 'text-yellow-500'}`}>Videos</h3>
      </div>
        <Swiper
        spaceBetween={30}
            grabCursor={true}
            navigation={true}
            centeredSlides={true}
            slidesPerView={slidesPerView}
            autoplay={{ 
                delay:2500,
                disableOnInteraction:false,
                pauseOnMouseEnter:true,
                
            }}
            coverflowEffect={{
                modifier: 1,
                slideShadows: true,
              
            }}
            loop={true}
            modules={[Autoplay,EffectCoverflow,Navigation]}
        >
        {
          data.filter((item)=>currenChoice==='all' || (currenChoice==='photos' && item.img) || (currenChoice==='videos' && item.vid)).map((item,index)=>(
            <SwiperSlide key={index} className=' hover:border-4 border-black' style={{height:'300px'}}>
              {
                item.img ? <Image src={item.img} alt='section2-img' className='w-[300px] h-[300px]'/> : <iframe style={{borderRadius:'30px'}} width="550" height="300" src={item.vid} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
              }
            </SwiperSlide>
          ))
        }

        
      </Swiper>
    </div>
  )
}

export default Section2