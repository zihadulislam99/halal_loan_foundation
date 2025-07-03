"use client";

import { MapPin, Building2, CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserListPage = () => {
    const [branch, setBranch] = useState([]);

    useEffect(() => {
        // Replace with your actual API
        axios.get("/api/getBranch").then((res) => {
            setBranch(res.data);
        }).catch((err) => {
            console.error(err);
            alert("Failed to load users.");
        });
    }, []);

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-6">Branch List</h1>
                <div className="overflow-auto rounded shadow bg-white">
                    <div className="w-full overflow-x-auto bg-white rounded shadow">
                        <table className="w-full min-w-[1000px] text-sm text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Name</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">District</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Police Station</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Address</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Branch Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {branch.length > 0 ? branch.map((branch, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-4 py-2">{branch.name}</td>
                                        <td className="px-4 py-2">{branch.district}</td>
                                        <td className="px-4 py-2">{branch.policeStation}</td>
                                        <td className="px-4 py-2">{branch.address}</td>
                                        {/* <td className="px-4 py-2">{branch.active}</td> */}
                                        <td className="px-4 py-2">
                                            <div
                                                className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${branch.active === "Active"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {branch.active === "Active" ? (
                                                    <CheckCircle size={16} />
                                                ) : (
                                                    <XCircle size={16} />
                                                )}
                                                {branch.active}
                                            </div>
                                        </td>
                                        {/* <td className="px-4 py-2">
                                            <a href={`/ADMIN/users/${branch._id}`} className="text-blue-600 hover:underline mr-2">
                                                View
                                            </a>
                                        </td> */}
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-4 text-center text-gray-500">No users found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserListPage;
