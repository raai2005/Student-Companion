// Submit button for QuickQuiz
export default function SubmitButton({ 
  onClick 
}: { 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
    >
      Submit Answer
    </button>
  );
}
