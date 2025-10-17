// Single flashcard
export default function Flashcard({
  front,
  back,
  isFlipped
}: {
  front: string;
  back: string;
  isFlipped: boolean;
}) {
  return (
    <div className="relative w-full h-52 perspective-1000">
      <div 
        className={`absolute w-full h-full transition-all duration-500 transform ${
          isFlipped ? 'rotate-y-180' : 'rotate-y-0'
        } preserve-3d`}
      >
        {/* Front of card */}
        <div 
          className={`absolute w-full h-full bg-card rounded-lg border border-border p-6 flex items-center justify-center text-center shadow backface-hidden ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p className="text-lg">{front}</p>
        </div>
        
        {/* Back of card */}
        <div 
          className={`absolute w-full h-full bg-primary/5 rounded-lg border border-primary/20 p-6 flex items-center justify-center text-center shadow backface-hidden rotate-y-180 ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-lg font-medium text-primary">{back}</p>
        </div>
      </div>
    </div>
  );
}
