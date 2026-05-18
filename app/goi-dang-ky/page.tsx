'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Star, Shield, TrendingUp, Users, Globe, Headset, BarChart3, Rocket, Lock, MessageSquare, Phone, Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PACKAGES = [
  {
    name: 'Quảng cáo Listings',
    price: '2 triệu',
    unit: '/năm',
    description: 'Đứng đầu kết quả tìm kiếm theo ngành nghề',
    badge: 'PHỔ BIẾN NHẤT',
    badgeColor: 'bg-yellow-400 text-[#111]',
    featured: true,
    image: 'https://picsum.photos/seed/listings/600/400',
    features: [
      { text: 'Đứng đầu kết quả tìm kiếm ngành', highlight: true },
      { text: 'Khách thấy bạn trước tiên khi tìm NCC', highlight: true },
      { text: 'Tỷ lệ chuyển đổi rất cao', highlight: false },
      { text: 'Đăng trên 4 website VN + Quốc Tế', highlight: false },
      { text: 'Tặng website miễn phí chuẩn SEO', highlight: false, isPromo: true },
      { text: 'Báo cáo Google Analytics', highlight: false }
    ],
    buttons: [
      { text: 'Tư vấn qua ZALO', type: 'zalo' },
      { text: 'Gọi 0934.498.168', type: 'phone', phone: '0934498168' },
      { text: 'Nhận báo giá gói Listings', type: 'quote' }
    ]
  },
  {
    name: 'Quảng cáo Banner',
    price: '3 triệu',
    unit: '/năm',
    description: 'Hình ảnh sống động, nhận diện thương hiệu nhanh',
    badge: null,
    badgeColor: '',
    featured: false,
    image: 'https://picsum.photos/seed/banner/600/400',
    features: [
      { text: 'Nhận diện thương hiệu trong 3 giây', highlight: false },
      { text: 'Hiển thị toàn quốc — mọi trang cùng ngành', highlight: true },
      { text: 'Đăng trên 4 website VN + Quốc Tế', highlight: false },
      { text: 'Tặng website miễn phí chuẩn SEO', highlight: false, isPromo: true },
      { text: 'Báo cáo Google Analytics', highlight: false },
      { text: 'Hỗ trợ chăm sóc 24/7', highlight: false }
    ],
    buttons: [
      { text: 'Tư vấn qua ZALO', type: 'zalo' },
      { text: 'Gọi 0934.498.168', type: 'phone', phone: '0934498168' },
      { text: 'Nhận báo giá gói Banner', type: 'quote' }
    ]
  },
  {
    name: 'Top 4 Ngang – VIP',
    price: '5 triệu',
    unit: '/năm',
    description: 'Vị trí cao nhất, hiển thị đầu tiên',
    badge: 'VIP – TOP 4',
    badgeColor: 'bg-[#1e1e2d] text-white',
    featured: false,
    image: 'https://picsum.photos/seed/vip/600/400',
    features: [
      { text: 'Vị trí cao nhất — hiện đầu tiên', highlight: true },
      { text: 'Nhận diện thương hiệu trong 3 giây', highlight: false },
      { text: 'Tặng kèm gói Listings cùng ngành', highlight: true },
      { text: 'Đăng trên 4 website VN + Quốc Tế', highlight: false },
      { text: 'Tặng website miễn phí chuẩn SEO', highlight: false, isPromo: true },
      { text: 'Báo cáo Google Analytics', highlight: false }
    ],
    buttons: [
      { text: 'Tư vấn qua ZALO', type: 'zalo' },
      { text: 'Gọi 0934.498.168', type: 'phone', phone: '0934498168' },
      { text: 'Nhận báo giá gói VIP', type: 'quote' }
    ]
  }
];

export default function RegistrationPackagesPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans">
      <main className="">
        {/* Banner Hero */}
        <section className="bg-[#1e1e2d] py-16 md:py-24 relative overflow-hidden text-center">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm"
                >
                    <Lock className="h-3 w-3 text-yellow-400" />
                    <span className="text-yellow-400 text-[10px] md:text-[11px] font-bold tracking-wider uppercase">
                        Vị trí có giới hạn theo ngành nghề
                    </span>
                 </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className="text-[28px] sm:text-[36px] md:text-[54px] font-black text-white leading-[1.1] mb-2 tracking-tight">
                        Sở hữu vị trí cố định trong ngành
                    </h1>
                    <h2 className="text-[28px] sm:text-[36px] md:text-[54px] font-black text-[#facc15] leading-[1.1] mb-12 tracking-tight">
                        Đối thủ không thể thay thế bạn
                    </h2>
                </motion.div>

                {/* Stats Bar */}
                <div className="w-full max-w-[900px] mb-12">
                     <div className="h-[1px] bg-white/10 w-full mb-6"></div>
                     <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-4 text-white/90 text-[13px] md:text-[15px] font-medium px-4">
                        <div className="flex items-center gap-1">
                            Chỉ từ <span className="text-[#facc15] font-black text-[16px] md:text-[18px]">2 triệu</span>/năm
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[#facc15] font-black text-[16px] md:text-[18px]">4+1</span> website
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[#facc15] font-black text-[16px] md:text-[18px]">16+</span> năm tại VN
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[#facc15] font-black text-[16px] md:text-[18px]">250.000+</span> DN đã đăng ký
                        </div>
                     </div>
                     <div className="h-[1px] bg-white/10 w-full mt-6"></div>
                </div>

                {/* Contact Actions */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center items-center gap-4 mt-4"
                >
                    <button className="bg-[#facc15] hover:bg-[#eab308] text-[#1e1e2d] font-bold px-8 py-3.5 rounded-full flex items-center gap-3 transition-all shadow-[0_0_40px_rgba(250,204,21,0.25)] active:scale-95 group">
                        <div className="bg-[#0068ff] rounded-full p-1 group-hover:scale-110 transition-transform">
                            <MessageSquare className="h-4 w-4 text-white fill-white" />
                        </div>
                        Nhận tư vấn qua ZALO
                    </button>

                    <a href="tel:0934498168" className="border-2 border-[#facc15]/40 hover:border-[#facc15] text-[#facc15] px-8 py-3 rounded-full flex items-center gap-3 font-bold transition-all hover:bg-[#facc15]/5 text-[15px] md:text-[16px]">
                        <Phone className="h-4 w-4" />
                        0934.498.168
                    </a>

                    <a href="tel:0912005564" className="border-2 border-[#facc15]/40 hover:border-[#facc15] text-[#facc15] px-8 py-3 rounded-full flex items-center gap-3 font-bold transition-all hover:bg-[#facc15]/5 text-[15px] md:text-[16px]">
                        <Phone className="h-4 w-4" />
                        0912.005.564
                    </a>
                </motion.div>
            </div>
        </section>

        {/* Pricing Cards Section */}
        <section id="pricing-table" className="py-20 md:py-28 px-4 bg-[#f8fafc]">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 text-blue-600 font-bold text-[12px] uppercase tracking-widest mb-4">
                        <div className="w-8 h-[2px] bg-blue-600"></div>
                        3 hình thức quảng cáo
                    </div>
                    <h2 className="text-[32px] md:text-[42px] font-black text-[#111] mb-4 tracking-tight leading-tight">
                        Chọn gói phù hợp với doanh nghiệp
                    </h2>
                    <p className="text-gray-500 max-w-[600px] mx-auto font-medium">
                        Mỗi ngành nghề + tỉnh thành có số vị trí giới hạn. Ai giữ trước có lợi thế.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {PACKAGES.map((pkg, idx) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative bg-white rounded-[12px] flex flex-col border overflow-hidden group transition-all duration-500 ${pkg.featured ? 'border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.15)] ring-1 ring-yellow-400' : 'border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200'}`}
                        >
                            {/* Card Image Area */}
                            <div className="relative h-[220px] bg-gray-50 overflow-hidden p-6">
                                <div className="w-full h-full relative rounded-[8px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                                     <Image 
                                        src={pkg.image} 
                                        alt={pkg.name} 
                                        fill 
                                        className="object-cover"
                                        referrerPolicy="no-referrer"
                                     />
                                </div>
                                
                                {pkg.badge && (
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-[4px] text-[9px] font-black uppercase tracking-wider z-20 shadow-sm ${pkg.badgeColor}`}>
                                        {pkg.badge}
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="mb-8">
                                    <h3 className="text-[20px] font-bold text-[#111] mb-2">{pkg.name}</h3>
                                    <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
                                        {pkg.description}
                                    </p>
                                    <div className="flex items-baseline gap-1 pt-4 border-t border-gray-50">
                                        <span className="text-gray-500 font-bold text-[13px]">Chỉ từ</span>
                                        <span className="text-[24px] font-black text-[#111] leading-none mb-1">{pkg.price}</span>
                                        <span className="text-gray-500 font-bold text-[13px]">{pkg.unit}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10 h-full">
                                    <div className="h-[1px] w-full border-t border-dashed border-gray-100"></div>
                                    {pkg.features.map((feature, fIdx) => (
                                        feature.isPromo ? (
                                            <div key={fIdx} className="bg-yellow-50/50 rounded-[6px] p-3 flex items-center gap-3 border border-yellow-100/50">
                                                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                                                    <Star className="h-2.5 w-2.5 text-[#1e1e2d] fill-[#1e1e2d]" />
                                                </div>
                                                <span className="text-[13px] text-[#111] font-bold uppercase tracking-tight">
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ) : (
                                            <div key={fIdx} className="flex items-start gap-3 px-1">
                                                <div className="mt-1 flex items-center justify-center shrink-0">
                                                    <Check className="h-3.5 w-3.5 text-green-500" strokeWidth={3} />
                                                </div>
                                                <span className={`text-[14px] leading-tight ${feature.highlight ? 'font-bold text-[#111]' : 'text-gray-600 font-medium'}`}>
                                                    {feature.text.split(' ').map((word, wIdx) => 
                                                        ['Đứng', 'đầu', 'thấy', 'bạn', 'trước', 'tiên', 'toàn', 'quốc', 'cao', 'nhất', 'Đăng', 'trên'].includes(word) 
                                                        ? <span key={wIdx} className={feature.highlight ? 'text-[#111]' : ''}>{word} </span> 
                                                        : word + ' '
                                                    )}
                                                </span>
                                            </div>
                                        )
                                    ))}
                                </div>

                                {/* Action Buttons Group */}
                                <div className="space-y-3 pt-4">
                                     {pkg.buttons.map((btn, bIdx) => {
                                        if (btn.type === 'zalo') {
                                            return (
                                                <button key={bIdx} className="w-full h-11 bg-[#facc15] hover:bg-[#eab308] text-[#111] font-bold rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                                    <MessageSquare className="h-4 w-4 fill-blue-600 text-blue-600" />
                                                    {btn.text}
                                                </button>
                                            );
                                        }
                                        if (btn.type === 'phone') {
                                            return (
                                                <a key={bIdx} href={`tel:${btn.phone}`} className="w-full h-11 border border-gray-200 hover:border-[#111] text-[#111] font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:bg-gray-50">
                                                    <Phone className="h-4 w-4" />
                                                    {btn.text}
                                                </a>
                                            );
                                        }
                                        return (
                                            <button key={bIdx} className="w-full h-11 border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-500 font-bold rounded-full flex items-center justify-center gap-2 transition-all hover:bg-blue-50 text-[13px]">
                                                <Send className="h-3.5 w-3.5" />
                                                {btn.text}
                                            </button>
                                        );
                                     })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section or Trust Banner */}
        <section className="bg-white py-16 px-4 border-t border-gray-100">
            <div className="max-w-[800px] mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <Headset className="h-10 w-10 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#111] mb-4">Cần tư vấn thêm về gói dịch vụ?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Đừng ngần ngại liên hệ với đội ngũ chuyên gia của Trang Vàng Việt Nam. Chúng tôi sẽ giúp bạn phân tích và lựa chọn giải pháp tối ưu nhất cho ngân sách và mục tiêu của doanh nghiệp.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white border border-gray-200 px-8 py-3 rounded-[8px] font-bold text-gray-700 hover:border-red-600 hover:text-red-600 transition-all shadow-sm">
                        Gọi (024) 3636 1010
                    </button>
                    <button className="bg-white border border-gray-200 px-8 py-3 rounded-[8px] font-bold text-gray-700 hover:border-red-600 hover:text-red-600 transition-all shadow-sm">
                        Chat qua Zalo
                    </button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
