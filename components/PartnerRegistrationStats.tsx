'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { value: '250.000+', label: 'Doanh nghiệp đã đăng ký' },
  { value: '16+', label: 'Năm tại Việt Nam' },
  { value: '140+', label: 'Năm Yellow Pages thế giới' },
  { value: '4+1', label: 'Website VN + Quốc Tế' },
];

export default function PartnerRegistrationStats() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-red-600"></div>
          <span className="text-red-600 font-bold text-[13px] tracking-widest uppercase">
            TẠI SAO CHỌN TRANG VÀNG
          </span>
          <div className="w-8 h-[1px] bg-red-600"></div>
        </div>
        <h2 className="text-[32px] md:text-[36px] font-bold text-[#111111] mb-12">
          Con số nói lên tất cả
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-[8px] border border-gray-100 shadow-sm"
            >
              <div className="text-[32px] font-bold text-red-600 mb-2">{stat.value}</div>
              <div className="text-[14px] text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <p className="text-[14px] text-gray-500 mb-6">
          ĐKKD-MST: 0104478506 — Sở KH&ĐT Hà Nội &nbsp;|&nbsp; Đã đăng ký Sàn TMĐT — Bộ Công Thương
        </p>

        <button className="text-red-600 font-semibold text-[14px] flex items-center justify-center gap-2 hover:gap-3 transition-all mx-auto">
          <Search className="h-4 w-4" />
          Tìm thử ngành nghề của bạn trên Trang Vàng
        </button>
      </div>
    </section>
  );
}
