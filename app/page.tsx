import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CodePreviewSection from '@/components/CodePreviewSection';
import Features from '@/components/Features';
import CustomizationSection from '@/components/CustomizationSection';
import TemplatesSection from '@/components/TemplatesSection';
import CommunitySection from '@/components/CommunitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-ln-gray-25 overflow-x-hidden">
      <div className="container pointer-events-none absolute inset-0 -z-10 hidden select-none mac:block" aria-hidden="true">
        <div className="ruler-ticks absolute -left-[4.5rem] top-[144px] flex flex-col gap-10">
           {[0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750].map(n => <div key={n} className="text-xs text-gray-300 font-mono">{n}</div>)}
        </div>
        <div className="ruler-ticks ruler-ticks-right absolute -right-[4.5rem] top-[144px] flex flex-col gap-10">
           {[0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750].map(n => <div key={n} className="text-xs text-gray-300 font-mono">{n}</div>)}
        </div>
        <div className="absolute -left-8 rotate-90 bleed-ln-gray-200 bleed-border-b"></div>
        <div className="absolute -right-8 rotate-90 bleed-ln-gray-200 bleed-border-b"></div>
      </div>

      <div className="xl:container xl:mx-auto relative z-10">
        <Navbar />
        <main className="pt-16 lg:pt-24">
          <Hero />
          <CodePreviewSection />

          <div className="mx-auto flex h-8 w-full max-w-[596px] items-center justify-center gap-6 px-4 mb-16 mt-6 xl:my-24">
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
             <img src="/mvplogo.png" alt="" width="34" height="26" className="shrink-0 object-contain" aria-hidden="true" />
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
          </div>

          <section aria-label="Why Choose MVP Studio">
            <Features />
          </section>
          <section aria-label="Our Services">
            <CustomizationSection />
          </section>

          <div className="mx-auto flex h-8 w-full max-w-[596px] items-center justify-center gap-6 px-4 my-16 hidden md:flex xl:my-24">
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
             <img src="/mvplogo.png" alt="" width="34" height="26" className="shrink-0 object-contain" />
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
          </div>

          <section aria-label="Our Portfolio">
            <TemplatesSection />
          </section>

          <div className="mx-auto flex h-8 w-full max-w-[596px] items-center justify-center gap-6 px-4 mb-16 mt-8 hidden md:flex xl:my-24" aria-hidden="true">
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
             <img src="/mvplogo.png" alt="" width="34" height="26" className="shrink-0 object-contain" />
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
          </div>

          <section aria-label="Pricing Plans">
            <CommunitySection />
          </section>

          <div className="mx-auto flex h-8 w-full max-w-[596px] items-center justify-center gap-6 px-4 mb-16 mt-8 hidden md:flex xl:my-24" aria-hidden="true">
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
             <img src="/mvplogo.png" alt="" width="34" height="26" className="shrink-0 object-contain" />
             <div className="relative h-px w-full flex-1 bg-ln-gray-200">
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
               <img src="https://alignui.com/images/landing/dot-gray-25.png" width="9" height="9" alt="" className="absolute z-30 min-h-[9px] min-w-[9px] right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
             </div>
          </div>

          <section aria-label="Client Testimonials">
            <TestimonialsSection />
          </section>
          <section aria-label="Frequently Asked Questions">
            <NewsletterSection />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
