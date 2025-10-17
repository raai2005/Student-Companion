// Dashboard layout: sidebar, header, grid
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      {/* Sidebar, Topbar, and main grid will be placed here */}
      {children}
    </div>
  );
}
