import React, { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Autoplay usually requires muted on load
    v.muted = true;
    v.play().catch(() => {
      // If autoplay fails, user can press play in controls
      console.warn("Autoplay failed");
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
         className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls
        >
          <source src="/hero-video.mp4?v=3" type="video/mp4" />
        </video>

        {/* subtle readability overlays (won't block video) */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Put your hero title/buttons here */}
      </div>
    </section>
  );
}
