"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import adminLogo from "@/../public/admin_logo.png";
import { ChevronDown } from "lucide-react";

const links = [
  { label: "Dashboard", href: "/ADMIN" },
  { label: "User List", href: "/ADMIN/usersList" },
  { label: "Branch List", href: "/ADMIN/BranchList" },
];

const AdminNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-3 shadow-sm">
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <Image src={adminLogo} alt="Admin Logo" width={32} height={32} />
          <span className="font-extrabold text-lg">Halal Loan Admin</span>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium relative">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-blue-600">
                {link.label}
              </Link>
            </li>
          ))}

          {/* Add Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              Add <ChevronDown size={16} />
            </button>

            {showDropdown && (
              <ul className="absolute top-8 left-0 mt-2 bg-white border rounded-md shadow-lg text-sm z-50 min-w-[160px]">
                <li>
                  <Link href="/ADMIN/AddUser" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 whitespace-nowrap" >
                    Add User
                  </Link>
                </li>
                <li>
                  <Link href="/ADMIN/AddBranch" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 whitespace-nowrap" >
                    Add Branch
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Logout */}
          <li>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
