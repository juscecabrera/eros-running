'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import alexerPro from '@/lib/fonts';
import GlassButton from './GlassButton';

export default function Memberships2() {

  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const buttonRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.25 });
  const isCard1FullyInView = useInView(card1Ref, { once: false, amount: 0.01 });
  const isCard1FullyInViewTest = useInView(card1Ref, { once: true, amount: 1 });
  const isCard2FullyInView = useInView(card2Ref, { once: true, amount: 1 });
  const isButtonInView = useInView(buttonRef, { once: false, amount: 1 });

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      }
    }
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 100 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="relative min-h-[200vh]">
      <motion.div
        ref={titleRef}
        className="col-span-12 flex items-center justify-center sticky top-0 -z-10 bg-white min-h-screen"
        initial="hidden"
        animate={isTitleInView ? 'visible' : 'hidden'}
        variants={titleVariants}
      >
        <h2 className={`${alexerPro.className} text-[200px] text-center w-full font-light leading-60`}>
          CONOCE TU MEMBRESIA
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-[24px] px-[64px] py-10">
        <div
          ref={card1Ref}
          className={`col-span-4 col-start-3 h-[660px] bg-red-950 sticky`}
          initial="hidden"
          animate={isCard1FullyInView ? 'visible' : 'hidden'}
          variants={cardVariants}
        />
        <motion.div
          ref={card2Ref}
          className={`"col-span-4 col-start-7 h-[660px] bg-red-700"`}
          initial="hidden"
          animate={isCard2FullyInView ? 'visible' : 'hidden'}
          variants={cardVariants}
        />
        <motion.div
          ref={buttonRef}
          className="col-span-2 col-start-6 row-start-3"
          initial="hidden"
          animate={isButtonInView ? 'visible' : 'hidden'}
          variants={buttonVariants}
        >
          <GlassButton black={true} />
        </motion.div>
      </div>
    </div>
  );
}