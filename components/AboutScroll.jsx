'use client';

import { motion } from 'framer-motion';
import alexerPro from '@/lib/fonts';
import GlassButton from './GlassButton';
import image1 from '../assets/images/about1.jpeg';
import image2 from '../assets/images/about2.jpeg';
import image3 from '../assets/images/about3.jpeg';
import image4 from '../assets/images/about4.jpeg';
import Image from 'next/image';

export const AboutScroll = () => {
  return (
    <div className={`font-light text-white bg-black min-h-screen grid grid-cols-12 gap-[24px] px-[64px] grid-rows-1 w-full ${alexerPro.className}`}>
      {/* Left Content (Sticky) */}
      <div className="col-span-6 col-start-1 row-start-1 grid grid-cols-6 gap-[24px] sticky top-0 h-screen">
        <div className="col-span-5 col-start-1 p-0 flex flex-col justify-center">
          <h2 className="text-[72px] mt-0 mb-[14px]">FOCUS LIKE ERÖS</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque pellentesque, dolor tortor ultricies est, ut efficitur odio nunc vel massa. Suspendisse quis posuere enim.
          </p>
        </div>
        <div className="col-span-2 col-start-1 flex items-center">
          <GlassButton text={18} />
        </div>
      </div>

      {/* Left Column (Scrolling) */}
      <motion.div
        className="col-span-3 col-start-7 row-start-1 flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <Image 
            src={image1}
            alt='image 1'
        />
        <Image 
            src={image2}
            alt='image 2'
        />
        <Image 
            src={image3}
            alt='image 3'
        />
        <Image 
            src={image4}
            alt='image 4'
        />
        {/* <div className="bg-gray-500 h-[600px] w-full text-8xl flex items-center justify-center">
        </div>
        <div className="bg-red-500 h-[600px] w-full text-8xl flex items-center justify-center">2</div>
        <div className="bg-gray-500 h-[600px] w-full text-8xl flex items-center justify-center">3</div> */}
      </motion.div>

      {/* Right Column (Sticky) */}
      <div className="col-span-3 col-start-10 row-start-1 flex flex-col sticky top-0 h-screen">
        <div className="bg-gray-500 h-[600px] w-full text-8xl flex items-center justify-center">3</div>
        <div className="bg-red-500 h-[600px] w-full text-8xl flex items-center justify-center">4</div>
      </div>
    </div>
  );
};