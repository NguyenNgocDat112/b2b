'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Search,
} from 'lucide-react';

import { posts, categories } from '../tin-tuc/data';

const POSTS_PER_PAGE = 12;

export default function NewsPage() {
  const [activeCategory, setActiveCategory] =
    useState('ALL');

  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  // LATEST POSTS
  const latestPosts = posts.slice(0, 6);

  // TAG COUNT
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    posts.forEach((post) => {
      post.tags.forEach((tag: string) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });

    return counts;
  }, []);

  // FILTER POSTS
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        activeCategory === 'ALL' ||
        post.tags.includes(activeCategory);

      const matchSearch = post.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  // PAGINATION
  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // CHANGE CATEGORY
  const handleCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5]/60">
      
      {/* HERO */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-[1380px] px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-5xl font-light tracking-wide text-white md:text-7xl"
          >
            Tin tức
          </motion.h1>
        </div>
      </section>

      {/* CATEGORY MENU */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1380px] px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 py-7">
            
            <button
              onClick={() => handleCategory('ALL')}
              className={`cursor-pointer text-[13px] tracking-[1px] transition md:text-[15px] ${
                activeCategory === 'ALL'
                  ? 'text-pink-600'
                  : 'text-neutral-700 hover:text-pink-600'
              }`}
            >
              ALL
            </button>

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategory(item)}
                className={`cursor-pointer text-[13px] tracking-[1px] transition md:text-[15px] ${
                  activeCategory === item
                    ? 'text-pink-600'
                    : 'text-neutral-700 hover:text-pink-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1380px] px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          
          {/* POSTS */}
          <div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group "
                >
                  <Link href={`/tin-tuc/${post.slug}`}>
                    
                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-[14px] bg-black">
                      
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* TOP BADGE */}
                      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-xl bg-white px-4 py-2 shadow-md">
                        <span className="text-[10px] font-bold tracking-[2px] text-pink-700">
                          BUILD MATERIALS
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="pt-5">
                      
                      <h2 className="line-clamp-3 text-[20px] font-light leading-[1.25] text-neutral-800 transition duration-300 group-hover:text-pink-600 md:text-[26px]">
                        {post.title}
                      </h2>

                      {/* META */}
                      <div className="mt-3 flex items-center gap-5 text-sm text-neutral-400">
                        
                        <span>{post.date}</span>

                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      {/* DESC */}
                      <p className="mt-1 line-clamp-2 text-[15px] leading-7 text-neutral-600">
                        {post.description}
                      </p>

                      {/* TAGS */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[4px] bg-pink-600 px-4 py-2 text-[12px] font-medium tracking-wide text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
                
                {/* PREV */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);

                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:border-pink-500 hover:text-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* PAGE */}
                {Array.from({ length: totalPages }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentPage(index + 1);

                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }}
                      className={`h-11 min-w-[44px] rounded-full px-4 text-sm font-medium transition ${
                        currentPage === index + 1
                          ? 'bg-pink-600 text-white shadow-md'
                          : 'border border-neutral-300 bg-white text-neutral-700 hover:border-pink-500 hover:text-pink-600'
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}

                {/* NEXT */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);

                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:border-pink-500 hover:text-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            
            {/* SEARCH */}
            <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                
                <Search
                  className="text-neutral-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* ADS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                alt="ads"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </motion.div>

            {/* SIDEBAR CONTENT */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              
              {/* LATEST POSTS */}
              <div>
                <h3 className="border-b border-neutral-200 pb-3 text-[28px] font-light text-neutral-800">
                  Bài viết mới nhất
                </h3>

                <div className="mt-5 space-y-4">
                  {latestPosts.map((item) => (
                    <Link
                      key={item.id}
                      href={`/kien-thuc/${item.slug}`}
                      className="block border-b border-neutral-100 pb-4 text-[15px] leading-7 text-neutral-600 transition hover:text-pink-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* TAG */}
              <div className="mt-8">
                
                <h3 className="text-[28px] font-light text-neutral-800">
                  Tag
                </h3>

                <div className="mt-2 h-[2px] w-14 bg-pink-500" />

                <div className="mt-6 flex flex-wrap gap-3">
                  {Object.entries(tagCounts).map(
                    ([tag, count]) => (
                      <button
                        key={tag}
                        onClick={() =>
                          handleCategory(tag)
                        }
                        className={`rounded-full border px-4 py-2 text-[13px] transition ${
                          activeCategory === tag
                            ? 'border-pink-500 bg-pink-500 text-white'
                            : 'border-neutral-200 bg-white text-neutral-500 hover:border-pink-500 hover:text-pink-600'
                        }`}
                      >
                        {tag} ({count})
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}