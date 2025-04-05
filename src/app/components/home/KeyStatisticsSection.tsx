const statistics = [
  { title: "Total Users", value: "313,331,091", icon: "👥" },
  { title: "Revenue", value: "$1.2B", icon: "💰" },
  { title: "Active Projects", value: "4,532", icon: "📈" },
  { title: "Customer Satisfaction", value: "98%", icon: "⭐" },
];

export default function KeyStatistics() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Premium Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            We offer a variety of top-tier services to cater to your needs. Explore what we have in store for you.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-24 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {statistics.map((statistic, index) => (
            <div key={index} className="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 text-4xl">
                {statistic.icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl font-bold">{statistic.value}</h2>
                <p className="leading-relaxed text-base">{statistic.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
