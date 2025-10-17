// Main Dashboard Page
import DashboardWrapper from './components/DashboardWrapper';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function DashboardPage() {
  return (
    <div>
      {/* Dashboard layout and features go here */}
      <Sidebar />
      <Topbar />
      <DashboardWrapper />
    </div>
  );
}
