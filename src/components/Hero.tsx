
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Search, User, Menu } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Text reveal animation on scroll
    if (textRef.current) {
      const words = textRef.current.innerHTML.split(' ');
      textRef.current.innerHTML = words.map(word => 
        `<span class="word opacity-40">${word}</span>`
      ).join(' ');

      gsap.to('.word', {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1
        }
      });
    }
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  return (
    <div ref={heroRef} className="relative min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light text-gray-900">FURNITURE</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
            <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
            <ShoppingBag className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
            <Menu className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="flex-1 flex items-center px-4 md:px-6 lg:px-12 pt-20 lg:pt-0">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Modern
              <br />
              <span className="italic">Furniture</span>
              <br />
              Collection
            </h1>
            
            <p 
              ref={textRef}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Discover our curated selection of contemporary furniture pieces that blend form and function. Each item is carefully chosen to bring elegance and comfort to your living space.
            </p>

            <button className="group inline-flex items-center bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 transform hover:translate-y-[-2px]">
              <span className="mr-3">Shop Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-h-[60vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern Chair"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>
          
          {/* Floating Price Tag */}
          <div className="absolute bottom-8 left-8 bg-white p-4 shadow-lg">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-2xl font-light text-gray-900">$299</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
