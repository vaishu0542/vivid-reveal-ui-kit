
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import BestSellingProducts from '../components/BestSellingProducts';
import FAQ from '../components/FAQ';
import LoadingScreen from '../components/LoadingScreen';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page reveal animation after loading
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo('.page-content', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white overflow-x-hidden">
      <LoadingScreen />
      <div className="page-content opacity-0">
        <Hero />
        <BestSellingProducts />
        <FAQ />
      </div>
    </div>
  );
};

export default Index;
