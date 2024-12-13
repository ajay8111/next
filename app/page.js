"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState([]); // Track expanded sections as an array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [areAllExpanded, setAreAllExpanded] = useState(false); // Track "Expand All" state

  const handleButtonClick = () => {
    router.push("/course");
  };

  const toggleDropdown = (index) => {
    if (openIndex.includes(index)) {
      // If section is already expanded, collapse it
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      // If section is collapsed, expand it
      setOpenIndex([...openIndex, index]);
    }
  };

  const handleVideoClick = (videoUrl) => {
    setVideoSrc(videoUrl);
    setIsModalOpen(true); // Open the modal when a video is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoSrc(""); // Clear the video source when closing the modal
  };

  const toggleAllSections = () => {
    if (areAllExpanded) {
      setOpenIndex([]); // Collapse all
    } else {
      setOpenIndex(courseContent.map((_, index) => index)); // Expand all
    }
    setAreAllExpanded(!areAllExpanded); // Toggle state
  };

  const courseContent = [
    {
      name: "Section 1: Introduction to HTML",
      details: { total: 11, watched: 0 },
      videos: [
        {
          title: " Introduction",
          link: "https://www.youtube.com/embed/hu-q2zYwEYs",
          duration: "20min",
        },
        {
          title: "HTML Basics",
          link: "https://www.youtube.com/embed/mbeT8mpmtHA",
          duration: "20min",
        },
        {
          title: "HTML Forms",
          link: "https://www.youtube.com/embed/YwbIeMlxZAU",
          duration: "30min",
        },
        {
          title: "CSS Basics",
          link: "https://www.youtube.com/embed/D3iEE29ZXRM",
          duration: "42min",
        },
        {
          title: "CSS Class & Sections",
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
      ],
    },
    {
      name: "Section 2: Introduction to JavaScript",
      details: { total: 6, watched: 0 },
      videos: [
        {
          title: "Modern JS Intro & Setup",
          link: "https://www.youtube.com/embed/iWOYAxlnaww",
          duration: "12min",
        },
        {
          title: "Modern JS Syntax Basics & Types",
          link: "https://www.youtube.com/embed/FhguwBJeqWs",
          duration: "1hr24min",
        },
        {
          title: "Modern JS Loops & Conditionals",
          link: "https://www.youtube.com/embed/JloLGV9DmtQ",
          duration: "53min",
        },
        {
          title: "Modern JS JavaScript & DOM",
          link: "https://www.youtube.com/embed/wKBu_dEaF9E",
          duration: "53min",
        },
        {
          title: "Modern JS Objects",
          link: "https://www.youtube.com/embed/X0ipw1k7ygU",
          duration: "37min",
        },
        {
          title: "Curriculam Document",
          link: "/Curriculum.pdf",
          type: "pdf",
        },
      ],
    },

    {
      name: "Section 3: Introduction to Nodejs",
      details: { total: 6, watched: 0 },
      videos: [
        {
          title: "Introduction Node.js",
          link: "https://www.youtube.com/embed/zb3Qk8SG5Ms",
          duration: "17min",
        },
        {
          title: "Basics",
          link: "https://www.youtube.com/embed/OIBIXYLJjsI",
          duration: "42min",
        },
        {
          title: "Client & Servers",
          link: "https://www.youtube.com/embed/-HPZ1leCV8k",
          duration: "13min",
        },
        {
          title: "Request & Responses",
          link: "https://www.youtube.com/embed/DQD00NAUPNk",
          duration: "26min",
        },
        {
          title: "NPM",
          link: "https://www.youtube.com/embed/bdHE2wHT-gQs",
          duration: "16min",
        },
        {
          title: "Express App",
          link: "https://www.youtube.com/embed/Lr9WUkeYSA8",
          duration: "19min",
        },
        {
          title: "Templates",
          link: "https://www.youtube.com/embed/yXEesONd_54",
          duration: "35min",
        },
        {
          title: "Middleware & Static Files",
          link: "https://www.youtube.com/embed/_GJKAs7A0_4",
          duration: "16min",
        },
        {
          title: "MongoDB & Mongoose",
          link: "https://www.youtube.com/embed/bxsemcrY4gQ",
          duration: "36min",
        },
        {
          title: "Get, Post & Delete Requests",
          link: "https://www.youtube.com/embed/VVGgacjzc2Y",
          duration: "33min",
        },
        {
          title: "Express Router & MVC",
          link: "https://www.youtube.com/embed/zW_tZR0Ir3Q",
          duration: "22min",
        },
        {
          title: "Next Steps",
          link: "https://www.youtube.com/embed/nYAyhRAV87A",
          duration: "4min",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col overflow-y-auto">
      <div className="bg-blue-200 text-sm p-5">
        <div className="max-w-[960px] mx-auto">
          {" "}
          {/* Wrapper for max width */}
          <nav className="hidden sm:flex items-center md:ml lg:ml text-gray-300 space-x-2 text-lg">
            <a href="#" className="text-blue-950 hover:underline">
              Development
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-blue-950 hover:underline">
              Programming Languages
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-blue-950 hover:underline">
              Web Development
            </a>
          </nav>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-blue-200 border-gray-300 shadow-lg w-full mx-auto p-5 mb-8 relative">
        <div className="max-w-full sm:max-w-[960px] mx-auto">
          {" "}
          {/* Wrapper for max width */}
          <div className="ml">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
              HTML and CSS
            </h1>
            <p className="text-gray-600 text-xl mt-3">
              A Unique Interactive Python Experience With Nearly 200 Exercises
              and Quizzes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm md:text-base text-gray-500 ml-">
            <span>Mentor by John M</span>
          </div>
          <button
            onClick={handleButtonClick}
            className="mt-6 px-6 py-3 ml bg-blue-600 text-white text-sm md:text-base font-semibold  hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Go to Course
          </button>
        </div>
      </div>

      {/* Main Content Section with Center and Right Columns */}
      <div id="wrap" className="w-full mx-auto max-w-[960px]  flex ">
        {/* Center Column Content */}
        <div id="center-column" className="w-full md:w-2/3">
          <div className=" w-full p-4 border-2">
            <div className="text-xl font-bold text-gray-800 mb-6">
              Course Content
            </div>
            <div className="text-gray-600 flex justify-between">
              3 Sections. 78 lectures
              <button
                onClick={toggleAllSections}
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                {areAllExpanded ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="mt-4">
              {courseContent.map((section, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full text-left flex items-center justify-between text-gray-800 text-sm sm:text-base md:text-lg font-semibold py-3 sm:py-4 px-4 sm:px-6 border border-gray-300"
                  >
                    <span>{section.name}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openIndex.includes(index) && (
                    <div className="mt-2 pl-4 space-y-2 text-blue-800">
                      {section.videos.map((video, videoIndex) => (
                        <div
                          key={videoIndex}
                          className="flex items-center space-x-2"
                        >
                          <p className="flex-1 text-gray-700 mb-2">
                            {video.title}
                          </p>

                          {/* Conditionally render the image, text, and button */}
                          {video.title === "Quiz" ? (
                            <>
                              <img
                                src="/ideas.png" // Show doc.png for "Quiz"
                                alt="Document Icon"
                                className="w-5 h-5" // Adjust size as needed
                              />
                              <span className="text-gray-700">
                                Quiz for practice!
                              </span>{" "}
                              {/* Add "Document" text */}
                            </>
                          ) : video.title === "Curriculam Document" ? (
                            <>
                              <img
                                src="/doc.png" // Show doc.png for "Curriculam Document"
                                alt="Document Icon"
                                className="w-5 h-5" // Adjust size as needed
                              />
                              <span className="text-gray-700">
                                Document attached
                              </span>
                            </>
                          ) : (
                            <>
                              <img
                                src="/youtube.png" // Show youtube.png for other videos
                                alt="YouTube Icon"
                                className="w-5 h-5" // Adjust size as needed
                              />
                              <button
                                onClick={() => handleVideoClick(video.link)}
                                className="text-blue-600 hover:text-blue-800 mt-0"
                              >
                                Preview Video
                              </button>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-4 sm:p-6 md:p-8 text-gray-800 mb-6   border-gray-300 text-sm sm:text-base md:text-lg">
            <div className="text-xl font-bold text-gray-800 mb-6">
              Requirement
            </div>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-800 mt-2 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4">
              <li>We've got you covered whether you have a Mac or a PC.</li>
              <li>Prepare to write thousands of lines of Python exercises!</li>
              <li>No previous experience with Python or coding is required.</li>
            </ul>
          </div>
          <div className="w-full p-4 sm:p-6 md:p-8 text-gray-800 mb-6  border-gray-300 text-sm sm:text-base md:text-lg">
            <div className="text-xl font-bold text-gray-800 mb-6">
              Instructor
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Profile image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-20 lg:h-20 rounded-full overflow-hidden">
                <img
                  src="profile.jpg"
                  alt="Instructor Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Instructor's name and subtitle on the right */}
              <div className="flex flex-col items-start sm:items-start md:items-start lg:items-start xl:items-start space-y-2">
                <div className="text-lg font-semibold text-blue-600 underline">
                  John M
                </div>
                <div className="text-gray-600 text-sm">
                  Developer and Instructor
                </div>
              </div>
            </div>
            {/* Description below the name and subtitle */}
            <p className="text-gray-700 w-full mt-4 text-sm sm:text-base md:text-lg">
              John is an experienced mentor specializing in web development.
              With years of expertise in crafting dynamic websites and
              applications, he guides learners in mastering modern web
              technologies. His approach focuses on hands-on learning,
              real-world projects, and staying up-to-date with industry trends.
              John has helped countless students transition into successful web
              development careers, emphasizing the importance of problem-solving
              and efficient coding practices. His passion for teaching and
              creating innovative web solutions makes him a highly sought-after
              mentor in the field.
            </p>
          </div>
        </div>

        {/* Right Column with Video and Details */}
        <div
          id="right-column"
          className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)] p-4 flex-grow absolute top-0 right-0 lg:right-20 mt-8"
        >
          <div className="hidden sm:block bg-white p-3 shadow-md fixed top-4 right-40 z-50">
            <iframe
              className="w-full aspect-video shadow-lg"
              src="https://www.youtube.com/embed/hu-q2zYwEYs"
              title="The Modern Python 3 Bootcamp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-gray-600 mt-2">
              This is a detailed description of the featured video.
            </p>

            {/* Enroll Button */}
            <button className="mt-4 w-full px-6 py-3 bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500">
              Enroll
            </button>

            {/* Course Details */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                This Course includes:
              </h3>
              <ul className="text-gray-600 mt-2 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <li className="flex items-center space-x-2 justify-between border-b sm:space-x-3 md:space-x-4 lg:space-x-5">
                  <div className="flex items-start space-x-2 p-4 sm:space-x-2 md:space-x-2 lg:space-x-2 sm:p-4 md:p-4 lg:p-4">
                    <img
                      src="/youtube.png"
                      alt="YouTube Icon"
                      className="w-5 h-5"
                    />
                    <strong>Lecture:</strong>
                  </div>
                  <span className="ml-auto">40</span>
                </li>

                <li className="flex items-center space-x-2 justify-between border-b">
                  <div className="flex items-start space-x-2 p-4 sm:space-x-2 md:space-x-2 lg:space-x-2 sm:p-4 md:p-4 lg:p-4">
                    <img
                      src="/skill.png"
                      alt="Skill Icon"
                      className="w-5 h-5"
                    />
                    <strong>Skill:</strong>
                  </div>
                  <span className="ml-auto">Beginner</span>
                </li>

                <li className="flex items-center space-x-2 justify-between border-b">
                  <div className="flex items-start space-x-2 p-4 sm:space-x-2 md:space-x-2 lg:space-x-2 sm:p-4 md:p-4 lg:p-4">
                    <img
                      src="/lang.png"
                      alt="Language Icon"
                      className="w-5 h-5"
                    />
                    <strong>Language:</strong>
                  </div>
                  <span className="ml-auto">English</span>
                </li>
                <li className="flex items-center space-x-2 justify-between border-b sm:space-x-4 md:space-x-6 lg:space-x-8 sm:justify-start md:justify-between">
                  <a
                    href="#"
                    className="flex items-start space-x-2 p-4 text-blue-600 hover:text-blue-800"
                  >
                    <img src="/shareblu.png" alt="Share" className="w-5 h-5" />
                    <span>Share this course</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-4/5 md:w-1/2 h-[80%] p-4 relative">
            {/* Video on larger screens */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] hidden sm:block">
              <iframe
                className="w-full h-full object-cover"
                src={videoSrc}
                title="Video Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Pop-up on smaller screens */}
            <div className="sm:hidden w-full h-auto p-4 bg-white rounded-lg shadow-lg">
              <p className="text-center text-lg font-semibold text-gray-700">
                Enroll in the Course
              </p>
              <p className="text-center text-gray-600 mt-2">
                Join now to unlock full access to all course content.
              </p>
              <button className="block w-full mt-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Enroll Now
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
