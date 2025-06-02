'use client';

import alexerPro from '@/lib/fonts';
import React, { useState, useRef } from 'react';

const GlassButton = ({ text, black }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  let textSize = Number(text)

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className={`
        w-full
        h-[62px]
        font-semibold
        rounded-[4000px]
        backdrop-blur-md
        border-[0.1px]
        border-gradient-to-r
        ${black ? "text-black" : "text-white"}
        ${black ? "bg-white/50" : "bg-white/10"}
        ${black ? "border-black/20" : "border-white/20"}
        ${black ? "hover:border-black/90" : "hover:border-white/90"}
        ${black ? "hover:bg-white/80" : "hover:bg-white/20"}
        hover:duration-700
        shadow-lg
        hover:cursor-pointer
        transition-all
        duration-300
        ease-in-out
        group
        overflow-hidden
        ${alexerPro.className}
      `}
    >
      <span className={`relative z-10 text-[${typeof(textSize) === Number ? textSize : 18}px]  font-light`}>Únete</span>
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white/30
          via-white/50
          to-white/30
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
        style={{
          background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, ${black ? "rgba(0,0,0,0.05)" :  "rgba(255,255,255,0.3)"}, transparent 60%)`,
        }}
      ></div>
      <div
        className="
          absolute
          inset-0
          border-none
          border-white/20
          backdrop-blur-sm
          rounded-[4000px]
          pointer-events-none
        "
      ></div>
    </button>
  );
};

export default GlassButton;