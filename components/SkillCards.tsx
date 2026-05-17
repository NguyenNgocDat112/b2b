'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SkillCardProps {
  title: string;
  count: string;
  image: string;
  delay?: number;
}

const SkillCard = ({ title, count, image, delay = 0 }: SkillCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={isMobile ? undefined : { y: -8 }}
      className="flex flex-col w-full h-[340px] rounded-[8px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 group"
    >
      {/* Top Part - Image Container */}
      <div className="h-[220px] m-2 rounded-[8px] relative overflow-hidden flex items-center justify-center bg-gray-50 group-hover:bg-red-50 transition-colors duration-500">
        <div className="relative w-3/4 h-3/4 z-10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
        </div>
        {/* Subtle decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/40 rounded-full blur-2xl group-hover:bg-red-200/50 transition-colors duration-500"></div>
      </div>

      {/* Bottom Part - Text Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-tight line-clamp-2 group-hover:text-[#e31c25] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
            {count} giải pháp
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
            <div className="h-1 w-8 bg-red-100 group-hover:w-12 group-hover:bg-[#e31c25] transition-all duration-500 rounded-[8px]"></div>
            <div className="w-8 h-8 rounded-[8px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#e31c25] group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCards = () => {
  const cards = [
    {
      title: 'Tự động hóa Quy trình Doanh nghiệp',
      count: '113',
      image: 'https://picsum.photos/seed/skill1/400/400',
    },
    {
      title: 'Chăm sóc & Tương tác Khách hàng',
      count: '183',
      image: 'https://picsum.photos/seed/skill2/400/400',
    },
    {
      title: 'Tự động hóa Bán hàng & Marketing',
      count: '200+',
      image: 'https://picsum.photos/seed/skill3/400/400',
    },
    {
      title: 'Phân tích Dữ liệu & Dự báo thông minh',
      count: '99',
      image: 'https://picsum.photos/seed/skill4/400/400',
    },
    {
      title: 'Quản lý & Sáng tạo Nội dung AI',
      count: '153',
      image: 'https://picsum.photos/seed/skill5/400/400',
    },
    {
      title: 'Thiết kế & Sáng tạo tự động',
      count: '132',
      image: 'https://picsum.photos/seed/skill6/400/400',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1380px] px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-red-50 text-[#e31c25] text-[10px] font-bold uppercase tracking-widest border border-red-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-[8px] bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-[8px] h-2 w-2 bg-red-500"></span>
                    </span>
                    Giải pháp công nghệ
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none">
                    QUY TRÌNH <span className="text-[#e31c25]">TOÀN DIỆN</span>
                </h2>
                <p className="max-w-2xl text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                    Hệ thống giải pháp thông minh giúp tối ưu hóa hiệu suất làm việc, giảm thiểu sai sót và tăng tốc độ phát triển cho doanh nghiệp của bạn.
                </p>
            </div>
            
            <button className="flex-shrink-0 px-8 py-4 bg-black text-white rounded-[8px] text-sm font-bold hover:bg-[#e31c25] transition-all duration-300 shadow-lg hover:shadow-red-200">
                Khám phá tất cả
            </button>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <SkillCard key={idx} {...card} delay={idx * 0.05} />
          ))}
        </div>

        {/* Bottom Banner/CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-[8px] bg-[#e31c25] relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Bắt đầu tối ưu quy trình ngay hôm nay?</h3>
                    <p className="text-white/80 text-sm sm:text-base font-medium">Chúng tôi sẵn sàng đồng hành cùng sự đột phá của bạn.</p>
                </div>
                <button className="px-10 py-5 bg-white text-[#e31c25] rounded-[8px] font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl">
                    Liên hệ tư vấn
                </button>
            </div>
            {/* Decorative Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
