"use client"; // Required for Framer Motion in Next.js App Router

import { JetBrains_Mono } from "next/font/google";
import alexerPro from "@/lib/fonts";
import { motion, useScroll, useTransform, useAnimation, useInView, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ErosLogo from "@/public/erosFit.svg"
import GlassButton from './GlassButton';
import Image from "next/image";
import clothesScroll1 from "@/assets/images/missionScroll1.png"
import clothesScroll2 from "@/assets/images/missionScroll2.png"
import clothesScroll3 from "@/assets/images/missionScroll3.png"
import clothesScroll4 from "@/assets/images/missionScroll4.png"
import clothesScroll5 from "@/assets/images/missionScroll5.png"

import missionScrollEnd from "@/assets/images/missionScrollEnd.png"

const jetBrains = JetBrains_Mono({
  variable: "--font-jet-brains",
  subsets: ["latin"],
});

export const MissionPageScroll = () => {
  const containerRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Detecta cuando cada imagen entra al viewport (10% visible)
  const isInView1 = useInView(ref1, { once: true, threshold: 0.1 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.1 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.1 });


  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  // Animation variants for continuous looping
//   const marqueeVariants = {
//     animate1: {
//       x: ['100vw', '-100%'],
//     //   x: ['-100%', '100vw'],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: 'loop',
//           duration: 20,
//           ease: 'linear',
//         },
//       },
//     },
//     animate2: {
//       x: ['-100%', '100vw'],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: 'loop',
//           duration: 20,
//           ease: 'linear',
//           delay: 2
//         },
//       },
//     },
//   };

  // Get text width for seamless looping
  useEffect(() => {
    const text1Width = text1Ref.current?.offsetWidth || 0;
    const text2Width = text2Ref.current?.offsetWidth || 0;
    x1.set(0); // Start position for text1
    x2.set(-text2Width); // Start position for text2
  }, [x1, x2]);

  // Animation loop using useAnimationFrame for smooth performance
  useAnimationFrame((t, delta) => {
    const text1Width = text1Ref.current?.offsetWidth || 0;
    const text2Width = text2Ref.current?.offsetWidth || 0;
    
    // Move text1 right to left
    let newX1 = x1.get() - delta * 0.05; // Adjust speed with multiplier
    if (newX1 <= -text1Width) newX1 += text1Width;
    x1.set(newX1);

    // Move text2 left to right
    let newX2 = x2.get() + delta * 0.05; // Adjust speed with multiplier
    if (newX2 >= 0) newX2 -= text2Width;
    x2.set(newX2);
  });

    const text1Content = `${<span className="text-red-500">PUSH</span>} YOUR LIMITS - FOCUS LIKE ERÖS - ${<span className="text-red-500">PUSH</span>} YOUR LIMITS - FOCUS LIKE ERÖS - ${<span className="text-red-500">PUSH</span>} YOUR LIMITS - FOCUS LIKE ERÖS'`;
    const text2Content = 'GROWTH IS CONSTANT - FOCUS LIKE ERÖS - GROWTH IS CONSTANT - FOCUS LIKE ERÖS - GROWTH IS CONSTANT - FOCUS LIKE ERÖS';


  // Animación para cada imagen
  useEffect(() => {
    if (isInView1) {
      controls1.start({
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [isInView1, controls1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start({
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [isInView2, controls2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start({
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [isInView3, controls3]);

  // Calculate scroll range for horizontal scroll (2 sections worth of viewport width)
  useEffect(() => {
    const updateScrollRange = () => {
      setScrollRange(window.innerWidth * 2); // Scroll past 2 sections
    };
    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  // Track scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Start when container top hits viewport top, end when bottom hits viewport bottom
  });

  // Track scroll progress for the horizontal scroll section
  const { scrollYProgress: horizontalScrollProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start end", "end start"], // Start when horizontal section enters, end when it leaves
  });

  // Delay horizontal scroll until Section 1 is fully in view
  const x = useTransform(
    scrollYProgress,
    [0.10, 0.95], // Horizontal scroll from 1/3 to 2/3 of the container scroll
    [0, -scrollRange]
  );

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Horizontal Scroll Container */}
      <motion.div
        ref={horizontalScrollRef}
        className="flex h-screen sticky top-0"
        style={{ x }} // Animate horizontal scroll
      >
        {/* Section 1 */}
        <div className="py-[20px] min-w-[100vw] h-screen bg-white grid grid-cols-12 gap-[24px] px-[64px] grid-rows-2">
          <div className="text-center col-span-6 col-start-4 row-start-1 row-end-1 grid grid-cols-6 gap-[24px]">
                <div className="flex items-center justify-center col-span-2 col-start-3">
                    <Image 
                        src={ErosLogo}
                        alt="eros logo"
                        width={167}
                        height={167}
                    />
                </div>
                <h2 className={`${jetBrains.className} text-[64px] text-center w-full col-span-6 col-start-1`}>GROWTH TEAM</h2>
            </div>
            <div className="col-span-8 col-start-3 row-start-2 flex items-center justify-start gap-4 flex-col mt-0">
                <p className={`${alexerPro.className} text-center row-start-2 col-span-8 col-start-3 text-[18px]`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque pellentesque, dolor tortor ultricies est, ut efficitur odio nunc vel massa. Suspendisse quis posuere enim. <br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in consequat turpis. Sed convallis, justo ut pellentesque 
                </p>
                <div className="w-[195px]">
                    <GlassButton black={true}/>
                </div>
                
            </div>

            {/* <div className="col-span-2 col-start-6 row-start-3">
                <GlassButton black={true}/>
            </div> */}
        </div>

        {/* Section 2 */}
        {/* Scroll con la ropa */}
        <div className="min-w-[100vw] h-screen bg-black flex items-center">
            <div className={`grid grid-cols-12 gap-6 px-16 py-24 ${alexerPro.className}`}>
                {/* Imagen 1 */}
                <div className="col-span-4">
                    <div ref={ref1} className=" overflow-hidden ">
                        <motion.div
                        initial={{ scale: 1.5 }}
                        animate={controls1}
                        className="w-full h-full"
                        >
                        <Image
                            src={clothesScroll3}
                            alt="Shrink on scroll 1"
                            className="object-cover"
                        />
                        </motion.div>
                        <p className="text-white text-[18px] font-light">Polos</p>
                    </div>
                </div>
                {/* Imagen 2 */}
                <div className="col-span-4">
                    <div ref={ref2} className=" overflow-hidden ">
                        <motion.div
                        initial={{ scale: 1.5 }}
                        animate={controls2}
                        className="w-full h-full"
                        >
                        <Image
                            src={clothesScroll4}
                            alt="Shrink on scroll 2"
                            className="object-cover"
                        />
                        </motion.div>
                        <p className="text-white text-[18px] font-light">Poleras</p>

                    </div>
                </div>
                {/* Imagen 3 */}
                <div className="col-span-4">
                    <div ref={ref3} className=" overflow-hidden ">
                        <motion.div
                        initial={{ scale: 1.5 }}
                        animate={controls3}
                        className="w-full h-full"
                        >
                        <Image
                            src={clothesScroll5}
                            alt="Shrink on scroll 3"
                            className="object-cover"
                        />
                        </motion.div>
                        <p className="text-white text-[18px] font-light">Combos</p>

                    </div>
                </div>
            </div>
        </div>

        {/* Section 3 */}
        <div className="min-w-[100vw] h-screen bg-white flex items-center ">
          
          <div className="grid grid-cols-12 gap-0 px-16">

            <div className="col-span-2 col-start-11 row-start-1 flex items-start justify-end">
                <Image 
                    src={ErosLogo}
                    className=""
                    width={130}
                    height={130}
                    alt="eros logo"
                />      
            </div>
            
            <div className="z-50 col-span-4 col-start-5 row-start-2">
                <Image 
                    src={missionScrollEnd}
                    alt="missionscrollend"
                    className="z-10"
                />
            </div>

            {/* Scroll Infinito */}
            <div className={`text-[124px] z-30 col-span-12 col-start-1 row-start-2 overflow-hidden whitespace-nowrap ${alexerPro.className}`}>
                <motion.p
                    ref={text1Ref}
                    style={{ x: x1 }}
                    className="inline-block"
                >
                    <span className="text-gray-300">PUSH</span> YOUR LIMITS - FOCUS LIKE ERÖS - <span className="text-gray-300">PUSH</span> YOUR LIMITS - FOCUS LIKE ERÖS - <span className="text-gray-300">PUSH</span> YOUR LIMITS - FOCUS LIKE ERÖS - <span className="text-gray-300">PUSH</span> YOUR LIMITS - FOCUS LIKE ERÖS - <span className="text-gray-300">PUSH</span> YOUR LIMITS - FOCUS LIKE ERÖS - <span className="text-gray-300">PUSH</span> YOUR LIMITS - FOCUS LIKE ERÖS
                    
                </motion.p>
                <motion.p
                    ref={text2Ref}
                    style={{ x: x2 }}
                    className="block"
                >
                    GROWTH IS CONSTANT - FOCUS LIKE <span className="font-bold">ERÖS</span> - GROWTH IS CONSTANT - FOCUS LIKE <span className="font-bold">ERÖS</span> - GROWTH IS CONSTANT - FOCUS LIKE <span className="font-bold">ERÖS</span> - GROWTH IS CONSTANT - FOCUS LIKE <span className="font-bold">ERÖS</span> - GROWTH IS CONSTANT - FOCUS LIKE <span className="font-bold">ERÖS</span> - GROWTH IS CONSTANT - FOCUS LIKE <span className="font-bold">ERÖS</span>
                </motion.p>
            </div>

            <div className="col-span-2 col-start-1 flex items-end row-start-3"> 
                <GlassButton black={true}/>
            </div>
          </div>


        </div>
      </motion.div>
      {/* Spacer to allow vertical scroll after Section 3 */}
      <div className="h-screen bg-white flex items-center justify-center">
        <p className={`${alexerPro.className} text-[20px] max-w-md mx-auto text-center`}>
          Continue scrolling vertically after Section 3.
        </p>
      </div>
    </div>
  );
};