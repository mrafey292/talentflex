"use client";

import { useNavigation } from "@/contexts/NavigationContext";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import JobsPage from "@/components/jobs/JobsPage";
import RoadmapPage from "@/components/roadmap/RoadmapPage";
import AIMarketplacePage from "@/components/ai-marketplace/AIMarketplacePage";
import SkillsPage from "@/components/skills/SkillsPage";
import ChallengesPage from "@/components/challenges/ChallengesPage";
import TeamPage from "@/components/team/TeamPage";
import ProfilePage from "@/components/profile/ProfilePage";
import AICoachPage from "@/components/ai-coach/AICoachPage";
import PricingPage from "@/components/layout/PricingPage";

function AppContent() {
  const { currentPage } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'jobs':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <JobsPage />
          </div>
        );
      case 'roadmap':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <RoadmapPage />
          </div>
        );
      case 'ai-marketplace':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <AIMarketplacePage />
          </div>
        );
      case 'skills':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <SkillsPage />
          </div>
        );
      case 'challenges':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <ChallengesPage />
          </div>
        );
      case 'team':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <TeamPage />
          </div>
        );
      case 'profile':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <ProfilePage />
          </div>
        );
      case 'ai-coach':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <AICoachPage />
          </div>
        );
      case 'pricing':
        return (
          <div className="min-h-screen bg-[#010917] flex">
            <Sidebar />
            <PricingPage onBack={() => {}} />
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return renderCurrentPage();
}

export default function App() {
  return <AppContent />;
}
