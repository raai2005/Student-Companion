// Main flashcard deck container
import { useState } from 'react';
import Flashcard from './Flashcard';
import FlipButton from './FlipButton';
import SaveButton from './SaveButton';

export default function FlashcardDeck() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  
  // Demo flashcards
  const flashcards = [
    {
      id: '1',
      front: 'What is the capital of France?',
      back: 'Paris'
    }
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Flashcard 
        front={flashcards[currentCard].front}
        back={flashcards[currentCard].back}
        isFlipped={isFlipped}
      />
      
      <div className="flex justify-between mt-6">
        <FlipButton onClick={handleFlip} />
        <SaveButton />
      </div>
    </div>
  );
}
