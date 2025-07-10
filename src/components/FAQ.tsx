
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What materials are used in your furniture?',
    answer: 'We use only the finest materials including solid wood, premium fabrics, and high-grade metals. Each piece is crafted with attention to detail and built to last for generations.'
  },
  {
    id: 2,
    question: 'Do you offer custom furniture design?',
    answer: 'Yes, we offer custom design services. Our team of experienced designers can work with you to create bespoke furniture pieces that perfectly match your vision and space requirements.'
  },
  {
    id: 3,
    question: 'What is your delivery and shipping policy?',
    answer: 'We offer free delivery within the metropolitan area for orders over $500. Standard delivery takes 2-4 weeks, while custom pieces may take 6-8 weeks. We handle all assembly and setup.'
  },
  {
    id: 4,
    question: 'Do you provide warranty on your products?',
    answer: 'All our furniture comes with a comprehensive 5-year warranty covering manufacturing defects and structural issues. We also offer extended warranty options for additional peace of mind.'
  },
  {
    id: 5,
    question: 'Can I return or exchange my purchase?',
    answer: 'We offer a 30-day return policy for all standard items in original condition. Custom pieces are final sale but come with our quality guarantee. Exchange policies may vary by item.'
  }
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const answersRef = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleFAQ = (id: number) => {
    const isOpening = openFAQ !== id;
    
    if (openFAQ !== null && answersRef.current[openFAQ]) {
      // Close currently open FAQ
      gsap.to(answersRef.current[openFAQ], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }

    if (isOpening) {
      setOpenFAQ(id);
      // Open new FAQ after a brief delay
      setTimeout(() => {
        if (answersRef.current[id]) {
          gsap.set(answersRef.current[id], { height: 'auto' });
          const height = answersRef.current[id]!.scrollHeight;
          gsap.fromTo(answersRef.current[id], 
            { height: 0, opacity: 0 },
            { height: height, opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        }
      }, 100);
    } else {
      setOpenFAQ(null);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our furniture, services, and policies
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
              <div
                ref={(el) => answersRef.current[faq.id] = el}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
