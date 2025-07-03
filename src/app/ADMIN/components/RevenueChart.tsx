"use client";

import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  XAxis,
  YAxis,
  Scatter,
  Tooltip,
} from "recharts";

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Demo data generation: each month has 10–20 "bubbles" representing revenue spikes
const generateDemoData = () => {
  return Array.from({ length: 12 }, (_, monthIndex) =>
    Array.from({ length: Math.floor(Math.random() * 10) + 10 }, (_, i) => ({
      x: monthIndex + 1,
      y: i * 40 + Math.floor(Math.random() * 30), // vertical offset
    }))
  ).flat();
};

const demoRevenueData = generateDemoData();
console.log(demoRevenueData)

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-medium text-gray-500">Revenue Over Time</h2>
          <p className="text-2xl font-bold text-gray-900">$90,978,058 <span className="text-green-500 text-sm">▲ 2%</span></p>
          <p className="text-sm text-gray-400">Increased in last month</p>
        </div>
        <button className="text-sm text-gray-500 hover:text-gray-700">Filter ⏷</button>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 0, bottom: 20, left: 0 }}>
            <XAxis
              dataKey="x"
              type="number"
              domain={[1, 12]}
              tickFormatter={(val) => monthLabels[val - 1]}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              formatter={() => ["Revenue Activity", ""]}
              labelFormatter={(label) => `Month: ${monthLabels[label - 1]}`}
              cursor={{ strokeDasharray: "3 3" }}
            />
            <Scatter data={demoRevenueData} fill="#10B981" shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
