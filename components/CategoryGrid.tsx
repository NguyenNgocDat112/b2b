'use client';

import React, { useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const categories = [
  {
    id: 'vat-lieu-goc',
    title: 'Vật Liệu Gốc',
    count: 'Các loại vật liệu',
    icon: 'https://picsum.photos/seed/vatlieugoc/200/200',
    subItems: ['Khoáng Xây Dựng', 'Cốt Liệu Xây Dựng', 'Phụ Gia Khoáng', 'Xi Măng', 'Thép', 'Tôn', 'Nhôm', 'Kính', 'Gạch', 'Đá', 'Gỗ', 'Thạch Cao', 'Nhựa', 'Vật Liệu Cách Âm & Cách Nhiệt', 'Chống Thấm & Màng']
  },
  {
    id: 'noi-that',
    title: 'Nội Thất',
    count: 'Nội thất gia đình',
    icon: 'https://picsum.photos/seed/noithat/200/200',
    subItems: ['Bàn & ghế', 'Tủ, kệ & lưu trữ', 'Giường, nệm & chăn ga', 'Sofa & nội thất bọc nệm', 'Bếp & tủ bếp', 'Vách ngăn, cửa & lam trang trí', 'Trần, tường & bề mặt hoàn thiện', 'Rèm, thảm & trang trí', 'Đèn & Chiếu Sáng', 'Nội thất ngoài trời', 'Quầy, kệ & trưng bày thương mại']
  },
  {
    id: 'ngoai-that-san-vuon',
    title: 'Ngoại Thất & Sân Vườn',
    count: 'Trang trí sân vườn',
    icon: 'https://picsum.photos/seed/ngoaithat/200/200',
    subItems: ['Cảnh quan & cây sân vườn', 'Nội thất ngoài trời', 'Pergola & mái che', 'Sàn, lát sân & decking ngoài trời', 'Hồ bơi & thiết bị hồ bơi', 'Đèn ngoại thất & sân vườn', 'Cổng, hàng rào & che chắn', 'Tiểu cảnh nước & trang trí sân vườn', 'Bếp ngoài trời & khu BBQ']
  },
  {
    id: 'thiet-ke-kien-truc',
    title: 'Thiết Kế & Kiến Trúc',
    count: 'Dịch vụ thiết kế',
    icon: 'https://picsum.photos/seed/thietke/200/200',
    subItems: ['Thiết kế kiến trúc & nội thất', 'Hạ tầng - công trình công cộng', 'Gian hàng triển lãm, sự kiện & POSM']
  },
  {
    id: 'dich-vu-nha-o',
    title: 'Dịch Vụ Nhà Ở',
    count: 'Top dịch vụ',
    icon: 'https://picsum.photos/seed/dichvu/200/200',
    subItems: ['Giúp việc nhà', 'Tổng vệ sinh', 'Điện nước', 'Điện lạnh & thiết bị', 'Chống thấm', 'Sơn nhà', 'Giặt sofa, nệm, rèm & thảm', 'Diệt côn trùng', 'Chăm sóc cây cảnh & sân vườn', 'Chuyển nhà & chuyển đồ', 'Thu gom đồ cũ & rác cồng kềnh', 'Hút hầm cầu & thông tắc', 'Vệ sinh bồn nước', 'Lắp đặt khóa điện tử & camera', 'Vệ sinh hồ bơi']
  }
];

export default function CategoryGrid() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto max-w-[1480px] px-4 pt-6 md:pt-10 pb-4 relative z-[50] font-sans">
      <div 
        ref={containerRef}
        className="bg-white rounded-[8px] md:rounded-[8px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-wrap lg:flex-nowrap border border-gray-100 relative"
        onMouseLeave={() => !isMobile && setHoveredItem(null)}
      >
        {categories.map((cat, idx) => {
          const isHovered = hoveredItem === cat.id;

          return (
            <div
              key={cat.id}
              className={`w-1/2 sm:w-1/3 lg:w-full lg:flex-1 relative ${
                idx !== categories.length - 1 ? 'lg:border-r lg:border-gray-100' : ''
              }`}
              onMouseEnter={() => !isMobile && setHoveredItem(cat.id)}
              onClick={() => {
                if (isMobile) {
                  setHoveredItem(hoveredItem === cat.id ? null : cat.id);
                }
              }}
            >
              <div className={`h-full p-2 relative z-20`}>
                <div 
                  className={`flex flex-col md:flex-row items-center gap-3 px-3 py-3 md:px-4 md:py-4 h-full cursor-pointer transition-all duration-200 ${
                    isHovered 
                      ? 'bg-[#f4f5f5] rounded-[8px] md:shadow-[rgba(0,0,0,0.05)_0px_8px_24px]'
                      : 'bg-transparent rounded-[8px] hover:bg-gray-50'
                  }`}
                >
                  <div className="relative h-12 w-12 md:h-[60px] md:w-[60px] shrink-0 bg-transparent flex items-center justify-center">
                     <Image 
                      src={cat.icon} 
                      alt={cat.title} 
                      fill 
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-[14px] md:text-[16px] text-[#222222] tracking-tight">{cat.title}</h3>
                    <p className="hidden md:block text-[13px] text-[#777777] mt-[2px] font-medium">{cat.count}</p>
                  </div>
                </div>
              </div>

              {/* Mega Menu Popover (Pinned to each item) */}
              <AnimatePresence>
                {hoveredItem === cat.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute top-[100%] ${idx >= categories.length - 2 ? 'right-0' : 'left-0'} z-[70] pt-1`}
                  >
                    <div className={`bg-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-6 rounded-[8px] border border-gray-100 max-h-[65vh] lg:max-h-[85vh] overflow-y-auto ${cat.id === 'thiet-ke-kien-truc' ? 'w-[320px]' : 'w-max min-w-[320px] max-w-[95vw]'}`}>
                      <div className={`grid grid-cols-1 gap-y-1 ${cat.id !== 'thiet-ke-kien-truc' ? 'lg:grid-cols-2 xl:grid-cols-3 gap-x-10' : ''}`}>
                        {cat.subItems.map((item, itemIdx) => (
                          <Link 
                            key={itemIdx} 
                            href="#"
                            className={`block px-[14px] py-[10px] text-[14.5px] font-bold tracking-tight text-[#222222] hover:bg-[#f4f5f5] hover:text-[#e03c31] rounded-[6px] transition-colors leading-snug lg:min-w-[240px] ${
                              cat.id === 'thiet-ke-kien-truc' ? 'whitespace-normal' : 'whitespace-nowrap'
                            }`}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* LG: Dropdown bridge to prevent mouse leave */}
              {!isMobile && isHovered && (
                <div className="absolute top-[80%] left-0 right-0 h-[40px] z-[60]" />
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}
