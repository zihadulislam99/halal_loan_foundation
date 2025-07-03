"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "হালাল লোন ফাউন্ডেশন কীভাবে কাজ করে?",
    answer:
      "হালাল লোন ফাউন্ডেশন একটি সুদমুক্ত ঋণ প্রদানকারী সংস্থা, যা মুসলিমদের জন্য আর্থিক সহায়তা প্রদান করে। সদস্যরা নির্দিষ্ট পরিমাণে দান করে, যার মাধ্যমে সংগঠন ঋণ প্রদান করে এবং সুদ মুক্ত কিস্তির মাধ্যমে ঋণ পরিশোধ করা হয়। আমাদের উদ্দেশ্য ইসলামী আদর্শের প্রচার ও বাস্তবায়ন করা।",
  },
  {
    question: "সংগঠনের লক্ষ্য ও উদ্দেশ্য কী?",
    answer:
      "হালাল লোন ফাউন্ডেশনের মূল উদ্দেশ্য হলো মুসলিম সমাজে ইসলামী আদর্শের প্রচার এবং অনুসরণ করা। আমরা সুদের বিপদ থেকে রক্ষা করে মুসলিমদের জীবনে ধর্মীয় ও চারিত্রিক উন্নতি আনতে চাই। এছাড়া, আদর্শ সমাজ গঠন ও সুস্থ ও সমৃদ্ধ দেশ গড়ার প্রচেষ্টা চালিয়ে যাচ্ছি।",
  },
  {
    question: "সংগঠনটির ভবিষ্যৎ পরিকল্পনা কী?",
    answer:
      "সংগঠনের লক্ষ্য প্রতিবছর ঋণগ্রহীতাদের সঞ্চয় এবং ডিপিএস থেকে মূলধন বাড়ানো। এছাড়াও, সংগঠন প্রতি বছর নতুন সদস্য সংগ্রহ করে সংগঠনের মূলধন বৃদ্ধি করবে। মূলধন ১৫ লক্ষ টাকা ছাড়ালে, হালাল ব্যবসার মাধ্যমে আয় বৃদ্ধি করে সুদমুক্ত ঘরের সংখ্যা বাড়ানো হবে।",
  },
  {
    question: "এই ফাউন্ডেশন কত টাকা ঋণ দেয়?",
    answer:
      "হালাল লোন ফাউন্ডেশন প্রতি ঋণগ্রহীতা বা পরিবারের জন্য সর্বোচ্চ ২৫,০০০ টাকা ঋণ প্রদান করে। এই ঋণ সুদমুক্ত এবং শুধুমাত্র নির্দিষ্ট কিস্তিতে পরিশোধযোগ্য।",
  },
  {
    question: "ঋণ পরিশোধের পদ্ধতি কী?",
    answer:
      "ঋণগ্রহীতারা সাপ্তাহিক বা মাসিক কিস্তিতে ঋণ পরিশোধ করেন। কিস্তি সংগ্রহের জন্য একজন কালেক্টর নিয়োগ করা হয়, এবং ঋণগ্রহীতা তাদের পরিশোধের জন্য নির্ধারিত পরিমাণ অর্থ দেন। এছাড়া, তারা সঞ্চয় এবং ডিপিএস রাখতে পারেন, যা নিরাপদে সংরক্ষিত থাকবে।",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg text-gray-600">
          সচরাচর জিজ্ঞাস্যগুলোর সহজ সমাধান এখানে পাবেন—আর অতিরিক্ত সহায়তার জন্য নির্দ্বিধায় আমাদের সঙ্গে যোগাযোগ করুন।
          </p>
          <div className="w-24 h-1 bg-indigo-600 mt-6 mx-auto rounded-full"></div>
        </div>
        <dl className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <dt>
                <button
                  type="button"
                  className="flex justify-between items-center w-full text-left text-xl font-medium text-gray-800 hover:text-indigo-600 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{item.question}</span>
                  <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
                </button>
              </dt>
              <dd
                id={`faq-panel-${index}`}
                className={`text-gray-600 mt-3 transition-all duration-500 ease-out overflow-hidden ${activeIndex === index ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
              >
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQAccordion;

