import { ChevronDownIcon, BellIcon } from '@heroicons/react/24/outline';

interface TopBarProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
}

export default function TopBar({ 
  userName = "John Carl",
  userRole = "Graphic Designer",
  userAvatar
}: TopBarProps) {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">Challenge Hub</h1>
        <div className="flex items-center gap-2 px-4 py-2 border border-[#B5B5B5] rounded-lg">
          <span className="text-[#1A1A1A]">{userRole}</span>
          <ChevronDownIcon className="w-4 h-4 text-[#1A1A1A]" />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="px-6 py-3 bg-gradient-to-r from-[#D96570] to-[#4A83F0] text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
          AI Career Coach
        </button>
        
        <div className="flex items-center gap-2">
          <button className="p-3 border border-[#EDEDED] rounded-full hover:bg-gray-50 transition-colors">
            <div className="w-6 h-6 bg-gradient-to-r from-[#D96570] to-[#4A83F0] rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3A1.001 1.001 0 019 1v10.93l3.5 2.036a1 1 0 01.5.866v8.198l-4.585-2.707A1 1 0 008 20.464v-8.196L5 10.232V3z" />
              </svg>
            </div>
          </button>
          
          <button className="p-3 border border-[#EDEDED] rounded-full hover:bg-gray-50 transition-colors">
            <BellIcon className="w-6 h-6 text-[#111827]" />
          </button>
          
          <div className="w-12 h-12 rounded-full overflow-hidden">
            {userAvatar ? (
              <img 
                src={userAvatar} 
                alt={userName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center text-[#676767] text-sm font-medium">
                {userName.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
