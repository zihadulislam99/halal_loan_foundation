"use client";
import React, { useState } from "react";

const userData = {
  name: "John Doe",
  phone: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  company: "Acme Inc.",
  title: "CEO",
  city: "Anytown",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
  social: {
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  donors: [
    { index: 1, amount: 50, type: "Donate", date: "2024-02-20" },
    { index: 2, amount: 100, type: "Loan", date: "2024-02-18" },
    { index: 3, amount: 25, type: "Donate", date: "2024-02-15" },
    { index: 4, amount: 75, type: "Loan", date: "2024-02-10" },
    { index: 10, amount: 75, type: "Donate", date: "2024-02-10" },
    { index: 55, amount: 75, type: "Loan", date: "2024-02-10" },
    { index: 105, amount: 75, type: "Donate", date: "2024-02-10" },
  ],
};

export default function Profile() {
  const [donationAmount, setDonationAmount] = useState("");
  const [donors, setDonors] = useState(userData.donors);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full text-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-500"
        />
        <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
        <p className="text-gray-600 text-sm">{userData.title} at {userData.company}</p>
        <p className="mt-2 text-gray-700">{userData.phone}</p>
        <p className="text-gray-500 text-sm">{userData.address}, {userData.city}</p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-3">
          {Object.entries(userData.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </div>



      {/* Donor Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Donations Records
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-blue-500">
                <th className="p-4">Index</th>
                <th className="p-4">Amount ($)</th>
                <th className="p-4">Type</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {userData.donors.length > 0 ? (
                userData.donors.map((donor, index) => (
                  <tr
                    key={index}
                    className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } hover:bg-gray-200 transition`}
                  >
                    <td className="p-4 ps-10 font-medium">*{String(index + 1).padStart(3, "0")}</td> {/* make donor index three digit */}
                    <td className="p-4 text-green-600 font-semibold">${donor.amount}</td>
                    <td className="p-4 text-green-600">{donor.type}</td>
                    <td className="p-4 text-gray-500">{donor.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No donations yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
