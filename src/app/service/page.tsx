"use client";

import React, { useState } from "react";
import Members from "./members";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FinanceSummary from "./FinanceSummary";
import Branches from "./Branches";

export default function Services() {
  const [activeTab, setActiveTab] = useState("branches");

  const tabNames = [
    { label: "Branches", key: "branches" },
    { label: "Members", key: "members" },
    { label: "Summary", key: "summary" },
  ];

  const tabContent = {
    branches: (
      <div className="my-12">
        <h2 className="text-2xl font-bold text-center mb-6">Our Branches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="district">District</Label>
            <Select>
              <SelectTrigger id="district">
                <SelectValue placeholder="All Districts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="chittagong">Chittagong</SelectItem>
                <SelectItem value="khulna">Khulna</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="police">Police Station</Label>
            <Select>
              <SelectTrigger id="police">
                <SelectValue placeholder="All Stations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tejgaon">Tejgaon</SelectItem>
                <SelectItem value="gulshan">Gulshan</SelectItem>
                <SelectItem value="kotwali">Kotwali</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Branches/>
      </div>
    ),
    members: (
      <div className="my-12">
        <Members />
      </div>
    ),
    summary: (
      <div className="my-12">
        <h2 className="text-2xl font-bold text-center mb-6">Finance Summary</h2>
        <FinanceSummary/>
      </div>
    ),
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-200 via-white to-gray-200 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            নোটিশ বোর্ড
          </h1>
          <div className="mt-4 mx-auto w-24 h-1 bg-indigo-500 rounded-full"></div>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            আপনার সুবিধার জন্য আমাদের শাখা এবং সদস্য সম্পর্কিত সর্বশেষ তথ্য এখানে পাওয়া যাবে।
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {tabNames.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-sm
                    ${activeTab === tab.key
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {tabContent[activeTab] ?? (
              <p className="text-center text-xl font-bold text-gray-400">
                No content available
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
