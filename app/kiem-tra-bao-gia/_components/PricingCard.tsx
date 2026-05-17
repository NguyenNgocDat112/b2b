"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { PricingTier } from "../_type/pricing";

interface Props {
  tier: PricingTier;
  index: number;
}

export default function PricingCard({ tier, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`relative bg-white rounded-[8px] border overflow-hidden shadow-sm transition-all duration-300 ${
        tier.isBestSeller
          ? "border-[#f59e0b]"
          : "border-gray-200 hover:border-[#e53935]"
      }`}
    >
      {tier.isBestSeller && (
        <div className="bg-[#fff] text-white text-center py-1 text-[11px] font-bold">
          GÓI PHỔ BIẾN
        </div>
      )}

      <div className="p-5">
        {/* image */}
        <div className="relative h-[120px] rounded-[8px] overflow-hidden mb-4">
          <Image
            src={tier.illustration}
            alt={tier.name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* title */}
        <div className="mb-5">
          <h3 className="text-[20px] font-bold text-gray-900">
            {tier.name}
          </h3>

          <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
            {tier.description}
          </p>
        </div>

        {/* price */}
        <div className="mb-6">
          <div className="flex items-end gap-2">
            <span className="text-[30px] font-bold text-[#e53935]">
              {tier.discountPrice?.toLocaleString("vi-VN")}đ
            </span>

            <span className="text-[13px] text-gray-400 mb-1">
              / tháng
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="line-through text-gray-400 text-[13px]">
              {tier.price.toLocaleString("vi-VN")}đ
            </span>

            <span className="bg-red-50 text-[#e53935] px-2 py-0.5 rounded text-[11px] font-bold">
              -{tier.discountPercent}%
            </span>
          </div>

          <p className="text-[12px] text-[#0f766e] mt-2 font-medium">
            Tiết kiệm {tier.savings}
          </p>
        </div>

        {/* vouchers */}
        <div className="space-y-2 mb-6">
          {tier.vouchers.map((voucher, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-[13px]"
            >
              <div className="w-5 h-5 rounded bg-red-50 text-[#e53935] flex items-center justify-center font-bold text-[10px]">
                {voucher.count}
              </div>

              <span className="text-gray-700">
                {voucher.title}
              </span>
            </div>
          ))}
        </div>

        {/* features */}
        <div className="border-t border-gray-100 pt-5 space-y-3">
          {tier.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3"
            >
              {feature.enabled ? (
                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-green-600" />
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <X className="w-2.5 h-2.5 text-gray-400" />
                </div>
              )}

              <span
                className={`text-[13px] ${
                  feature.enabled
                    ? "text-gray-700"
                    : "text-gray-400"
                }`}
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        {/* actions */}
        <div className="grid grid-cols-2 gap-3 mt-7">
          <button className="h-[42px] rounded-[8px] bg-[#e53935] text-white text-[13px] font-bold hover:bg-black transition-all">
            Mua ngay
          </button>

          <button className="h-[42px] rounded-[8px] border border-gray-200 text-[13px] font-bold hover:border-[#e53935] hover:text-[#e53935] transition-all">
            Tư vấn
          </button>
        </div>
      </div>
    </motion.div>
  );
}