"use client";

import React, { useState } from "react";
import quizData from "./quiz.json";

const QuizComponent = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleOptionSelect = (questionIndex, optionId, correctAnswer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: optionId,
    }));

    // Show real-time feedback
    setFeedback((prevState) => ({
      ...prevState,
      [questionIndex]: optionId === correctAnswer ? "Correct" : "Incorrect",
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (question.answer === selectedAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg  mt-2 overflow-auto h-[80vh]">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Quiz
      </h2>

      <div className="space-y-6 overflow-y-auto max-h-[60vh] no-scrollbar">
        {quizData.map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Question {index + 1}: {question.question}
            </h3>
            <ul className="space-y-3">
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`flex items-center p-3  cursor-pointer border ${
                    selectedAnswers[index] === option.id
                      ? "border-gray-900 bg-blue-50"
                      : "border-gray-300"
                  } hover:border-black`}
                  onClick={() =>
                    handleOptionSelect(index, option.id, question.answer)
                  }
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option.id}
                    checked={selectedAnswers[index] === option.id}
                    readOnly
                    className="h-5 w-5 text-gray-900 focus:ring-black focus:ring-offset-0 focus:ring-1"
                  />
                  <label
                    htmlFor={`question-${index}-option-${optionIndex}`}
                    className="ml-3 text-lg text-gray-700 w-full"
                  >
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>

            {/* Display real-time feedback */}
            {selectedAnswers[index] && (
              <div
                className={`mt-4 p-3 rounded-lg ${
                  feedback[index] === "Correct"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {feedback[index] === "Correct" ? (
                  <p>✅ Good job! Your answer is correct.</p>
                ) : (
                  <p>❌ Incorrect. Try again or review the correct answer.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 mb-6">
        <div className="text-sm font-semibold text-gray-700">Quiz 1 of 1</div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => alert(`Your score is: ${calculateScore()}`)}
            className="px-3 py-1 sm:px-4 sm:py-2 md:px-7 md:py-3 bg-gray-900 text-sm sm:text-base md:text-lg text-white font-semibold rounded-md hover:bg-black focus:outline-none  w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
