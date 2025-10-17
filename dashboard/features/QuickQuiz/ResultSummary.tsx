// Quiz result UI
export default function ResultSummary({
  onRestart
}: {
  onRestart: () => void;
}) {
  // Demo result
  const score = 80;
  const totalQuestions = 5;
  const correctAnswers = 4;

  return (
    <div className="bg-background rounded-lg border border-border p-6 text-center">
      <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold mx-auto mb-4">
        {score}%
      </div>
      
      <h3 className="text-xl font-semibold mb-2">Quiz Completed!</h3>
      <p className="text-muted-foreground mb-6">
        You answered {correctAnswers} out of {totalQuestions} questions correctly.
      </p>
      
      <div className="space-y-4">
        <div className="bg-muted/30 p-4 rounded-lg">
          <div className="flex justify-between text-sm mb-1">
            <span>Correct Answers</span>
            <span className="font-medium">{correctAnswers}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary" 
              style={{ width: `${(correctAnswers / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
        >
          Try Another Quiz
        </button>
      </div>
    </div>
  );
}
