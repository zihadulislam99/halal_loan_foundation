import React from "react";

export default function FinanceSummary() {
    const summaryData = [
        {
            title: "Total Income",
            value: "৳ 1,20,000",
            bg: "bg-green-100",
            text: "text-green-700",
        },
        {
            title: "Total Expenses",
            value: "৳ 80,000",
            bg: "bg-red-100",
            text: "text-red-700",
        },
        {
            title: "Donations Received",
            value: "৳ 30,000",
            bg: "bg-blue-100",
            text: "text-blue-700",
        },
        {
            title: "Net Balance",
            value: "৳ 70,000",
            bg: "bg-yellow-100",
            text: "text-yellow-800",
        },
    ];

    return (
        <div>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {summaryData.map((item, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl shadow-md ${item.bg} ${item.text}`}
                    >
                        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                        <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Placeholder Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 text-left text-sm uppercase tracking-wider">
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4">Type</th>
                                <th className="py-3 px-4">Amount</th>
                                <th className="py-3 px-4">Remarks</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b">
                                <td className="py-3 px-4">2025-06-01</td>
                                <td className="py-3 px-4">Income</td>
                                <td className="py-3 px-4">৳ 20,000</td>
                                <td className="py-3 px-4">Service revenue</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3 px-4">2025-06-03</td>
                                <td className="py-3 px-4">Expense</td>
                                <td className="py-3 px-4">৳ 5,000</td>
                                <td className="py-3 px-4">Office rent</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3 px-4">2025-06-05</td>
                                <td className="py-3 px-4">Donation</td>
                                <td className="py-3 px-4">৳ 10,000</td>
                                <td className="py-3 px-4">Zakat donation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
