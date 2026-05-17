'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const footerItems = [
  {
    title: '250.000+',
    desc: 'doanh nghiệp đã đăng ký',
  },
  {
    title: 'Yellow Pages',
    desc: 'Hệ thống 140+ năm toàn cầu',
  },
  {
    title: 'CÔNG TY CP CÔNG NGHỆ & THÔNG TIN DN VIỆT',
    desc: 'Đơn vị vận hành hệ thống',
  },
  {
    title: 'Sàn TMĐT',
    desc: 'Đã đăng ký Bộ Công Thương',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        
        {/* TOP */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {footerItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              {/* bg effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-red-50/0 to-red-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                {/* icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                {/* content */}
                <div className="min-w-0">
                  <h4 className="line-clamp-2 text-sm font-extrabold leading-6 text-neutral-900 sm:text-[15px]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-neutral-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            
            <p className="text-xs leading-6 text-neutral-400 sm:text-sm">
              © 2026 BuildMat. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 sm:text-sm">
              <button className="transition-colors hover:text-red-600">
                Chính sách bảo mật
              </button>

              <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />

              <button className="transition-colors hover:text-red-600">
                Điều khoản sử dụng
              </button>

              <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />

              <button className="transition-colors hover:text-red-600">
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}