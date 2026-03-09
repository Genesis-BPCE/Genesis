import React from 'react';

export function GenesisLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="24" fill="#8b5cf6"/>
      <mask id="cut">
        <rect width="100" height="100" fill="white"/>
        <polygon points="15,90 90,15 93,18 18,93" fill="black"/>
      </mask>
      <g mask="url(#cut)">
        <path d="M50 22C34.5 22 22 34.5 22 50C22 65.5 34.5 78 50 78C63 78 74 69 77 57H50V43H91C91.5 45.5 92 48 92 50C92 73 73 92 50 92C26.8 92 8 73.2 8 50C8 26.8 26.8 8 50 8C61.6 8 72 12.7 79.5 20.2L69.6 30.1C64.6 25.1 57.6 22 50 22Z" fill="white"/>
      </g>
    </svg>
  );
}
