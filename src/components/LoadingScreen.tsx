
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Loading animation
    tl.to('.loading-text', { 
      opacity: 1, 
      duration: 0.5 
    })
    .to('.loading-progress', { 
      width: '100%', 
      duration: 1.5, 
      ease: "power2.inOut" 
    })
    .to('.loading-screen', { 
      y: '-100%', 
      duration: 0.8, 
      ease: "power3.inOut" 
    }, "+=0.3");
  }, []);

  return (
    <div 
      ref={loadingRef}
      className="loading-screen fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="loading-text text-3xl md:text-4xl font-light text-gray-900 opacity-0 mb-8">
          LUXURY FURNITURE
        </h1>
        <div className="w-64 h-0.5 bg-gray-200 mx-auto">
          <div className="loading-progress h-full bg-gray-900 w-0"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
