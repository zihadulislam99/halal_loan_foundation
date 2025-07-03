"use client";

import React from "react";

const Notifications = [
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
  { name: "Sophia Martinez", type: "donation", time: "9:15am", Amount: 5000 },
  { name: "Liam Johnson", type: "loan", time: "10:02am", Amount: 1500 },
  { name: "Lisa Quittson Sr.", type: "donation", time: "11:45am", Amount: 7000 },
  { name: "Krista Ford", type: "loan", time: "12:30pm", Amount: 1800 },
  { name: "May Hoggens", type: "donation", time: "2:20pm", Amount: 6500 },
  { name: "Winfred Koch", type: "loan", time: "3:00pm", Amount: 2900 },
  { name: "James Smith", type: "donation", time: "4:45pm", Amount: 5600 },
];

const Notification = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 max-h-[360px] overflow-y-auto">
      <table className="min-w-full text-left text-sm">
        <tbody>
          {Notifications.map((customer, index) => (
            <tr key={index} className="border-b last:border-none hover:bg-gray-50 text-gray-700">
              <td className="text-base py-2 px-4"><strong>{customer.name}</strong> at <strong>{customer.time}</strong> <span>{customer.type === "donation" ? "completed donated" : "received a loan"}</span> <strong className={`${customer.type === "donation" ? "text-green-600" : "text-red-500"}`}>{customer.Amount.toLocaleString()}</strong> Taka.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notification;
