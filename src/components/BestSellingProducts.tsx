
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Minimal Dining Chair',
    price: 299,
    image: '/placeholder.svg',
    category: 'Chairs'
  },
  {
    id: 2,
    name: 'Modern Coffee Table',
    price: 599,
    image: '/placeholder.svg',
    category: 'Tables'
  },
  {
    id: 3,
    name: 'Luxury Sofa Set',
    price: 1299,
    image: '/placeholder.svg',
    category: 'Sofas'
  },
  {
    id: 4,
    name: 'Designer Bookshelf',
    price: 899,
    image: '/placeholder.svg',
    category: 'Storage'
  }
];

const BestSellingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const buttonLeftRef = useRef<HTMLButtonElement>(null);
  const buttonRightRef = useRef<HTMLButtonElement>(null);

  const slideLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    setCurrentIndex(newIndex);
    
    // Button animation
    gsap.to(buttonLeftRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  const slideRight = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    
    // Button animation
    gsap.to(buttonRightRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Best Selling Products
            </h2>
            <p className="text-gray-600">Discover our most popular furniture pieces</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              ref={buttonLeftRef}
              onClick={slideLeft}
              className="p-3 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={buttonRightRef}
              onClick={slideRight}
              className="p-3 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-lg font-light">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-600 ease-out"
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-100 mb-4 aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="text-xl font-light">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              ref={buttonLeftRef}
              onClick={slideLeft}
              className="p-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              ref={buttonRightRef}
              onClick={slideRight}
              className="p-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
