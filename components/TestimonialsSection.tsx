'use client';

import React from 'react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, HealthTech Startup",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "MVP Studio turned our idea into a fully functional product in just 3 weeks. The quality exceeded our expectations and we were able to secure our first round of funding based on their work.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, FinanceFlow",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "Working with MVP Studio was a game-changer. They understood our vision immediately and delivered a production-ready MVP that our users love. Highly recommend for any founder looking to move fast.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Co-founder, EduLearn",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "The team's expertise in rapid development is unmatched. They helped us validate our idea quickly and iterate based on real user feedback. Best investment we made for our startup.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Founder, MarketPlace Pro",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "From concept to launch in 21 days. The MVP Studio team is professional, responsive, and delivered exactly what we needed to start acquiring customers. Their process is simply brilliant.",
    rating: 5
  },
  {
    name: "Jessica Williams",
    role: "Product Manager, SocialHub",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "Incredible attention to detail and commitment to our success. They didn't just build our MVP, they became true partners in bringing our vision to life. Could not be happier with the results.",
    rating: 5
  },
  {
    name: "Alex Kumar",
    role: "Founder, CloudSync",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "MVP Studio helped us go from idea to paying customers faster than we thought possible. Their technical expertise and understanding of startup needs is exceptional.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="container mx-auto pt-10 md:pt-14 xl:pt-[70px]">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex h-7 items-center gap-1.5 rounded-[9px] bg-ln-gray-0 pl-1.5 pr-2.5 text-ln-label-sm text-ln-gray-700 shadow-ln-subheading xl:h-8 xl:pl-2 xl:pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className="size-[18px] text-ln-gray-400">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" d="M9.5 2.25v.75m0 12v.75m6.364-11.864-.53.53M3.666 14.064l-.53.53m11.728 0-.53-.53M3.666 3.936l-.53-.53m11.989 6.094h-.75m-12 0h-.75m10.688 0a3.313 3.313 0 1 1-6.625 0 3.313 3.313 0 0 1 6.625 0Z"></path>
          </svg>
          Success Stories
        </div>
        <h4 className="mt-4 text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 text-center md:text-ln-title-h4 xl:text-[48px] xl:leading-[56px] xl:-tracking-[0.028em] w-full">
          Trusted by Founders<br className="hidden min-[390px]:inline" /> Who Ship Fast
        </h4>
        <p className="mt-3 text-ln-paragraph-md text-ln-gray-600 text-center md:mt-5 xl:text-ln-paragraph-lg w-full max-w-2xl">
          See what founders are saying about their <span className="font-medium text-ln-gray-800">MVP development experience</span> with us.
        </p>
      </div>

      <div className="mt-8 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-4 md:px-0">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col p-5 md:p-6 rounded-[16px] bg-ln-gray-0 border border-ln-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="size-4 text-amber-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>

    <p className="text-ln-paragraph-md text-ln-gray-700 leading-relaxed mb-5 flex-1">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-3 pt-4 border-t border-ln-gray-100">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="size-10 rounded-full object-cover ring-2 ring-ln-gray-100"
      />
      <div>
        <p className="text-ln-label-sm text-ln-gray-900">{testimonial.name}</p>
        <p className="text-ln-paragraph-sm text-ln-gray-600">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
