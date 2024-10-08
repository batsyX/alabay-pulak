'use client'
import Image from 'next/image'
import React from 'react'

import img2 from "@/assets/Alabay Assets/Alabay Games/artifacts 2.png"
import img3 from "@/assets/Alabay Assets/Alabay Games/Abilities 2.png"
import img4 from "@/assets/Alabay Assets/Alabay Games/Alabay Adventure - The Lost Heritage/locations preview.png"
import img5 from "@/assets/Alabay Assets/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png"

import {  motion ,useScroll, useSpring} from 'framer-motion';
import {  useRef} from 'react';
import "./page2.css"
import playBtn from "/public/images/play-button.png"
import { useRouter } from 'next/navigation'

const ScrollableComponent: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: ref,offset:['start start','end end']})
  const router = useRouter()
  const scaleY=useSpring(scrollYProgress, {stiffness: 400, damping: 90});
  return (
    <div>

      <div className="background"></div>

      <div className='container ' ref={scrollRef}>
        <div className='progress overflow-hidden'>
            <motion.div style={{scaleY,overflow:'hidden'}} className="progBar ">
            </motion.div>
        </div>
        <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:0.5}} 
         className="h-[100vh] w-full  boxes bg-opacity-20 max-md:overflow-hidden max-md:pl-2">
          <div className='flex flex-col justify-center pt-10 md:pl-20 w-[800px] max-md:w-full'>
            <h1 className='text-8xl text-white font-baronKuffner max-md:text-6xl'>ALABAY HERITAGE </h1>
            <h2 className='text-6xl text-[#90FFAE] font-bebasNeue pb-8 max-md:text-4xl'>THE LOST ADVENTURE</h2>
            <p className='text-2xl text-white font-montserrat pb-6'>Take on the role of the legendary Alabay on <br />za quest to uncover the ancient secrets of its <br />ancestors.</p>
            <button className='flex gap-3 bg-[#90FFAE] w-[200px] rounded-3xl h-[60px] justify-around items-center cursor-pointer z-50'>
              <div className='bg-black rounded-full p-3 flex justify-center '>
                <Image src={playBtn} alt='play' width={20} height={20 } />
              </div>
              <div>
                <p className='font-montserrat font-extrabold text-xl pr-10'>PLAY</p>
              </div>
            </button>
          </div>
          <h3 className='text-2xl text-[#90FFAE] font-montserrat font-extrabold md:pl-20 pt-6'>GAME <span className='text-white'>PREVIEW</span></h3>
          <div className='flex gap-10 w-[800px] max-lg:flex-wrap md:pl-20 pt-8 max-md:w-full '>
            <Image src={img4} alt='game'   className='rounded-xl border-4 border-white h-[200px] w-[350px] max-lg:h-[100px] max-lg:w-[150px]'/>
            <Image src={img2} alt='game'  className='rounded-xl border-4 border-white h-[200px] w-[250px] max-lg:h-[100px] max-lg:w-[150px]'/>
            <Image src={img3} alt='game'  className='rounded-xl border-4 border-white h-[200px] w-[250px] max-lg:h-[100px] max-lg:w-[150px]'/>
            <Image src={img5} alt='game'   className='rounded-xl border-4 border-white h-[200px] w-[350px] max-lg:h-[100px] max-lg:w-[150px]'/>
            
          </div>
        </motion.div>
        <motion.div
        className="h-[100vh] w-full  boxes bg-opacity-20 max-md:pl-2">
          <div className='flex flex-col justify-center pt-10 pl-20 w-[800px] max-md:w-full max-md:pl-0'>
            <h1 className='text-8xl text-white font-baronKuffner max-md:text-6xl'>ALABAY HERITAGE </h1>
            <h2 className='text-6xl text-[#90FFAE] font-bebasNeue pb-5 max-md:text-4xl'>THE LOST ADVENTURE</h2>
            <p className='text-2xl text-[#90FFAE] font-montserrat '>FEATURES</p>
          </div>

          <div className='w-3/5 max-md:w-full md:pl-20 pt-4 pb-5 text-white font-montserrat text-xlg font-bold max-md:pr-12 '>
            Explore a variety of landscapes, including <span className='text-green-300'>mountains, forests, deserts,</span> and ancient ruins. 
            <p className='pt-3'>
            Use the Alabay's <span className='text-green-300'>abilities</span> to solve <span className='text-green-300'>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues. </p>
            <p className='pt-3'>
            Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history. </p >
            <p className='pt-3'>
            Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
            </p>
            <p className='pt-3 pl-6'>
              
            Challenge Modes:
              <br /><span className='text-green-300'>- Time Trials:</span> Compete in special timed challenges where the Alabai must navigate through complex mazes or
                  complete puzzles within a time limit.
              <br /><span className='text-green-300'>  - Exploration Mastery:</span> 
              A mode that rewards players for fully exploring every nook and cranny of the game's world,
                  uncovering all secrets and hidden areas.
            </p>
          </div>


          <div className='flex gap-10  md:pl-20 max-md:px-5 '>
              <button className='flex gap-3 bg-white w-[200px] rounded-3xl h-[60px] justify-around items-center cursor-pointer z-50'>
                  <div className='bg-black rounded-full p-3 flex justify-center '>
                    <Image src={playBtn} alt='play' width={20} height={20 } />
                  </div>
                  <div>
                    <p className='font-montserrat font-extrabold text-xl pr-10'>PLAY</p>
                  </div>
                </button>
                <button className='flex gap-3 bg-transparent w-[200px] rounded-3xl h-[60px] justify-around items-center cursor-pointer z-50 border-white border-4 hover:bg-white transition-all duration-400 text-white hover:text-black'
                onClick={()=>{
                  router.push('/')
                }}>
                  <div>
                    <p className='font-montserrat font-bold text-xl '>EXIT</p>
                  </div>
                </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollableComponent;
