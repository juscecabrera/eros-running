'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import ErosLogoWhite from '@/public/erosLogoWhite.svg';
import alexerPro from '@/lib/fonts';

const AnimatedTextCircle = ({ children }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (!circleRef.current) {
      console.error('Circle ref is not assigned');
      return;
    }

    // GSAP animation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  const text = "Erös Fit - ";
  const chars = text.split('');
  const radius = 77; //Hago el circulo mas chiquito 
  const center = 150;
  const totalChars = 66; // Multiplo de 11
  const angleStep = (2 * Math.PI) / totalChars;

  // Generate text elements
  const textElements = [];
  for (let i = 0; i < totalChars; i++) {
    const char = chars[i % chars.length];
    const angle = i * angleStep;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    // Adjust rotation to align text with the circle's tangent and ensure correct direction
    const rotation = (angle * 180) / Math.PI + 90; // Add 90 to align text outward

    textElements.push(
      <text
        key={i}
        x={x}
        y={y}
        fill="black"
        fontSize="14"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${rotation}, ${x}, ${y})`}
        className={`${alexerPro.className}`}
      >
        {char}
      </text>
    );
  }

  return (
    <div className="flex justify-center items-center h-[10px]">
      <div className="relative overflow-visible">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          ref={circleRef}
          className="text-circle z-50"
        >
          <circle cx="150" cy="150" r="100" fill="none" stroke="none" strokeWidth="2" />
          {textElements}
        </svg>
        <div className="-z-10 w-[177px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextCircle;