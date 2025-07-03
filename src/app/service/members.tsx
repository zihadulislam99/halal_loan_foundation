"use client";

import React, { useState } from "react";
import DataTable from "./dataTable";

export default function Members() {
  const [activeTab, setActiveTab] = useState("all");
  const [tabLabel, setTabLabel] = useState("All");

  const tabList = [
    { key: "all", label: "All" },
    { key: "donors", label: "Donors" },
    { key: "lenders", label: "Lenders" },
    { key: "members", label: "Members" },
  ];

  const renderTabContent = (key: string) => (
    <div className="my-8 w-full">
      <DataTable />
    </div>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-gray-800">
        Our Members / <span className="text-indigo-600">{tabLabel}</span>
      </h2>

      {/* Tabs */}
      <div className="w-full max-w-4xl mx-auto mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setTabLabel(tab.label);
              }}
              className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 
                ${
                  activeTab === tab.key
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex justify-center">
        {tabList.some((tab) => tab.key === activeTab) ? (
          renderTabContent(activeTab)
        ) : (
          <p className="text-center text-xl font-bold mt-10 text-gray-500">
            No content available
          </p>
        )}
      </div>
    </div>
  );
}
