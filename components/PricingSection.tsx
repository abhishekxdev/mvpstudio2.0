import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <div id="pricing" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center pb-12 md:pb-16 text-center">
        <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-ln-gray-400">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.5 11.25V9m0-2.25h.008M16.438 9a6.938 6.938 0 1 1-13.876 0 6.938 6.938 0 0 1 13.876 0Z"></path>
          </svg>
          Simple & Transparent Pricing
        </div>
        <h2 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em] w-full">
          Choose The Perfect Plan<br className="hidden min-[390px]:inline" /> For Your MVP
        </h2>
        <p className="mt-3 text-ln-paragraph-md text-ln-gray-600 md:mt-5 xl:text-ln-paragraph-lg w-full max-w-3xl">
          Flexible pricing options designed to fit your needs, from rapid prototypes to production-ready applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <PricingCard
          title="Starter"
          price="$2,999"
          description="Perfect for validating your idea quickly"
          features={[
            "2-3 week delivery",
            "Up to 5 core features",
            "Basic UI/UX design",
            "Mobile responsive",
            "Database setup",
            "1 week support"
          ]}
          buttonText="Get Started"
          highlighted={false}
        />

        <PricingCard
          title="Professional"
          price="$5,999"
          description="For startups ready to launch and scale"
          features={[
            "3-4 week delivery",
            "Up to 12 core features",
            "Custom UI/UX design",
            "Mobile responsive",
            "Advanced database setup",
            "Authentication system",
            "API integrations",
            "2 weeks support"
          ]}
          buttonText="Get Started"
          highlighted={true}
        />

        <PricingCard
          title="Enterprise"
          price="Custom"
          description="Comprehensive solution for complex products"
          features={[
            "Custom timeline",
            "Unlimited features",
            "Premium UI/UX design",
            "Mobile responsive",
            "Complex database architecture",
            "Advanced authentication",
            "Multiple API integrations",
            "4 weeks support",
            "Dedicated team"
          ]}
          buttonText="Contact Us"
          highlighted={false}
        />
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

const PricingCard = ({ title, price, description, features, buttonText, highlighted }: PricingCardProps) => (
  <div className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
    highlighted
      ? 'bg-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
      : 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-ln-gray-200'
  }`}>
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ln-orange text-white text-xs font-medium px-3 py-1 rounded-full">
        Most Popular
      </div>
    )}

    <div className="text-center mb-8">
      <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-ln-gray-900'}`}>
        {title}
      </h3>
      <div className="mb-3">
        <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-ln-gray-900'}`}>
          {price}
        </span>
        {price !== 'Custom' && <span className={highlighted ? 'text-gray-300' : 'text-ln-gray-600'}>/project</span>}
      </div>
      <p className={`text-sm ${highlighted ? 'text-gray-300' : 'text-ln-gray-600'}`}>
        {description}
      </p>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlighted ? 'text-ln-orange' : 'text-green-600'}`} />
          <span className={`text-sm ${highlighted ? 'text-gray-200' : 'text-ln-gray-700'}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
      highlighted
        ? 'bg-white text-black hover:bg-gray-100'
        : 'bg-black text-white hover:bg-black/90'
    }`}>
      {buttonText}
    </button>
  </div>
);

export default PricingSection;
