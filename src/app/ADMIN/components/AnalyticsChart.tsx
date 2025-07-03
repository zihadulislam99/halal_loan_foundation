// File: components/AnalyticsChart.tsx
"use client";

import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    PieChart,
    Pie,
    Cell
} from "recharts";

// Example dataset for donation summary
type DataPoint = {
    month: string;
    donations: number;
    users: number;
};

const lineData: DataPoint[] = [
    { month: "Jan", donations: 4000, users: 2400 },
    { month: "Feb", donations: 3000, users: 2210 },
    { month: "Mar", donations: 5000, users: 2290 },
    { month: "Apr", donations: 2780, users: 2000 },
    { month: "May", donations: 1890, users: 2181 },
    { month: "Jun", donations: 2390, users: 2500 },
    { month: "Jul", donations: 3490, users: 2100 },
];

const pieData = [
    { name: "Active Users", value: 42360 },
    { name: "Inactive Users", value: 18715 },
];

const COLORS = ["#00C49F", "#FF8042"];

const AnalyticsChart = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Line Chart */}
            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Donation & User Growth</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="donations" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Circle Analytics Card */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold mb-4">Customer Status</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                <p className="mt-4 text-gray-600">Total: 62,375 users</p>
            </div>
        </div>
    );
};

export default AnalyticsChart;
