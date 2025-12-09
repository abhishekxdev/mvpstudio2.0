'use client';

import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, loop = true, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length && !loop) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delaySpeed);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, loop, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <>
      {words[index].substring(0, subIndex)}
    </>
  );
};

const Hero = () => {
  return (
    <div className="container relative z-20 mx-auto">
      <div className="flex flex-col items-center justify-center pt-11 md:pt-20 px-4 pb-16 md:pb-20 bg-gray-50 rounded-b-3xl">

        {/* Trusted By */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-full ring-ln-gray-200 md:flex-row md:bg-ln-gray-25 md:px-2 md:py-1.5 md:ring-1">
          <p className="text-ln-paragraph-sm text-ln-gray-600 text-center md:px-1.5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Slots Available for December
          </p>
        </div>

        {/* Title */}
        <h1 className="text-[32px] leading-[40px] font-550 -tracking-[0.022em] text-ln-gray-900 text-center md:text-[45px] md:leading-[53px] xl:text-[74px] xl:leading-[85px] mt-3 md:mt-5 w-full">
          <div className="overflow-hidden flex justify-center">
            <Typewriter words={["MVP Development", "Product Design", "Launch Ready"]} />
          </div>
          for ambitious founders
        </h1>

        {/* Description */}
        <p className="mt-4 text-pretty text-[15px] leading-[24px] text-ln-gray-700 text-center md:text-[17px] md:leading-[29px] md:mt-6 xl:text-[19px] xl:leading-[31px] w-full px-2">
          Transform your startup idea into reality in just 21 days<br/> with expert MVP development and product design <br/>services tailored for founders.
        </p>

        {/* CTA */}
        <div className="mt-6 md:mt-8 flex flex-col items-center justify-center sm:flex-row w-full sm:w-auto gap-3 sm:px-0 max-w-2xl mx-auto">
          <a className="group relative inline-flex items-center justify-center whitespace-nowrap transition duration-200 ease-out outline-none focus:outline-none disabled:pointer-events-none bg-black text-white shadow-lg hover:bg-black/90 disabled:bg-ln-gray-25 disabled:text-ln-gray-450 disabled:shadow-none h-11 gap-2 sm:gap-3.5 rounded-[13px] px-[18px] text-ln-label-sm w-full sm:w-auto max-w-md" href="https://calendly.com/mvpstudio-in/30min" target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-1 text-center justify-center w-full sm:w-auto">
              <span>Book A Call</span>
              <span className="hidden sm:inline text-ln-paragraph-sm text-white/70">-</span>
              <span className="hidden sm:inline text-ln-paragraph-sm text-white/80">Let's Build Your MVP</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="-mx-1.5 size-5 shrink-0 text-white/80 group-disabled:text-ln-gray-450">
              <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.25" d="M8.333 13.333 11.667 10 8.333 6.667"></path>
            </svg>
          </a>
          <a className="group relative inline-flex items-center justify-center whitespace-nowrap transition duration-200 ease-out outline-none focus:outline-none disabled:pointer-events-none bg-transparent text-ln-gray-900 ring-1 ring-ln-gray-200 hover:bg-ln-gray-50 disabled:bg-ln-gray-25 disabled:text-ln-gray-450 disabled:shadow-none h-11 gap-2 rounded-[13px] px-[18px] text-ln-label-sm w-full sm:w-auto max-w-md" href="/projects">
            <span>See Our Work</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-5 shrink-0 text-ln-gray-600">
              <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.25" d="M8.333 13.333 11.667 10 8.333 6.667"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
