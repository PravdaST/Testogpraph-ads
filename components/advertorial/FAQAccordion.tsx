'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-bold text-neutral-900 pr-4">
              {item.question}
            </span>
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 text-neutral-700 leading-relaxed border-t border-neutral-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
