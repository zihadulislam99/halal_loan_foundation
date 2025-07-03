// const statistics = [
//   { title: "মোট ব্যবহারকারী", value: "৬,৭৪৩", icon: "👥" },
//   { title: "মোট তহবিল", value: "৮,৩৩,৭৯০৳", icon: "💰" },
//   { title: " চলমান সেবা", value: "৪৩", icon: "📈" },
//   { title: "গ্রাহকের সন্তুষ্টি", value: "৯৮ শতাংশ", icon: "⭐" },
// ];

// export default function KeyStatistics() {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
//             আমাদের পরিসংখ্যান
//           </h1>
//           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
//           আপনাদের আস্থায় আমরা এগিয়ে চলেছি নিরবিচারে—সেবায় অঙ্গীকার, সন্তুষ্টিতে আত্মবিশ্বাস।
//           </p>
//           <div className="flex mt-6 justify-center">
//             <div className="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
//           {statistics.map((statistic, index) => (
//             <div key={index} className="p-4 md:w-1/4 flex flex-col text-center items-center">
//               <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 text-4xl">
//                 {statistic.icon}
//               </div>
//               <div className="flex-grow">
//                 <h2 className="text-gray-900 text-2xl font-bold">{statistic.value}</h2>
//                 <p className="leading-relaxed text-base">{statistic.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const statistics = [
  { title: "মোট ব্যবহারকারী", value: "৬,৭৪৩", icon: "👥" },
  { title: "মোট তহবিল", value: "৮,৩৩,৭৯০৳", icon: "💰" },
  { title: "চলমান সেবা", value: "৪৩", icon: "📈" },
  { title: "গ্রাহকের সন্তুষ্টি", value: "৯৮ শতাংশ", icon: "⭐" },
];

export default function KeyStatistics() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            আমাদের পরিসংখ্যান
          </h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            আপনাদের আস্থায় আমরা এগিয়ে চলেছি নিরবিচারে—সেবায় অঙ্গীকার, সন্তুষ্টিতে আত্মবিশ্বাস।
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {statistics.map((statistic, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-4xl">
                {statistic.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{statistic.value}</h2>
              <p className="text-base text-gray-600">{statistic.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
