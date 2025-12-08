'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const ProjectCard = ({ title, image }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="aspect-video w-full overflow-hidden bg-gray-100">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "ProjectSync",
      description: "A comprehensive project management platform designed to streamline team collaboration and boost productivity. Features real-time updates, task tracking, and intuitive workflow management.",
      image: "/project_sync.png",
      tags: ["Web App", "Collaboration", "SaaS"]
    },
    {
      title: "MusicFlow",
      description: "Modern music streaming application with personalized playlists, social features, and high-quality audio playback. Built for music lovers who want a seamless listening experience.",
      image: "/musicflow.png",
      tags: ["Mobile", "Entertainment", "Audio"]
    },
    {
      title: "TalentMind",
      description: "AI-powered recruitment platform that connects top talent with leading companies. Features intelligent matching, automated screening, and comprehensive candidate management.",
      image: "/talentmind.png",
      tags: ["Web App", "AI", "HR Tech"]
    },
    {
      title: "CollabHub",
      description: "Real-time collaboration workspace for distributed teams. Includes video conferencing, document sharing, and project management tools all in one seamless platform.",
      image: "/collb.png",
      tags: ["Web App", "Collaboration", "Remote Work"]
    },
    {
      title: "Analytics Dashboard",
      description: "Powerful business intelligence dashboard with real-time data visualization, custom reporting, and actionable insights. Helps teams make data-driven decisions faster.",
      image: "/dashboard.png",
      tags: ["Web App", "Analytics", "Business Intelligence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[32px] leading-[40px] font-550 -tracking-[0.022em] text-ln-gray-900 md:text-[45px] md:leading-[53px] xl:text-[74px] xl:leading-[85px] mb-4 md:mb-6">
            Our Work
          </h1>
          <p className="text-[15px] leading-[24px] text-ln-gray-700 md:text-[17px] md:leading-[29px] xl:text-[19px] xl:leading-[31px] max-w-3xl mx-auto">
            Explore our portfolio of successful projects. From MVPs to full-scale applications,
            we've helped founders bring their visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-[28px] leading-[36px] font-550 -tracking-[0.02em] text-ln-gray-900 md:text-[32px] md:leading-[40px] mb-3 md:mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-[15px] leading-[24px] text-ln-gray-700 md:text-[17px] md:leading-[29px] mb-6 md:mb-8">
              Let's discuss how we can help bring your vision to life in just 21 days.
            </p>
            <a
              href="https://calendly.com/mvpstudio-in/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-[13px] px-6 py-3 text-ln-label-sm font-medium hover:bg-black/90 transition-colors"
            >
              Book A Call
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="size-5">
                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.25" d="M8.333 13.333 11.667 10 8.333 6.667"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
