import React from "react";

const SkeletonSection = () => {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 py-5 bg-transparent">
        <div className="container px-6 mx-auto relative text-sm ">
          <div className="flex items-center justify-between rounded-lg backdrop-blur-lg bg-zinc-900 bg-opacity-60 border border-zinc-900 shadow-lg px-4 py-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 mr-16">
              <div className="w-10 h-10 bg-gray-700 shimmer rounded-full"></div>
            </div>

            {/* Navigation Items */}
            <div className="hidden sm:flex items-center justify-center gap-4">
              <div className="w-18 h-4 bg-gray-700 shimmer rounded-lg"></div>
              <div className="w-18 h-4 bg-gray-700 shimmer rounded-lg"></div>
            </div>

            {/* Contact Button */}
            <div className="flex items-center">
              <div className="bg-gray-700 w-32 h-9 shimmer rounded-lg"></div>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto py-16 px-6 text-center ">
        {/* Title */}
        <div className="w-48 h-6 bg-gray-700 shimmer rounded mx-auto mb-4"></div>
        <div className="w-96 h-4 bg-gray-700 shimmer rounded mx-auto mb-12"></div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-6 rounded-lg shadow-md flex flex-col items-start"
            >
              {/* Icon Placeholder */}
              <div className="w-10 h-10 bg-gray-700 shimmer rounded mb-4"></div>
              {/* Title Placeholder */}
              <div className="w-32 h-5 bg-gray-700 shimmer rounded mb-2"></div>
              {/* Description Placeholder */}
              <div className="w-full h-3 bg-gray-700 shimmer rounded mb-1"></div>
              <div className="w-3/4 h-3 bg-gray-700 shimmer rounded"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkeletonSection;
