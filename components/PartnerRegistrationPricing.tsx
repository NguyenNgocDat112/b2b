'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function PartnerRegistrationPricing() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-red-600"></div>
            <span className="text-red-600 font-bold text-[13px] tracking-widest uppercase">
              MUỐN NỔI BẬT HƠN?
            </span>
            <div className="w-8 h-[1px] bg-red-600"></div>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#111111] mb-4">
            Đăng ký miễn phí hay Quảng cáo?
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[600px] mx-auto leading-relaxed">
            Đăng ký miễn phí là bước đầu tuyệt vời. Khi doanh nghiệp muốn nổi bật 
            hơn đối thủ, Quảng cáo Trang Vàng mang đến vị trí ưu tiên và công cụ chuyên nghiệp.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-[8px] p-8 bg-white h-full">
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-[4px] uppercase tracking-wide">
              MIỄN PHÍ
            </span>
            <h3 className="text-[22px] font-bold text-[#111] mt-3 mb-1">Đăng ký cơ bản</h3>
            <p className="text-gray-500 text-[14px] mb-6">0đ — Hoàn toàn miễn phí</p>
            
            <ul className="space-y-4 mb-8">
              {['Tên doanh nghiệp + Địa chỉ + SĐT', 'Hiển thị trên 4 website Trang Vàng VN', 'Ưu tiên trên Trang Vàng Quốc Tế', 'Danh sách sản phẩm dịch vụ cơ bản'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-gray-700">
                  <Check className="h-5 w-5 text-green-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-[#1e293b] text-white font-bold py-3 rounded-[8px] hover:bg-black transition-colors flex items-center justify-center gap-2">
              <Zap className="h-4 w-4" />
              Đăng ký ngay
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-[8px] p-8 text-gray-900 h-full border border-red-100 shadow-sm">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-[4px] uppercase tracking-wide">
              NỔI BẬT
            </span>
            <h3 className="text-[22px] font-bold mt-3 mb-1 text-gray-900">Quảng cáo Trang Vàng</h3>
            <p className="text-gray-500 text-[14px] mb-6">Từ 2 — 6 triệu/năm</p>
            
            <ul className="space-y-4 mb-8 text-gray-700">
              {['Vị trí cố định — Luôn hiển thị đầu trang', 'Logo doanh nghiệp nổi bật', 'Danh sách sản phẩm dịch vụ chi tiết', 'Website doanh nghiệp miễn phí', 'Báo cáo Google Analytics', 'Đội ngũ chuyên viên hỗ trợ trực tiếp'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px]">
                  <Check className="h-5 w-5 text-red-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link href="/goi-dang-ky" className="w-full bg-red-600 text-white font-bold py-3 rounded-[8px] hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Tìm hiểu thêm
            </Link>
          </div>
        </div>

        {/* Action Bottom Box */}
        <div className="bg-red-50 rounded-[8px] p-6 text-center border border-red-200 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="h-5 w-5 text-red-600 fill-red-600" />
            <h4 className="font-bold text-[#111] text-[16px]">Bắt đầu với Đăng ký miễn phí — Nâng cấp Quảng cáo khi cần</h4>
          </div>
          <p className="text-gray-700 text-[14px] mb-6">Đăng ký miễn phí trước — Dùng thử — Quyết định nâng cấp sau</p>
          <button className="bg-black text-white font-bold py-3 px-8 rounded-[8px] hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 mx-auto">
            <ArrowRight className="h-4 w-4" />
            Đăng ký miễn phí ngay
          </button>
        </div>
      </div>
    </section>
  );
}
