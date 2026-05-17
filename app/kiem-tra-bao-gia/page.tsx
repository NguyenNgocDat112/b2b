"use client";

import Image from "next/image";
import {
  BadgePercent,
  CheckCircle2,
  X,
  Info,
} from "lucide-react";
import FaqMembership from "./_components/FAQMember"
import { plans } from "./_data/pricing";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#fff]">
      {/* TOP BANNER */}
      <div className="bg-[#fff] py-3">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row">
          <p className="text-sm font-semibold text-white md:text-lg">
            Tiết kiệm đến 30% phí Đẩy tin khi mua gói
          </p>

      
        </div>
      </div>

      {/* CONTAINER */}
      <div className="mx-auto max-w-[1850px] px-4 py-4 lg:px-8">
        {/* TABS */}
        <div className="flex flex-wrap items-center gap-10 border-b border-gray-200">
          <button className="border-b-2 border-red-500 p-4 pb-3 text-[24px] font-bold text-[#1f2937]">
            Khảo sát vật tư
          </button>

          <button className="p-4 pb-3 text-[24px] font-semibold text-[#9ca3af]">
            Khảo sát dự án
          </button>
        </div>

        {/* HERO */}
        <section className="relative mt-4">
          {/* RED BANNER */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#8f0a08]">
            {/* BACKGROUND BUILDINGS */}
            <div className="absolute inset-0 hidden xl:block">
              <div className="absolute bottom-0 right-10 flex items-end gap-4 opacity-70">
                <div className="h-[180px] w-[70px] bg-[#ff8a84]" />
                <div className="h-[280px] w-[80px] bg-[#ff746d]" />
                <div className="h-[150px] w-[65px] bg-[#dd0000]" />
                <div className="h-[240px] w-[80px] bg-[#ff4f46]" />
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-10 grid grid-cols-1 gap-8 px-5 pb-44 pt-10 lg:px-10 xl:grid-cols-2">
              {/* LEFT */}
              <div className="max-w-4xl">
                <h1 className="text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  Gói Hội viên - Tiết kiệm đến 39%
                </h1>

                {/* NEW BADGE */}
                <div className="mt-6 inline-flex items-center gap-3 rounded-sm bg-white p-2 shadow-lg">
                  <span className="rounded-sm bg-[#d90000] px-3 py-2 text-xs font-bold text-white">
                    MỚI
                  </span>

                  <span className="text-sm font-semibold text-[#1f2937] md:text-base">
                    Ra mắt lựa chọn - Gói 1 tháng
                  </span>
                </div>

                {/* FEATURES */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-start gap-3">
                    <BadgePercent className="mt-1 h-5 w-5 shrink-0 text-white" />

                    <p className="text-sm leading-7 text-white/90 md:text-base">
                      Có nhiều lựa chọn phù hợp với ngân sách đăng tin,
                      giúp tối ưu hiệu quả bán hàng
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <BadgePercent className="mt-1 h-5 w-5 shrink-0 text-white" />

                    <p className="text-sm leading-7 text-white/90 md:text-base">
                      Voucher giảm giá linh hoạt, phù hợp với nhiều lựa
                      chọn đăng tin
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <BadgePercent className="mt-1 h-5 w-5 shrink-0 text-white" />

                    <p className="text-sm leading-7 text-white/90 md:text-base">
                      Sử dụng các tính năng tiện ích nâng cao dành riêng
                      cho Hội viên
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-[#ffb6b6] md:text-base">
                  Giá của các gói bên dưới chưa bao gồm 8% VAT.
                </p>
              </div>

              {/* RIGHT */}
              <div className="hidden items-center justify-center xl:flex">
                <div className="rotate-[-8deg] rounded-[24px] bg-[#2b2b2b] px-10 py-8 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00b4b8] text-lg font-bold text-white">
                      %
                    </div>

                    <div className="text-lg text-yellow-400">
                      ★ ★ ★
                    </div>
                  </div>

                  <h2 className="text-center text-6xl font-black text-white">
                    -39%
                  </h2>

                  <p className="mt-2 text-center text-base text-gray-300">
                    Chi phí đăng tin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== MEMBERSHIP CARDS ===== */}
          <div className="-mt-40 relative z-20 grid grid-cols-1 gap-5 px-2 md:grid-cols-2 xl:grid-cols-3 xl:px-8">
            {plans.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
              >
                {/* BADGE */}
                {item.badge && (
                  <div className="absolute left-5 top-0 z-30 rounded-b-2xl bg-[#f6b500] px-7 py-2 text-sm font-bold text-white shadow-md">
                    Bán chạy nhất
                  </div>
                )}

                {/* IMAGE */}
                <div className="relative h-[180px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="px-5 pb-4 pt-4">
                  <h3 className="text-xl font-bold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-700 md:text-base">
                    {item.desc}
                  </p>

                  {/* PRICE */}
                  <div className="mt-6">
                    <div className="flex flex-wrap items-end gap-2">
                      <span className="text-lg text-[#111827]">
                        từ
                      </span>

                      <span className="text-3xl font-extrabold leading-none text-[#111827]">
                        {item.price}
                      </span>

                      <span className=" text-lg font-semibold text-[#111827]">
                        đ/tháng
                      </span>

                      {item.discount && (
                        <span className="pb-1 text-xl font-bold text-[#ef4444]">
                          ({item.discount})
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs font-medium text-[#00a7b7] md:text-base">
                      Tiết kiệm đến {item.save}
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button className="rounded-lg bg-[#ea3b2e] py-3 text-sm font-bold text-white transition hover:bg-[#d93125] md:text-sm">
                      Mua gói 1 tháng
                    </button>

                    <button className="rounded-lg border border-[#ea3b2e] bg-white py-3 text-sm font-bold text-[#ea3b2e] transition hover:bg-red-50 md:text-sm">
                      Mua ngay

                    </button>
                  </div>

                  {/* VOUCHERS */}
                  <div className="mt-4 rounded-xl bg-[#fff5f5]/70 p-4">
                    <div className="mb-4 flex items-center gap-2">
                      <h4 className="text-lg font-bold text-[#111827]">
                      Lợi ích kinh tế
                      </h4>

                      <Info className="h-4 w-4 text-gray-500" />
                    </div>

                    <div className="space-y-2">
                      {item.vouchers.map((voucher, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ea3b2e] text-white">
                            <BadgePercent size={12} />
                          </div>

                          <p className="text-sm leading-6 text-[#111827] md:text-sm">
                            {voucher}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-4">
                    <h4 className="mb-3 text-xl font-bold text-[#111827]">
                      Tiện ích
                    </h4>

                    <div className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3"
                        >
                          {feature.active ? (
                            <CheckCircle2 className="h-5 w-5 text-[#ea3b2e]" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400" />
                          )}

                          <span className="text-sm text-[#111827] md:text-base">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <FaqMembership/>
    </main>
  );
}