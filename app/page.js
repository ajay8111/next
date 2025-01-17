"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import Breadcrumbs from "@/utils/Breadcrumbs";

export default function Home() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState([]); // Track expanded sections as an array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [areAllExpanded, setAreAllExpanded] = useState(false); // Track "Expand All" state
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  const [isVideoPopupVisible, setIsVideoPopupVisible] = useState(false);

  const handleButtonClick = () => {
    router.push("/course");
  };

  const handleThumbClick = () => {
    setIsVideoPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsVideoPopupVisible(false);
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollButtonVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="bg-blue-50 text-sm p-5">
        <div className="max-w-[960px] mx-auto">
          {" "}
          {/* Wrapper for max width */}
          <nav className="hidden sm:flex items-center md:ml lg:ml text-gray-300 space-x-2 text-base font-semibold">
            <a href="#" className="text-blue-950 hover:underline">
              Development
            </a>
            <span className="text-gray-500">&gt;</span>
            <a href="#" className="text-blue-950 hover:underline">
              Programming Languages
            </a>
            <span className="text-gray-500">&gt;</span>
            <a href="#" className="text-blue-950 hover:underline">
              Web Development
            </a>
          </nav>
        </div>
      </div>

      {/* Title Section */}
      <div className="bg-blue-50 border-gray-300 shadow-sm w-full mx-auto p-5 mb-8 relative">
        <div className="max-w-full sm:max-w-[960px] mx-auto">
          {" "}
          {/* Wrapper for max width */}
          <div className="ml">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-950 font-sans">
              Beginner Course for Learning{" "}
              <span className="block">HTML and CSS</span>
            </h1>
            <p className="text-gray-600 text-xl mt-3 font-sans">
              A Unique Interactive Python Experience With Nearly 200 Exercises
              and Quizzes.
            </p>
          </div>
          <div className="flex flex-wrap sm:items-start gap-4 mt-4 text-sm md:text-base text-gray-500 mb-4 font-sans">
            <span>Mentor by John M</span>
          </div>
          <Button onClick={handleButtonClick}>Go to Course</Button>
        </div>
      </div>

      {/* Main Content Section with Center and Right Columns */}
      <div id="wrap" className="w-full mx-auto max-w-[960px]  flex ">
        {/* Center Column Content */}
        <div id="center-column" className="w-full md:w-2/3">
          <div className=" w-full p-4 border rounded-lg">
            <div className="text-xl font-bold text-gray-800 mb-6 font-sans">
              Course Content
            </div>
            <div className="text-gray-600 flex justify-between">
              3 Sections. 78 lectures
              <button
                onClick={toggleAllSections}
                className="text-blue-400 hover:text-blue-600 text-sm "
              >
                {areAllExpanded ? "Collapse All" : "Expand All"}
              </button>
            </div>

            <div className="mt-4 flex flex-col space-y-4">
              {courseContent.map((section, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full text-left flex items-center justify-between text-gray-800 font-semibold font-sans text-sm sm:text-base md:text-lg py-3 sm:py-4 px-4 sm:px-6 border border-gray-300 rounded-lg hover:bg-gray-200"
                  >
                    <span>{section.name}</span>
                    <svg
                      className="h-5 w-5 text-sm sm:text-base md:text-lg font-sans font-semibold"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openIndex.includes(index) ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 12H6" // Minus icon
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v12m6-6H6" // Plus icon
                        />
                      )}
                    </svg>
                  </button>

                  {openIndex.includes(index) && (
                    <div className="mt-2 pl-4 space-y-2 text-blue-800">
                      {section.videos.map((video, videoIndex) => (
                        <div
                          key={videoIndex}
                          className="flex items-center space-x-2"
                        >
                          <p className="flex-1 text-gray-700 mb-4 font-sans text-[18px]">
                            {video.title}
                          </p>

                          {/* Conditionally render the image, text, and button */}
                          {video.title === "Quiz" ? (
                            <>
                              <img
                                src="/quiz.png" // Show doc.png for "Quiz"
                                alt="Quiz icon"
                                className="w-6 h-6 " // Adjust size as needed
                              />
                              <span className="text-gray-700">
                                Quiz for practice!
                              </span>{" "}
                              {/* Add "Document" text */}
                            </>
                          ) : video.title === "Curriculam Document" ? (
                            <>
                              <img
                                src="/file.png" // Show doc.png for "Curriculam Document"
                                alt="Document Icon"
                                className="w-6 h-6" // Adjust size as needed
                              />
                              <span className="text-gray-700">
                                Document attached
                              </span>
                            </>
                          ) : (
                            <>
                              <img
                                src="/view.png" // Show youtube.png for other videos
                                alt="View icon"
                                className="w-6 h-6" // Adjust size as needed
                              />
                              <button
                                onClick={() => handleVideoClick(video.link)}
                                className="text-blue-400 hover:text-blue-600 mt-0"
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
            <div className="text-xl font-bold text-gray-800 mb-6 font-sans">
              Requirement
            </div>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-800 mt-2 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4 font-sans">
              <li>We've got you covered whether you have a Mac or a PC.</li>
              <li>Prepare to write thousands of lines of Python exercises!</li>
              <li>No previous experience with Python or coding is required.</li>
            </ul>
          </div>
          <div className="w-full p-4 sm:p-6 md:p-8 text-gray-800 mb-6  border-gray-300 text-sm sm:text-base md:text-lg">
            <div className="text-xl font-bold text-gray-800 mb-6 font-sans">
              Instructor
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Profile image */}
              <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-20 lg:h-20 rounded-full overflow-hidden">
                <img
                  src="profile.jpg"
                  alt="Instructor Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Instructor's name and subtitle on the right */}
              <div className="flex flex-col items-start sm:items-start md:items-start lg:items-start xl:items-start space-y-2">
                <div className="text-lg font-semibold text-gray-500 font-sans">
                  John M
                </div>
                <div className="text-gray-600 text-sm font-sans">
                  Developer and Instructor
                </div>
              </div>
            </div>
            {/* Description below the name and subtitle */}
            <p className="text-gray-700 w-full mt-4 text-sm sm:text-base md:text-lg font-sans">
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
          {isScrollButtonVisible && (
            <button
              onClick={scrollToTop}
              id="back_to_top"
              type="button"
              className="fixed bottom-5 right-5 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-black transition-transform transform hover:scale-110"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 6L6 1L1 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Right Column with Video and Details */}
        <div
          id="right-column"
          className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-20px)] p-4 flex-grow absolute top-0 right-0 lg:right-20 mt-8"
        >
          <div className="hidden sm:block bg-white border rounded-lg p-4 shadow-md fixed top-10 right-40 z-50">
            <div className="relative w-full aspect-video shadow-lg rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/html.jpg" // Replace with the correct path to your image
                alt="HTML Preview"
              />
              {/* Animated Play Button */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={handleThumbClick}
              >
                <div className="w-16 h-16 bg-gray-900 bg-opacity-80 rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-4.586-2.669A1 1 0 009 9.38v5.238a1 1 0 001.166.97l4.586-2.669a1 1 0 000-1.732z"
                    />
                  </svg>
                </div>
              </div>
              {isVideoPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="relative w-full sm:w-2/3 p-4  rounded-lg ">
                    {/* Close Button */}
                    <button
                      onClick={handleClosePopup}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
                    >
                      <img src="/close.png" alt="Close" className="w-10 h-8" />
                    </button>

                    {/* Video Iframe */}
                    <iframe
                      className="w-full aspect-video rounded-lg"
                      src="https://www.youtube.com/embed/hu-q2zYwEYs"
                      title="The Modern Python 3 Bootcamp"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            <p className="text-gray-600 mt-2 w-full">
              Start the course and learn Web Development.
            </p>

            {/* Enroll Button */}
            <button onClick={handleButtonClick}
            className="mt-4 w-full px-6 py-3 rounded-lg border-sm bg-custom-green text-white text-md font-semibold shadow hover:bg-green-500 transition ">
              Enroll
            </button>

            {/* Course Details */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                This Course includes:
              </h3>
              <ul className="text-gray-600 mt-2 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <li className="flex items-center space-x-2 justify-between border-b sm:space-x-3 md:space-x-4 lg:space-x-5">
                  <div className="flex items-start space-x-2 p-4 sm:space-x-2 md:space-x-2 lg:space-x-2 sm:p-4 md:p-4 lg:p-4 font-sans">
                    <img
                      src="/youtube.png"
                      alt="YouTube Icon"
                      className="w-5 h-5"
                    />
                    <strong>Lecture:</strong>
                  </div>
                  <span className="ml-auto">40 lectures</span>
                </li>

                <li className="flex items-center space-x-2 justify-between border-b">
                  <div className="flex items-start space-x-2 p-4 sm:space-x-2 md:space-x-2 lg:space-x-2 sm:p-4 md:p-4 lg:p-4 font-sans">
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
                  <div className="flex items-start space-x-2 p-4 sm:space-x-2 md:space-x-2 lg:space-x-2 sm:p-4 md:p-4 lg:p-4 font-sans">
                    <img
                      src="/lang.png"
                      alt="Language Icon"
                      className="w-5 h-5"
                    />
                    <strong>Language:</strong>
                  </div>
                  <span className="ml-auto">Malayalam</span>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 justify-center border-b">
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
              <button
              onClick={handleButtonClick} 
              className="block w-full mt-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                Enroll Now
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <img src="/close.png" alt="Close" className="w-10 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


