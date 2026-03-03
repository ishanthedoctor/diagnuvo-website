import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-bright-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy text-center mb-16 tracking-tight">
          Every Critical Moment, Clarity
        </h2>
        <video controls className="w-full rounded-xl shadow-lg">
          <source src="/diagnuvo-demo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
