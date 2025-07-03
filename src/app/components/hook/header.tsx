// "use client"
// import React from "react";
// import ModalCardExample from "./Modal";


// export default function Header() {

//     return (
//         <>
//             <header className="text-gray-600 body-font">
//                 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     {/* Logo & Branding */}
//                     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
//                         <span className="ml-3 font-bold text-xl">হালাল লোন ফাউন্ডেশন</span>
//                     </a>

//                     {/* Navigation Menu */}
//                     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//                         <a href={"/"} className="mr-5 hover:text-gray-900 font-semibold hover:font-bold">হোম</a>
//                         <a href={"service"} className="mr-5 hover:text-gray-900 font-semibold hover:font-bold">সেবা</a>
//                         <a className="mr-5 hover:text-gray-900 font-semibold hover:font-bold">আমাদের সম্পর্কে</a>
//                         <a href={"contact"} className="mr-5 hover:text-gray-900 font-semibold hover:font-bold">যোগাযোগ</a>
//                     </nav>

//                     {/* Language & Donate Button */}
//                     <div className="flex flex-row">
//                         <ModalCardExample/>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }
"use client";
import React, { useState } from "react";
import ModalCardExample from "./Modal";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "হোম", href: "/" },
    { label: "সেবা", href: "/service" },
    { label: "আমাদের সম্পর্কে", href: "#" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center gap-2" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-bold text-xl text-gray-800">হালাল লোন ফাউন্ডেশন</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex">
          <ModalCardExample />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <ModalCardExample />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
