"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  onBackClick?: () => void;
}

export default function TopBar({ title = "Dashboard", showBack = false, onBackClick }: TopBarProps) {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  };

  return (
    <div className="flex justify-between items-center px-8 py-6 bg-white border-b border-[#EDEDED]">
      {/* Title */}
      <div className="flex items-center gap-6">
        {showBack && (
          <button 
            onClick={handleBackClick}
            className="border border-[#EDEDED] rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <Image
              src="/icons/chevron-left.svg"
              alt="Back"
              width={24}
              height={24}
              className="text-[#1A1A1A]"
            />
          </button>
        )}
        <h1 className="text-3xl font-bold text-[#1A1A1A] tracking-[-2%]">
          {title}
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {/* AI Career Coach Button */}
        <button className="bg-gradient-to-br from-[#D96570] to-[#4A83F0] text-white font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          AI Career Coach
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-4">
          <button className="w-12 h-12 border border-[#EDEDED] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Image
              src="/icons/magic.svg"
              alt="Magic"
              width={24}
              height={24}
            />
          </button>
          <button className="w-12 h-12 border border-[#EDEDED] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Image
              src="/icons/bell.svg"
              alt="Notifications"
              width={24}
              height={24}
            />
          </button>
          
          {/* Profile Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden ml-2">
            <Image
              src="/images/avatar-1.png"
              alt="Profile"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
