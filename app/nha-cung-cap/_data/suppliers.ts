// _data/suppliers.ts

import { Supplier } from "../_type/supplier";

/* =========================================================
   FILTER DATA
========================================================= */

export const supplierGroups = [
  {
    title: "Thanh Ren, Ty Ren, Guzong",
    count: 202,
  },
  {
    title: "Bulong Neo, Bulong Móng",
    count: 189,
  },
  {
    title: "Bulong Inox, Ốc Inox",
    count: 176,
  },
  {
    title: "Vòng Đệm, Long Đền",
    count: 100,
  },
  {
    title: "Bulong Nở, Vít Nở",
    count: 91,
  },
];

/* =========================================================
   SIDEBAR FILTERS
========================================================= */

export const supplierCategories = [
  {
    title: "Thanh Ren, Ty Ren, Guzong",
    count: 202,
  },
  {
    title:
      "Bulong Neo, Bulong Móng, Bulong Lục Giác,..Các Loại",
    count: 189,
  },
  {
    title: "Bulong Inox, Ốc Inox, Vít Inox",
    count: 176,
  },
  {
    title: "Vòng Đệm, Long Đền",
    count: 100,
  },
  {
    title: "Bulong Nở, Vít Nở, Tắc Kê",
    count: 91,
  },
  {
    title:
      "Vít Bắn Tôn, Vít Tự Khoan, Vít Thạch Cao,..Các Loại",
    count: 68,
  },
  {
    title:
      "Bulong, Ốc Vít - Gia Công Bulong, Ốc Vít Theo Yêu Cầu",
    count: 66,
  },
  {
    title:
      "Đai Treo Ống (Hình Tròn, Quả Bí, Omega,..)",
    count: 61,
  },
  {
    title:
      "Đinh Rút, Đinh Tán, Rive Nhôm, Rive Inox",
    count: 42,
  },
  {
    title: "Bulong Hóa Chất",
    count: 27,
  },
  {
    title: "Ốc Vít Nhỏ, Ốc Vít Siêu Nhỏ",
    count: 26,
  },
  {
    title:
      "Kẹp Xà Gồ (Hình Vuông, Chữ C, Kẹp Dầm,..)",
    count: 23,
  },
  {
    title: "Đai Ốc, E Cu, Tán",
    count: 185,
  },
];

export const supplierCities = [
  "Hà Nội",
  "TP. Hồ Chí Minh (TPHCM)",
  "Đồng Nai",
  "Bình Dương",
  "Tp. Đà Nẵng",
  "TP. Hải Phòng",
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Ninh",
  "Bình Phước",
  "Bình Thuận",
  "Hưng Yên",
  "Khánh Hòa",
  "Nam Định",
  "Phú Thọ",
  "Quảng Ninh",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "TP. Cần Thơ",
  "Vĩnh Phúc",
  "Bắc Giang",
  "Bình Định",
  "Gia Lai",
  "Hà Nam",
  "Hải Dương",
  "Long An",
  "Ninh Bình",
  "Ninh Thuận",
  "Quảng Ngãi",
  "Tây Ninh",
];

export const relatedIndustries = [
  {
    title: "Cơ Khí - Gia Công và Chế Tạo",
    count: 2483,
  },
  {
    title:
      "Bản Lề (Bản Lề Inox, Bản Lề Cửa,.. Các Loại)",
    count: 65,
  },
];

export const industryTags = [
  "ốc vít bu lông",
  "nhà cung cấp ốc vít bu lông",
  "công ty nhập khẩu và phân phối",
  "danh sách công ty",
  "mua bán ốc vít bu lông",
];

/* =========================================================
   UNSPLASH IMAGES
========================================================= */

const companyImages = [
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
];

/* =========================================================
   SUPPLIERS
========================================================= */

export const suppliers: Supplier[] = [
  ...Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,

    name: [
      "Nhà Máy Bu Lông Quang Thái",
      "Công Ty Inox Kim Phát",
      "Bulong Neo Việt Nhật",
      "Ốc Vít Minh Thành",
      "Bulong Hải Dương",
      "Fastener Đại Nam",
      "Cơ Khí Thành Công",
      "Bulong Inox 304 VN",
      "Nhà Máy Fastener Hưng Phát",
      "Bulong Công Trình Á Châu",
      "Ốc Vít Hòa Bình",
      "Fastener Việt Đức",
      "Công Ty Kim Khí Tân Phát",
      "Bulong Neo Đông Á",
      "Bulong HTB Việt Nam",
      "Công Ty Vít Công Nghiệp An Phú",
      "Nhà Máy Bulong Hoàng Long",
      "Inox Fastener Quốc Bảo",
      "Công Ty TNHH Fastener Sài Gòn",
      "Bulong Chịu Lực Miền Nam",
    ][index],

    category: "Ốc, Vít, Bu Loong",

    // ví dụ sửa lại phần address trong _data/suppliers.ts

address: [
  "25A An Phú Đông 25, P. An Phú Đông, Q.12, TP. Hồ Chí Minh",
  "Lô B2-14, KCN Sóng Thần 2, Dĩ An, Bình Dương",
  "Số 88 Nguyễn Ái Quốc, P. Tân Biên, TP. Biên Hòa, Đồng Nai",
  "12 Ngõ 168 Nguyễn Xiển, Q. Thanh Xuân, Hà Nội",
  "289 Đường Hùng Vương, Q. Hồng Bàng, Hải Phòng",
  "99 Nguyễn Hữu Thọ, Q. Hải Châu, TP. Đà Nẵng",
  "Lô C5, KCN Đức Hòa 1, Đức Hòa, Long An",
  "35 VSIP Bắc Ninh, P. Phù Chẩn, TP. Từ Sơn, Bắc Ninh",
  "12 Trần Phú, TP. Hạ Long, Quảng Ninh",
  "Lô A12 KCN Phố Nối A, Mỹ Hào, Hưng Yên",
  "102 Nguyễn Tất Thành, TP. Nha Trang, Khánh Hòa",
  "55 Lê Duẩn, TP. Pleiku, Gia Lai",
  "88 Bà Triệu, TP. Thanh Hóa, Thanh Hóa",
  "29 Điện Biên, TP. Nam Định, Nam Định",
  "65 Nguyễn Văn Cừ, Q. Ninh Kiều, TP. Cần Thơ",
  "15 Quốc Lộ 51, P. Phú Mỹ, Bà Rịa - Vũng Tàu",
  "168 Cách Mạng Tháng 8, TP. Tây Ninh, Tây Ninh",
  "45 Trần Hưng Đạo, TP. Long Xuyên, An Giang",
  "120 Tôn Đức Thắng, TP. Phan Thiết, Bình Thuận",
  "75 Nguyễn Thái Học, TP. Quy Nhơn, Bình Định",
][index],

    phone: `09${Math.floor(
      10000000 + Math.random() * 90000000
    )}`,

    hotline: `09${Math.floor(
      10000000 + Math.random() * 90000000
    )}`,

    website: "www.fastener.vn",

    /* COVER IMAGE */
    logo:
      companyImages[
        index % companyImages.length
      ],

    sponsor: index % 4 === 0,

    verified: true,

    description: [
      "Chuyên sản xuất bulong cường lực tiêu chuẩn quốc tế",
      "Gia công ốc vít theo yêu cầu bản vẽ kỹ thuật",
      "Nhập khẩu và phân phối inox 304, 316",
    ],

    standards: [
      "ASTM A193",
      "DIN 933",
      "ISO 4014",
      "JIS F10T",
    ],

    commitment:
      "Đúng tiêu chuẩn kỹ thuật - Giá cạnh tranh - Giao hàng toàn quốc",

    /* GALLERY */
    gallery: [
      galleryImages[
        index % galleryImages.length
      ],

      galleryImages[
        (index + 1) % galleryImages.length
      ],

      galleryImages[
        (index + 2) % galleryImages.length
      ],

      galleryImages[
        (index + 3) % galleryImages.length
      ],
    ],
  })),
];