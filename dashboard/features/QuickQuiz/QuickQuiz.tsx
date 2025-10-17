// Main entry for QuickQuiz feature
import { useState } from 'react';
import QuestionCard from './QuestionCard';
import SubmitButton from './SubmitButton';
import ResultSummary from './ResultSummary';

export default function QuickQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  // Demo questions
  const questions = [
    {
      id: '1',
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unifier', 'Computing Processor Unit'],
      answer: 'Central Processing Unit'
    }
  ];

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!showResults ? (
        <>
          <QuestionCard 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
          />
          <div className="mt-6">
            <SubmitButton onClick={handleSubmit} />
          </div>
        </>
      ) : (
        <ResultSummary onRestart={handleRestart} />
      )}
    </div>
  );
}
