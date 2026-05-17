export default function ShopeeMarketingArticlePage() {
  const latestPosts = [
    "Supply Chain Case: Case Interview – Quy trình & bước giải quyết cùng Case practice demo từ Bain",
    "Chiến lược vận hành và tăng doanh số Shopee mà Marketer cần biết (Phần 1)",
    "Chiến lược Digital Marketing cho doanh nghiệp B2B",
    "Brand Growth Model là gì? Ứng dụng Brand Growth Model trong việc xây dựng kế hoạch Marketing",
    "AI đang tác động như thế nào đến Co‑Market của doanh nghiệp như thế nào?",
    "16 ưu tiên của Digital Marketing trong kỷ nguyên AI như thế nào?",
    "Thuật toán Threads phân phối nội dung dựa trên tiêu chí gì?",
  ];

  const tags = [
    "agency",
    "branding",
    "brand marketing",
    "Business Case",
    "Case Interview",
    "chiến lược",
    "chuyển đổi số",
    "Company Profile",
    "Consumer Psychology",
  ];

  return (
    <div className="min-h-screen bg-[#e9ecef] py-6 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* MAIN CONTENT */}
          <main className="overflow-hidden rounded-sm bg-white shadow-sm">
            <div className="p-5 sm:p-8">
              {/* SOCIAL */}
              <div className="mb-6 flex items-center gap-3">
                <button className="flex items-center gap-2 rounded-full bg-[#3b5998] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90">
                  <span>f</span>
                  Share
                </button>

                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition hover:opacity-90">
                  t
                </button>

                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300">
                  -
                </button>
              </div>

              {/* TITLE */}
              <h1 className="max-w-4xl text-[30px] font-light leading-tight text-[#333] sm:text-[38px] lg:text-[46px]">
                Chiến lược vận hành và tăng doanh số Shopee mà Marketer cần biết (Phần 1)
              </h1>

              {/* META */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-wide">
                {[
                  "Chiến lược",
                  "Digital Marketing",
                  "Kiến thức",
                  "Trade Marketing",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-[#ec4a76] px-2 py-1 text-white"
                  >
                    {item}
                  </span>
                ))}

                <span className="ml-2 text-gray-400">02/04/2025</span>
                <span className="text-gray-400">614</span>
                <span className="text-gray-400">0 Shares</span>
              </div>

              {/* HERO IMAGE */}
              <div className="mt-7 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop"
                  alt="Shopee Marketing"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <article className="prose prose-gray mt-8 max-w-none prose-p:text-[15px] prose-p:leading-8 prose-h2:text-[34px] prose-h2:font-light prose-h2:text-[#333]">
                <p>
                  Bạn đang chạy Shopee, hay Shopee đang chạy bạn? Nhiều team
                  e‑commerce bỏ rất nhiều thời gian cho Ads, lên content mỗi
                  ngày, chạy chương trình ngắn hạn, nhưng margin liên tục mỏng.
                  Đến lúc nhìn lại vận hành – traffic và phân phối, để tăng
                  doanh số bền vững hơn.
                </p>

                <p>
                  Qua bài viết này, Tomorrow Marketers hi vọng có thể cung cấp
                  cho bạn góc nhìn thực chiến về cách xây dựng một hệ thống vận
                  hành Shopee thực sự bền vững, từ tối ưu gian hàng, chiến lược
                  traffic, đến tăng trưởng doanh số.
                </p>

                {/* INLINE BANNER */}
                <div className="my-8 overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                    alt="Banner"
                    className="w-full object-cover"
                  />
                </div>

                <h2>
                  Bối cảnh: Miếng Bánh Lớn Hơn, Cuộc Chiến Khốc Liệt Hơn
                </h2>

                <p>
                  Năm 2025 đánh dấu một bước ngoặt quan trọng trong thị trường
                  TMĐT Việt Nam. Tổng GMV (Gross Merchandise Value – tổng giá trị
                  hàng hóa giao dịch trên môi trường trực tuyến) tiếp tục tăng
                  mạnh, trong khi áp lực cạnh tranh cũng leo thang.
                </p>

                <p>
                  TikTok Shop, Lazada và Tiki đều tăng trưởng mạnh, buộc các
                  nhà bán hàng phải tối ưu không chỉ marketing mà còn toàn bộ
                  vận hành phía sau.
                </p>

                {/* CHART IMAGE */}
                <div className="my-10 overflow-hidden rounded-sm border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
                    alt="Data chart"
                    className="w-full object-cover"
                  />
                </div>

                <p>
                  Điều này tạo ra áp lực rất lớn cho các doanh nghiệp vừa và
                  nhỏ. Nếu không có chiến lược vận hành bài bản, việc scale ads
                  chỉ khiến chi phí tăng nhanh hơn lợi nhuận.
                </p>
              </article>
            </div>
          </main>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* SEARCH */}
            <div className="rounded-sm bg-white p-5 shadow-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Text search..."
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-5 pr-12 text-sm outline-none transition focus:border-pink-400"
                />

                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </button>
              </div>
            </div>

            {/* ADVERTISEMENT */}
            <div className="overflow-hidden rounded-sm bg-white p-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                alt="Ads"
                className="w-full object-cover"
              />
            </div>

            {/* LATEST POSTS */}
            <div className="rounded-sm bg-white p-5 shadow-sm">
              <div className="mb-5 border-b border-gray-200 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-[2px] text-gray-700">
                  Bài viết mới nhất
                </h3>
              </div>

              <div className="space-y-4">
                {latestPosts.map((post) => (
                  <a
                    key={post}
                    href="#"
                    className="block border-b border-gray-100 pb-4 text-[14px] leading-6 text-gray-600 transition hover:text-pink-500"
                  >
                    {post}
                  </a>
                ))}
              </div>
            </div>

            {/* SECOND BANNER */}
            <div className="overflow-hidden rounded-sm bg-white p-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Marketing"
                className="w-full object-cover"
              />
            </div>

            {/* TAGS */}
            <div className="rounded-sm bg-white p-5 shadow-sm">
              <div className="mb-5 border-b border-gray-200 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-[2px] text-gray-700">
                  Tag
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-600 transition hover:border-pink-400 hover:text-pink-500"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
