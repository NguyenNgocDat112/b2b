'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Building2, ChevronDown, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AREAS = [
  'Tp Hồ Chí Minh',
  'Bình Dương (TP Hồ Chí Minh mới)',
  'Bà Rịa - Vũng Tàu (TP Hồ Chí Mi...',
  'Hà Nội',
  'Đà Nẵng',
  'Quảng Nam (TP Đà Nẵng mới)'
];

export default function SearchBar() {
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const [areaSearch, setAreaSearch] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAreaDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredAreas = AREAS.filter(a => a.toLowerCase().includes(areaSearch.toLowerCase()));

  return (
    <div className="w-full max-w-[1000px] px-4 mx-auto relative z-[60] -mt-10 mb-4">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-white rounded-[8px] p-2 md:p-2 shadow-[0_12px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row items-stretch md:items-center relative z-[60]"
      >
        {/* Input Field */}
        <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
          <Search className="h-5 w-5 text-gray-500 shrink-0" />
          <input 
            type="text" 
            placeholder="Tìm bất động sản..." 
            className="w-full bg-transparent border-none focus:outline-none text-[15px] md:text-base text-gray-800 placeholder-gray-500 font-medium"
          />
        </div>

        {/* Dropdown 1: Area */}
        <div className="relative md:w-[180px] border-b md:border-b-0 md:border-r border-gray-100" ref={dropdownRef}>
          <button 
            type="button"
            onClick={() => setIsAreaDropdownOpen(!isAreaDropdownOpen)}
            className="flex w-full h-full items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <MapPin className="h-4 w-4 text-[#e03c31] shrink-0" />
              <span className="text-[14px] md:text-[15px] font-medium text-gray-700 whitespace-nowrap hidden md:inline truncate">
                {selectedArea || 'Chọn khu vực'}
              </span>
              <span className="text-[14px] font-medium text-gray-700 whitespace-nowrap md:hidden truncate">
                {selectedArea || 'Khu vực'}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-600 transition-colors group-hover:text-gray-900 shrink-0" />
          </button>

          <AnimatePresence>
            {isAreaDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-[110%] left-0 w-[100vw] -ml-4 md:ml-0 md:w-[380px] bg-white rounded-[8px] shadow-[0_-10px_30px_rgba(0,0,0,0.1),0_16px_40px_rgba(0,0,0,0.15)] border border-gray-100 z-[100] overflow-hidden flex flex-col md:top-full md:mt-2"
              >
                {/* Header */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                  <button 
                    onClick={() => setIsAreaDropdownOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-800" />
                  </button>
                  <h3 className="flex-1 text-[16px] font-bold text-center pr-6 text-gray-900">Tỉnh thành</h3>
                </div>

                {/* Search */}
                <div className="p-4 border-b border-gray-100/50">
                  <div className="relative flex items-center bg-[#f4f5f5] rounded-full px-4 py-2.5">
                    <Search className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Tìm tỉnh thành" 
                      value={areaSearch}
                      onChange={(e) => setAreaSearch(e.target.value)}
                      className="w-full bg-transparent border-none focus:outline-none text-[15px] font-medium text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* List */}
                <div className="max-h-[300px] overflow-y-auto pb-4">
                  {filteredAreas.map((area, idx) => (
                    <label 
                      key={idx} 
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className="text-[15px] text-gray-800 font-medium select-none truncate pr-4">{area}</span>
                      <div className="relative flex items-center justify-center shrink-0">
                        <input 
                          type="radio" 
                          name="area" 
                          value={area}
                          checked={selectedArea === area}
                          onChange={() => {
                            setSelectedArea(area);
                            setIsAreaDropdownOpen(false);
                          }}
                          className="peer appearance-none w-[22px] h-[22px] border-2 border-gray-300 rounded-full checked:border-transparent transition-colors cursor-pointer ring-1 ring-transparent checked:ring-[#e03c31]"
                        />
                        {selectedArea === area && (
                          <div className="absolute inset-0 border-2 border-[#e03c31] rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-[#e03c31] rounded-full" />
                          </div>
                        )}
                      </div>
                    </label>
                  ))}
                  {filteredAreas.length === 0 && (
                    <div className="px-5 py-6 text-center text-gray-500 text-[14px]">
                      Không tìm thấy kết quả
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown 2: Type */}
        <button className="flex items-center justify-between gap-3 px-4 py-3 md:w-[180px] hover:bg-gray-50 transition-colors group">
          <div className="flex items-center gap-2.5">
            <Building2 className="h-4 w-4 text-[#e03c31] shrink-0" />
            <span className="text-[14px] md:text-[15px] font-medium text-gray-700 whitespace-nowrap hidden md:inline">Loại hình BĐS</span>
            <span className="text-[14px] font-medium text-gray-700 whitespace-nowrap md:hidden">Loại BĐS</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-600 transition-colors group-hover:text-gray-900" />
        </button>

        {/* Submit Button */}
        <div className="p-2 md:p-0">
          <button className="w-full md:w-auto md:ml-2 bg-[#e03c31] hover:bg-[#c83227] text-white font-bold px-8 py-3 rounded-[8px] transition-all text-[15px] md:text-base whitespace-nowrap shadow-sm active:scale-95">
            Tìm nhà
          </button>
        </div>
      </motion.div>
    </div>
  );
}
