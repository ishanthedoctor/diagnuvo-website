import React from 'react';

export function DiagnuvoLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="cyanGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      
      {/* Outer stylized 'D' shape */}
      <path 
        d="M8 4H16C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28H8V4Z" 
        fill="url(#cyanGradient)" 
        fillOpacity="0.15"
        stroke="url(#cyanGradientLight)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Inner AI Sparkle */}
      <path 
        d="M14 11C14 13.7614 11.7614 16 9 16C11.7614 16 14 18.2386 14 21C14 18.2386 16.2386 16 19 16C16.2386 16 14 13.7614 14 11Z" 
        fill="url(#cyanGradientLight)"
      />
      
      {/* Medical Cross */}
      <path 
        d="M20 10H24M22 8V12" 
        stroke="url(#cyanGradientLight)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}
