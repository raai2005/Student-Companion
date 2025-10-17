// Shows roadmap timeline
import TopicCard from './TopicCard';
import StartButton from './StartButton';

export default function RoadmapView() {
  // Demo roadmap data
  const roadmapTopics = [
    { id: '1', title: 'Basic Data Structures', completed: true, duration: '2 hours' },
    { id: '2', title: 'Advanced Algorithms', completed: false, duration: '3 hours' },
    { id: '3', title: 'System Design Fundamentals', completed: false, duration: '4 hours' },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Your Study Roadmap</h3>
        <StartButton />
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-6">
          {roadmapTopics.map((topic, index) => (
            <TopicCard 
              key={topic.id}
              title={topic.title}
              completed={topic.completed}
              duration={topic.duration}
              isLast={index === roadmapTopics.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
