'use client'

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const CourseContent = () => {
  const [sections, setSections] = useState([
    {
      name: 'Section 1: Introduction to HTML',
      details: { total: 11, watched: 0 },
      videos: [
        { title: '1. Introduction', link: 'https://www.youtube.com/embed/hu-q2zYwEYs', duration: '20min' },
        { title: '2. HTML Basics', link: 'https://www.youtube.com/embed/mbeT8mpmtHA', duration: '20min' },
        { title: '3. HTML Forms', link: 'https://www.youtube.com/embed/YwbIeMlxZAU', duration: '30min' },
        { title: '4. CSS Basics', link: 'https://www.youtube.com/embed/D3iEE29ZXRM', duration: '42min' },
        { title: '5. CSS Class & Sections', link: 'https://www.youtube.com/embed/FHZn6706e3Q', duration: '27min' },
        { title: '6. Semantic Elements', link: 'https://www.youtube.com/embed/kGW8Al_cga4', duration: '15min' },
        { title: '7. Chrome Dev Tools', link: 'https://www.youtube.com/embed/25R1Jl5P7Mw', duration: '12min' },
        { title: '8. CSS Layout & Position', link: 'https://www.youtube.com/embed/XQaHAAXIVg8', duration: '40min' },
        { title: '9. Pseudo Classes & Elements', link: 'https://www.youtube.com/embed/FMu2cKWD90g', duration: '16min' },
        { title: '10. Media Queries', link: 'https://www.youtube.com/embed/Xig7NsIE6DI', duration: '22min' },
        { title: '11. wrap up & Next Steps', link: 'https://www.youtube.com/embed/qES0HypsUK0', duration: '3min' },
      ],
    },
    {
      name: 'Section 2: Introduction to JavaScript',
      details: { total: 6, watched: 0 },
      videos: [
        { title: '1. Modern JS Intro & Setup', link: 'https://www.youtube.com/embed/iWOYAxlnaww', duration: '12min' },
        { title: '2. Modern JS Syntax Basics & Types', link: 'https://www.youtube.com/embed/FhguwBJeqWs', duration: '1hr24min' },
        { title: '3. Modern JS Loops & Conditionals', link: 'https://www.youtube.com/embed/JloLGV9DmtQ', duration: '53min' },
        { title: '4. Modern JS Objects', link: 'https://www.youtube.com/embed/X0ipw1k7ygU', duration: '37min' },
        { title: '5. Modern JS JavaScript & DOM', link: 'https://www.youtube.com/embed/wKBu_dEaF9E', duration: '53min' },
      ],
    },
    {
      name: 'Section 3: Introduction to Node.js',
      details: { total: 7, watched: 0 },
      videos: [
        { title: '1. Introduction Node.js', link: 'https://www.youtube.com/embed/zb3Qk8SG5Ms', duration: '17min' },
        { title: '2. Basics', link: 'https://www.youtube.com/embed/OIBIXYLJjsI', duration: '42min' },
        { title: '3. Client & Servers', link: 'https://www.youtube.com/embed/-HPZ1leCV8k', duration: '13min' },
        { title: '4. Request & Responses', link: 'https://www.youtube.com/embed/DQD00NAUPNk', duration: '26min' },
        { title: '5. NPM', link: 'https://www.youtube.com/embed/bdHE2wHT-gQs', duration: '16min' },
        { title: '6. Express App', link: 'https://www.youtube.com/embed/Lr9WUkeYSA8', duration: '19min' },
        { title: '7. Templates', link: 'https://www.youtube.com/embed/yXEesONd_54', duration: '35min' },
        { title: '8. Middleware & Static Files', link: 'https://www.youtube.com/embed/_GJKAs7A0_4', duration: '16min' },
        { title: '9. MongoDB & Mongoose', link: 'https://www.youtube.com/embed/bxsemcrY4gQ', duration: '36min' },
        { title: '10. Get, Post & Delete Requests', link: 'https://www.youtube.com/embed/VVGgacjzc2Y', duration: '33min' },
        { title: '11. Express Router & MVC', link: 'https://www.youtube.com/embed/zW_tZR0Ir3Q', duration: '22min' },
        { title: '12. Next Steps', link: 'https://www.youtube.com/embed/nYAyhRAV87A', duration: '4min' },
      ],
    },
  ]);

  const [expandedSections, setExpandedSections] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(sections[0].videos[0]);
  const [videoDescription, setVideoDescription] = useState(currentVideo.title); 

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) =>
      prev.includes(sectionIndex)
        ? prev.filter((index) => index !== sectionIndex)
        : [...prev, sectionIndex]
    );
  };

  const selectVideo = (section, video) => {
    setCurrentVideo(video);
    setVideoDescription(video.title);

    if (!video.watched) {
      video.watched = true;
      const newSections = [...sections];
      const sectionIndex = newSections.findIndex((sec) => sec.name === section.name);
      newSections[sectionIndex].videos = [...section.videos];
      newSections[sectionIndex].videos[section.videos.indexOf(video)] = video;
      
      // Update watched count in section details
      newSections[sectionIndex].details.watched += 1;
      setSections(newSections);
    }
  };

  return (
    <div className="flex flex-row-reverse h-screen ">
      <div className=" w-[450px] bg-white p-0 h-screen flex flex-col items-start justify-center">
        <h2 className="text-[22px] font-bold mb-6 text-black">Class</h2>
      <div className='h-screen overflow-x-auto no-scrollbar'>

        {sections.map((section, sectionIndex) => (
          <div
            key={section.name}
            className=" mb-0 min-h-[10px] flex flex-col transition-all duration-300 ease-in-out" 
            >
            <div
              className=" p-5 flex justify-between items-center cursor-pointer hover:bg-blue-200"
              onClick={() => toggleSection(sectionIndex)}
              >
              <div>
                <span className="font-semibold text-base text-black">{section.name}</span>
                <span className="block text-gray-600 text-sm">
                  {section.details.watched} / {section.details.total}
                </span>
              </div>
              <div className="icon">
                {expandedSections.includes(sectionIndex) ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                )}
              </div>
            </div>

            {expandedSections.includes(sectionIndex) && (
              <ul className="flex flex-col space-y-3 p-4">
                {section.videos.map((video) => (
                  <li
                    key={video.title}
                    className={`p-3 rounded-none flex flex-col justify-between items-start cursor-pointer
                      ${currentVideo.title === video.title
                        ? 'bg-white text-green-500'
                        : 'hover:bg-gray-200 text-black'}`}
                    onClick={() => selectVideo(section, video)}
                  >
                    {/* Video Title */}
                    <span className={`text-[14px] ${video.watched ? 'text-green-600' : ''} w-full`}>
                      {video.title}
                    </span>

                    {/* Wrapper for YouTube Icon and Duration */}
                    <div className="flex items-center space-x-2 mt-1">
                      <img
                        src="/youtube.png"
                        alt="Video Icon"
                        className="h-6 w-6"
                      />
                      <span className={`text-[14px] ${video.watched ? 'text-green-600' : ''}`}>
                        {video.duration}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}</div>
      </div>

      {/* Video Player Section */}
      <div className=" w-full bg-white ">
        <div className=" bg-black rounded-lg overflow-hidden w-full">
          <iframe
            className="w-full h-[80vh] rounded-lg"
            src={currentVideo.link}
            title="Video Player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-black">{videoDescription}</h3>
          {/* Description will show the video name here */}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
