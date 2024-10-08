import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface CardsProps {
  title: string;
  img: StaticImport;
  style:string;
}

const Cards: React.FC<CardsProps> = ({title,img,style}) => {
  return (
    <div className={`w-[300px] h-[500px] flex justify-center ${style} relative h-full`}>
        <div className='flex-col '>
            <div className='w-full flex-1 h-32 flex justify-center items-center px-5'>
                <h3 className=' font-extrabold font-montserrat text-center text-2xl text-white'>
                    {
                        title
                    }
                </h3>
            </div>
            <Image src={img} className='w-full absoute bottom-0' alt='section1-img'/>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-white to-[#FFFFFF00]">

        </div>
    </div>
  )
}

export default Cards