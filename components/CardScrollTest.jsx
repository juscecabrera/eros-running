'use client';

import alexerPro from "@/lib/fonts";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import memberImg1 from "@/assets/images/memberships1.jpeg"
import memberImg2 from "@/assets/images/memberships2.jpeg"
import memberImg3 from "@/assets/images/memberships3.jpeg"
import Image from "next/image";

const cards = [
  { id: 1, 
    title: 'MEMBRESIAS', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque pellentesque, dolor tortor ultricies est, ut efficitur odio nunc vel massa. Suspendisse quis posuere enim.',
    srcImage: memberImg1 
  },
  { id: 2, 
    title: 'STARTER', 
    content: 'This is the second card with more exciting content.',
    srcImage: memberImg2
  },
  { id: 3, 
    title: 'EVOLUTION', 
    content: 'This is the third card with even more cool stuff.',
    srcImage: memberImg3
  }, 
];

export default function CardScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="bg-white">
      <div ref={containerRef} className="h-[300vh] relative w-full">
        <div className="sticky top-0 h-screen grid grid-cols-12 gap-[24px] px-[64px]">
          {cards.map((card, index) => {
            const scrollRange = [
              index / cards.length,
              (index + 1) / cards.length,
            ];
            const scale = useTransform(scrollYProgress, scrollRange, [0.8, 1]);
            const y = useTransform(scrollYProgress, scrollRange, [index * 200, 0]);
            const opacity = useTransform(scrollYProgress, scrollRange, [1, 1]);
            // Lower cards (higher index) get higher zIndex when scrolling
            const zIndex = useTransform(scrollYProgress, scrollRange, [index, index + 1]);

            return (
              <motion.div
                key={card.id}
                className={`col-start-1 border-none absolute w-[1313px] h-[450px] bg-white rounded-[40px] shadow-lg my-10 ${alexerPro.className} grid grid-cols-12 gap-[24px]`}
                style={{
                //   scale,
                  y,
                  opacity,
                  zIndex,
                }}
              >
                <Image 
                    src={card.srcImage}
                    alt="memberships image w-full"
                    className="col-span-12 row-start-1 z-[-30] m-0 p-0 w-full rounded-[40px] absolute h-[449px] object-cover border-none"
                />
                <div 
                    className="border-none col-span-12 row-start-1 z-[0] m-0 p-0 w-full h-[449px] rounded-[40px] absolute bg-black/20"
                />
                <h2 className="text-6xl mb-4 row-start-1 col-start-2 z-[30] mt-5 text-white font-light">{card.title}</h2>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}