"use client"
import React, { useState } from "react";

export default function Header() {
    const [language, setLanguage] = useState("English"); // Default Language

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    {/* Logo & Branding */}
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Halal Loan Foundation</span>
                    </a>

                    {/* Navigation Menu */}
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a href={"/"} className="mr-5 hover:text-gray-900">
                            Home
                        </a>
                        <a href={"service"} className="mr-5 hover:text-gray-900">
                            Our Services
                        </a>
                        <a className="mr-5 hover:text-gray-900">About us</a>
                        <a className="mr-5 hover:text-gray-900">Contact</a>
                    </nav>

                    {/* Language & Donate Button */}
                    <div className="flex flex-row">
                        {/* Language Dropdown */}
                        <div className="relative mr-2">
                            <select
                                className="border rounded-lg py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="Arabic">العربية</option>
                                <option value="Bangla">বাংলা</option>
                                <option value="English">English</option>
                            </select>
                        </div>

                        {/* Donate Button */}
                        <button className="ml-4 inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-400 rounded text-base mt-4 md:mt-0">
                            Donate
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
