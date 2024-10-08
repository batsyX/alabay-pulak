'use client';
import Image from "next/image";
import home_background from "../assets/Alabay Assets/DALL·E 2024-07-29 22.54.08 - A wide 3D cartoon illustration of furry Central Asian Shepherd dogs playing together in a grassy field. The dogs are depicted with fluffy fur, playful 1.png";
import ScrollComponents from "@/components/ScrollComponents";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Open the box as soon as the user starts scrolling down
      if (scrollTop > 0) {
        setIsOpen(true);
      } else {
        const innerElement = scrollRef.current;
        if (innerElement) {
          innerElement.scrollTo({ top: 0, behavior: 'smooth' })
        }
        setIsOpen(false); // Close the box when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleInnerScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;

        // Close the box if the inner scroll reaches the top
        if (scrollTop === 0) {
          setIsOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    const innerElement = scrollRef.current;
    if (innerElement) {
      innerElement.addEventListener('scroll', handleInnerScroll);
    }

    return () => {
      if (innerElement) {
        innerElement.removeEventListener('scroll', handleInnerScroll);
      }
    };
  }, [isOpen]);

  return (
    <>
      
      <div className="fixed top-0 bottom-0 right-0 left-0 -z-10">
        <Image className="min-h-screen" src={home_background} alt="home background" layout="fill" objectFit="cover" />
      </div>
      <div className="fixed top-0 left-0 right-0 z-10 bg-transparent"> 
        
        <div className="flex justify-center pt-10 px-10">
          <h1 className="relative font-cheeseBurga max-lg:text-[3rem] text-[6rem] bg-clip-text text-transparent bg-text-gradient text-stroke-2 max-lg:text-stroke ">
            WELCOME TO ALABAY WORLD
          </h1>
        </div>

        
        <div className="bg-[#181C27] w-full flex justify-center py-5 mt-44 max-sm:bg-opacity-60 max-sm:mt-20">
          <h2 className="font-cheeseBurga max-lg:text-[2rem] text-[41px] text-white text-center px-2">
            Where the <span className="text-yellow-300">legendary Central Asian Shepherd Dog</span> meets a new-age adventure.
            <br />
            <span className="text-yellow-300">Join us</span> in celebrating the <span className="text-yellow-300">strength, loyalty,</span> and <span className="text-yellow-300">heritage</span> of the Alabay breed.
          </h2>
        </div>
      </div>
      
      <div className="pt-[200px]">
        <div style={{ height: '1000px' }}>
        </div>
      </div>

      
      <div className={`fixed bottom-0 left-0 right-0 flex  justify-center transition-all duration-300 z-20 ${isOpen ? 'h-[95vh]' : 'h-16'} overflow-hidden `}>
        <div className=" h-full w-11/12  rounded-t-3xl overflow-hidden">
          <div ref={scrollRef} className=" h-full w-full scrollbar overflow-y-scroll rounded-t-3xl">
            <ScrollComponents  />
          </div>
        </div>
      </div>
      
    </>
  );
}
