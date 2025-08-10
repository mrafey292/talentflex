'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Rocket } from 'lucide-react';

const OnboardingComplete = () => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  const handleGoToAICoach = () => {
    router.push('/ai-coach');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[623px] flex flex-col items-center justify-center gap-16">
        {/* Rocket Icon */}
        <div className="p-8 border border-[#D3D3D3] rounded-full">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <Rocket 
              className="w-[67px] h-20 text-[#3D80F8]" 
              strokeWidth={1.5}
              fill="none"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-12 w-full">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-[32px] font-bold text-[#1A1A1A] leading-[1.25] tracking-[-0.02em] text-center">
              Ready to Shape Your Career Path?
            </h1>
            <p className="text-lg font-normal text-[#676767] leading-[1.44] tracking-[-0.02em] text-center">
              Start chatting with the AI Career Coach to receive a tailored career roadmap or head straight to your dashboard to explore on your own
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <button
              onClick={handleGoToDashboard}
              className="px-8 py-4 bg-[#3D80F8] rounded-lg hover:bg-[#2968E5] transition-colors"
            >
              <span className="text-base font-bold text-white leading-[1.5] tracking-[-0.02em]">
                Go to Dashboard
              </span>
            </button>
            
            <button
              onClick={handleGoToAICoach}
              className="px-8 py-4 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-bold text-[#1A1A1A] leading-[1.5] tracking-[-0.02em]">
                AI Career Coach
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingComplete;