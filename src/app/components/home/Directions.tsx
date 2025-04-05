"use client";

import React, { useState, useEffect } from "react";

interface Direction {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const Directions: React.FC = () => {
  const [directions, setDirections] = useState<Direction[]>([]);

  useEffect(() => {
    // Sample data, replace with API call if needed
    setDirections([
      {
        title: "Chichen Itza",
        subtitle: "Ancient Wonders",
        description: "Explore the majesty of the ancient pyramid of Chichen Itza.",
        imageUrl: "https://dummyimage.com/720x400",
        altText: "Chichen Itza",
      },
      {
        title: "Colosseum Roma",
        subtitle: "Historic Amphitheater",
        description: "Step into the heart of ancient Rome with the Colosseum.",
        imageUrl: "https://dummyimage.com/721x401",
        altText: "Colosseum Roma",
      },
      {
        title: "Great Pyramid of Giza",
        subtitle: "Timeless Monument",
        description: "The Great Pyramid stands as one of the seven wonders of the world.",
        imageUrl: "https://dummyimage.com/722x402",
        altText: "Great Pyramid of Giza",
      },
      {
        title: "San Francisco",
        subtitle: "City of Innovation",
        description: "Discover the tech hub of the world with a touch of history.",
        imageUrl: "https://dummyimage.com/723x403",
        altText: "San Francisco",
      },
    ]);
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-200 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">লক্ষ ও উদ্দেশ্য</h1>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-6xl mx-auto">মহান আল্লাহ তায়ালা প্রদত্ত রাসুলে পাক (সাঃ) প্রদর্শিত সাহাবায়ে কেরাম (রাঃ) ও সালফে সালেহীন অনুসৃত বিশুদ্ধ মত ও পথের অনুসরন। সেই আদর্শ প্রচার প্রসারের মাধ্যমে মুসলীম জন সাধারনের ধর্মীয়, সামাজীক ও চারিত্রিক জীবনের উন্নতির পাশাপাশি জীবনের সকল ক্ষেত্রে ইসলামী আদর্শের বাস্তবায়নের নমুনা তৈরির প্রচেষ্ঠা চালানো। মুসলীম জন সাধারনকে শুধু মুখে নয় বাস্তবতায় সঠিক পথ ও পন্থা গ্রহনে উদ্ভুদ্ধ করা। আদর্শ সমাজ গঠন ও সমৃদ্ধ দেশ বিনির্মানে চিহ্নিত অন্তরায় সুদের বিষাক্ত ছোবল থেকে দেশ  ও জাতীকে রক্ষা করে আদর্শ ও সমৃদ্ধ দেশ গড়ার সর্বাত্মক প্রচেষ্টা চালানো। সর্বপরি সৃষ্টির সেবায় নিজেকে নিয়োজিত করে উভয় জাহানে সফলতা অর্জন করার ঐক্যবদ্ধ প্রয়াস চালানো।
          </p>
        </div>

        {/* Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directions.map((direction, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6"
            >
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={direction.imageUrl}
                alt={direction.altText}
              />
              <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{direction.subtitle}</h3>
              <h2 className="mt-2 text-xl font-bold text-gray-800">{direction.title}</h2>
              <p className="mt-2 text-gray-600">{direction.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Directions;
