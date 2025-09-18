
import React, { useState } from 'react';
import { quizQuestions } from '../constants';

const QuizView: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.answer;

  const handleAnswerClick = (option: string) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    setShowFeedback(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };
  
  const handleRestart = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsFinished(false);
  }

  if (isFinished) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Kuis Selesai!</h2>
        <p className="text-xl mb-6">Skor Akhir Anda: <span className="font-bold text-brand-green">{score}</span> dari {quizQuestions.length}</p>
        <button
          onClick={handleRestart}
          className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Ulangi Kuis
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="mb-4">
        <p className="text-gray-600">Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions.length}</p>
        <h2 className="text-xl md:text-2xl font-semibold mt-1">{currentQuestion.question}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const getButtonClass = () => {
            if (!showFeedback) return 'bg-white hover:bg-gray-100 border-gray-300';
            if (isSelected) {
              return isCorrect ? 'bg-green-500 border-green-500 text-white' : 'bg-red-500 border-red-500 text-white';
            }
            if (option === currentQuestion.answer) {
              return 'bg-green-500 border-green-500 text-white';
            }
            return 'bg-white border-gray-300 cursor-not-allowed opacity-60';
          };
          
          return (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              disabled={showFeedback}
              className={`p-4 border rounded-lg text-left transition-all duration-200 ${getButtonClass()}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className="mt-6 text-center">
            <p className={`text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? 'Benar!' : `Salah! Jawaban yang benar adalah ${currentQuestion.answer}.`}
            </p>
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-brand-blue hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg transition-colors"
          >
            Lanjut
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizView;
