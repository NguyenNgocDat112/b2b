
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";


export default function ArticleCard({
  image,
  title,
  tags,
}: {
  image: string;
  title: string;
  tags: string[];
}) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[6px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="pt-4">
        <h3 className="line-clamp-4 text-[18px] leading-[1.4] text-[#3a3a3a] transition-colors duration-300 group-hover:text-[#d92d77] sm:text-[18px]">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold uppercase tracking-[2px] text-[#d92d77]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}