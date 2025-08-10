'use client';

import { UsersIcon } from '@heroicons/react/24/outline';
import { Challenge } from './ChallengeCard';
import TopBar from '@/components/layout/TopBar';

interface ChallengeDetailPageProps {
  challenge: Challenge;
  onBack: () => void;
}

export default function ChallengeDetailPage({ challenge, onBack }: ChallengeDetailPageProps) {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Progress':
        return 'bg-blue-50 text-blue-600';
      case 'Completed':
        return 'bg-green-50 text-green-600';
      case 'Available':
        return 'bg-gray-50 text-gray-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Header */}
      <TopBar 
        title="Challenge Course" 
        showBack={true} 
        onBackClick={onBack}
      />

      {/* Content */}
      <div className="px-8 py-8 max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {/* Left Column - Challenge Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Challenge Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded ${getStatusColor(challenge.status)}`}>
                      {challenge.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">{challenge.title}</h2>
                    <p className="text-gray-600 text-base leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <UsersIcon className="w-5 h-5" />
                  <span className="text-sm">{challenge.participants} Participants</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-700">
                  {challenge.buttonText}
                </button>
              </div>
            </div>

            {/* Challenge Image */}
            <div className="w-60 h-60 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={challenge.imageUrl}
                alt={challenge.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Challenge Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Challenge Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                In this challenge, your mission is to redesign a well-known brand's logo with a fresh perspective while 
                maintaining its core identity. Whether you simplify, modernize, or add a creative twist, your goal is to 
                give the brand a new, exciting look that aligns with current design trends.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Your Mission:</strong> Take an existing brand logo and reimagine it with a new perspective. 
                    Will you go minimalist, retro, or futuristic? The choice is yours!
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Brand Identity Guide:</strong> Download official assets like brand colors, fonts, and logo 
                    variations to maintain authenticity
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Style Inspiration:</strong> Need ideas? Browse suggested themes like modern simplicity, 
                    vintage aesthetics, or bold futuristic styles.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Requirements */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-bold">File Formats: PNG, JPG, or SVG.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-bold">
                    Presentation: Include a before & after comparison showcasing your redesign process.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-600 font-bold">
                    Optional: A short description (50–100 words) explaining your design choices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Rewards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Rewards</h3>
            <div className="space-y-4">
              {/* 1st Place */}
              <div className="border border-gray-200 rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.02L12 19L6.82 22.02L8 14.74L2 9L9.91 8.26L12 2Z" 
                          fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">1st Winner</p>
                  <p className="text-2xl font-bold text-gray-900">$200</p>
                </div>
              </div>

              {/* 2nd Place */}
              <div className="border border-gray-200 rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.02L12 19L6.82 22.02L8 14.74L2 9L9.91 8.26L12 2Z" 
                          fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">2nd Winner</p>
                  <p className="text-2xl font-bold text-gray-900">$150</p>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="border border-gray-200 rounded-2xl p-4 text-center">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.02L12 19L6.82 22.02L8 14.74L2 9L9.91 8.26L12 2Z" 
                          fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">3rd Winner</p>
                  <p className="text-2xl font-bold text-gray-900">$100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
