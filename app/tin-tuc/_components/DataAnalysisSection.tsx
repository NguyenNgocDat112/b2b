"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { articles } from "../data";
import ArticleCard from "./ArticleCard";


export default function DataAnalysisSection() {
  return (
    <section className="w-full bg-[#fff] py-10 lg:py-12 ">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-10">
        {/* TITLE */}
        <div className="mb-6 text-center">
          <h2 className="text-[32px] font-light tracking-tight text-[#2b2b2b]">
            Data Analysis
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              tags={article.tags}
            />
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex h-[58px] w-full max-w-[1380px] cursor-pointer items-center justify-center gap-2 rounded-full border border-[#d8d8d8] bg-white px-6 text-[13px] font-medium uppercase tracking-[3px] text-[#6b6b6b] transition-all duration-300 hover:border-[#d92d77] hover:text-[#d92d77]"
          >
            MORE
            <ChevronDown size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}