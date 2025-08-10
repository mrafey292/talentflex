"use client";

import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#010917] flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}