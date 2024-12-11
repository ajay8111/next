"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import QuizComponent from '../components/QuizComponent'; 



const CourseContent = () => {
  const [sections, setSections] = useState([
    {
      name: "Section 1: Introduction to HTML",
      details: { total: 11, watched: 0 },
      videos: [
        {
          title: "1. Introduction",
          link: "https://www.youtube.com/embed/hu-q2zYwEYs",
          duration: "20min",
        },
        {
          title: "2. HTML Basics",
          link: "https://www.youtube.com/embed/mbeT8mpmtHA",
          duration: "20min",
        },
        {
          title: "3. HTML Forms",
          link: "https://www.youtube.com/embed/YwbIeMlxZAU",
          duration: "30min",
        },
        {
          title: "4. CSS Basics",
          link: "https://www.youtube.com/embed/D3iEE29ZXRM",
          duration: "42min",
        },
        {
          title: "5. CSS Class & Sections",
          link: "https://www.youtube.com/embed/FHZn6706e3Q",
          duration: "27min",
        },
        {
          title: "Quiz",
          link: "",
          duration: "",
          type: "quiz",
        },
        {
          title: "6. Semantic Elements",
          link: "https://www.youtube.com/embed/kGW8Al_cga4",
          duration: "15min",
        },
        {
          title: "7. Chrome Dev Tools",
          link: "https://www.youtube.com/embed/25R1Jl5P7Mw",
          duration: "12min",
        },
        {
          title: "8. CSS Layout & Position",
          link: "https://www.youtube.com/embed/XQaHAAXIVg8",
          duration: "40min",
        },
        {
          title: "9. Pseudo Classes & Elements",
          link: "https://www.youtube.com/embed/FMu2cKWD90g",
          duration: "16min",
        },
        {
          title: "10. Media Queries",
          link: "https://www.youtube.com/embed/Xig7NsIE6DI",
          duration: "22min",
        },
        {
          title: "11. wrap up & Next Steps",
          link: "https://www.youtube.com/embed/qES0HypsUK0",
          duration: "3min",
        },
      ],
    },
    {
      name: "Section 2: Introduction to JavaScript",
      details: { total: 6, watched: 0 },
      videos: [
        {
          title: "1. Modern JS Intro & Setup",
          link: "https://www.youtube.com/embed/iWOYAxlnaww",
          duration: "12min",
        },
        {
          title: "2. Modern JS Syntax Basics & Types",
          link: "https://www.youtube.com/embed/FhguwBJeqWs",
          duration: "1hr24min",
        },
        {
          title: "3. Modern JS Loops & Conditionals",
          link: "https://www.youtube.com/embed/JloLGV9DmtQ",
          duration: "53min",
        },
        {
          title: "4. Modern JS Objects",
          link: "https://www.youtube.com/embed/X0ipw1k7ygU",
          duration: "37min",
        },
        {
          title: "5. Modern JS JavaScript & DOM",
          link: "https://www.youtube.com/embed/wKBu_dEaF9E",
          duration: "53min",
        },
        {
          title: "6. Curriculam Document",
          link: "/Curriculum.pdf",
          type: "pdf",
        },
      ],
    },
    {
      name: "Section 3: Introduction to Node.js",
      details: { total: 7, watched: 0 },
      videos: [
        {
          title: "1. Introduction Node.js",
          link: "https://www.youtube.com/embed/zb3Qk8SG5Ms",
          duration: "17min",
        },
        {
          title: "2. Basics",
          link: "https://www.youtube.com/embed/OIBIXYLJjsI",
          duration: "42min",
        },
        {
          title: "3. Client & Servers",
          link: "https://www.youtube.com/embed/-HPZ1leCV8k",
          duration: "13min",
        },
        {
          title: "4. Request & Responses",
          link: "https://www.youtube.com/embed/DQD00NAUPNk",
          duration: "26min",
        },
        {
          title: "5. NPM",
          link: "https://www.youtube.com/embed/bdHE2wHT-gQs",
          duration: "16min",
        },
        {
          title: "6. Express App",
          link: "https://www.youtube.com/embed/Lr9WUkeYSA8",
          duration: "19min",
        },
        {
          title: "7. Templates",
          link: "https://www.youtube.com/embed/yXEesONd_54",
          duration: "35min",
        },
        {
          title: "8. Middleware & Static Files",
          link: "https://www.youtube.com/embed/_GJKAs7A0_4",
          duration: "16min",
        },
        {
          title: "9. MongoDB & Mongoose",
          link: "https://www.youtube.com/embed/bxsemcrY4gQ",
          duration: "36min",
        },
        {
          title: "10. Get, Post & Delete Requests",
          link: "https://www.youtube.com/embed/VVGgacjzc2Y",
          duration: "33min",
        },
        {
          title: "11. Express Router & MVC",
          link: "https://www.youtube.com/embed/zW_tZR0Ir3Q",
          duration: "22min",
        },
        {
          title: "12. Next Steps",
          link: "https://www.youtube.com/embed/nYAyhRAV87A",
          duration: "4min",
        },
      ],
    },
  ]);

  const [expandedSections, setExpandedSections] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(sections[0].videos[0]);
  const [activeTab, setActiveTab] = useState("overview");
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleSection = (sectionIndex) => {
    setExpandedSections((prev) =>
      prev.includes(sectionIndex)
        ? prev.filter((index) => index !== sectionIndex)
        : [...prev, sectionIndex]
    );
  };

  const selectVideo = (section, video) => {
    if (video.title == "Quiz") {
      setShowQuiz(true);
    } else {
      setShowQuiz(false);
    }
    setCurrentVideo(video);
    if (!video.watched) {
      video.watched = true;
      const newSections = [...sections];
      const sectionIndex = newSections.findIndex(
        (sec) => sec.name === section.name
      );
      newSections[sectionIndex].videos = [...section.videos];
      newSections[sectionIndex].videos[section.videos.indexOf(video)] = video;

      newSections[sectionIndex].details.watched += 1;
      setSections(newSections);
    }
  };

  const getVideoIcon = (video) => {
    // Check if it's the Carriculam Document video
    if (video.title === "6. Curriculam Document") {
      return "/docg.png"; // Use doc.png for this specific video
    }

    if (video.title === "Quiz") {
      return "/ideas.png"; // Use doc.png for this specific video
    }

    return "/youtubeg.png"; // Default to youtube.png for other videos
  };

  const VideoPDF = () => {
    if (currentVideo.type === "pdf") {
      return (
        <object
          data={currentVideo.link}
          type="application/pdf"
          className="w-full h-[50vh] lg:h-[80vh]"
        ></object>
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row overflow-auto">
      {/* Video Player Section */}
      <div className="w-full lg:w-[80%] bg-white">
        {showQuiz ? (
          <QuizComponent />
        ) : (
          <div className="overflow-hidden w-full">
            <iframe
              className="w-full h-[30vh] sm:h-[40vh] lg:h-[80vh]"
              src={currentVideo.link}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {/* Tabs Section */}
        <div className="flex justify-around border-b-2">
          <button
            className={`w-70 text-center py-3 font-semibold ${
              activeTab === "overview"
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`w-70 text-center py-3 font-semibold ${
              activeTab === "notes"
                ? "text-black border-b-2 border-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("notes")}
          >
            Notes
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "overview" && (
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {currentVideo.title}
              </h3>
              <p className="text-lg">
                {currentVideo.title=="Quiz" ? "This is a simple Quiz with each right answers give 1 score." :
                "This section contains a detailed description of the video"}
              </p>
            </div>
          )}
          {activeTab === "notes" && (
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Notes</h3>
              {/* <textarea
                className="w-full h-[150px] border rounded p-4"
                placeholder="Write your notes here..."
              /> */}
              <p className="text-lg">
                No notes related to the video avilable right now. Able to
                customize this content.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className=" lg:w-[20%]  bg-white p-0 flex flex-col items-start justify-center border-l-2">
        {/* Classes Section */}
        <h2 className="text-[22px]  font-bold mb-6 text-black pl-5 pt-2">
          Classes
        </h2>
        <div className="h-screen overflow-x-auto w-full items-start">
          {sections.map((section, sectionIndex) => (
            <div
              key={section.name}
              className="mb-1 min-h-[20px] flex flex-col transition-all duration-300 ease-in-out"
            >
              <div
                className="p-4 flex justify-between items-start cursor-pointer hover:bg-blue-200"
                onClick={() => toggleSection(sectionIndex)}
              >
                <div>
                  <span className="font-semibold text-base text-black">
                    {section.name}
                  </span>
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
                <ul className="flex flex-col gap-0 p-0 ">
                  {section.videos.map((video) => (
                    <div
                      key={video.title}
                      className={`flex justify-start items-start gap-5 p-4 hover:bg-gray-200 ${
                        currentVideo.title === video.title ? "bg-gray-200" : ""
                      }`}
                    >
                      <input type="checkbox" className="mt-1 accent-black" />
                      <li
                        className="rounded-none flex flex-col flex-1 justify-between cursor-pointer text-black"
                        onClick={() => selectVideo(section, video)}
                      >
                        <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] w-full">
                          {video.title}
                        </span>
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0 sm:flex-row text-gray-600">
                          <img
                            src={getVideoIcon(video)}
                            alt="Video Icon"
                            className="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-4 lg:w-4"
                          />
                          <span className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px]">
                            {video.duration}
                          </span>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
