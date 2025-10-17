// Save favorite button
import { useState } from 'react';

export default function SaveButton() {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <button
      onClick={handleSave}
      className={`py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring ${
        isSaved 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-muted text-muted-foreground hover:bg-muted/80'
      }`}
    >
      <div className="flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 mr-2 ${isSaved ? 'fill-current' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
          />
        </svg>
        {isSaved ? 'Saved' : 'Save'}
      </div>
    </button>
  );
}
