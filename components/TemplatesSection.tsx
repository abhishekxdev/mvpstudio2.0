import React from 'react';

const TemplatesSection = () => {
  return (
    <div className="container mx-auto mt-16 md:mt-0">
      <div>
        <div className="flex flex-col items-center justify-center px-4">
          <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-[18px] text-ln-gray-400">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 5.625v4.375l2.5 2.5m4.375-2.5a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0Z"></path>
            </svg>
            MVP Portfolio
            <div className="rounded-[5px] bg-green-50 px-[5px] py-[3px] text-ln-subheading-xs text-green-600 shadow-ln-badge-green">21 DAYS</div>
          </div>
          <h4 className="mt-4 text-pretty text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 text-center xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em] w-full">
            From Idea to Launch <br /> in Record Time
          </h4>
        </div>

        {/* Tabs - Mobile & Desktop */}
        <div className="mx-auto mt-6 md:mt-8 xl:mt-12 w-full max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:px-0">
            <TemplateTab active text="SaaS Products" />
            <TemplateTab text="Marketplace Apps" />
            <TemplateTab text="Mobile First" />
            <TemplateTab text="AI Solutions" />
            <TemplateTab text="Web3 Apps" />
          </div>
        </div>

      </div>
    </div>
  );
};

interface TemplateTabProps {
  active?: boolean;
  text: string;
  soon?: boolean;
}

const TemplateTab = ({ active = false, text, soon = false }: TemplateTabProps) => (
  <div className={`flex h-10 md:h-12 items-center gap-2 md:gap-3 rounded-[12px] md:rounded-[15px] px-2 md:px-3 text-xs md:text-sm ${active ? '' : 'bg-ln-gray-25 ring-1 ring-ln-gray-100'} ${soon ? 'opacity-50' : ''}`}>
    <span className="pr-0.5 md:pr-1 text-ln-label-sm md:text-ln-label-md text-ln-gray-800 whitespace-nowrap">{text}</span>
    {soon && <div className="flex h-4 md:h-5 items-center rounded-full bg-ln-gray-100 px-1 md:px-1.5 text-[10px] md:text-ln-subheading-xs text-ln-gray-500 -ml-1 md:-ml-2.5">SOON</div>}
  </div>
);

export default TemplatesSection;
