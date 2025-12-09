'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full flex-col items-center lg:flex lg:pt-2">
        <div className="xl:container xl:mx-auto relative z-20 flex w-full items-center justify-center gap-8">
          <header className="relative z-10 flex h-14 w-full items-center justify-between gap-4 rounded-t-2xl bg-ln-gray-25 px-4 lg:h-auto lg:w-auto lg:justify-center lg:rounded-3xl lg:bg-ln-gray-0 lg:py-1.5 lg:px-6 lg:shadow-[0_4px_12px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06),inset_0_-1px_0_rgba(0,0,0,0.05)] lg:border lg:border-gray-100/50">
            <div className="flex items-center gap-2.5">
              <a className="focus:outline-none" href="/">
                <img src="/mvplogo.png" alt="" className="h-6 w-auto object-contain" />
              </a>
            </div>

            <nav className="hidden items-center gap-8 lg:flex lg:px-8">
              <a className="text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear hover:text-ln-gray-800" href="/#why-us">Why Us</a>
              <a className="text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear hover:text-ln-gray-800" href="/projects">Projects</a>
              <a className="text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear hover:text-ln-gray-800" href="/#pricing">Plans</a>
              <a className="text-ln-label-sm text-ln-gray-600 transition duration-200 ease-linear hover:text-ln-gray-800" href="/#testimonials">Testimonials</a>
              
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a href="https://calendly.com/mvpstudio-in/30min" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-black px-4 py-2 text-ln-label-sm font-medium text-white transition duration-200 ease-linear hover:bg-black/90">
                Book A Call
              </a>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <button type="button" className="flex size-6 items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} className="text-ln-gray-700" /> : <Menu size={24} className="text-ln-gray-700" />}
              </button>
            </div>

          </header>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed top-14 left-0 w-full bg-white border-b border-ln-gray-200 p-4 shadow-lg z-40 flex flex-col gap-4 items-center">
          <a href="/#why-us" className="text-sm font-medium py-2 border-b border-ln-gray-100 w-full text-center" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="/projects" className="text-sm font-medium py-2 border-b border-ln-gray-100 w-full text-center" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/#pricing" className="text-sm font-medium py-2 border-b border-ln-gray-100 w-full text-center" onClick={() => setIsOpen(false)}>Plans</a>
          <a href="/#testimonials" className="text-sm font-medium py-2 border-b border-ln-gray-100 w-full text-center" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="/#newsletter" className="text-sm font-medium py-2 border-b border-ln-gray-100 w-full text-center" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="https://calendly.com/mvpstudio-in/30min" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-black px-4 py-2.5 text-center text-sm font-medium text-white transition duration-200 ease-linear hover:bg-black/90 w-full">
            Book A Call
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
