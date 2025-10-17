// Main Dashboard Page
import DashboardWrapper from './components/DashboardWrapper';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      {/* Dashboard layout and features go here */}
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <DashboardWrapper />
      </div>
    </div>
  );
}
