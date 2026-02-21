'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'ProjectSync',
    image: '/project1.png',
    description: 'Streamline team collaboration'
  },
  {
    id: 2,
    title: 'CRM Dashboard',
    image: '/project2.png',
    description: 'Comprehensive CRM platform'
  },
  {
    id: 3,
    title: 'MusicFlow',
    image: '/project3.png',
    description: 'Personalized music streaming'
  },
  {
    id: 4,
    title: 'TalentMind',
    image: '/project4.png',
    description: 'AI-powered recruitment'
  },
  {
    id: 5,
    title: 'CollabHub',
    image: '/project5.png',
    description: 'Real-time collaboration'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    image: '/project6.png',
    description: 'Business intelligence'
  },
  {
    id: 7,
    title: 'FinTrack',
    image: '/project7.png',
    description: 'Smart financial tracking'
  }
];

const CodePreviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto pt-11 xl:pt-20">
      <div className="flex justify-center items-center mx-auto px-4">
        {/* Mobile View */}
        <div className="flex flex-col overflow-hidden p-px xl:hidden w-full max-w-4xl">
           <div className="relative origin-bottom flex-col rounded-20 bg-ln-gray-50 ring-1 ring-ln-gray-200 overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-auto block"
              />
           </div>
        </div>

        {/* Desktop View */}
        <div className="relative hidden xl:block w-full max-w-6xl mx-auto">
           <div className="w-full rounded-20 bg-ln-gray-25 ring-1 ring-ln-gray-200 xl:rounded-[28px] overflow-hidden">
              <div className="relative">
                 <img
                   src={projects[currentIndex].image}
                   alt={projects[currentIndex].title}
                   className="w-full h-auto block"
                 />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreviewSection;
