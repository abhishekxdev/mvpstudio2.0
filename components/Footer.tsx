import React from 'react';

const Footer = () => {
  return (
    <div className="mt-10 border-t border-ln-gray-200 xl:mt-[108px]">
      <footer className="container mx-auto relative flex-col gap-12 xl:flex xl:pt-[68px]">
        {/* Decor */}
        <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -left-9 -top-[5px] hidden mac:block" />
        <img src="/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] -right-9 -top-[5px] hidden mac:block" />

        <div className="flex flex-col items-center justify-center gap-5 py-10 px-4 xl:gap-6 xl:py-0">
          <a href="/">
            <img src="/logomvp.png" alt="" className="object-contain" width="128" height="128" />
          </a>
          <div className="text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 text-center w-full">
            Lets Build Your Idea.
           
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://calendly.com/mvpstudio-in/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ln-gray-900 px-6 py-3 text-ln-label-md text-white transition-all duration-200 hover:bg-ln-gray-800 hover:shadow-lg"
            >
              Book A Call
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center pb-8 pt-6 xl:pt-6 border-t border-ln-gray-200">
           <p className="text-center text-ln-paragraph-sm text-ln-gray-500">© 2025 MVP Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
