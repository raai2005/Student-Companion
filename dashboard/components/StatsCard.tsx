// Summary card for flashcards/quizzes/mocks
export default function StatsCard({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: number; 
  icon?: React.ReactNode 
}) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm border border-border p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
        </div>
        {icon && <div className="p-2 bg-primary/10 rounded-full">{icon}</div>}
      </div>
    </div>
  );
}
