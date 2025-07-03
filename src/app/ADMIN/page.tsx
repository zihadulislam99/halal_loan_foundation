"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import AnalyticsChart from "./components/AnalyticsChart";
import Notification from "./components/Notification";
import RevenueChart from "./components/RevenueChart";

const ADMIN = () => {
  const [branch, setBranch] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with your actual API
    axios.get("/api/getBranch").then((res) => {
      setBranch(res.data);
    }).catch((err) => {
      console.error(err);
      alert("Failed to load users.");
    });
  }, []);
  useEffect(() => {
    // Replace with your actual API
    axios.get("/api/getUser").then((res) => {
      setUsers(res.data);
    }).catch((err) => {
      console.error(err);
      alert("Failed to load users.");
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="text-lg font-semibold text-gray-600 mb-1">Total Users</h3>
            <p className="text-3xl font-bold" style={{ color: "#82ca9d" }}>{users.length}</p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="text-lg font-semibold text-gray-600 mb-1">Donation</h3>
            <p className="text-3xl font-bold" style={{ color: "#8884d8" }}>56</p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="text-lg font-semibold text-gray-600 mb-1">Total Branchs</h3>
            <p className="text-3xl font-bold text-blue-600">{branch.length}</p>
          </div>

          <a href="" className="bg-white rounded-lg p-5 shadow text-center font-bold">
            <h3 className="text-xl text-green-600">Donation</h3>
            <p className="text-3xl text-green-600">✚</p>
          </a>
        </div>

        <div className="mt-10">
          <AnalyticsChart />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Notification</h3>
            <div className="grid grid-cols-1">
              <RevenueChart />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Notification</h3>
            <div className="grid grid-cols-1">
              <Notification />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="bg-white p-4 rounded shadow text-gray-700 space-y-2">
            <li>✅ New user <strong>Rahim</strong> registered</li>
            <li>🕒 Loan approved for <strong>Karim</strong></li>
            <li>⚠️ Pending NID verification for <strong>Fatema</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ADMIN;
