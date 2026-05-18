'use client';

import React from 'react';
import { Check, CheckCircle2, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function PartnerRegistrationHero() {
  return (
    <section className="relative w-full bg-white text-gray-900 py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 relative">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-red-100 bg-red-50 px-4 py-2 rounded-full w-max mt-2">
            <CheckCircle2 className="h-4 w-4 text-red-600" strokeWidth={2.5} />
            <span className="text-[12px] md:text-[13px] font-bold text-red-600 tracking-wide uppercase">
              MIỄN PHÍ 100% — XÁC NHẬN TRONG NGÀY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold leading-[1.2] tracking-tight">
            Đăng ký doanh nghiệp lên<br />
            <span className="text-red-600">Trang Vàng Việt Nam</span>
          </h1>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[540px]">
            Hiện diện trên hệ sinh thái Trang Vàng — <strong>4 website Trang Vàng Việt Nam</strong> và <strong>Trang Vàng Quốc Tế</strong>. Tiếp cận hàng trăm nghìn khách hàng đang tìm nhà cung cấp mỗi ngày.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 md:gap-6 pt-6 pb-8 border-b border-gray-200">
            <div>
              <div className="text-[18px] sm:text-[22px] md:text-[28px] font-extrabold text-red-600 leading-none">250.000+</div>
              <div className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-500 mt-2 leading-tight">DN đã đăng ký</div>
            </div>
            <div>
              <div className="text-[18px] sm:text-[22px] md:text-[28px] font-extrabold text-red-600 leading-none">4+1</div>
              <div className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-500 mt-2 leading-tight">Website VN + Quốc Tế</div>
            </div>
            <div>
              <div className="text-[18px] sm:text-[22px] md:text-[28px] font-extrabold text-red-600 leading-none">16+</div>
              <div className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-500 mt-2 leading-tight">Năm vận hành</div>
            </div>
            <div>
              <div className="text-[18px] sm:text-[22px] md:text-[28px] font-extrabold text-red-600 leading-none">Toàn quốc</div>
              <div className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-500 mt-2 leading-tight">Mọi tỉnh thành</div>
            </div>
          </div>

          {/* Bottom Checks */}
          <div className="flex flex-col space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-[14px] md:text-[15px] text-gray-700">ĐKKD: 0104478506 — Sở KH&ĐT Hà Nội</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-[14px] md:text-[15px] text-gray-700">Đã đăng ký Sàn TMĐT — Bộ Công Thương</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0"
        >
          <div className="bg-white rounded-[8px] p-6 lg:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Top red accent line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600"></div>

            <div className="mb-6">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-4">
                <h2 className="text-[22px] md:text-[24px] font-bold text-gray-900">Bắt đầu đăng ký</h2>
                <div className="bg-green-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wide">
                  MIỄN PHÍ
                </div>
              </div>
              <p className="text-[14px] text-gray-600">
                Chỉ <strong>30 giây</strong> cho thông tin cơ bản. Gọi xác nhận <strong>trong ngày</strong>.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-[14px] font-semibold text-gray-800 mb-1.5">
                  Tên doanh nghiệp <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Ví dụ: Công ty TNHH ABC Việt Nam" 
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-gray-800 mb-1.5">
                  Ngành nghề chính <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Ví dụ: Sản xuất bao bì nhựa" 
                  className="w-full border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-semibold text-gray-800 mb-1.5">
                    Người liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Họ và tên" 
                    className="w-full border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-gray-800 mb-1.5">
                    SĐT / Zalo <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="0912 345 678" 
                    className="w-full border border-gray-200 rounded-[8px] px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-[16px] py-4 rounded-[8px] transition-colors flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <ArrowRight className="h-5 w-5" />
                  Tiếp tục hoàn thiện hồ sơ
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-4">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <span className="text-[13px] text-gray-500">
                  Không mất phí • Không spam • Xác nhận trong ngày
                </span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating Button */ }
   
    </section>
  );
}
