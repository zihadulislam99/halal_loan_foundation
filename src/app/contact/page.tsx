// pages/contact.js
import React from 'react'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
    <main className="h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">যোগাযোগ করুন</h1>
            <p className="text-gray-600">
            আপনার যেকোনো প্রশ্ন ও প্রয়োজনের জন্য আমরা সদা প্রস্তুত। শুধু একটি বার্তা পাঠান—আপনার সহায়তায় আমরা প্রতিজ্ঞাবদ্ধ!
            </p>

            <div className="space-y-2">
              <p className="text-sm text-gray-700"><strong>ফোন:</strong> +1 (800) 123-4567</p>
              <p className="text-sm text-gray-700"><strong>ইমেল:</strong> support@example.com</p>
              <p className="text-sm text-gray-700"><strong>ঠিকানা:</strong> 123 Business Ave, NY</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <iframe
                className="w-full h-full"
                title="Google Map"
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">আপনার মন্তব্যটি আমাদের বলুন</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">নাম</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">ইমেল</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">মন্তব্য</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  পাঠান
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
