// components/suppliers/SupplierSidebar.tsx

"use client";

import {
  BriefcaseBusiness,
  Blocks,
  MapPinned,
  Layers3,
  Tags,
} from "lucide-react";

interface Category {
  title: string;
  count: number;
}

interface Props {
  categories: Category[];
  cities: string[];
  relatedIndustries: Category[];
  tags: string[];
}

export default function SupplierSidebar({
  categories,
  cities,
  relatedIndustries,
  tags,
}: Props) {
  return (
    <aside className="w-full rounded-lg border border-neutral-200 bg-white p-6 ">
      {/* ===== NGÀNH NGHỀ ===== */}
      <div className="group border-b border-neutral-100 pb-4 transition duration-300 ">
        <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-neutral-900">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-rose-50
              text-rose-600
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <BriefcaseBusiness size={20} />
          </div>

          <span>Ngành nghề</span>
        </h3>

        <div className="">
          <p className="text-base font-medium">
            Ốc, Vít, Bù Loong
            <span className="ml-1 text-neutral-400">
              (778)
            </span>
          </p>
        </div>
      </div>

      {/* ===== NHÓM NGÀNH NGHỀ ===== */}
      <div className="group border-b border-neutral-100 py-4 transition duration-300 ">
        <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-neutral-900">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-sky-50
              text-sky-600
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <Blocks size={20} />
          </div>

          <span>Nhóm ngành nghề</span>
        </h3>

        <div className="space-y-4">
          {categories.map((item, index) => (
            <button
              key={index}
              className="group/item block w-full text-left"
            >
              <span className="text-[15px] leading-7 text-neutral-700 transition group-hover/item:text-sky-600">
                {item.title}
              </span>

              <span className="ml-1 text-sm text-neutral-400">
                ({item.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== TỈNH THÀNH ===== */}
      <div className="group border-b border-neutral-100 py-6 transition duration-300 ">
        <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-neutral-900">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-emerald-50
              text-emerald-600
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <MapPinned size={20} />
          </div>

          <span>Thành phố</span>
        </h3>

        <div className="flex flex-wrap gap-2">
          {cities.map((city, index) => (
            <button
              key={index}
              className="
                rounded-full
                border
                border-neutral-200
                bg-white
                px-3
                py-2
                text-sm
                text-neutral-700
                transition
                hover:border-sky-500
                hover:bg-sky-50
                hover:text-sky-700
              "
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* ===== NGÀNH XEM THÊM ===== */}
      <div className="group border-b border-neutral-100 py-6 transition duration-300 ">
        <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-neutral-900">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-violet-50
              text-violet-600
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <Layers3 size={20} />
          </div>

          <span>Ngành xem thêm</span>
        </h3>

        <div className="space-y-4">
          {relatedIndustries.map((item, index) => (
            <button
              key={index}
              className="group/item block w-full text-left"
            >
              <span className="text-[15px] leading-7 text-neutral-700 transition group-hover/item:text-sky-600">
                {item.title}
              </span>

              <span className="ml-1 text-sm text-neutral-400">
                ({item.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== TAGS ===== */}
      <div className="group pt-6 transition duration-300 ">
        <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-neutral-900">
          <div
            className="
              flex h-10 w-10 justify-center
              rounded-xl
              bg-amber-50
              text-amber-600
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <Tags size={20} />
          </div>

          <span>Tag ngành nghề</span>
        </h3>

        <div className="flex flex-wrap  gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="
                text-sm
                text-neutral-700
              "
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}