'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import Mascot from './Mascot';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Abstract 3D Wavy Tubes Background */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-0 w-[500px] h-[300px] border-[30px] border-transparent border-t-[#fb8c00]/30 border-l-[#fb8c00]/30 rounded-full blur-[1px] rotate-[-20deg]"
      />
      <motion.div 
        animate={{ scale: [1, 1.02, 1], rotate: [0, -2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-0 bottom-0 w-[600px] h-[400px] border-[40px] border-transparent border-b-[#fb8c00]/20 border-r-[#fb8c00]/20 rounded-full blur-[2px] rotate-[10deg]"
      />

      {/* Left side decorations */}
      <div className="absolute left-[3%] md:left-[6%] xl:left-[10%] top-[4%] hidden md:flex items-center z-10 w-[300px] h-[200px] transform scale-[0.35] xl:scale-[0.5] origin-top-left">
         {/* 3 Small Red Books (Sổ Đỏ) */}
         {/* Book 1 (Left/Top) */}
         <motion.div 
            animate={{ y: [0, -10, 0], rotate: [-25, -20, -25] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            className="bg-[#e53935] pt-[20px] pb-[26px] px-3.5 rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.15)] transform-gpu border-l-[5px] border-[#b71c1c] border-b-[5px] border-[#b71c1c] w-[110px] text-center flex flex-col items-center absolute left-[-20px] top-[10px] z-10 opacity-95"
         >
           <div className="w-[24px] h-[24px] rounded-full bg-white mb-[12px] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative">
             <div className="absolute inset-[1.5px] border-[2px] border-[#d32f2f] rounded-full" />
             <div className="w-[10px] h-[10px] bg-[#d32f2f] transform-gpu drop-shadow-sm" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
           </div>
           <p className="text-[11px] font-bold text-white uppercase leading-[1.3] tracking-widest font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] px-[2px]">Giấy chứng nhận<br/>quyền sử dụng đất</p>
         </motion.div>

         {/* Book 2 (Middle) */}
         <motion.div 
            animate={{ y: [0, -8, 0], rotate: [-10, -5, -10] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="bg-[#e53935] pt-[20px] pb-[26px] px-3.5 rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.15)] transform-gpu border-l-[5px] border-[#b71c1c] border-b-[5px] border-[#b71c1c] w-[110px] text-center flex flex-col items-center absolute left-[180px] top-[60px] z-20"
         >
           <div className="w-[24px] h-[24px] rounded-full bg-white mb-[12px] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative">
             <div className="absolute inset-[1.5px] border-[2px] border-[#d32f2f] rounded-full" />
             <div className="w-[10px] h-[10px] bg-[#d32f2f] transform-gpu drop-shadow-sm" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
           </div>
           <p className="text-[11px] font-bold text-white uppercase leading-[1.3] tracking-widest font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] px-[2px]">Giấy chứng nhận<br/>quyền sử dụng đất</p>
         </motion.div>

         {/* Mascot */}
         <Mascot />
      </div>

      {/* Right side decorations */}
      <div className="absolute right-0 md:right-[2%] xl:right-[4%] top-[10%] xl:top-[20%] hidden md:flex items-center gap-2 z-10 transform scale-[0.55] xl:scale-[0.8] origin-top-right">
         {/* Exclamation Mark (!) */}
         <motion.div 
            animate={{ y: [0, -10, 0], rotate: [10, 5, 10] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute -right-[60px] top-[40px] z-10 flex flex-col items-center gap-2"
         >
           <div className="w-[18px] h-[60px] bg-white rounded-t-full rounded-b-[4px] shadow-[0_8px_16px_rgba(0,0,0,0.15)] transform-gpu rotate-[10deg]"></div>
           <div className="w-[18px] h-[18px] bg-white rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)] transform-gpu rotate-[10deg]"></div>
         </motion.div>

         {/* Large House */}
         <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="bg-white p-4 pb-2 rounded-[8px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rotate-[-6deg] transform-gpu border-b-[6px] border-gray-200 z-20 relative w-[88px] h-[88px] flex flex-col items-center justify-end -translate-x-20"
         >
           <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 w-[110px] h-[40px] bg-[#ff7a00] border-b-4 border-[#e65a00] rounded-sm shadow-sm flex justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
           <div className="bg-blue-300/40 w-8 h-8 rounded-[8px] mb-1 border-4 border-white shadow-inner flex items-center justify-center">
             <div className="w-full h-[2px] bg-white opacity-50" />
             <div className="absolute w-[2px] h-full bg-white opacity-50" />
           </div>
           <div className="w-5 h-8 bg-[#ff7a00] rounded-t-md absolute bottom-0 left-[12px] border-r-2 border-[#e65a00]" />
         </motion.div>

         {/* Map & Pin block */}
         <motion.div 
            animate={{ y: [0, -12, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="bg-[#4aa5f0] w-[80px] h-[80px] rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] rotate-[12deg] transform-gpu border-[5px] border-white flex flex-col relative z-20 translate-y-6 -translate-x-24 overflow-hidden"
         >
           <div className="absolute top-[45%] left-0 w-full h-[6px] bg-[#fbbf24] -translate-y-1/2 rounded-full" />
           <div className="absolute top-0 left-[35%] w-[6px] h-full bg-[#fbbf24] rounded-full" />
           <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/40 rounded-full blur-md" />
           <MapPin className="w-12 h-12 text-[#e63946] absolute -top-4 -right-2 drop-shadow-xl" fill="currentColor" strokeWidth={1} />
         </motion.div>

         {/* Small beige house */}
         <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="bg-[#f0e6d2] w-[60px] h-[60px] rounded-[8px] shadow-xl rotate-[18deg] transform-gpu translate-y-[45px] -translate-x-20 border-b-[5px] border-[#d4c5ae] relative z-0 flex flex-col items-center justify-end p-2"
         >
           <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-[76px] h-[26px] bg-[#8c6b4a] shadow-sm rounded-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
           <div className="bg-[#b3a491]/20 w-4 h-4 rounded-sm mb-1 border-2 border-white/50" />
           <div className="w-4 h-5 bg-[#8c6b4a] rounded-t-sm absolute bottom-0 right-2 border-l border-[#6b4e33]" />
         </motion.div>
      </div>
    </div>
  );
}
