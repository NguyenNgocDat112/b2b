'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-3xl font-bold mb-4">404 - Trang không tồn tại</h2>
      <p className="text-gray-600 mb-8 max-w-md">Xin lỗi, nội dung bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.</p>
      <Link href="/" className="px-6 py-3 bg-[#e81919] text-white font-medium rounded hover:bg-red-700 transition">
        Về trang chủ
      </Link>
    </div>
  );
}
