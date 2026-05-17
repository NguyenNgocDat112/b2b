'use client';

import React from 'react';
import { motion } from 'motion/react';
import HeroBackground from './hero/HeroBackground';

export default function Hero() {
  return (
    <section className="relative bg-[#e03c31] pt-8 pb-[52px] md:pt-10 md:pb-[62px]">
      <HeroBackground />

      <div className="mx-auto max-w-[1380px] px-4 flex flex-col items-center relative z-20">
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-5xl font-black text-center mb-2 drop-shadow-md tracking-tight uppercase"
        >
          NGUYENVINH PAGE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-base md:text-xl font-bold text-center drop-shadow-sm uppercase"
        >
            TRANG VÀNG VIỆT NAM
        </motion.p>
      </div>
    </section>
  );
}
