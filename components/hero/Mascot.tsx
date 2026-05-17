'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Mascot() {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0], rotate: [5, 7, 5] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="relative w-[120px] h-[150px] rotate-[5deg] z-10 absolute left-[380px] top-[80px] scale-[0.8] origin-center"
    >
      {/* Running legs */}
      <div className="absolute -bottom-4 right-[30px] w-6 h-[46px] bg-[#fb8c00] rounded-b-[20px] border-b-4 border-[#e65100] rotate-[-20deg]" />
      <div className="absolute bottom-[2px] left-[20px] w-6 h-[40px] bg-[#fb8c00] rounded-b-[20px] border-b-4 border-[#e65100] rotate-[35deg]" />

      {/* Thumbs up hand */}
      <div className="absolute top-[50px] -right-[20px] w-[50px] h-[50px] bg-[#ffb300] rounded-full border-b-[5px] border-[#f57f17] z-40 flex items-center justify-center shadow-lg">
        {/* The thumb */}
        <div className="w-[18px] h-[26px] bg-[#fb8c00] rounded-full absolute -top-3 right-3 shadow-md" />
      </div>
      
      {/* Left arm */}
      <div className="absolute top-[70px] -left-[20px] w-[50px] h-[24px] bg-[#1a237e] rounded-full rotate-[55deg] z-10 shadow-md">
         <div className="w-[24px] h-[24px] bg-[#ffb300] rounded-full absolute -left-2 top-0" />
      </div>

      {/* Suit Body */}
      <div className="absolute bottom-5 left-0 right-0 h-[85px] bg-[#1a237e] rounded-[8px] border-b-[10px] border-gray-900 shadow-xl overflow-hidden z-20 border-t-2 border-[#3949ab]">
         {/* White shirt lapels */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36px] h-[36px] bg-white border-b-4 border-gray-200" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
         {/* Red tie */}
         <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[10px] h-[40px] bg-[#e53935]" />
         {/* Pocket square */}
         <div className="absolute top-[28px] left-[14px] w-[20px] h-[6px] bg-white rotate-[-15deg] rounded-[8px]" />
      </div>
      
      {/* Chicken Head */}
      <div className="absolute -top-7 -left-[14px] -right-[14px] h-[110px] bg-gradient-to-b from-[#ffca28] to-[#ffb300] rounded-[8px] shadow-[0_12px_24px_rgba(0,0,0,0.2)] z-30 flex flex-col items-center justify-start pt-3 overflow-visible border-b-4 border-[#ff9800]">
        {/* Black hair tufts */}
        <div className="absolute -top-[18px] w-3.5 h-[30px] bg-gray-900 rounded-full rotate-[-28deg] -ml-[20px]" />
        <div className="absolute -top-[22px] w-4 h-[34px] bg-gray-900 rounded-full" />
        <div className="absolute -top-[18px] w-3.5 h-[30px] bg-gray-900 rounded-full rotate-[28deg] ml-[20px]" />
        
        {/* Eyes */}
        <div className="flex gap-[22px] mt-4">
          <div className="w-[14px] h-[14px] rounded-full bg-gray-900 relative">
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-[2px] right-[2px]" />
          </div>
          <div className="w-[14px] h-[14px] rounded-full bg-gray-900 relative">
            <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-[2px] right-[2px]" />
          </div>
        </div>
        
        {/* Giant Orange Beak / Smile */}
        <div className="mt-[14px] w-[84px] h-[44px] bg-[#ff5722] rounded-[8px] shadow-sm relative overflow-hidden border-b-4 border-[#e64a19]">
           {/* inner smile cavity */}
           <div className="absolute bottom-[6px] left-[10px] right-[10px] h-[20px] bg-[#bf360c] rounded-[8px] rounded-t-none overflow-hidden">
             {/* tongue */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[34px] h-[12px] bg-[#ff5252] rounded-t-[8px]" />
           </div>
           {/* Cheeks */}
           <div className="absolute top-1 -left-2 w-[18px] h-[18px] bg-[#ffccbc] rounded-full opacity-60" />
           <div className="absolute top-1 -right-2 w-[18px] h-[18px] bg-[#ffccbc] rounded-full opacity-60" />
        </div>
      </div>
    </motion.div>
  );
}
