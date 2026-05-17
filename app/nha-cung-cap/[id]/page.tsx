'use client';

import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  ChevronRight, 
  ExternalLink, 
  Calendar, 
  Users, 
  Share2, 
  Facebook, 
  Twitter, 
  Heart,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Info,
  TrendingUp,
  BarChart3,
  Clock,
  MousePointer2,
  PieChart,
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  Trophy,
  Filter,
  Package,
  Store,
  Target,
  Barcode,
  Building2,
  List,
  CheckSquare,
  Check,
  Plus
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

// Mock data integration
const mockSuppliers = [
  {
    id: 1,
    name: "CÔNG TY CỔ PHẦN SẢN XUẤT BU LÔNG QUANG THÁI",
    industry: "Bulong & Ốc Vít Cường Độ Cao",
    address: "25A An Phú Đông 25, P. An Phú Đông, Q. 12, TP. Hồ Chí Minh, Việt Nam",
    description: "Với hơn 15 năm kinh nghiệm, <b>Bu Lông Quang Thái</b> là đơn vị dẫn đầu trong sản xuất và cung ứng <b>bulong neo, bulong móng, bulong inox</b> chất lượng cao cho các công trình trọng điểm và xuất khẩu.",
    phones: ["0933193068", "0933 220 468"],
    website: "www.bulongquangthai.vn",
    zalo: "0933193068",
    isSponsor: true,
    addedOn: "12 Tháng 3, 2022",
    visitors: "45k",
    rating: 5.0,
    reviews: 245,
    saved: 890,
    images: [
      "https://picsum.photos/seed/bolt1/800/600",
      "https://picsum.photos/seed/bolt2/800/600",
      "https://picsum.photos/seed/bolt3/800/600",
      "https://picsum.photos/seed/bolt4/800/600"
    ],
    tags: ["Bulong neo", "Bulong inox", "Gia công bulong", "Ty ren", "Ốc vít"]
  }
];

const trafficData = [
  { name: '2024-09', value: 850000 },
  { name: '2024-10', value: 920000 },
  { name: '2024-11', value: 880000 },
  { name: '2024-12', value: 1050000 },
  { name: '2025-01', value: 1150000 },
  { name: '2025-02', value: 1200000 },
];

const countryData = [
  { name: 'Việt Nam', value: 85.5, color: '#e31c25' },
  { name: 'Campuchia', value: 5.2, color: '#ff5a5f' },
  { name: 'Lào', value: 4.4, color: '#ff8a8d' },
  { name: 'Thái Lan', value: 3.1, color: '#ffbcc0' },
  { name: 'Khác', value: 1.8, color: '#fca5a5' },
];

const reviews = [
  { id: 1, user: "Nguyễn Văn Hùng", rating: 5, comment: "Xi măng chất lượng rất tốt, độ kết dính cao, giao hàng đúng tiến độ công trình.", date: "2 ngày trước" },
  { id: 2, user: "Trần Thị Lan", rating: 5, comment: "Nhà cung cấp uy tín, tư vấn nhiệt tình cho dự án biệt thự của tôi.", date: "1 tuần trước" },
  { id: 3, user: "Lê Minh Triết", rating: 4, comment: "Giá cả hợp lý, sắt thép đúng quy chuẩn kỹ thuật.", date: "1 tháng trước" },
];

export default function SupplierDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const [activeTab, setActiveTab] = useState('Sản phẩm dịch vụ nổi bật');
  
  const supplier = mockSuppliers.find(s => s.id === id) || mockSuppliers[0];
  const brandRed = '#e31c25';
  const lightRed = '#fff5f5';
  const borderRed = '#fee2e2';

  const tabs = [
    { name: 'Sản phẩm dịch vụ nổi bật' },
    { name: 'Giới thiệu chung' },
    { name: 'Sản phẩm dịch vụ' },
    { name: 'Thư viện ảnh' },
    { name: 'Hồ sơ công ty' },
  ];

  const contactInfo = [
    { label: 'Địa chỉ', val: '25A An Phú Đông 25, P. An Phú Đông, Q. 12, TP. Hồ Chí Minh, Việt Nam', icon: MapPin },
    { label: 'Số điện thoại', val: '0933 193 068', icon: Phone },
    { label: 'Hotline', val: '0933 220 468', icon: Phone },
    { label: 'Email', val: 'bulongquangthai@gmail.com', icon: Mail },
    { label: 'Website', val: 'www.bulongquangthai.vn', icon: Globe },
  ];

  return (
    <main className="min-h-screen bg-white font-sans pb-20">
      
      {/* Breadcrumbs */}
      <div className="bg-transparent">
        <div className="mx-auto max-w-[1380px] px-4 pt-4 pb-2 sm:pt-6 sm:pb-4 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
          <Link href="/" className="hover:text-[#e31c25] transition-colors">Trang chủ</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <Link href="/nha-cung-cap" className="hover:text-[#e31c25] transition-colors">Nhà cung cấp</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <span className="truncate tracking-tight font-medium">{supplier.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1380px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Primary Content */}
          <div className="lg:col-span-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Header Title Section */}
              <div className="border-b border-gray-100 pb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
                  {supplier.name}
                </h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Left: Detailed Information */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-start">
                      <div className="sm:col-span-3 text-sm font-black text-gray-900 uppercase tracking-tighter">Giới thiệu:</div>
                      <div className="sm:col-span-9 text-sm text-gray-600 leading-relaxed font-medium">
                        {supplier.description.replace(/<[^>]*>/g, '')}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-center">
                      <div className="sm:col-span-3 text-sm font-black text-gray-900 uppercase tracking-tighter">Ngày tham gia:</div>
                      <div className="sm:col-span-9 text-sm text-gray-600 font-medium">{supplier.addedOn}</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-center">
                      <div className="sm:col-span-3 text-sm font-black text-gray-900 uppercase tracking-tighter">Truy cập tháng:</div>
                      <div className="sm:col-span-9 text-sm text-gray-600 font-bold">{supplier.visitors}</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-start border-t border-gray-50 pt-4">
                      <div className="sm:col-span-3 text-sm font-black text-gray-900 uppercase tracking-tighter">Liên hệ & Mạng xã hội:</div>
                      <div className="sm:col-span-9 space-y-3">
                         {[
                           { icon: MapPin, val: supplier.address },
                           { icon: Phone, val: supplier.phones[0] },
                           { icon: Mail, val: 'contact@quangthai.vn' },
                           { icon: Globe, val: supplier.website },
                         ].map((info, i) => (
                           <div key={i} className="flex items-center gap-3 group">
                              <div className="w-7 h-7 rounded-[8px] bg-red-50 text-[#e31c25] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e31c25] group-hover:text-white transition-all duration-300">
                                 <info.icon className="h-3.5 w-3.5" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-gray-700">{info.val}</span>
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {supplier.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-[8px] text-[10px] sm:text-[11px] font-bold text-gray-500 hover:border-[#e31c25] hover:text-[#e31c25] transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Large Visual Preview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-video sm:aspect-square lg:aspect-[4/3] rounded-[8px] overflow-hidden border border-gray-100 bg-gray-50 group">
                    <Image 
                      src={supplier.images[0]} 
                      alt={supplier.name} 
                      fill 
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-[#e31c25] text-white rounded-[8px] font-bold text-[11px] uppercase tracking-wider hover:bg-black transition-all">
                      Quảng bá công ty
                    </button>
                    <button className="flex-1 py-2.5 border border-gray-100 text-gray-500 rounded-[8px] font-bold text-[11px] uppercase tracking-wider hover:border-[#e31c25] hover:text-[#e31c25] transition-all">
                      Cập nhật thông tin
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabbed Navigation Section */}
        <div className="mt-8 sm:mt-12 border-b border-gray-100">
           <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto pb-px no-scrollbar">
              {tabs.map((tab, idx) => (
                <div key={idx} className="relative flex-shrink-0">
                  <button 
                    onClick={() => setActiveTab(tab.name)}
                    className={`pb-3 px-1 text-sm sm:text-base font-bold transition-colors whitespace-nowrap ${activeTab === tab.name ? 'text-[#e31c25]' : 'text-gray-400 hover:text-gray-900'}`}
                  >
                    {tab.name}
                  </button>
                  {activeTab === tab.name && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e31c25] rounded-t-full"
                    />
                  )}
                </div>
              ))}
           </div>
        </div>

        {/* Main Tab Content */}
        <div className="py-6 sm:py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'Sản phẩm dịch vụ nổi bật' && (
                <div className="space-y-8">
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                      {[
                        { name: 'Bulong ASTM A490', img: 'https://picsum.photos/seed/a490/400/400', code: 'A490-HDG' },
                        { name: 'Bulong ASTM A307', img: 'https://picsum.photos/seed/a307/400/400', code: 'A307-PLN' },
                        { name: 'Bulong DIN 931', img: 'https://picsum.photos/seed/931/400/400', code: 'D931-8.8' },
                        { name: 'Bulong ASTM A193', img: 'https://picsum.photos/seed/a193/400/400', code: 'B7/B7M' },
                        { name: 'Bulong DIN EN 14399-4', img: 'https://picsum.photos/seed/143994/400/400', code: 'HV Sets' },
                        { name: 'Bulong DIN EN 14399-3', img: 'https://picsum.photos/seed/143993/400/400', code: 'HR Sets' },
                        { name: 'Bulong ASTM A325', img: 'https://picsum.photos/seed/a325/400/400', code: 'A325-TYP1' },
                        { name: 'Thanh Ren DIN 975', img: 'https://picsum.photos/seed/975/400/400', code: 'D975-4.6' },
                        { name: 'Bulong Lục Giác', img: 'https://picsum.photos/seed/hex/400/400', code: 'HEX-8.8' },
                        { name: 'Ốc Vít Inox', img: 'https://picsum.photos/seed/screw/400/400', code: 'SS-304' },
                      ].map((product, i) => (
                        <motion.div 
                          key={i} 
                          whileHover={{ y: -4 }}
                          className="flex flex-col group cursor-pointer"
                        >
                           <div className="aspect-square relative w-full border border-gray-100 rounded-[8px] overflow-hidden bg-white shadow-sm transition-all group-hover:border-[#e31c25] group-hover:shadow-md">
                              <Image 
                                src={product.img} 
                                alt={product.name} 
                                fill 
                                className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm border border-gray-100 px-2 py-0.5 rounded-[8px] text-[8px] font-black tracking-widest text-[#e31c25] uppercase">
                                Chứng nhận ISO
                              </div>
                           </div>
                           <div className="mt-3 space-y-0.5 px-0.5">
                              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{product.code}</div>
                              <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight line-clamp-2 min-h-[2rem]">{product.name}</h4>
                           </div>
                           <button className="mt-3 w-full py-2 bg-red-50 text-[#e31c25] rounded-[8px] text-[10px] font-bold hover:bg-[#e31c25] hover:text-white transition-all flex items-center justify-center gap-1.5 border border-red-100/50">
                              <Info className="h-3 w-3" />
                              Chi tiết sản phẩm
                           </button>
                        </motion.div>
                      ))}
                   </div>
                </div>
              )}

              {activeTab === 'Giới thiệu chung' && (
                <div className="space-y-12 lg:space-y-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-12 space-y-10">
                      <div className="max-w-4xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e31c25] text-xs font-bold uppercase tracking-widest border border-red-100">
                          <Check className="h-3.5 w-3.5" />
                          Dẫn đầu ngành từ 2012
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                          Dẫn đầu công nghệ <br/>
                          <span className="text-[#e31c25]">Sản xuất Bu Lông</span> chất lượng cao
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                        <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
                          <p>
                            Bu Lông Quang Thái không chỉ là một nhà máy sản xuất, chúng tôi là đối tác kỹ thuật tin cậy của hàng ngàn công trình xây dựng, cầu đường và hạ tầng năng lượng trên khắp Việt Nam.
                          </p>
                          <p className="text-gray-500 text-sm sm:text-base border-l-4 border-red-100 pl-6 py-1">
                            Sở hữu hệ thống quản lý chất lượng ISO 9001:2015, mọi sản phẩm rời khỏi nhà máy đều được kiểm soát nghiêm ngặt qua các khâu thí nghiệm cường độ kéo, độ cứng và độ chính xác ren.
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-6 bg-red-50 rounded-[8px] border border-red-100 group hover:bg-[#e31c25] transition-all duration-300">
                              <div className="text-2xl sm:text-3xl font-black text-[#e31c25] mb-1 group-hover:text-white">100%</div>
                              <div className="text-[10px] font-bold text-red-900/40 uppercase tracking-widest leading-tight group-hover:text-white/80">Vật liệu <br/>nhập khẩu</div>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-[8px] border border-gray-100 group hover:border-[#e31c25] transition-all duration-300">
                              <div className="text-2xl sm:text-3xl font-black text-[#e31c25] mb-1">24/7</div>
                              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Hỗ trợ <br/>kỹ thuật</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-[8px] p-8 sm:p-10 shadow-sm relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                           <h3 className="text-2xl font-bold text-gray-900 mb-8 relative">Cam kết cốt lõi</h3>
                           <ul className="space-y-8 relative">
                            {[
                              { t: 'Độ bền vượt trội', d: 'Xử lý bề mặt chuyên sâu giúp Bulong chịu được môi trường khắc nghiệt.', icon: Zap },
                              { t: 'Giá gốc nhà máy', d: 'Tối ưu hóa quy trình sản xuất mang lại mức giá tốt nhất cho nhà thầu.', icon: TrendingUp },
                              { t: 'Chứng chỉ quốc tế', d: 'Đáp ứng đầy đủ chứng chỉ ASTM, DIN, JIS theo yêu cầu dự án.', icon: ShieldCheck }
                            ].map((item, i) => (
                              <li key={i} className="flex gap-5 items-start">
                                 <div className="w-12 h-12 bg-red-50 rounded-[8px] flex items-center justify-center flex-shrink-0 text-[#e31c25] group-hover:bg-[#e31c25] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <item.icon className="h-6 w-6" />
                                 </div>
                                 <div className="space-y-0.5">
                                    <div className="font-bold text-lg text-gray-900">{item.t}</div>
                                    <div className="text-gray-500 font-medium leading-relaxed text-sm">{item.d}</div>
                                  </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Sản phẩm dịch vụ' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                   {[
                     {
                       category: 'Dòng Bulong Neo Móng',
                       desc: 'Giải pháp liên kết nền móng vững chắc cho mọi công trình.',
                       items: [
                         'Bulong neo bẻ J (L=300mm-2000mm)',
                         'Bulong neo bẻ U cường độ 4.6, 5.6, 8.8',
                         'Bulong neo chữ L mạ kẽm nhúng nóng',
                         'Bulong neo móng ASTM F1554 Grade 36/55/105'
                       ],
                       icon: Target
                     },
                     {
                       category: 'Dòng Bulong Inox (304/316)',
                       desc: 'Chống ăn mòn tuyệt đối trong môi trường biển & hóa chất.',
                       items: [
                         'Bulong lục giác ngoài Inox 304/316',
                         'Bulong lục giác chìm đầu trụ/bằng Inox',
                         'Bulong inox M6 - M64 tiêu chuẩn DIN',
                         'Gia công Bulong inox theo bản vẽ kỹ thuật'
                       ],
                       icon: ShieldCheck
                     },
                     {
                       category: 'Vật Tư Liên Kết Cường Độ Cao',
                       desc: 'Tiêu chuẩn quốc tế cho các kết cấu thép hạng nặng.',
                       items: [
                         'Bulong cường độ cao 8.8, 10.9, 12.9',
                         'Bulong kết cấu ASTM A325 & A490',
                         'Đai ốc (Tán) cường độ cao DIN 934',
                         'Long đền phẳng/vênh tiêu chuẩn ASTM'
                       ],
                       icon: Zap
                     },
                     {
                       category: 'Ty Ren & Guzong',
                       desc: 'Đa dạng kích thước và cấp bền cho hệ thống treo & cơ điện.',
                       items: [
                         'Ty ren âm trần DIN 975 (L=1m-3m)',
                         'Guzong 2 đầu ren cường độ cao',
                         'Ống nối ren (Ty ren couple)',
                         'Thanh ren nhúng nóng/xi trắng'
                       ],
                       icon: Package
                     }
                   ].map((group, i) => (
                     <div key={i} className="bg-white rounded-[8px] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group border-l-4 hover:border-l-[#e31c25]">
                        <div className="flex items-start gap-4 mb-6">
                           <div className={`w-12 h-12 bg-red-50 text-[#e31c25] rounded-[8px] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e31c25] group-hover:text-white transition-all duration-300`}>
                              <group.icon className="h-6 w-6" />
                           </div>
                           <div>
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#e31c25] transition-colors">{group.category}</h3>
                              <p className="text-xs text-gray-500 font-medium mt-1">{group.desc}</p>
                           </div>
                        </div>
                        <div className="space-y-3">
                           {group.items.map((item, j) => (
                             <div key={j} className="flex items-center gap-3 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#e31c25] transition-colors"></div>
                                <span className="text-sm font-medium">{item}</span>
                             </div>
                           ))}
                        </div>
                        <button className="mt-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#e31c25] transition-colors flex items-center gap-2">
                           Yêu cầu thông số kỹ thuật
                           <ChevronRight className="h-3 w-3" />
                        </button>
                     </div>
                   ))}
                </div>
              )}

              {activeTab === 'Thư viện ảnh' && (
                <div className="space-y-8">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6">
                       {[
                         { src: "https://picsum.photos/seed/bolt1/800/600", alt: "Sản phẩm 1" },
                         { src: "https://picsum.photos/seed/bolt2/800/600", alt: "Nhà máy 1" },
                         { src: "https://picsum.photos/seed/bolt3/800/600", alt: "Dây chuyền" },
                         { src: "https://picsum.photos/seed/bolt4/800/600", alt: "Kho hàng" },
                         { src: "https://picsum.photos/seed/bolt5/800/600", alt: "Kiểm định" },
                         { src: "https://picsum.photos/seed/bolt6/800/600", alt: "Dự án 1" },
                         { src: "https://picsum.photos/seed/bolt7/800/600", alt: "Dự án 2" },
                         { src: "https://picsum.photos/seed/bolt8/800/600", alt: "Giao hàng" },
                         { src: "https://picsum.photos/seed/bolt9/800/600", alt: "Sản phẩm 2" },
                         { src: "https://picsum.photos/seed/bolt10/800/600", alt: "Sản phẩm 3" },
                         { src: "https://picsum.photos/seed/bolt11/800/600", alt: "Vật tư" },
                         { src: "https://picsum.photos/seed/bolt12/800/600", alt: "Nhà máy 2" },
                         { src: "https://picsum.photos/seed/bolt13/800/600", alt: "Kho vít" },
                         { src: "https://picsum.photos/seed/bolt14/800/600", alt: "Kho ty ren" },
                       ].map((img, i) => (
                         <div key={i} className="flex flex-col gap-2 group cursor-pointer">
                            <div className="aspect-square relative rounded-[8px] sm:rounded-[8px] overflow-hidden border border-gray-100 bg-gray-50 group-hover:border-[#e31c25] transition-all">
                               <Image 
                                 src={img.src} 
                                 alt={img.alt} 
                                 fill 
                                 className="object-cover transition-transform duration-500 group-hover:scale-110"
                                 sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 15vw"
                                 referrerPolicy="no-referrer"
                               />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 truncate text-center group-hover:text-[#e31c25] transition-colors">{img.alt}</span>
                         </div>
                       ))}
                       <div className="flex flex-col gap-2 group cursor-pointer">
                          <div className="aspect-square bg-red-50 rounded-[8px] sm:rounded-[8px] border border-dashed border-red-200 flex flex-col items-center justify-center text-[#e31c25] gap-1 hover:bg-[#e31c25] hover:text-white transition-all">
                             <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                          </div>
                          <span className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-tighter">Thêm ảnh</span>
                       </div>
                    </div>
                </div>
              )}

              {activeTab === 'Hồ sơ công ty' && (
                <div className="bg-white rounded-[8px] p-8 md:p-12 border border-gray-100 shadow-sm">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {[
                        { 
                          label: 'TÊN CÔNG TY', 
                          val: 'NHÀ MÁY BU LÔNG QUANG THÁI - CÔNG TY CỔ PHẦN SẢN XUẤT BU LÔNG QUANG THÁI', 
                          icon: Building2
                        },
                        { 
                          label: 'MÃ SỐ THUẾ', 
                          val: '0317050779', 
                          icon: Barcode
                        },
                        { 
                          label: 'NGÀNH NGHỀ CHÍNH', 
                          val: 'Sản xuất bu lông, ốc vít, ty ren cường độ cao & vật liệu liên kết kim loại.', 
                          icon: Package
                        },
                        { 
                          label: 'LOẠI HÌNH', 
                          val: 'Công ty Cổ phần - Nhà Sản Xuất Trực Tiếp', 
                          icon: Store
                        },
                        { 
                          label: 'TRỤ SỞ CHÍNH', 
                          val: '25A An Phú Đông 25, P. An Phú Đông, Q. 12, TP. HCM', 
                          icon: MapPin
                        },
                        { 
                          label: 'THỊ TRƯỜNG', 
                          val: 'Toàn quốc & Xuất khẩu (Đông Nam Á)', 
                          icon: Target
                        },
                        { 
                          label: 'NƯỚC SẢN XUẤT', 
                          val: 'Việt Nam (Made in Vietnam)', 
                          icon: Globe
                        },
                        { 
                          label: 'CHỨNG CHỈ', 
                          val: 'ISO 9001:2015, ASTM, DIN, JIS, TCVN', 
                          icon: ShieldCheck
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 sm:gap-6 items-start group">
                           <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-red-50 text-[#e31c25] rounded-[8px] group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm border border-red-100">
                              <item.icon className="h-5 w-5" />
                           </div>
                           <div className="flex flex-col gap-1">
                              <div className="text-[#e31c25] font-black text-[10px] tracking-widest uppercase opacity-70">{item.label}</div>
                              <div className="text-[#1a1a1a] text-sm sm:text-[15px] font-bold leading-relaxed">{item.val}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-12 pt-10 border-t border-gray-100">
                      <div className="bg-red-50 rounded-[8px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                         <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#e31c25] shadow-sm">
                               <ShieldCheck className="h-8 w-8" />
                            </div>
                            <div>
                               <h4 className="text-lg font-bold text-gray-900">Thông tin đã được xác thực</h4>
                               <p className="text-gray-500 text-sm font-medium">Hồ sơ pháp lý của nhà cung cấp này đã được hệ thống kiểm duyệt.</p>
                            </div>
                         </div>
                         <button className="px-6 py-3 bg-[#e31c25] text-white rounded-[8px] font-bold text-sm hover:bg-black transition-all shadow-md">
                            Tải hồ sơ năng lực (PDF)
                         </button>
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Alternatives Grid */}
        <div className="mt-16 sm:mt-20 border-t border-gray-100 pt-10 sm:pt-16 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <Trophy className="h-6 w-6 text-[#e31c25]" />
                Nhà cung cấp uy tín khác
              </h2>
              <p className="text-gray-500 text-sm mt-1 font-medium">Lựa chọn thay thế được cộng đồng xây dựng đánh giá cao.</p>
            </div>
            <button className="text-[#e31c25] font-bold text-sm hover:underline flex items-center gap-2 group">
              Xem tất cả 
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: 'Bê tông Rạch Chiếc', color: '#e31c25', desc: 'Chuyên cung cấp bê tông tươi cho các công trình khu vực Phía Nam.' },
              { name: 'Đá Xây Dựng Bình Dương', color: '#f59e0b', desc: 'Mỏ đá quy mô lớn, cung cấp đá 1x2, đá xanh đạt chuẩn chất lượng.' },
              { name: 'Gạch Đồng Tâm', color: '#e31c25', desc: 'Thương hiệu gạch ốp lát hàng đầu với thiết kế sang trọng, độ bền cao.' },
            ].map((alt, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[8px] p-6 sm:p-8 border border-gray-100 flex flex-col gap-4 transition-all duration-300 hover:border-[#e31c25]/30"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-[8px] flex items-center justify-center text-white font-black text-xl"
                    style={{ backgroundColor: alt.color }}
                  >
                    {alt.name[0]}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-[#1a1a1a] text-lg tracking-tight">{alt.name}</h4>
                    <div className="flex items-center gap-1.5 font-bold text-[10px] text-gray-400">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (1.2k+)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-[1.6] font-medium min-h-[2.5rem]">
                  {alt.desc}
                </p>
                <button className="w-full py-2.5 border border-gray-100 rounded-[8px] text-xs font-bold text-gray-600 hover:border-[#e31c25] hover:text-[#e31c25] hover:bg-[#fff5f5] transition-all">
                  Xem chi tiết
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
