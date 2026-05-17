import type { Metadata } from 'next';
import { Reddit_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const redditSans = Reddit_Sans({
  subsets: ['latin'],
  variable: '--font-reddit-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BuildMat - Hệ Sinh Thái Vật Liệu Xây Dựng',
  description: 'Hệ sinh thái cung ứng vật liệu xây dựng toàn diện. Tìm kiếm nhà cung cấp, kiểm tra báo giá, đăng ký gói hội viên và cập nhật tin tức mới nhất.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${redditSans.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#222222] bg-[#f4f4f4]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
