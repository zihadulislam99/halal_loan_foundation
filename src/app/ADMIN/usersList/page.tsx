"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const UserListPage = () => {
    const [users, setUsers] = useState([]);

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
        <div className="p-6 min-h-screen bg-gray-50">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-6">User List</h1>
                <div className="overflow-auto rounded shadow bg-white">
                    <div className="w-full overflow-x-auto bg-white rounded shadow">
                        <table className="w-full min-w-[1000px] text-sm text-left border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 font-semibold text-gray-600"> Date & Time</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Name</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">User Type</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Phone</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Village</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">PoliceStation</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {users.length > 0 ? users.map((user, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-4 py-2">{user.RegistrationDateTime}</td>
                                        <td className="px-4 py-2">{user.Name}</td>
                                        <td className="px-4 py-2">{user.UserType}</td>
                                        <td className="px-4 py-2">{user.Phone}</td>
                                        <td className="px-4 py-2">{user.PresentAddress.Village}</td>
                                        <td className="px-4 py-2">{user.PresentAddress.PoliceStation}</td>
                                        <td className="px-4 py-2">
                                            <a href={`/ADMIN/users/${user._id}`} className="text-blue-600 hover:underline mr-2">
                                                View
                                            </a>
                                        </td>
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
