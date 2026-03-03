import React, { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Force autoplay on load (some browsers need an explicit play call)
    const tryPlay = async () => {
      try {
        v.muted = true; // required for autoplay
        await v.play();
      } catch (e) {
        // If autoplay fails, user can still press play on controls
        console.warn("Autoplay failed:", e);
      }
    };

    tryPlay();
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-top"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls
        >
          {/* cache-bust to ensure Vercel doesn’t serve the old file */}
          <source src="/hero-video.mp4?v=2" type="video/mp4" />
        </video>

        {/* overlays (keep them, but ensure they don't block video visibility) */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep-navy/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(15,23,42,0.45)_100%)] pointer-events-none" />
      </div>

      {/* Foreground content placeholder */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* your hero text/buttons go here */}
      </div>
    </section>
  );
}
