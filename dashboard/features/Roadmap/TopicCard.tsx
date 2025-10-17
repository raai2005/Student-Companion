// Single roadmap topic/task
export default function TopicCard({
  title,
  completed,
  duration,
  isLast
}: {
  title: string;
  completed: boolean;
  duration: string;
  isLast: boolean;
}) {
  return (
    <div className="flex">
      {/* Circle on timeline */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
          completed 
            ? 'bg-primary border-primary text-primary-foreground'
            : 'bg-background border-muted text-muted-foreground'
        }`}>
          {completed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span>{duration.split(' ')[0]}</span>
          )}
        </div>
      </div>
      
      {/* Card content */}
      <div className="ml-6 pb-8">
        <div className={`bg-card rounded-lg border ${
          completed ? 'border-primary/20' : 'border-border'
        } p-4 shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">{title}</h4>
            <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
              {duration}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {completed 
              ? 'Completed - Great job!' 
              : 'Scheduled - Ready to start when you are.'}
          </p>
        </div>
      </div>
    </div>
  );
}
