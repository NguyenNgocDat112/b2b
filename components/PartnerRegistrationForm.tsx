'use client';

import React from 'react';
import { PlusCircle, Building2, Lightbulb, MapPin, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function PartnerRegistrationForm() {
  return (
    <section id="registration-form" className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#0068ff]"></div>
            <span className="text-[#0068ff] font-bold text-[12px] tracking-widest uppercase">
              ĐĂNG KÝ MIỄN PHÍ
            </span>
            <div className="w-8 h-[1px] bg-[#0068ff]"></div>
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#111111] mb-3">
            Hoàn thiện hồ sơ doanh nghiệp
          </h2>
          <p className="text-[15px] text-gray-500 max-w-[500px] mx-auto">
            Điền đầy đủ thông tin bên dưới — đội ngũ Trang Vàng sẽ <strong className="text-gray-700">gọi xác nhận trong ngày</strong> và hỗ trợ hoàn tất đăng ký.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          
        {/* Form Header */}
          <div className="bg-white border-b border-gray-100 px-6 md:px-8 py-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center">
                <PlusCircle className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-gray-900 font-bold text-[18px]">Đăng ký Trang Vàng Việt Nam</h3>
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px]">
                MIỄN PHÍ
              </span>
            </div>
            <p className="text-gray-500 text-[13px]">
              Thời gian điền: khoảng 2-3 phút • Mục có dấu (<span className="text-red-500">*</span>) là bắt buộc
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Progress / Info Box */}
            <div className="border border-red-100 rounded-[8px] p-4 mb-10 bg-red-50/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-red-600 font-semibold text-[14px]">
                  <Building2 className="h-4 w-4" />
                  Hồ sơ cơ bản
                </div>
                <div className="text-[14px] font-bold text-gray-900">0%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                <div className="bg-red-600 h-1.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-gray-600">
                <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <p>Điền đầy đủ hơn → được ưu tiên tư vấn trong ngày và cử đúng chuyên viên ngành của bạn.</p>
              </div>
            </div>

            {/* Form Fields */}
            <form className="space-y-8">
              
              {/* Section 1: Thông tin doanh nghiệp */}
              <div>
                <div className="flex items-center gap-2 text-red-600 font-bold text-[14px] uppercase mb-6">
                  <Building2 className="h-4 w-4" />
                  THÔNG TIN DOANH NGHIỆP
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                      Tên doanh nghiệp <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ví dụ: Công ty TNHH ABC Việt Nam" 
                      className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                      Tên tiếng Anh <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ví dụ: ABC Vietnam Co., Ltd." 
                      className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                      Địa chỉ trụ sở <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Số nhà, đường, phường/xã, quận/huyện" 
                      className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                        Tỉnh / Thành phố <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Ví dụ: TP. Hồ Chí Minh" 
                        className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                        Điện thoại doanh nghiệp <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Ví dụ: 028 1234 5678" 
                        className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                        Email doanh nghiệp <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="info@congty.vn" 
                        className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                        Website <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="www.congty.vn" 
                        className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                        Mã số thuế <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="10 hoặc 13 chữ số" 
                        className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                        Người đại diện / Giám đốc <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Họ và tên giám đốc / người đại diện" 
                        className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Ngành nghề & Sản phẩm */}
              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2 text-red-600 font-bold text-[14px] uppercase mb-6">
                  <Search className="h-4 w-4" />
                  NGÀNH NGHỀ & SẢN PHẨM DỊCH VỤ
                </div>
                
                <div className="space-y-5">
                   <div>
                    <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                      Ngành nghề chính <span className="text-red-500">*</span>
                    </label>
                    <input type="text" placeholder="Ví dụ: Sản xuất bao bì nhựa" className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                    <p className="text-[12px] text-gray-400 mt-1">Nhập ngành nghề kinh doanh chính của doanh nghiệp</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">Ngành nghề 2 <span className="text-gray-400 font-normal">(không bắt buộc)</span></label>
                      <input type="text" placeholder="Ngành nghề phụ" className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">Ngành nghề 3 <span className="text-gray-400 font-normal">(không bắt buộc)</span></label>
                      <input type="text" placeholder="Ngành nghề phụ" className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                    </div>
                  </div>

                  <div>
                     <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                      Sản phẩm / Dịch vụ chính <span className="text-red-500">*</span>
                    </label>
                    <input type="text" placeholder="Ví dụ: Túi nhựa PE, Màng co PVC..." className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                    <p className="text-[12px] text-gray-400 mt-1">Nhập sản phẩm/dịch vụ chính, ngắn cách bằng dấu phẩy — giúp khách hàng B2B tìm đúng bạn</p>
                  </div>

                  <div>
                     <label className="block text-[13px] font-semibold text-[#111] mb-1.5">
                      Giới thiệu ngắn về doanh nghiệp <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                    </label>
                    <textarea rows={4} placeholder="Mô tả ngắn gọn về doanh nghiệp..." className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                  </div>

                  <div>
                     <label className="block text-[13px] font-semibold text-[#111] mb-2">
                       Loại hình kinh doanh <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                    </label>
                    <div className="flex flex-wrap gap-4 text-[13px] text-gray-700">
                      {['Nhà sản xuất', 'Công ty thương mại', 'Công ty dịch vụ', 'Phân phối / Bán buôn', 'Đại lý'].map(option => (
                        <label key={option} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-600" />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                     <label className="block text-[13px] font-semibold text-[#111] mb-2">
                       Khu vực cung cấp <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                    </label>
                    <div className="flex flex-wrap gap-4 text-[13px] text-gray-700">
                      {['Toàn quốc', 'Miền Bắc', 'Miền Trung', 'Miền Nam', 'Quốc tế'].map(option => (
                        <label key={option} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-600" />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Thông tin người liên hệ */}
              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center gap-2 text-red-600 font-bold text-[14px] uppercase mb-6">
                  <Building2 className="h-4 w-4" />
                  THÔNG TIN NGƯỜI LIÊN HỆ
                </div>

                <div className="space-y-5">
                  <p className="text-[13px] text-gray-500">Trang Vàng sẽ liên hệ người này để xác nhận thông tin đăng ký — ưu tiên qua Zalo.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Họ và tên người liên hệ" className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">Số điện thoại / Zalo <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Số di động (ưu tiên Zalo)" className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                    </div>
                  </div>

                  <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">Chức vụ của bạn <span className="text-gray-400 font-normal">(không bắt buộc)</span></label>
                      <input type="text" placeholder="Ví dụ: Giám đốc, Trưởng phòng KD, NV Marketing..." className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                  </div>

                  <div>
                      <label className="block text-[13px] font-semibold text-[#111] mb-1.5">Email liên hệ <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-gray-200 rounded-[6px] px-4 py-3 text-[14px] focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" />
                      <p className="text-[12px] text-gray-500 mt-1">Email nhận thông báo xác nhận đăng ký, báo giá và thông tin quan trọng</p>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pb-4">
                  <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-[16px] py-4 rounded-[8px] transition-colors flex items-center justify-center gap-2">
                    <PlusCircle className="h-5 w-5" />
                    Đăng ký Trang Vàng miễn phí
                  </button>
                  <p className="text-[12px] text-gray-500 text-center mt-3">Miễn phí 100% — Trang Vàng sẽ gọi xác nhận trong ngày</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
