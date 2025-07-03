import React from "react";
import { MapPin, Building2, CheckCircle, XCircle } from "lucide-react";

const branches = [
  {
    name: "Dhaka Central",
    district: "Dhaka",
    station: "Tejgaon",
    status: "Active",
  },
  {
    name: "Chittagong North",
    district: "Chittagong",
    station: "Panchlaish",
    status: "Active",
  },
  {
    name: "Sylhet Town",
    district: "Sylhet",
    station: "Kotwali",
    status: "Inactive",
  },
];

export default function BranchesCard() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-indigo-600 group-hover:text-indigo-800 transition">
                <Building2 className="inline-block mr-2" size={20} />
                {branch.name}
              </h2>
              <div
                className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${
                  branch.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {branch.status === "Active" ? (
                  <CheckCircle size={16} />
                ) : (
                  <XCircle size={16} />
                )}
                {branch.status}
              </div>
            </div>

            <div className="text-gray-600 space-y-2 text-sm">
              <p>
                <MapPin className="inline-block mr-2 text-indigo-400" size={16} />
                <span className="font-semibold text-gray-800">District:</span>{" "}
                {branch.district}
              </p>
              <p>
                <MapPin className="inline-block mr-2 text-indigo-400" size={16} />
                <span className="font-semibold text-gray-800">
                  Police Station:
                </span>{" "}
                {branch.station}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
