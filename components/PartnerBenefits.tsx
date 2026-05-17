'use client';

import React from 'react';
import { Globe, Globe2, Search, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Globe,
    iconTheme: { bg: 'bg-red-50', text: 'text-red-600' },
    title: 'Hiển thị trên 4 website Việt Nam',
    description: 'Doanh nghiệp xuất hiện trên trangvangvietnam.com, yellowpages.vn, niengiamtrangvang.com và nhungtrangvang.com.',
  },
  {
    icon: Globe2,
    iconTheme: { bg: 'bg-red-50', text: 'text-red-600' },
    title: 'Ưu tiên trên Trang Vàng Quốc Tế',
    description: 'Hồ sơ được ưu tiên hiển thị trên yellowpages.com.vn — cổng thông tin tiếng Anh, tiếp cận đối tác quốc tế.',
  },
  {
    icon: Search,
    iconTheme: { bg: 'bg-red-50', text: 'text-red-600' },
    title: 'Tiếp cận khách hàng đang tìm',
    description: 'Hàng trăm nghìn lượt tìm kiếm mỗi ngày từ Google và truy cập trực tiếp — khách hàng đang chủ động tìm nhà cung cấp.',
  },
  {
    icon: Shield,
    iconTheme: { bg: 'bg-red-50', text: 'text-red-600' },
    title: 'Hoàn toàn miễn phí',
    description: 'Không mất bất kỳ chi phí nào. Đăng ký, hiển thị và nhận khách hàng — tất cả đều miễn phí 100%.',
  },
];

export default function PartnerBenefits() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-red-600"></div>
            <span className="text-red-600 font-bold text-[13px] tracking-widest uppercase">
              QUYỀN LỢI ĐĂNG KÝ
            </span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111111] mb-4">
            Đăng ký miễn phí — Nhận ngay quyền lợi
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[600px] leading-relaxed">
            Chỉ cần 3 phút đăng ký, doanh nghiệp của bạn sẽ xuất hiện trên toàn bộ
            hệ sinh thái Trang Vàng.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-[8px] flex flex-col h-full bg-[#f8f9fa] border-2 border-transparent hover:bg-white hover:border-red-600 hover:shadow-[0_12px_40px_-12px_rgba(220,38,38,0.3)] transition-all duration-300 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0 ${benefit.iconTheme.bg} group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconTheme.text}`} strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-bold text-[#111111] mb-4 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
