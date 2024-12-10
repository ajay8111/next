"use client";

import React, { useState } from "react";
import quizData from "./quiz.json";

const QuizComponent = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionSelect = (questionIndex, optionId) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: optionId,
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
    <div className="max-w-4xl mx-auto p-2 bg-white rounded-lg shadow-lg mt-5 overflow-auto h-[80vh] no-scrollbar">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Quiz</h2>

      <div className="space-y-6 overflow-y-auto max-h-[60vh] no-scrollbar">
        {quizData.map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium text-gray-700 mb-1">{question.question}</h3>
            <ul className="space-y-3">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option.id}
                    checked={selectedAnswers[index] === option.id}
                    onChange={() => handleOptionSelect(index, option.id)}
                    className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="text-lg text-gray-600">{option.text}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        {/* Question Number Display */}
        <div className="text-sm font-semibold text-gray-700">
          Quiz 1 of 1
        </div>
        <div className="flex items-center space-x-4">
          {/* Next Button */}
          <button
            onClick={() => alert(`Your score is: ${calculateScore()}`)}
            className="px-8 py-3 bg-blue-500 text-white font-semibold text-lg rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
