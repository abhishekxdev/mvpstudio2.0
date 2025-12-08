import React from 'react';

const CustomizationSection = () => {
  return (
    <div className="container mx-auto">
      <div className="relative z-10 overflow-hidden rounded-2xl pb-2 pt-6 md:py-12 xl:rounded-[28px] xl:py-20" style={{ background: 'linear-gradient(180deg, #1C1C1C 0%, #141414 100%)', boxShadow: '0 16px 8px rgba(31, 31, 31, .01), 0 12px 6px rgba(31, 31, 31, .04), 0 0 0 1px #0F0F0F' }}>

        {/* Dark Grid Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden mac:flex">
           <div className="container relative h-full">
              <div className="absolute top-0 h-full w-px -left-8" style={{ background: 'linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)' }}></div>
              <div className="absolute top-0 h-full w-px -right-8" style={{ background: 'linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)' }}></div>
           </div>
        </div>

        <div className="relative flex items-center justify-center gap-4 px-6 mac:px-0">
           <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-white/[.02] pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-300 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3" style={{ boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), inset 0 1px 2px rgba(255, 255, 255, .12)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-[18px] text-[#707070]"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M3.396 12.937 1.313 15.08m3.75-.428-1.25 1.285m-1.75-6.75s2.827 1.328 4.124 2.625c1.298 1.298 2.625 4.125 2.625 4.125l2.146-1.992a1.5 1.5 0 0 0 .48-1.1V11.25c3-1.5 4.874-3.938 4.5-9.188-5.25-.375-7.688 1.5-9.188 4.5H5.154a1.5 1.5 0 0 0-1.1.48zm10.874-2.812a1.312 1.312 0 1 1-2.624 0 1.312 1.312 0 0 1 2.624 0"></path></svg>
              Core Features
           </div>
        </div>

        <div className="container relative z-20 mt-3 md:mt-4">
           <div className="flex flex-col items-center gap-3 md:gap-4 text-center text-white">
              <h2 className="text-[28px] leading-[36px] font-550 -tracking-[0.02em] xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.025em]">Why Choose MVP Studio?</h2>
              <p className="w-full max-w-[564px] text-ln-paragraph-sm text-ln-gray-500 md:text-ln-gray-600 xl:text-ln-paragraph-lg">
                 <span className="font-medium text-ln-gray-400">End-to-end MVP development</span> with a focus on <span className="font-medium text-ln-gray-400">speed, quality, and market validation</span>.
              </p>
           </div>

           <div className="relative mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 divide-y divide-white/[.08] md:divide-y-0">
              <FeatureItem
                title="Rapid Prototyping"
                desc="Transform ideas into working prototypes in days, not months."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
              />
              <div className="hidden md:block absolute top-0 left-1/3 h-full w-px bg-white/[.08]"></div>
              <FeatureItem
                title="Full-Stack Development"
                desc="Complete frontend and backend solutions tailored to your needs."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" /></svg>}
              />
              <div className="hidden md:block absolute top-0 left-2/3 h-full w-px bg-white/[.08]"></div>
              <FeatureItem
                title="Modern Tech Stack"
                desc="Built with the latest technologies for scalability and performance."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>}
              />

              <div className="hidden md:block absolute top-1/3 left-0 right-0 h-px bg-white/[.08]"></div>

              <FeatureItem
                title="User-Centric Design"
                desc="Intuitive interfaces designed to maximize user engagement."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
              />
              <FeatureItem
                title="Agile Methodology"
                desc="Flexible development process with continuous iteration and feedback."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>}
              />
              <FeatureItem
                title="Market Validation"
                desc="Launch quickly to test assumptions and gather real user insights."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>}
              />

              <div className="hidden md:block absolute top-2/3 left-0 right-0 h-px bg-white/[.08]"></div>

              <FeatureItem
                title="Scalable Architecture"
                desc="Built to grow with your business from MVP to enterprise."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" /></svg>}
              />
              <FeatureItem
                title="Clean Code"
                desc="Well-structured, maintainable code that your team can build upon."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>}
              />
              <FeatureItem
                title="Ongoing Support"
                desc="Dedicated assistance to help your MVP succeed post-launch."
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>}
              />
           </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const FeatureItem = ({ title, desc, icon }: FeatureItemProps) => (
  <div className="flex flex-col items-center gap-3 md:gap-4 py-6 md:py-8 xl:py-10 text-center px-4">
     <div className="text-gray-500 scale-90 md:scale-100">{icon}</div>
     <div>
        <div className="text-[15px] md:text-ln-label-md xl:text-[18px] leading-[20px] md:leading-[24px] font-medium text-ln-gray-0">{title}</div>
        <div className="mt-1.5 md:mt-2 w-full text-pretty text-[13px] md:text-ln-paragraph-sm leading-[18px] md:leading-[20px] text-ln-gray-600 max-w-[280px] md:max-w-[320px]">{desc}</div>
     </div>
  </div>
);

export default CustomizationSection;
