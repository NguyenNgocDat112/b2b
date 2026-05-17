export const plans = [
  {
    title: "Khảo Sát Vật Tư Free",
    desc: "Dành cho cá nhân hoặc đội thi công cần tham khảo nhanh vật tư cơ bản",
    price: "Miễn Phí",
    save: "Trải nghiệm miễn phí",
    discount: "",
    badge: false,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",

    vouchers: [
      "Tra cứu giá vật tư cơ bản miễn phí",
      "Xem nhanh mức giá tham khảo trên thị trường",
      "So sánh nhiều nhà cung cấp phổ biến",
      "Kiểm tra nhanh đơn vị tính và quy cách vật tư",
      "Phù hợp để khảo sát sơ bộ trước khi mua",
    ],

    features: [
      { name: "Khảo giá cơ bản", active: true },
      { name: "So sánh giá nhanh", active: true },
      { name: "Lưu lịch sử khảo giá", active: false },
      { name: "Báo cáo chuyên sâu", active: false },
    ],
  },

  {
    title: "Nguyên Vật Liệu",
    desc: "Miễn Phí 200 Lượt/Tháng",
    price: "200 Lượt",
    save: "Tiết kiệm thời gian và chi phí khảo giá",
    discount: "",
    badge: true,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",

    vouchers: [
      "Tiết kiệm thời gian khảo giá và tìm nhà cung cấp",
      "Nắm được giá vật liệu so với trên thị trường có hợp lý không",
      "Tránh nhầm quy cách, sai đơn vị tính, sai khối lượng",
      "Tìm nguồn mua gần công trình, dễ giao, có hàng sẵn",
      "Kiểm tra MOQ, VAT, vận chuyển, bốc xếp, giao tận công trình",
      "Tránh phát sinh thêm nhiều khoản phụ phí không đáng có",
      "Có cơ sở để chốt nhanh hoặc hỏi lại nhà cung cấp",
    ],

    features: [
      { name: "Khảo giá vật tư", active: true },
      { name: "So sánh nhà cung cấp", active: true },
      { name: "Kiểm tra vận chuyển", active: true },
      { name: "Báo cáo thị trường", active: true },
    ],
  },

  {
    title: "Sản Phẩm Hoàn Công",
    desc: "Miễn Phí 100 Lượt/Tháng",
    price: "100 Lượt",
    save: "Tối ưu chi phí hoàn thiện công trình",
    discount: "",
    badge: false,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",

    vouchers: [
      "Tiết kiệm thời gian tìm và so sánh sản phẩm",
      "So đúng sản phẩm cùng chất liệu, cùng cấu hình, cùng phân khúc",
      "Kiểm tra sản phẩm có hợp kích thước, không gian và nhu cầu sử dụng không",
      "Bóc rõ giá đã gồm phụ kiện, vận chuyển, lắp đặt, bảo hành chưa",
      "Kiểm tra độ bền, độ hoàn thiện, mép cạnh, bề mặt, phụ kiện",
      "Gợi ý option tương đương nếu mẫu đang chọn quá đắt",
      "Né chi phí phát sinh khi giao hàng, lên tầng, tháo dỡ, lắp đặt",
    ],

    features: [
      { name: "So sánh sản phẩm", active: true },
      { name: "Kiểm tra bảo hành", active: true },
      { name: "Đánh giá chất lượng", active: true },
      { name: "Tư vấn option tương đương", active: true },
    ],
  },
];


export const faqs = [
  {
    question: 'Gói Hội viên cung cấp các quyền lợi hàng tháng như thế nào?',
    answer:
      'Mỗi tháng hệ thống sẽ tự động cập nhật quyền lợi và voucher mới trực tiếp vào tài khoản của bạn.',
  },
  {
    question:
      'Sau khi đăng ký Gói Hội viên thành công, các voucher đăng tin/đẩy tin sẽ được lưu ở đâu?',
    answer:
      'Sau khi đăng ký Gói Hội viên, voucher đăng tin/đẩy tin sẽ được lưu tại mục “Khuyến mãi” trong tài khoản đăng tin của bạn.',
  },
  {
    question: 'Tôi có thể quản lý các quyền lợi trong Gói Hội viên đã mua như thế nào?',
    answer:
      'Bạn có thể theo dõi và quản lý toàn bộ quyền lợi trong mục “Quản lý Gói Hội viên” trên tài khoản cá nhân.',
  },
  {
    question: 'Gói Hội viên của tôi sẽ gia hạn như thế nào?',
    answer:
      'Hệ thống sẽ tự động gia hạn theo chu kỳ thanh toán mà bạn đã đăng ký trước đó.',
  },
  {
    question: 'Tôi có thể hủy Gói Hội viên nếu không cần nữa không?',
    answer:
      'Bạn có thể hủy gia hạn bất kỳ lúc nào trong phần cài đặt tài khoản.',
  },
  {
    question: 'Tôi có thể mua bao nhiêu Gói Hội viên trong một thời điểm?',
    answer:
      'Mỗi tài khoản chỉ có thể kích hoạt một Gói Hội viên tại một thời điểm.',
  },
  {
    question:
      'Nếu tôi hạ tin đăng đã sử dụng voucher Gói Hội viên, tôi có được hoàn lại voucher không?',
    answer:
      'Voucher đã sử dụng sẽ không được hoàn lại sau khi áp dụng cho tin đăng.',
  },
];