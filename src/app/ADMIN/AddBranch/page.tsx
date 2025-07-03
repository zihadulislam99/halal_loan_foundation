"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

export default function AddBranch() {
    const router = useRouter();
    const [branch, setBranch] = useState({
        name: "",
        district: "",
        policeStation: "",
        address: "",
        active: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBranch(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...branch,
                // active: branch.active === "true",
            };
            await axios.post("/api/AddBranch", payload);
            setBranch({
                name: "",
                district: "",
                policeStation: "",
                address: "",
                active: "",
            })
            router.push("/ADMIN/BranchList");
            alert("Branch registered successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to register Branch.");
        }
        console.log("Branch Submitted:", branch);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Add New Branch</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Branch Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Branch Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={branch.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                            placeholder="Enter branch name"
                        />
                    </div>

                    {/* District */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                        <input
                            type="text"
                            name="district"
                            required
                            value={branch.district}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                            placeholder="Enter district"
                        />
                    </div>

                    {/* Police Station */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Police Station</label>
                        <input
                            type="text"
                            name="policeStation"
                            required
                            value={branch.policeStation}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                            placeholder="Enter police station"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea
                            name="address"
                            required
                            value={branch.address}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                            placeholder="Enter full address"
                        ></textarea>
                    </div>

                    {/* Active Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Brands Active or inactive</label>
                        <select
                            name="active"
                            required
                            value={branch.active}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
                        >
                            <option value="" disabled>Select status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>



                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
                        >
                            Submit Branch
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
