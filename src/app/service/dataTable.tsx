import React from "react";

const users = [
  {
    id: 1,
    name: "Dio Lupa",
    role: "Donor",
    location: "Dhaka",
    status: "Active",
  },
  {
    id: 2,
    name: "Ellie Beilish",
    role: "Lender",
    location: "Chittagong",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Sabrino Gardener",
    role: "Member",
    location: "Sylhet",
    status: "Active",
  },
];

export default function UserDataTable() {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">User List</h2>
      <table className="w-full table-auto border-collapse text-sm">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="text-left py-3 px-4">#</th>
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Role</th>
            <th className="text-left py-3 px-4">Location</th>
            <th className="text-left py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user, index) => (
            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
              <td className="py-3 px-4 font-medium">{index + 1}</td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.role}</td>
              <td className="py-3 px-4">{user.location}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
