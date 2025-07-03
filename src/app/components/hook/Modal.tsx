"use client";
import React from "react";

export default function ModalCardExample() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      {/* Open the modal */}
      <button
        className="bg-yellow-300 text-base px-4 py-2 rounded hover:bg-yellow-500 focus:outline-none"
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
      >
        অনুদান
      </button>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal w-xl mx-auto rounded-xl">
        <div className="modal-box p-10">
          <h3 className="font-bold text-lg">👋 আপনার অনুদান</h3>
          <div className="py-6 gap-3 flex flex-col">
            <p>এই নম্বরে আপনার অনুদান দিতে পারেন।</p>
            <p>Bkash: 0177*******</p>
            <p>Nagad: 0177*******</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 outline-none">
                বন্ধ করুন
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
