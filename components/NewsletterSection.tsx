'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "What's included in the 21-day MVP development?",
    answer: "Our 21-day MVP package includes full product scoping, UI/UX design, frontend and backend development, database setup, core feature implementation, testing, and deployment. You'll get a production-ready application with clean code and documentation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer post-launch support packages to help you iterate based on user feedback, fix bugs, and add new features. We're committed to your long-term success and can scale our support based on your needs."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, battle-tested technologies including React, Next.js, TypeScript, Tailwind CSS, Supabase, and more. We select the best tech stack for your specific requirements to ensure scalability and maintainability."
  },
  {
    question: "How involved do I need to be during development?",
    answer: "We recommend daily or every-other-day check-ins to ensure alignment. You'll review designs, provide feedback on features, and validate that we're building what you envision. Your input is crucial for success."
  },
  {
    question: "Can you help with product strategy and design?",
    answer: "Absolutely! We offer product strategy sessions to help you define your MVP scope, identify core features, and create a compelling user experience. Our design team will craft intuitive interfaces that users love."
  },
  {
    question: "What if I need changes after the MVP is delivered?",
    answer: "We offer flexible engagement models for post-MVP iterations. Whether you need minor tweaks or major feature additions, we can continue working together to evolve your product based on market feedback."
  }
];

const NewsletterSection = () => {
  return (
    <div id="newsletter" className="pt-10 bleed-ln-gray-200 bleed-border-t md:pt-14 xl:pt-[70px] xl:bleed-none pb-16 md:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center w-full px-4">
          <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-ln-gray-400">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M9.5 2.813a6.188 6.188 0 1 0 0 12.375A6.188 6.188 0 0 0 9.5 2.813Zm0 4.125v3m0 1.124h.006"></path>
            </svg>
            FAQ
          </div>
          <h4 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 text-center md:text-ln-title-h4 xl:text-[32px] xl:leading-[40px] xl:-tracking-[0.028em] w-full">
            Frequently Asked Questions
          </h4>
          <p className="mt-2 text-ln-paragraph-md text-ln-gray-600 text-center xl:text-ln-paragraph-lg max-w-2xl w-full">
            Everything you need to know about <span className="font-medium text-ln-gray-800">MVP development</span> and our <span className="font-medium text-ln-gray-800">process</span>.
          </p>

          <div className="mt-8 w-full max-w-3xl space-y-3 xl:mt-12 px-4 md:px-0 mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-8 text-center px-4">
            <p className="text-ln-paragraph-md text-ln-gray-600">
              Still have questions? <a href="https://calendly.com/mvpstudio-in/30min" target="_blank" rel="noopener noreferrer" className="font-medium text-ln-gray-900 hover:text-ln-orange transition">Get in touch</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-ln-gray-200 rounded-[13px] bg-ln-gray-0 overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-ln-gray-25 transition-colors"
      >
        <span className="text-ln-label-md text-ln-gray-900 pr-4">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          className={`size-5 shrink-0 text-ln-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 8l-5 5-5-5"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
          <p className="text-ln-paragraph-md text-ln-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
