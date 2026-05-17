'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Danh Mục Sản Phẩm', href: '/nha-cung-cap' },
    { label: 'Kiểm Tra Báo Giá', href: '/kiem-tra-bao-gia' },
    { label: 'Đăng Ký Đối Tác', href: '/dang-ky-doi-tac' },
    { label: 'Tin Tức', href: '/tin-tuc' },
    { label: 'Việc Làm', href: '#' },
  ];

  // Determine if the header should follow the "scrolled" (white) style
  const isHeaderWhite = !isHomePage || isScrolled;

  return (
    <header className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
      isHeaderWhite 
        ? "bg-white text-[#111111] border-b border-gray-100 shadow-sm py-0" 
        : "bg-[#e03c31] text-white border-transparent py-1"
    }`}>
      <div className="mx-auto flex h-[64px] max-w-[1380px] items-center justify-between px-4 xl:px-8">
        {/* Left Section: Logo & Nav & Search */}
        <div className="flex items-center xl:gap-8 gap-6 flex-1">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className={`h-[16px] w-[16px] rounded-full transition-colors ${isHeaderWhite ? "bg-[#e03c31]" : "bg-white"}`}></div>
            <span className={`font-extrabold text-[21px] tracking-tight transition-colors ${isHeaderWhite ? "text-gray-900" : "text-white"}`}>
              BuildMat
            </span>
          </Link>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="hidden md:flex flex-1 max-w-[200px] lg:max-w-[280px] ml-4">
            <div className={`flex items-center w-full rounded-full px-3.5 h-[38px] transition-colors ${
              isHeaderWhite 
                ? "bg-gray-100 focus-within:bg-gray-50 focus-within:ring-1 focus-within:ring-gray-200" 
                : "bg-white/20 focus-within:bg-white/30"
            }`}>
              <Search className={`h-[15px] w-[15px] shrink-0 ${
                isHeaderWhite ? "text-wite" : "text-white"
              }`} />
              <input 
                type="text" 
                className={`bg-transparent outline-none w-full ml-2.5 text-[14px] font-medium placeholder:text-white ${
                  isHeaderWhite 
                    ? "" 
                    : "text-white placeholder:text-white/80"
                }`}
              />
            </div>
          </div>

          {/* Center: Main Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0 lg:ml-auto">
            {navItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href} 
                className={`text-[14px] font-bold transition-colors flex items-center gap-1 whitespace-nowrap group ${
                  isHeaderWhite ? "text-gray-600 hover:text-black" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDown className={`h-[14px] w-[14px] transition-transform duration-200 group-hover:rotate-180 ${isHeaderWhite ? "text-gray-400" : "text-white/60"}`} strokeWidth={2.5} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section: Auth & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 xl:gap-5 ml-4">
          <button 
            onClick={() => {
              if (mobileMenuOpen) setMobileMenuOpen(false);
              setMobileSearchOpen(!mobileSearchOpen);
            }}
            className={`md:hidden p-2 -mr-1 transition-colors flex items-center justify-center shrink-0 ${
              isHeaderWhite ? "text-gray-700 hover:text-black" : "text-white"
            }`}>
            {mobileSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>

          <div className="hidden sm:flex items-center gap-4 xl:gap-5">
            <Link 
              href="#" 
              className={`text-[14px] font-bold transition-all whitespace-nowrap hover:-translate-y-[1px] ${
                isHeaderWhite ? "text-gray-600 hover:text-black" : "text-white/90 hover:text-white"
              }`}
            >
              Đăng ký
            </Link>
            <Link 
              href="#" 
              className={`flex items-center justify-center h-[38px] px-6 rounded-[8px] text-[14px] font-bold transition-all shadow-sm hover:-translate-y-[1px] hover:shadow-md whitespace-nowrap ${
                isHeaderWhite 
                  ? "bg-[#111111] text-white hover:bg-black" 
                  : "bg-white text-[#e03c31] hover:bg-gray-100"
              }`}
            >
              Đăng nhập
            </Link>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className={`lg:hidden p-2 -mr-2 transition-colors flex items-center justify-center shrink-0 ${
              isHeaderWhite ? "text-gray-700 hover:text-black" : "text-white hover:text-white/80"
            }`}
            onClick={() => {
              if (mobileSearchOpen) setMobileSearchOpen(false);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} 
            className={`md:hidden border-t overflow-hidden shadow-xl absolute w-full transition-colors duration-300 ${
              isHeaderWhite ? "bg-white border-gray-100" : "bg-[#e03c31] border-white/10"
            }`}
          >
            <div className="px-5 py-4">
              <div className={`flex items-center w-full rounded-xl px-4 h-[44px] transition-colors ${
                isHeaderWhite 
                  ? "bg-gray-100 focus-within:bg-gray-50 focus-within:ring-1 focus-within:ring-gray-200" 
                  : "bg-white/20 focus-within:bg-white/30"
              }`}>
                <Search className={`h-[16px] w-[16px] shrink-0 ${
                  isHeaderWhite ? "text-gray-500" : "text-white"
                }`} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..."
                  autoFocus
                  className={`bg-transparent outline-none w-full ml-3 text-[15px] font-medium ${
                    isHeaderWhite ? "text-gray-900 placeholder:text-gray-500" : "text-white placeholder:text-white/80"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu & Search Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
            className={`lg:hidden border-t overflow-hidden shadow-xl absolute w-full transition-colors duration-300 ${
              isHeaderWhite ? "bg-white border-gray-100" : "bg-[#e03c31] border-white/10"
            }`}
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              
              {navItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.href} 
                  className={`text-[15px] font-extrabold flex items-center justify-between py-3.5 border-b transition-colors group ${
                    isHeaderWhite ? "text-gray-800 border-gray-50 hover:text-[#e03c31]" : "text-white border-white/5 hover:text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">{item.label}</span>
                  <ChevronDown className={`h-4 w-4 ${isHeaderWhite ? "text-gray-400 group-hover:text-[#e03c31]" : "text-white/50"}`} />
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 mt-6 sm:hidden pb-4">
                <Link 
                  href="#" 
                  className={`w-full flex items-center justify-center h-[46px] text-[15px] font-extrabold rounded-[8px] transition-colors border active:scale-[0.98] ${
                    isHeaderWhite 
                      ? "text-gray-800 border-gray-200 hover:bg-gray-50" 
                      : "text-white border-white/30 hover:bg-white/10"
                  }`}
                >
                  Đăng ký
                </Link>
                <Link 
                  href="#" 
                  className={`w-full flex items-center justify-center h-[46px] rounded-[8px] text-[15px] font-extrabold transition-all shadow-sm active:scale-[0.98] ${
                    isHeaderWhite 
                      ? "bg-[#111111] text-white hover:bg-black hover:shadow-md" 
                      : "bg-white text-[#e03c31] hover:bg-gray-100 hover:shadow-md"
                  }`}
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

