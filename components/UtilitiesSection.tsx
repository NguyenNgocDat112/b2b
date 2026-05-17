import React from 'react';
import Link from 'next/link';
import { BarChart3, Coins, BookOpen, Building2, Users, Medal } from 'lucide-react';

export default function UtilitiesSection() {
  return (
    <section className="mx-auto max-w-[1480px] px-4 pt-1 pb-6 md:pb-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-5">
        
        {/* Left Card: Công cụ tiện ích */}
        <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-5 pt-4 pb-6 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
          <h2 className="text-[17px] font-bold text-gray-900 mb-4 px-1">
            Công cụ tiện ích
          </h2>
          <div className="h-[1px] w-full bg-gray-100 mb-6" />
          
          <div className="grid grid-cols-3 gap-2">
            <Link href="#" className="flex flex-col items-center justify-center text-center group">
              <div className="h-12 w-12 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <BarChart3 strokeWidth={1.5} className="w-8 h-8 text-gray-800" />
              </div>
              <span className="text-[13px] font-medium text-gray-700 group-hover:text-black">Biểu đồ giá</span>
            </Link>
            
            <Link href="#" className="flex flex-col items-center justify-center text-center group border-l border-r border-gray-100">
              <div className="h-12 w-12 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <Coins strokeWidth={1.5} className="w-8 h-8 text-gray-800" />
              </div>
              <span className="text-[13px] font-medium text-gray-700 group-hover:text-black">Vay mua nhà</span>
            </Link>

            <Link href="#" className="flex flex-col items-center justify-center text-center group">
              <div className="h-12 w-12 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <BookOpen strokeWidth={1.5} className="w-8 h-8 text-gray-800" />
              </div>
              <span className="text-[13px] font-medium text-gray-700 group-hover:text-black">Kinh nghiệm</span>
            </Link>
          </div>
        </div>

        {/* Right Card: Dịch vụ dành cho môi giới */}
        <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-5 pt-4 pb-6 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-[17px] font-bold text-gray-900">
              Dịch vụ dành cho môi giới
            </h2>
            <Link href="#" className="text-[14px] font-medium text-gray-600 hover:text-black transition-colors">
              Xem thêm
            </Link>
          </div>
          <div className="h-[1px] w-full bg-gray-100 mb-6" />
          
          <div className="grid grid-cols-3 gap-2">
            <Link href="#" className="flex flex-col items-center justify-center text-center group relative">
              <div className="absolute top-0 right-1/2 translate-x-6 -translate-y-2 z-10">
                <span className="bg-[#e03c31] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-white">Mới</span>
              </div>
              <div className="h-12 w-12 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300 relative">
                <Medal strokeWidth={1.5} className="w-8 h-8 text-[#d4af37]" />
                <span className="absolute text-[10px] font-bold text-[#d4af37] -mt-1 pt-0.5">TỐT</span>
              </div>
              <span className="text-[13px] font-medium text-gray-700 group-hover:text-black">Gói Hội Viên</span>
            </Link>
            
            <Link href="#" className="flex flex-col items-center justify-center text-center group border-l border-r border-gray-100">
              <div className="h-12 w-12 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <Building2 strokeWidth={1.5} className="w-8 h-8 text-gray-800" />
              </div>
              <span className="text-[13px] font-medium text-gray-700 group-hover:text-black px-2">Tài khoản doanh nghiệp</span>
            </Link>

            <Link href="#" className="flex flex-col items-center justify-center text-center group">
              <div className="h-12 w-12 flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <Users strokeWidth={1.5} className="w-8 h-8 text-gray-800" />
              </div>
              <span className="text-[13px] font-medium text-gray-700 group-hover:text-black px-2">Chuyên trang môi giới</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
