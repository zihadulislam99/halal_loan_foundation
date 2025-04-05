"use client";

import React, { useState } from "react";
import DynamicCarousel from "../components/home/DynamicCarousel";
import DataTable from "./dataTable";

export default function Services() {
  const [activeTab, setActiveTab] = useState("branches");

  const carouselItems = [
    {
      caption: "Caption 1",
      src: "https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL3Jlc291cmNlcy9pbWFnZXMvSG9tZVBhZ2UvRm91clBhY2svQzItUGhvdG9zLWlTdG9jay0xMzU2MTk3Njk1LmpwZw",
      alt: "Scenic view of a Swiss landscape",
    },
    {
      caption: "Caption 2",
      src: "https://imgs.search.brave.com/ZyFfJH_PZsYorrRxY11qqf9wIkRiWOBVx4PeMj-3oRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMtYXNzZXRzLm1waXguY29tL2FwaS9hc3NldHMvbXBpeC9mZjFlOWMwNi1lNWFlLTQwZjMtYjJhNS1hMzI4ZjE1NjBlNTI_cXVhbGl0eT04NSZhdXRvPXRydWUmY2FjaGU9ODY0MDAwMCZ3aWR0aD00MTQ",
      alt: "Modern architecture with glass reflections",
    },
    {
      caption: "Caption 3",
      src: "https://imgs.search.brave.com/AIEFHuE-024bmLWjtXxg-CSUrf8Km0xWqaBUivLRF6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21iby5zdGF0aWNmbGljay5jb20vNjZhMDMxZjlmYzM0M2M1ZTQyZDk2NWNhLzY2YTNlZDgxOGEyMzkxNTMxMGViMTFjYl9waG90by03LWhtLmF2aWY",
      alt: "Sunset over a city skyline",
    },
  ];

  const tabNames = ["Branches", "Donors", "Accumulator", "Lenders", "Summary"];
  // FundLoanSummary

  const tabContent = {
    branches: <div className="my-8"><p className="text-center text-xl font-bold">Branches</p><DataTable /></div>,
    donors: <div className="my-8"><p className="text-center text-xl font-bold">Donors</p><DataTable /></div>,
    accumulator: <div className="my-8"><p className="text-center text-xl font-bold">Accumulator</p><DataTable /></div>,
    lenders: <div className="my-8"><p className="text-center text-xl font-bold">Lenders</p><DataTable /></div>,
    summary : <div className="my-8"><p className="text-center text-xl font-bold">Fund and Loan Summary</p><DataTable /></div>,
  };

  return (
    <div className="">
      <DynamicCarousel items={carouselItems} autoPlay={true} autoPlayInterval={4000} />

      {/* Tabs Section */}
      <div className="w-full mt-10">
        <div className="flex  mx-auto justify-around border-b pb-2">
          {tabNames.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-lg font-semibold transition duration-300 ${activeTab === tab.toLowerCase()
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400 hover:text-black"
                }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex items-center justify-center">
          {tabContent[activeTab] ?? <p className="text-center text-gray-500">No content available</p>}
        </div>
      </div>
    </div>
  );
}
