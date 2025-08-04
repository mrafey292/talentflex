"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useNavigation, type NavigationPage } from "@/contexts/NavigationContext";

interface SidebarProps {
  className?: string;
}

const mainMenuItems = [
  {
    id: 'dashboard' as NavigationPage,
    label: 'Dashboard',
    icon: '/icons/view-grid.svg',
  },
  {
    id: 'jobs' as NavigationPage,
    label: 'My Job',
    icon: '/icons/briefcase-sidebar.svg',
  },
  {
    id: 'roadmap' as NavigationPage,
    label: 'Roadmap',
    icon: '/icons/paper-airplane.svg',
  },
  {
    id: 'ai-marketplace' as NavigationPage,
    label: 'AI Marketplace',
    icon: '/icons/magic.svg',
  },
  {
    id: 'skills' as NavigationPage,
    label: 'Skills Hub',
    icon: '/icons/book-open-sidebar.svg',
  },
  {
    id: 'challenges' as NavigationPage,
    label: 'Challenge Hub',
    icon: '/icons/color-swatch-sidebar.svg',
  },
  {
    id: 'team' as NavigationPage,
    label: 'My Team',
    icon: '/icons/user-group.svg',
  },
];

const generalItems = [
  {
    id: 'profile' as NavigationPage,
    label: 'My Profile',
    icon: '/icons/user.svg',
  },
  {
    id: 'ai-coach' as NavigationPage,
    label: 'AI Career Coach',
    icon: '/icons/magic.svg',
  },
];

export default function Sidebar({ className }: SidebarProps) {
  const { currentPage, setCurrentPage } = useNavigation();

  return (
    <div className={cn(
      "w-64 bg-[#010917] text-white flex flex-col justify-between h-full",
      className
    )}>
      {/* Top Section */}
      <div className="flex-1">
        {/* Logo */}
        <div className="p-5">
          <h1 className="text-4xl font-bold leading-[0.67] tracking-[-5%] text-white">
            Talent Flex
          </h1>
        </div>

        {/* Menu */}
        <div className="px-5 space-y-6">
          {/* Main Menu */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#C3C3C3] uppercase tracking-wide">
              Main Menu
            </h3>
            <div className="space-y-1">
              {mainMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors",
                    currentPage === item.id 
                      ? "bg-[#3D80F8] text-white" 
                      : "text-[#E2E2E2] hover:bg-gray-800"
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={cn(
                      currentPage === item.id ? "filter-white" : "filter-gray"
                    )}
                  />
                  <span className="text-base font-normal">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* General */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#C3C3C3] uppercase tracking-wide">
              General
            </h3>
            <div className="space-y-1">
              {generalItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors",
                    currentPage === item.id 
                      ? "bg-[#3D80F8] text-white" 
                      : "text-[#E2E2E2] hover:bg-gray-800"
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={cn(
                      currentPage === item.id ? "filter-white" : "filter-gray"
                    )}
                  />
                  <span className="text-base font-normal">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Section */}
      <div className="p-5">
        <div className="bg-gradient-to-br from-[#D96570] to-[#4A83F0] rounded-xl p-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center">
              <Image
                src="/icons/diamond.svg"
                alt="Premium"
                width={20}
                height={17}
                className="filter-white"
              />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h4 className="text-base font-bold text-white">
                  Go to Premium
                </h4>
                <p className="text-sm text-white/70">
                  Unlock and maximize your experience!
                </p>
              </div>
              <button className="w-full bg-white text-[#1A1A1A] font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
