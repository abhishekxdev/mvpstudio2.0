import React from 'react';

const Features = () => {
  return (
    <div id="why-us" className="container mx-auto pb-10 md:pb-[120px]">
      <div className="flex flex-col items-center justify-center pb-4 md:pb-14 text-center px-4">
        <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-ln-gray-400">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.5 5.813V9l2.063 2.063M16.436 9A6.937 6.937 0 1 1 2.563 9a6.937 6.937 0 0 1 13.874 0Z"></path>
          </svg>
          Rapid MVP Development
        </div>
        <h2 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em] w-full">
          Ship Your MVP Fast,<br className="hidden min-[390px]:inline" /> Validate Your Idea Faster
        </h2>
        <p className="mt-3 text-ln-paragraph-md text-ln-gray-600 md:mt-5 xl:text-ln-paragraph-lg w-full max-w-3xl">
          MVP Studio specializes in <span className="text-ln-label-lg text-ln-gray-800">rapid prototyping</span> and <span className="text-ln-label-lg text-ln-gray-800">production-ready MVPs</span> to get your product in users' hands quickly.
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden items-center justify-center gap-1 xl:flex">
        <FeatureButton iconColor="text-template-ai">Define MVP scope and features</FeatureButton>
        <Divider />
        <FeatureButton iconColor="text-template-ai">Build and iterate rapidly</FeatureButton>
        <Divider />
        <FeatureButton iconColor="text-ln-orange" loading>Ship and gather feedback</FeatureButton>
      </div>

      {/* Mobile and Tablet view */}
      <div className="flex flex-col items-center gap-3 px-4 xl:hidden">
        <FeatureButton iconColor="text-template-ai">Define MVP scope and features</FeatureButton>
        <FeatureButton iconColor="text-template-ai">Build and iterate rapidly</FeatureButton>
        <FeatureButton iconColor="text-ln-orange" loading>Ship and gather feedback</FeatureButton>
      </div>
    </div>
  );
};

interface FeatureButtonProps {
  children: React.ReactNode;
  iconColor: string;
  loading?: boolean;
}

const FeatureButton = ({ children, iconColor, loading = false }: FeatureButtonProps) => (
  <button type="button" className={`relative flex h-11 w-full xl:w-auto items-center justify-center xl:justify-start gap-3 rounded-full xl:rounded-full pl-[15px] pr-4 transition duration-500 ease-nc text-[14px] leading-[20px] font-599 -tracking-[0.02em] shadow-ln-badge-gray ring-ln-gray-200 xl:shadow-none xl:ring-1 xl:ring-inset ${loading ? 'bg-ln-gray-0 text-ln-gray-700' : 'bg-ln-gray-50 text-ln-gray-700'}`}>
    <div className="grid size-4 shrink-0 items-center justify-center">
       {loading ? (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className={`size-4 animate-spin ${iconColor}`}><path fill="currentColor" fillRule="evenodd" d="M8 .375c.345 0 .625.28.625.625v2.649a.625.625 0 0 1-1.25 0V.999c0-.344.28-.624.625-.624M2.61 2.608a.625.625 0 0 1 .883 0l1.873 1.873a.625.625 0 1 1-.884.884L2.608 3.492a.625.625 0 0 1 0-.884Zm10.783 0a.625.625 0 0 1 0 .885L11.52 5.365a.625.625 0 0 1-.884-.883l1.873-1.873a.625.625 0 0 1 .884 0ZM.375 8.002c0-.346.28-.625.625-.625h2.649a.625.625 0 1 1 0 1.25H1A.625.625 0 0 1 .375 8Zm11.351 0c0-.346.28-.625.625-.625H15a.625.625 0 1 1 0 1.25h-2.649A.625.625 0 0 1 11.726 8Zm-1.09 2.634a.625.625 0 0 1 .883 0l1.873 1.873a.625.625 0 1 1-.884.884l-1.873-1.873a.625.625 0 0 1 0-.884Zm-5.27 0a.625.625 0 0 1 0 .884l-1.873 1.873a.625.625 0 1 1-.884-.884l1.873-1.873a.625.625 0 0 1 .883 0ZM8 11.726c.345 0 .625.28.625.625V15a.625.625 0 1 1-1.25 0v-2.649c0-.345.28-.625.625-.625" clipRule="evenodd"></path></svg>
       ) : (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 14" className={`size-[15px] ${iconColor}`}><path fill="currentColor" fillRule="evenodd" d="M7.5 0a7 7 0 1 0 0 14 7 7 0 0 0 0-14m2.642 5.693a.7.7 0 0 0-1.084-.886l-2.66 3.251-.853-.853a.7.7 0 0 0-.99.99l1.4 1.4a.7.7 0 0 0 1.037-.052z" clipRule="evenodd"></path></svg>
       )}
    </div>
    <span className="text-center xl:text-left">{children}</span>
  </button>
);

const Divider = () => (
  <div className="w-12 h-[18px] flex items-center justify-center text-ln-gray-200">
    <div className="h-px w-full bg-current"></div>
  </div>
);

export default Features;
