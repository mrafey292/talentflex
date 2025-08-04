"use client";

import { type Challenge } from "@/types";

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Logo Redesign Challenge',
    description: 'Redesign a well-known brand\'s logo with a fresh perspective',
    status: 'On Progress',
    statusColor: '#3D80F8'
  },
  {
    id: '2',
    title: 'Logo Redesign Challenge',
    description: 'Redesign a well-known brand\'s logo with a fresh perspective',
    status: 'To Do',
    statusColor: '#9C4F7E'
  },
  {
    id: '3',
    title: 'Logo Redesign Challenge',
    description: 'Redesign a well-known brand\'s logo with a fresh perspective',
    status: 'Completed',
    statusColor: '#229A1B'
  }
];

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'On Progress':
        return '#EFF5FF';
      case 'To Do':
        return '#FDEFF7';
      case 'Completed':
        return '#E8FBEB';
      default:
        return '#EDEDED';
    }
  };

  const getButtonText = (status: string) => {
    switch (status) {
      case 'On Progress':
        return 'AI Career Coach';
      case 'To Do':
        return 'Join';
      case 'Completed':
        return 'Result';
      default:
        return 'View';
    }
  };

  return (
    <div className="bg-white border border-[#EDEDED] rounded-2xl p-3">
      {/* Header Image */}
      <div className="h-[86px] rounded-xl mb-4" style={{ backgroundColor: '#EDEDED' }}>
        {/* Placeholder for background image */}
      </div>

      {/* Content */}
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-2">
          <div className="space-y-2">
            <div 
              className="inline-block px-2 py-1 rounded text-[10px] font-normal"
              style={{ 
                backgroundColor: getStatusBgColor(challenge.status),
                color: challenge.statusColor
              }}
            >
              {challenge.status}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-black">{challenge.title}</h3>
              <p className="text-xs text-[#676767] leading-4">{challenge.description}</p>
            </div>
          </div>
        </div>
        
        <button className="border border-[#D3D3D3] text-[#1A1A1A] font-bold text-xs px-4 py-2 rounded hover:bg-gray-50 transition-colors">
          {getButtonText(challenge.status)}
        </button>
      </div>
    </div>
  );
}

export default function ChallengeHub() {
  return (
    <div className="bg-white border border-[#EDEDED] rounded-3xl p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1A1A1A]">Challenge Hub</h2>
        <button className="text-sm text-[#676767] hover:text-[#1A1A1A]">
          View All
        </button>
      </div>

      {/* Challenge Cards */}
      <div className="space-y-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
