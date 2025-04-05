// components/ServicesSection.jsx
import React from "react";

const services = [
    {
        title: "সংগঠনের প্রাথমিক কাঠামো",
        description: "প্রথমে ৬০০ জন সদস্য সংগ্রহ করা হবে, যারা প্রত্যেকে ১,০০০ টাকা দান করবে। এতে সংগঠনের মোট মূলধন হবে ৬ লক্ষ টাকা। এর মধ্যে ৫ লক্ষ টাকা ঋণ হিসাবে ২০টি ঘরে বিতরণ করা হবে, যেখানে প্রতিটি ঘর সর্বোচ্চ ২৫,০০০ টাকা পাবে। বাকি ১ লক্ষ টাকা সংগঠনের নিরাপত্তার জন্য সংরক্ষিত থাকবে।",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
            >
                <path d="M12 8c3.313 0 6-1.79 6-4s-2.687-4-6-4-6 1.79-6 4 2.687 4 6 4z"></path>
                <path d="M12 8v13"></path>
                <path d="M9 21h6"></path>
            </svg>
        ),
    },
    {
        title: "ঋণ পরিশোধ ও পরিচালনা ব্যবস্থা",
        description: "ঋণগ্রহীতারা নির্দিষ্ট হারে কিস্তির মাধ্যমে ঋণ পরিশোধ করবে, যা সাপ্তাহিক বা মাসিক ভিত্তিতে সংগ্রহ করা হবে। কিস্তির অর্থ সংগ্রহের জন্য একজন কালেক্টর নিয়োগ করা হবে, যার খরচ হালাল উপায়ে ঋণগ্রহীতাদের কাছ থেকে নেওয়া হবে। এছাড়া, ঋণগ্রহীতারা কিস্তির সঙ্গে সঞ্চয় ও ডিপিএস রাখতে পারবে, যা নির্দিষ্ট মেয়াদে সংরক্ষিত থাকবে।",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
        ),
    },
    {
        title: "সংগঠনের পরিধি বিস্তার পরিকল্পনা",
        description: "প্রতিবছর ঋণগ্রহীতাদের সঞ্চয় ও ডিপিএস থেকে ১ লক্ষ টাকা মূলধনে যোগ হবে। পাশাপাশি, সংগঠনের সদস্যরা প্রতি বছর অন্তত ২০০ জন নতুন সদস্য সংগ্রহ করবে, যা আরও ১ লক্ষ টাকা যোগ করবে। মূলধন যখন ১৫ লক্ষ টাকা ছাড়াবে, তখন হালাল ব্যবসার মাধ্যমে আয় বৃদ্ধি করা হবে এবং সুদমুক্ত ঘরের সংখ্যা বাড়ানো হবে।",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
            >
                <path d="M3 3v18h18"></path>
                <path d="M7 14l3-3 3 3 5-5"></path>
            </svg>
        ),
    },
];


const ServicesSection = () => {
    return (
        <section className="bg-gradient-to-r from-white to-gray-200 text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">কার্য বিবরনী</h1>
                    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">We offer a variety of top-tier services to cater to your needs. Explore what we have in store for you.</p> */}
                    <div className="flex mt-6 justify-center">
                        <div className="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {services.map((service, index) => (
                        // <ServiceCard key={index} {...service} />
                        <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                {service.icon}
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-xl title-font font-bold mb-3">{service.title}</h2>
                                <p className="leading-relaxed text-base">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;