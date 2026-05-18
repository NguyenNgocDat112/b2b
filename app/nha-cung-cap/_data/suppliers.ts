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




export const mineralCompanies = [
  {
    id: 1,
    slug: "voi-dai-son-thinh",
    name: "Vôi Đại Sơn Thịnh - Công Ty TNHH Đại Sơn Thịnh",
    location: "Hà Nam / Đồng Nai",
    address:
      "Thị Trấn Kiện Khê, Huyện Thanh Liêm, Hà Nam; KCN Nhơn Trạch I, Huyện Nhơn Trạch, Đồng Nai",
    products: ["Bột đá", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập hàm",
      "Máy nghiền bột",
      "Lò nung vôi",
      "Máy tôi vôi",
      "Sàng rung",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: "084 900 8618",
    email: "thuyantt45@gmail.com",
    status: "Đang hoạt động",
    scale: "Trung bình",
    capacity: "3.000–8.000 tấn/tháng",
  },

  {
    id: 2,
    slug: "minh-duc-saigon",
    name: "Minh Duc Saigon Co., Ltd",
    location: "Hải Phòng / TP.HCM",
    address:
      "Khu công nghiệp phía Bắc Hải Phòng; đầu mối tại TP.HCM trên listing",
    products: ["Đá vôi", "Bột đá", "Vôi"],
    type: "Nhà sản xuất, Công ty thương mại",
    machinery: [
      "Máy nghiền bột",
      "Thiết bị phân ly",
      "Máy đóng bao",
      "Lò nung vôi",
      "Máy tôi vôi",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: null,
    email: null,
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "12.000–18.000 tấn/tháng",
  },

  {
    id: 3,
    slug: "nhat-thang-vnt-7",
    name: "Công Ty Cổ Phần Nhật Thăng VNT 7",
    location: "Nghệ An / Hà Nội",
    address:
      "Lô C, KCN Nam Cấm, Nghi Lộc, Nghệ An; Trụ sở: 201 Minh Khai, Hai Bà Trưng, Hà Nội",
    products: ["Bột đá"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy nghiền bột",
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Máy phủ axit stearic",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: null,
    email: null,
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "10.000–20.000 tấn/tháng",
  },

  {
    id: 4,
    slug: "vgem",
    name: "Công Ty CP Khoáng Sản Năng Lượng Xanh Việt Nam (VGEM)",
    location: "Yên Bái",
    address:
      "Yên Bái (địa chỉ chi tiết chưa thấy đầy đủ trong snippet mở)",
    products: ["Bột đá", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy nghiền bột",
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Máy phủ axit stearic",
      "Máy đóng bao",
    ],
    certification: "ISO 9001:2000",
    ownership: "Doanh nghiệp trong nước",
    phone: "812828888",
    email: "business@vgem.vn",
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "20.000 tấn/tháng",
  },

  {
    id: 5,
    slug: "nhat-viet-minerals",
    name: "Nhat Viet Minerals Company Limited",
    location: "Hà Nội / miền Bắc",
    address: "Hà Nội / miền Bắc",
    products: ["Đá vôi", "Bột đá", "Dolomite"],
    type: "Công ty thương mại",
    machinery: ["Máy nghiền bột", "Sàng rung", "Máy đóng bao"],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: null,
    email: null,
    status: "Đang hoạt động",
    scale: "Vừa",
    capacity: "1.000–4.000 tấn/tháng",
  },

  {
    id: 6,
    slug: "ha-nam-ninh",
    name:
      "Chi Nhánh - Công Ty TNHH Sản Xuất Và Thương Mại Hà Nam Ninh",
    location: "Hà Nam",
    address: "Thanh Sơn, Kim Bảng, Hà Nam",
    products: ["Đá vôi", "Bột đá", "Dolomite", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập hàm",
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Sàng rung",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: "0913 962 698",
    email: "info.hanamninhcompany@gmail.com",
    status: "Đang hoạt động",
    scale: "Vừa - Trung bình",
    capacity: "3.000–8.000 tấn/tháng",
  },

  {
    id: 7,
    slug: "phu-thanh-dat-ha-nam",
    name: "Chi Nhánh Hà Nam - Công Ty TNHH Phú Thành Đạt",
    location: "Hà Nam",
    address: "Chi nhánh Hà Nam",
    products: ["Đá vôi", "Bột đá", "Dolomite", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập hàm",
      "Máy nghiền bột",
      "Sàng rung",
      "Máy đóng bao",
      "Xe container nội bộ",
    ],
    certification: "ISO 9001:2000",
    ownership: "Doanh nghiệp trong nước",
    phone: "0977 076 676; 0936 725 164",
    email: "lienhe@phuthanhdat.com",
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "15.000–20.000 tấn/tháng",
  },

  {
    id: 8,
    slug: "khoang-san-gia-thanh",
    name: "Công Ty CP Khoáng Sản Gia Thanh",
    location: "Hà Nam",
    address: "KCN Thi Sơn, H. Kim Bảng, Hà Nam",
    products: ["Bột đá"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy nghiền bột",
      "Sàng rung",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: "912347640",
    email: "congtycpksgiathanh@gmail.com",
    status: "Đang hoạt động",
    scale: "Vừa",
    capacity: "2.000–5.000 tấn/tháng",
  },

  {
    id: 9,
    slug: "thien-son-minerals",
    name: "Công Ty CP Xây Dựng Và Khoáng Sản Thiên Sơn",
    location: "Hà Nam",
    address:
      "Cụm CN Thi Sơn, Xã Thi Sơn, Huyện Kim Bảng, Hà Nam",
    products: ["Đá vôi", "Bột đá", "Dolomite", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập hàm",
      "Máy nghiền mịn",
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Sàng rung",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: "0973 571 886; 0918 602 186",
    email: "botdathienson@gmail.com",
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "80.000–150.000 tấn/tháng",
  },

  {
    id: 10,
    slug: "son-ha-18",
    name: "Công Ty TNHH Khoáng Sản Sơn Hà 18",
    location: "Hà Nam",
    address: "Núi Mâm Xôi, X. Thanh Sơn, H. Kim Bảng, Hà Nam",
    products: ["Đá vôi", "Bột đá", "Dolomite", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập hàm",
      "Máy nghiền bột",
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Sàng rung",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: "093 1717 698; 093 2222 698",
    email: "Shcgroup.vn@gmail.com",
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "20.000 tấn/tháng",
  },

  {
    id: 11,
    slug: "dlh-minerals",
    name: "DLH MINERALS Joint Stock Company",
    location: "Hải Phòng",
    address:
      "Room 901, Viet Uc Building, No. 2, Lot 16D, Trung Hanh 5 Street, Dang Lam Ward, Hai An District, Hai Phong City",
    products: ["Bột đá", "Dolomite", "Vôi"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập đá",
      "Máy nghiền bột",
      "Lò nung vôi",
      "Máy tôi vôi",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: null,
    email: "doc@dlhvn.com",
    status: "Đang hoạt động",
    scale: "Trung bình",
    capacity: "3.000–8.000 tấn/tháng",
  },

  {
    id: 12,
    slug: "asia-mineral-amc",
    name: "Asia Mineral Joint Stock Company (AMC)",
    location: "Nghệ An",
    address: "Nghệ An",
    products: ["Bột đá"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Máy phủ axit stearic",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: null,
    email: null,
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "20.000 tấn/tháng",
  },

  {
    id: 13,
    slug: "nghe-an-mineral",
    name: "Nghe An Mineral Joint Stock Company",
    location: "Nghệ An",
    address: "Nghệ An",
    products: ["Bột đá"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy đập hàm",
      "Máy nghiền bột",
      "Thiết bị phân ly",
      "Sàng rung",
      "Máy đóng bao",
    ],
    certification: "ISO 9001:2015",
    ownership: "Doanh nghiệp trong nước",
    phone: "919044868",
    email: "xuanhuy@namco.vn",
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "10.000–20.000 tấn/tháng",
  },

  {
    id: 14,
    slug: "mong-son",
    name: "Mong Son Joint Stock Company",
    location: "Yên Bái",
    address:
      "Group 18, Town Yen Binh, Yen Binh District, Yen Bai",
    products: ["Bột đá"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy nghiền bột",
      "Thiết bị phân ly",
      "Máy đóng bao",
    ],
    certification: "ISO 9001:2008",
    ownership: "Doanh nghiệp trong nước",
    phone: "0915 217 884",
    email: "sales@mongson.vn",
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "10.000–20.000 tấn/tháng",
  },

  {
    id: 15,
    slug: "stone-base-vietnam",
    name: "Stone Base Vietnam JSC",
    location: "Yên Bái",
    address: "Khu vực mỏ Lục Yên, Yên Bái",
    products: ["Bột đá"],
    type: "Nhà sản xuất",
    machinery: [
      "Máy nghiền siêu mịn",
      "Thiết bị phân ly",
      "Máy phủ axit stearic",
      "Máy đóng bao",
    ],
    certification: null,
    ownership: "Doanh nghiệp trong nước",
    phone: null,
    email: null,
    status: "Đang hoạt động",
    scale: "Lớn",
    capacity: "10.000–20.000 tấn/tháng",
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
      "Bulong cường lực tiêu chuẩn quốc tế",
      "Ốc vít theo yêu cầu bản vẽ kỹ thuật",
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