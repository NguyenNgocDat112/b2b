"use client";

import Link from "next/link";
import {
  BarChart3,
  Coins,
  BookOpen,
  Building2,
  Users,
  Medal,
} from "lucide-react";

const utilityItems = [
  {
    title: "Kiểm Tra Báo Giá",
    icon: BarChart3,
    href: "#",
  },
  {
    title: "Đăng Ký Đối Tác",
    icon: Coins,
    href: "#",
    bordered: true,
  },
  {
    title: "Thư Viện Vật Liệu",
    icon: BookOpen,
    href: "#",
  },
];

const brokerItems = [
  {
    title: "Gói Hội Viên",
    icon: Medal,
    href: "#",
    badge: "Mới",
    gold: true,
  },
  {
    title: "Tin Tức",
    icon: Building2,
    href: "#",
    bordered: true,
  },
  {
    title: "Việc Làm",
    icon: Users,
    href: "#",
  },
];

type ItemProps = {
  title: string;
  href: string;
  bordered?: boolean;
  badge?: string;
  gold?: boolean;
  icon: React.ElementType;
};

function ServiceItem({
  title,
  href,
  bordered,
  badge,
  gold,
  icon: Icon,
}: ItemProps) {
  return (
    <Link
      href={href}
      className={`
        group relative flex flex-col items-center justify-center text-center
        px-2 py-1 transition-all duration-300
        ${bordered ? "border-x border-gray-100" : ""}
      `}
    >
      {/* BADGE */}
      {badge && (
        <div className="absolute right-1/2 top-0 z-10 translate-x-6 -translate-y-2">
          <span className="rounded-full border border-white bg-[#e03c31] px-1.5 py-0.5 text-[9px] font-bold text-white">
            {badge}
          </span>
        </div>
      )}

      {/* ICON */}
      <div className="relative mb-2 flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
        <Icon
          strokeWidth={1.5}
          className={`h-8 w-8 ${
            gold ? "text-[#d4af37]" : "text-gray-800"
          }`}
        />

        {gold && (
          <span className="absolute -mt-1 pt-0.5 text-[10px] font-bold text-[#d4af37]">
            TỐT
          </span>
        )}
      </div>

      {/* TEXT */}
      <span className="text-[13px] font-medium leading-snug text-gray-700 transition-colors group-hover:text-black">
        {title}
      </span>
    </Link>
  );
}

type CardProps = {
  title: string;
  viewMore?: boolean;
  items: ItemProps[];
};

function ServiceCard({ title, viewMore, items }: CardProps) {
  return (
    <div
      className="
        flex-1 rounded-xl border border-gray-100 bg-white
        px-5 pt-4 pb-6
        shadow-[0_2px_8px_rgba(0,0,0,0.04)]
        transition-all duration-300
        hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]
      "
    >
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-[17px] font-semibold text-gray-900">{title}</h2>

        {viewMore && (
          <Link
            href="#"
            className="text-[14px] font-medium text-gray-600 transition-colors hover:text-black"
          >
            Xem thêm
          </Link>
        )}
      </div>

      {/* DIVIDER */}
      <div className="mb-6 h-px w-full bg-gray-100" />

      {/* CONTENT */}
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <ServiceItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function UtilitiesSection() {
  return (
    <section className="mx-auto max-w-[1480px] px-4 pt-1 pb-6 font-sans md:pb-8">
      <div className="flex flex-col gap-4 lg:flex-row xl:gap-5">
        <ServiceCard
          title="Kiểm Tra Báo Giá"
          items={utilityItems}
        />

        <ServiceCard
          title="Dịch vụ dành cho môi giới"
          viewMore
          items={brokerItems}
        />
      </div>
    </section>
  );
}