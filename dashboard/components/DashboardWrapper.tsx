// Grid layout wrapper for dashboard features
import StatsCard from './StatsCard';
import { QuickQuiz } from '../features/QuickQuiz';
import { FlashcardDeck } from '../features/Flashcards';
import { RoadmapView } from '../features/Roadmap';

export default function DashboardWrapper() {
  return (
    <main className="flex-1 p-6 overflow-y-auto bg-muted/30">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Flashcards Created" 
          value={32} 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          } 
        />
        <StatsCard 
          title="Quizzes Completed" 
          value={18} 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          } 
        />
        <StatsCard 
          title="Mock Interviews" 
          value={5} 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          } 
        />
        <StatsCard 
          title="Study Hours" 
          value={64} 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          } 
        />
      </div>
      
      {/* Feature grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Quiz */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <h2 className="text-lg font-medium mb-4">Quick Quiz</h2>
          <div className="p-4">
            <QuickQuiz />
          </div>
        </div>
        
        {/* Flashcards */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <h2 className="text-lg font-medium mb-4">Flashcards</h2>
          <div className="p-4">
            <FlashcardDeck />
          </div>
        </div>
        
        {/* Roadmap */}
        <div className="bg-card rounded-lg shadow-sm border border-border p-4 col-span-1 lg:col-span-2">
          <h2 className="text-lg font-medium mb-4">Study Roadmap</h2>
          <div className="p-4">
            <RoadmapView />
          </div>
        </div>
      </div>
    </main>
  );
}
