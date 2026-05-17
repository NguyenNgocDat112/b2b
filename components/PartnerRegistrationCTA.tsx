'use client';

import React from 'react';
import { PencilLine, MessageCircle } from 'lucide-react';

export default function PartnerRegistrationCTA() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[32px] font-bold text-gray-900 mb-4">
          Sẵn sàng xuất hiện trên Trang Vàng?
        </h2>
        <p className="text-gray-600 text-[16px] mb-8">
          Đăng ký miễn phí ngay hoặc liên hệ Zalo để được hỗ trợ trực tiếp.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => {
               const form = document.getElementById('registration-form');
               if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 text-white font-bold py-3 px-8 rounded-[8px] hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <PencilLine className="h-5 w-5" />
            Đăng ký miễn phí
          </button>
          
          <button className="bg-white text-black font-bold py-3 px-8 rounded-[8px] border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-red-600" />
            Zalo: 0934.498.168
          </button>
        </div>
      </div>
    </section>
  );
}
