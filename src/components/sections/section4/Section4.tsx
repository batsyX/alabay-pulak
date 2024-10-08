import React from 'react'

import img from "@/assets/Alabay Assets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png"
import Image from 'next/image'
import img2 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png"
import img3 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png"
import img4 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png"
import img5 from "@/assets/Alabay Assets/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png"
import Cards from '../../Cards'

const data=[
    {
        title:'Community building and initial launch',
        img:img2,
        col:'bg-gradient-to-b from-[#DBC70C] to-[#FFF280]',
    },
    {
        title:'Merchandise store launch',
        img:img3,
        col:'bg-gradient-to-b from-[#00D4D4] to-[#41FFFF00]',
    },
    {
        title:'Community events and contests',
        img:img4,
        col:'bg-gradient-to-b from-[#D427FF] to-[#D427FF00]',
    },
    {
        title:'Expansions and new features',
        img:img5,
        col:'bg-gradient-to-b from-[#8F3A3C] to-[#8F3A3C00]',
    }
]




const Section4 = () => {
  return (
    <div className='h-[900px]'>
        <div className='flex max-md:flex-col '>
            <div className="flex-1">
                    <h2 className='font-montserrat text-3xl font-bold pl-10'>
                    Our Jorunery is just begining.Explore our roadmap to see the exciting milestones and future plans we have in store.
                </h2>
                <br />
                <h2 className='font-montserrat text-4xl font-bold text-yellow-400 pl-10'>
                    Join us as we grow and achieve new heights
                </h2>
            </div>
            <div className='flex-1 relative'>
                <Image src={img} objectFit='cover' className=' md:absolute -top-44 z-20'  alt='section4-img'/>
            </div>
        </div>
        <div className='h-[600px] w-full md:mt-96 max-md:mt-32 md:px-32 '>
            <div className='flex  rounded-xl overflow-hidden gap-3 max-md:flex-wrap max-md:justify-center'>
            {
                data.map((item,index)=>(
                    <Cards key={index} title={item.title} img={item.img} style={item.col}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Section4