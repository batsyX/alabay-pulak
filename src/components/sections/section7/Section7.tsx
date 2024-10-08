import GameSlider from '@/components/GameSlider'
import React from 'react'

const Section7 = () => {
  return (
    <div className='bg-gradient-to-br mt-36 from-[#FFF280] to-[#FFA800] h-[900px] max-md:h-[600px] max-md:mt-60 '>
        <div className='flex flex-col items-center pt-44 max-md:pt-20'>
            <h2 className='font-cheeseBurga text-[8rem] max-md:text-[5rem] text-white'>GAMES</h2>
            <h3 className='font-montserrat text-[3rem] max-md:text-2xl font-extrabold '>Stay tuned for upcoming games!</h3>
        </div>
        <div className='max-md:pt-32'>
            <GameSlider/>
        </div>
    </div>
  )
}

export default Section7