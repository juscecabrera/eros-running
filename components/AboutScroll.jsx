'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import alexerPro from '@/lib/fonts';
import GlassButton from './GlassButton';
import image1 from '../assets/images/about1.jpeg';
import image2 from '../assets/images/about2.jpeg';
import image3 from '../assets/images/about3.jpeg';
import image4 from '../assets/images/about4.jpeg';
import image5 from '../assets/images/about5.jpeg';
import image6 from '../assets/images/about6.png';
import image7 from '../assets/images/about7.jpeg';
import image8 from '../assets/images/about8.jpeg';
import Image from 'next/image';
import { useRef } from 'react';

export const AboutScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const yLeft = useTransform(scrollYProgress, [1, 0], [0, 0]);
  const yRight = useTransform(scrollYProgress, [0, 0.5, 1], ['-49.5%', '0%', '49.5%']);

  return (
    <div ref={containerRef} className={`font-light text-white bg-black min-h-screen grid grid-cols-12 gap-[24px] px-[64px] grid-rows-1 w-full overflow-clip ${alexerPro.className}`}>
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
        className="col-span-3 col-start-7 row-start-1 flex flex-col py-4 gap-3"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{ y: yLeft }}
      >
        <Image
          src={image1}
          alt="image 1"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
        <Image
          src={image2}
          alt="image 2"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
        <Image
          src={image3}
          alt="image 3"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
        <Image
          src={image4}
          alt="image 4"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
      </motion.div>

      {/* Right Column (Scrolling, reversed direction) */}
      <motion.div
        className="col-span-3 col-start-10 row-start-1 flex flex-col py-4 gap-3"
        initial={{ y: 0 }}
        style={{ y: yRight }} // Apply reversed scroll direction
      >
        <Image
          src={image5}
          alt="image 1"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
        <Image
          src={image6}
          alt="image 2"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
        <Image
          src={image7}
          alt="image 3"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
        <Image
          src={image8}
          alt="image 4"
          className="h-[477px] rounded-3xl drop-shadow-white object-cover w-full"
          height={477}
        />
      </motion.div>
    </div>
  );
};