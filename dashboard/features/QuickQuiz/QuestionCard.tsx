// Single question UI for QuickQuiz
import { useState } from 'react';

export default function QuestionCard({ 
  question, 
  options 
}: { 
  question: string; 
  options: string[];
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="bg-background rounded-lg border border-border p-6">
      <h3 className="text-lg font-medium mb-4">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-md border ${
              selectedOption === option 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-input'
            } cursor-pointer transition-all`}
          >
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="sr-only"
            />
            <span className={`w-5 h-5 mr-3 rounded-full border ${
              selectedOption === option 
                ? 'border-primary bg-primary'
                : 'border-muted'
            } flex items-center justify-center`}>
              {selectedOption === option && (
                <span className="w-2 h-2 rounded-full bg-white"></span>
              )}
            </span>
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
