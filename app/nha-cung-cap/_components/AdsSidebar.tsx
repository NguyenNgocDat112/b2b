// _components/AdsSidebar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const ads = [
  {
    id: 1,
    title: "Đăng Tin Nhà Cung Cấp VIP",
    desc: "Hiển thị TOP đầu ngành nghề, tăng tiếp cận khách hàng & dự án lớn.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4?q=80&w=1200&auto=format&fit=crop",
    button: "Đăng ký ngay",
    href: "#",
    badge: "TOP HOT",
  },
  {
    id: 2,
    title: "Quảng Cáo Banner Doanh Nghiệp",
    desc: "Tăng nhận diện thương hiệu với banner nổi bật toàn hệ thống.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    button: "Xem bảng giá",
    href: "#",
    badge: "SALE -30%",
  },
];

export default function AdsSidebar() {
  return (
    <aside className="space-y-5">
      {ads.map((ad, index) => (
        <motion.div
          key={ad.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
        >
          {/* IMAGE */}
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={ad.image}
              alt={ad.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* badge */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold text-white shadow-lg">
              <BadgeCheck className="h-3.5 w-3.5" />
              {ad.badge}
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-4 p-5">
            <div>
              <h3 className="text-lg font-extrabold leading-tight text-neutral-900 transition-colors group-hover:text-red-600">
                {ad.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {ad.desc}
              </p>
            </div>

            {/* BUTTON */}
            <Link
              href={ad.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-black"
            >
              {ad.button}

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </aside>
  );
}