'use client';

import { useRef } from 'react';

interface RewardCardProps {
  title: string;
  subtitle: string;
  amount: string;
  status: 'claimed' | 'pending';
  image: string;
}

function RewardCard({ title, subtitle, amount, status, image }: RewardCardProps) {
  return (
    <div className="w-80 border border-[#EDEDED] rounded-2xl p-6">
      <div className="flex flex-col gap-5">
        {/* Image */}
        <div className="w-20 h-20 rounded-xl overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-lg text-[#000000] leading-tight">{title}</h4>
            <p className="text-base text-[#676767] mt-1">{subtitle}</p>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className={`px-3 py-2 rounded-lg text-sm font-normal ${
                status === 'claimed' 
                  ? 'bg-[#E8FBEB] text-[#229A1B]'
                  : 'bg-[#EFF5FF] text-[#3D80F8]'
              }`}>
                {status === 'claimed' ? 'Claimed' : 'Pending'}
              </div>
            </div>
            <p className="text-2xl font-bold text-[#1A1A1A]">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RewardsSectionProps {
  rewards: Array<{
    id: string;
    title: string;
    subtitle: string;
    amount: string;
    status: 'claimed' | 'pending';
    image: string;
  }>;
}

export default function RewardsSection({ rewards }: RewardsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -332, behavior: 'smooth' }); // 320px card + 12px gap
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 332, behavior: 'smooth' }); // 320px card + 12px gap
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-[#1A1A1A]">My Rewards</h3>
          <div className="flex items-center gap-1">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-[#9CA3AF] transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-[#9CA3AF] transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Rewards Grid */}
      <div 
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          width: '100%',
          maxWidth: 'calc(2 * 320px + 12px)' // Show exactly 2 cards: 320px each + 12px gap
        }}
      >
        {rewards.map((reward) => (
          <RewardCard
            key={reward.id}
            title={reward.title}
            subtitle={reward.subtitle}
            amount={reward.amount}
            status={reward.status}
            image={reward.image}
          />
        ))}
      </div>
    </div>
  );
}
