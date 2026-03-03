import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PlayCircle, ArrowRight, VolumeX } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        console.error("Autoplay failed:", error);
        setIsPlaying(false);
        setShowPlayButton(true);
      }
    };

    attemptPlay();
  }, []);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      if (!isPlaying) {
        videoRef.current.play().catch(console.error);
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    }
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            controls
            onPlay={() => { setIsPlaying(true); setShowPlayButton(false); }}
            onPause={() => setIsPlaying(false)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video-v2.mp4" type="video/mp4" />
          </video>
        </motion.div>
        {/* Overlays for readability and smooth transition to the next section */}
        {/* Top gradient for Navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep-navy/80 to-transparent pointer-events-none"></div>
        
        {/* Radial gradient to darken edges but leave the center video text solid white */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(15,23,42,0.7)_100%)] pointer-events-none"></div>
        
        {/* Bottom gradient for transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bright-white via-bright-white/80 to-transparent pointer-events-none"></div>

        {/* Interactive Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          {showPlayButton && !isPlaying && (
            <button 
              onClick={handlePlay}
              className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white rounded-full p-4 backdrop-blur-sm transition-all flex items-center gap-2 mb-4"
            >
              <PlayCircle className="w-8 h-8" />
              <span className="font-medium">Play Video</span>
            </button>
          )}
          
          {isMuted && isPlaying && (
            <button 
              onClick={handleToggleMute}
              className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white rounded-full px-4 py-2 backdrop-blur-sm transition-all flex items-center gap-2 absolute bottom-24 right-8 md:bottom-32 md:right-12"
            >
              <VolumeX className="w-5 h-5" />
              <span className="font-medium text-sm">Tap to unmute</span>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mt-48 md:mt-64 pointer-events-none">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        </div>
      </div>
    </section>
  );
}
