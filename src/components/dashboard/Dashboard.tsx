"use client";

import { useEffect } from "react";
import { useNavigation } from "@/contexts/NavigationContext";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";
import UserProfile from "./UserProfile";
import TodoList from "./TodoList";
import Schedule from "./Schedule";
import JobForYou from "./JobForYou";
import SkillsHub from "./SkillsHub";
import ChallengeHub from "./ChallengeHub";
import AIMarketplace from "./AIMarketplace";

export default function Dashboard() {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('dashboard');
  }, [setCurrentPage]);
  return (
    <div className="min-h-screen bg-[#010917] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        {/* Top Bar */}
        <TopBar />

        {/* Content Grid */}
        <div className="flex gap-6 p-8">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-6">
            {/* Schedule */}
            <Schedule />

            {/* Job For You */}
            <JobForYou />
          </div>

          {/* Right Column - Sidebar Content */}
          <div className="w-80 space-y-6">
            {/* User Profile */}
            <UserProfile />

            {/* Todo List */}
            <TodoList />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-8 pb-8">
          <div className="flex gap-6">
            {/* Skills Hub */}
            <div className="w-[280px]">
              <SkillsHub />
            </div>

            {/* Challenge Hub */}
            <div className="flex-1">
              <ChallengeHub />
            </div>

            {/* AI Marketplace */}
            <div className="flex-1">
              <AIMarketplace />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
