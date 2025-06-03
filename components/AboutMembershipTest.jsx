'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import alexerPro from '@/lib/fonts';
import GlassButton from './GlassButton';
import { useRef } from 'react';

export const AboutScrollTest = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const yLeft = useTransform(scrollYProgress, [1, 0], [0, 0]);

  return (
    <div ref={containerRef} className={`bg-white border-black border-2 min-h-screen grid grid-cols-12 gap-[24px] px-[64px]`}>
      
      <div className="col-span-4 col-start-3 flex flex-col justify-center sticky top-0 h-screen">
        <div className="h-[660px] bg-red-500"></div>
      </div>


      <motion.div
        className="col-span-4 col-start-7 flex flex-col justify-center gap-3"
        style={{ y: yLeft }}
      >
        <div className='h-[800px]'></div>
        <div className={`h-[660px] bg-red-500 mb-24`}>3</div>
      </motion.div>

      
    </div>
  );
};