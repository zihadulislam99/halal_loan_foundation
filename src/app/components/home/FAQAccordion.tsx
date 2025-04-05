"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "This is just a silly question with no answer.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the P is silent! (And that's the joke.)",
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
            Frequently Asked Questions
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg text-gray-600">
            Find answers to common questions. For more assistance, feel free to reach out.
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

