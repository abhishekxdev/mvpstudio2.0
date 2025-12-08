'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'ProjectSync',
    image: '/projectsync1.png',
    description: 'Streamline team collaboration'
  },
  {
    id: 2,
    title: 'MusicFlow',
    image: '/music1.jpg',
    description: 'Personalized music streaming'
  },
  {
    id: 3,
    title: 'TalentMind',
    image: '/talentmind.jpg',
    description: 'AI-powered recruitment'
  },
  {
    id: 4,
    title: 'CollabHub',
    image: '/collab1.jpg',
    description: 'Real-time collaboration'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    image: '/dashboard1.jpg',
    description: 'Business intelligence'
  }
];

const CodePreviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="container mx-auto pt-11 xl:pt-20">
      <div className="flex justify-center items-center mx-auto px-4">
        {/* Mobile View */}
        <div className="flex flex-col overflow-hidden p-px xl:hidden w-full max-w-4xl">
           <div className="relative aspect-video origin-bottom flex-col rounded-20 bg-ln-gray-50 ring-1 ring-ln-gray-200 overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  isTransitioning ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
                }`}
              />
           </div>
        </div>

        {/* Desktop View */}
        <div className="relative hidden xl:block w-full max-w-6xl mx-auto">
           <div className="w-full rounded-20 bg-ln-gray-25 ring-1 ring-ln-gray-200 xl:rounded-[28px] overflow-hidden">
              <div className="relative aspect-video bg-ln-gray-900">
                 <img
                   src={projects[currentIndex].image}
                   alt={projects[currentIndex].title}
                   className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                     isTransitioning ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
                   }`}
                 />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreviewSection;
