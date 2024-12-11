"use client";

import React, { useState } from "react";
import quizData from "../data/quiz.json";

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [hasAnswered, setHasAnswered] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Reset quiz to initial state
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFeedback({});
    setHasAnswered({});
    setIsQuizFinished(false);
  };

  // Handle option selection and feedback
  const handleOptionSelect = (optionId, correctAnswer, description) => {
    const questionIndex = currentQuestionIndex;

    if (hasAnswered[questionIndex]) return;

    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: optionId,
    }));

    setFeedback((prevState) => ({
      ...prevState,
      [questionIndex]: {
        status: optionId === correctAnswer ? "Correct" : "Incorrect",
        description: optionId === correctAnswer ? description : "",
      },
    }));

    setHasAnswered((prevState) => ({
      ...prevState,
      [questionIndex]: true,
    }));
  };

  // Navigate to the next question
  const moveToNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // Navigate to the previous question
  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Calculate score at the end of the quiz
  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      return score + (question.answer === selectedAnswers[index] ? 1 : 0);
    }, 0);
  };

  // Submit the quiz and show results
  const handleSubmit = () => {
    setIsQuizFinished(true);
  };

  if (isQuizFinished) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto p-5 bg-white rounded-lg mt-2">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Quiz Results
        </h2>
        <div className="text-xl text-center text-gray-700">
          <p>Total Questions: {quizData.length}</p>
          <p>Correct Answers: {score}</p>
          <p>
            Score: {score} / {quizData.length}
          </p>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-gray-900 text-white font-semibold rounded-md hover:bg-black"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto p-5 bg-white rounded-lg mt-2">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Quiz
      </h2>
      <div className="space-y-6">
        {hasAnswered[currentQuestionIndex] && (
          <div
            className={`p-5 mb-6 ${
              feedback[currentQuestionIndex].status === "Correct"
                ? "bg-green-100 text-black"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feedback[currentQuestionIndex].status === "Correct" ? (
              <div>
                <h4>
                  <strong>
                    <img
                      src="/rightb.png"
                      alt="Correct"
                      className="inline-block mr-2 h-7 w-7"
                    />
                    Good job!
                  </strong>
                </h4>
                <p>Your answer is correct.</p>
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{
                    __html: feedback[currentQuestionIndex].description,
                  }}
                />
              </div>
            ) : (
              <div>
                <h4>
                  <strong>
                    <img
                      src="/wrong.png"
                      alt="Wrong"
                      className="inline-block mr-2 h-7 w-7"
                    />
                    Wrong answer
                  </strong>
                </h4>
                <p>
                  The correct answer was:{" "}
                  <strong>
                    {
                      currentQuestion.options.find(
                        (option) => option.id === currentQuestion.answer
                      ).text
                    }
                  </strong>
                </p>
              </div>
            )}
          </div>
        )}

        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Question {currentQuestionIndex + 1}: {currentQuestion.question}
          </h3>
          <ul className="space-y-3">
            {currentQuestion.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={`flex items-center p-3 cursor-pointer border ${
                  hasAnswered[currentQuestionIndex]
                    ? option.id === currentQuestion.answer
                      ? "border-green-700 bg-green-100"
                      : selectedAnswers[currentQuestionIndex] === option.id
                      ? "border-red-700 bg-red-100"
                      : "border-gray-300"
                    : selectedAnswers[currentQuestionIndex] === option.id
                    ? "border-gray-900 bg-blue-50"
                    : "border-gray-300"
                } hover:border-black`}
                onClick={() =>
                  handleOptionSelect(
                    option.id,
                    currentQuestion.answer,
                    currentQuestion.description
                  )
                }
              >
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option.id}
                  checked={selectedAnswers[currentQuestionIndex] === option.id}
                  readOnly
                  className="h-5 w-5 text-gray-900"
                />
                <label
                  htmlFor={`question-${currentQuestionIndex}-option-${optionIndex}`}
                  className="ml-3 text-lg text-gray-700 w-full"
                >
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 mb-4 sm:mb-6 space-y-4 sm:space-y-0">
        <div className="text-sm font-semibold text-gray-700">
          Question {currentQuestionIndex + 1} of {quizData.length}
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {currentQuestionIndex > 0 && (
            <button
              onClick={moveToPreviousQuestion}
              className="px-3 py-1 md:px-4 md:py-2 bg-gray-200 text-gray-800 font-semibold  hover:bg-gray-300 text-sm md:text-base"
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < quizData.length - 1 ? (
            <button
              onClick={moveToNextQuestion}
              disabled={!hasAnswered[currentQuestionIndex]}
              className={`px-3 py-1 md:px-4 md:py-2 ${
                hasAnswered[currentQuestionIndex]
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } font-semibold  text-sm md:text-base`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!hasAnswered[currentQuestionIndex]}
              className={`px-3 py-1 md:px-4 md:py-2 ${
                hasAnswered[currentQuestionIndex]
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } font-semibold  text-sm md:text-base`}
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
