'use client';

import React from 'react';
import { Flag, Users, ArrowRight, MousePointerClick } from 'lucide-react';
import { motion } from 'motion/react';

export default function PartnerMarketReality() {
  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-red-600"></div>
          <span className="text-red-600 font-bold text-[12px] tracking-widest uppercase">
            GÓC NHÌN KHÁC VỀ TRANG VÀNG
          </span>
          <div className="w-8 h-[1px] bg-red-600"></div>
        </div>
        <h2 className="text-[32px] md:text-[40px] font-bold mb-4 leading-tight">
          Trong khi bạn còn cân nhắc...<br />
          <span className="text-red-600">Đối thủ đã có mặt. Khách hàng đang tìm kiếm.</span>
        </h2>
        <p className="text-gray-600 text-[16px] max-w-[600px] mx-auto">
          Trang Vàng Việt Nam hiện có <strong>250.000+ doanh nghiệp</strong> thuộc <strong>3.000+ ngành nghề</strong> đang hiện diện.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div 
          whileHover={{ y: -5 }}                
          className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm h-full"
        >
          <div className="flex items-center gap-2 text-red-600 mb-4">
            <Flag className="h-5 w-5" />
            <span className="uppercase text-[12px] font-bold tracking-wider">Rủi ro mất thị phần</span>
          </div>
          <h3 className="text-[20px] font-bold mb-4 text-gray-900">Đối thủ của bạn đã đăng ký trên Trang Vàng</h3>
          <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
            Trong cùng ngành nghề, cùng khu vực — <strong className="text-black">đối thủ của bạn có thể đã có mặt</strong> tại đây. Khách hàng tra cứu nhà cung cấp, họ tìm thấy đối thủ, không thấy bạn. Bạn mất khách không phải vì sản phẩm kém — mà vì <strong className="text-black">bạn không có mặt ở nơi khách đang tìm.</strong>
          </p>
          <button className="text-red-600 font-semibold text-[14px] flex items-center gap-2 hover:gap-3 transition-all">
            Thử tìm ngành của bạn <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm h-full"
        >
          <div className="flex items-center gap-2 text-red-600 mb-4">
            <Users className="h-5 w-5" />
            <span className="uppercase text-[12px] font-bold tracking-wider">Cơ hội hiện diện đúng chỗ</span>
          </div>
          <h3 className="text-[20px] font-bold mb-4 text-gray-900">Khách hàng của bạn cũng đã ở trên Trang Vàng</h3>
          <p className="text-gray-600 text-[14px] leading-relaxed">
            Bạn bán bao bì — khách của bạn là <strong className="text-black">DN thực phẩm, nông sản, sản xuất</strong>. Bạn bán thiết bị — khách của bạn là <strong className="text-black">nhà máy, xí nghiệp, công trình</strong>. Dù bạn ở ngành nào, <strong className="text-black">hàng nghìn khách hàng tiềm năng của bạn đã có mặt tại đây</strong> — và họ quen tra cứu Trang Vàng để tìm nhà cung cấp mỗi ngày.
          </p>
        </motion.div>
      </div>

      {/* Footer Box */}
      <div className="max-w-[800px] mx-auto mt-12 bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm text-center">
        <p className="text-[16px] font-medium text-gray-900 mb-6">
          Câu hỏi không phải &quot;Trang Vàng có phù hợp với doanh nghiệp tôi không?&quot; — mà là <strong className="text-red-600">&quot;Tôi đang để đối thủ và khách hàng gặp nhau tại Trang Vàng — mà không có mặt mình.&quot;</strong>
        </p>
        <div className="bg-gray-100 p-6 rounded-[12px]">
           <div className="flex items-center justify-center gap-2 text-green-600 text-[14px] font-medium mb-3">
             <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-[10px]">✔</span>
             </div>
             Đã đủ thông tin — Sẵn sàng đăng ký?
           </div>
           <p className="text-gray-500 text-[13px] mb-4">Miễn phí 100% - Xác nhận trong ngày - Chỉ mất 2-3 phút</p>
           <button 
             onClick={() => {
               const form = document.getElementById('registration-form');
               if (form) form.scrollIntoView({ behavior: 'smooth' });
             }}
             className="bg-red-600 text-white font-bold py-3 px-6 rounded-[8px] flex items-center justify-center gap-2 mx-auto hover:bg-red-700 transition-colors"
           >
             <MousePointerClick className="h-4 w-4" />
             Kéo lên điền đăng ký ngay
           </button>
        </div>
      </div>
    </section>
  );
}
