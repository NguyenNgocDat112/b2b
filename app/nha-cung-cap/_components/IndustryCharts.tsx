// _components/IndustryCharts.tsx

"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";

import {
  TrendingUp,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const steelPriceData = [
  { month: "T1", value: 14500 },
  { month: "T2", value: 14800 },
  { month: "T3", value: 15200 },
  { month: "T4", value: 15600 },
  { month: "T5", value: 16100 },
  { month: "T6", value: 16500 },
];

const demandData = [
  { month: "T1", value: 42 },
  { month: "T2", value: 48 },
  { month: "T3", value: 54 },
  { month: "T4", value: 58 },
  { month: "T5", value: 63 },
  { month: "T6", value: 71 },
];

export default function IndustryCharts() {
  return (
    <div className="sticky top-20 space-y-4">
      
      {/* ==================== */}
      {/* BIỂU ĐỒ GIÁ */}
      {/* ==================== */}

      <div className="overflow-hidden rounded-[8px] border border-red-100 bg-white shadow-sm">
        
        {/* HEADER */}
        <div className="border-b border-red-50 bg-gradient-to-r from-red-600 to-rose-500 p-4 text-white">
          
          <div className="flex items-center justify-between gap-3">
            
            <div className="flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/15">
                <TrendingUp className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-100">
                  Phân tích thị trường
                </p>

                <h3 className="mt-0.5 text-sm font-bold">
                  Giá Bulong Trung Bình
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 rounded-[8px] bg-white/10 px-2.5 py-1.5 text-[11px] font-bold">
              +12%
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="h-[210px] p-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={steelPriceData}>
              
              <defs>
                <linearGradient
                  id="priceGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#dc2626"
                    stopOpacity={0.25}
                  />

                  <stop
                    offset="95%"
                    stopColor="#dc2626"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f5d0d0"
              />

              <XAxis
                dataKey="month"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #fecaca",
                  fontSize: 12,
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#dc2626"
                strokeWidth={3}
                fill="url(#priceGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-3">
          
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
              Giá hiện tại
            </p>

            <p className="mt-1 text-base font-extrabold text-neutral-900">
              16.500đ/kg
            </p>
          </div>

          <div className="rounded-[8px] bg-emerald-50 px-3 py-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
              Tăng trưởng
            </p>

            <p className="mt-0.5 text-sm font-extrabold text-emerald-600">
              +12%
            </p>
          </div>
        </div>
      </div>

      {/* ==================== */}
      {/* BIỂU ĐỒ NHU CẦU */}
      {/* ==================== */}

      <div className="overflow-hidden rounded-[8px] border border-blue-100 bg-white shadow-sm">
        
        {/* HEADER */}
        <div className="border-b border-blue-50 bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">
          
          <div className="flex items-center justify-between gap-3">
            
            <div className="flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/15">
                <Activity className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                  Xu hướng ngành
                </p>

                <h3 className="mt-0.5 text-sm font-bold">
                  Nhu Cầu Thị Trường
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1 rounded-[8px] bg-white/10 px-2.5 py-1.5 text-[11px] font-bold">
              HOT
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="h-[210px] p-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demandData}>
              
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#dbeafe"
              />

              <XAxis
                dataKey="month"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #bfdbfe",
                  fontSize: 12,
                }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#2563eb",
                  strokeWidth: 2,
                  stroke: "#fff",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-3">
          
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
              Đơn hàng tháng
            </p>

            <p className="mt-1 text-base font-extrabold text-neutral-900">
              7.2K+
            </p>
          </div>

          <div className="rounded-[8px] bg-blue-50 px-3 py-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500">
              Xu hướng
            </p>

            <p className="mt-0.5 text-sm font-extrabold text-blue-600">
              Tăng mạnh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}