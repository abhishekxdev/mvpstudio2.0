import React from 'react';
import { Check } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div id="pricing" className="container mx-auto">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[18px] text-ln-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Pricing
        </div>
        <h4 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 text-center md:text-ln-title-h4 xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em] w-full">
          Choose Your Plan
        </h4>
        <p className="mt-2 text-ln-paragraph-md text-ln-gray-600 text-center xl:mt-3 xl:text-ln-paragraph-lg w-full max-w-2xl">
          Flexible pricing options to match your startup journey
        </p>

        <div className="mt-6 flex w-full flex-col flex-wrap justify-center gap-3 md:flex-row md:gap-6 xl:mt-12 px-4 md:px-0">
          <PricingCard
            title="MVP Development"
            price="$3,000"
            features={[
              "21-day delivery timeline",
              "Full product design",
              "Development & deployment",
              "Basic support included",
              "Perfect for launching fast"
            ]}
            buttonText="Get Started"
            href="https://calendly.com/mvpstudio-dev/30min"
          />
          <PricingCard
            title="Growth Retainer Plan"
            price="$4,000"
            features={[
              "Ongoing development support",
              "Feature iterations",
              "Performance optimization",
              "Priority support",
              "Monthly strategy calls"
            ]}
            buttonText="Contact Us"
            href="https://calendly.com/mvpstudio-dev/30min"
            featured
          />
          <PricingCard
            title="Landing Pages"
            price="$1,000"
            features={[
              "High-converting design",
              "Mobile responsive",
              "SEO optimized",
              "Fast turnaround",
              "Ready to launch"
            ]}
            buttonText="Get Started"
            href="https://calendly.com/mvpstudio-dev/30min"
          />
        </div>
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  href: string;
  featured?: boolean;
}

const PricingCard = ({ title, price, features, buttonText, href, featured = false }: PricingCardProps) => (
  <div className={`flex w-full flex-col rounded-2xl bg-ln-gray-0 p-6 shadow-ln-xs md:w-[calc(50%-12px)] xl:w-[368px] xl:rounded-3xl xl:p-8 transition-all hover:shadow-lg ${featured ? 'ring-2 ring-black' : ''}`}>
    {featured && (
      <div className="mb-3 inline-flex items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-medium text-white self-start">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-550 text-ln-gray-900 md:text-2xl">{title}</h3>
    <div className="mt-3 mb-6">
      <span className="text-2xl font-550 text-ln-gray-900 md:text-3xl">{price}</span>
    </div>

    <ul className="space-y-3 mb-6 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2 text-ln-paragraph-sm text-ln-gray-600">
          <Check className="size-5 shrink-0 text-green-600 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center whitespace-nowrap transition duration-200 ease-out h-11 rounded-[13px] px-[18px] text-ln-label-sm ${
        featured
          ? 'bg-black text-white hover:bg-black/90'
          : 'bg-transparent text-ln-gray-900 ring-1 ring-ln-gray-200 hover:bg-ln-gray-50'
      }`}
    >
      {buttonText}
    </a>
  </div>
);

export default CommunitySection;
