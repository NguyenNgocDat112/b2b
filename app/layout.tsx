import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BuildMat - Hệ Sinh Thái Vật Liệu Xây Dựng',
  description:
    'Hệ sinh thái cung ứng vật liệu xây dựng toàn diện. Tìm kiếm nhà cung cấp, kiểm tra báo giá, đăng ký gói hội viên và cập nhật tin tức mới nhất.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body
        suppressHydrationWarning
        className="font-sans antialiased text-[#222222] bg-[#f4f4f4]"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}