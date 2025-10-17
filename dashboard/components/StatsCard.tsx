// Summary card for flashcards/quizzes/mocks
export default function StatsCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
