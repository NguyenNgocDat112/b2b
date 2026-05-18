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
            Khảo Sát Dự Án
          </button>
        </div>

        {/* HERO */}
        <section className="relative mt-4">
          {/* RED BANNER */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#8f0a08]">
            {/* HERO CONTENT */}
            <div className="relative z-10 gap-8 px-5 pb-44 pt-10 ">
              {/* LEFT */}
              <div className="max-w-4xl w-full mx-auto flex items-center justify-center">
                <h1 className="text-4xl font-bold leading-tight flex items-center justify-center text-center text-white ">
                 Bảng Giá Khảo Sát Vật Tư
                </h1>
              </div>
              {/* RIGHT */}
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