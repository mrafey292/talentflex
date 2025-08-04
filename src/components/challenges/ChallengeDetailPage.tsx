'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { UsersIcon } from '@heroicons/react/24/outline';
import { Challenge } from './ChallengeCard';

interface ChallengeDetailPageProps {
  challenge: Challenge;
  onBack: () => void;
}

export default function ChallengeDetailPage({ challenge, onBack }: ChallengeDetailPageProps) {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('challenges');
  }, [setCurrentPage]);

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
      <div className="border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full hover:bg-gray-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Challenge Course</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-lg font-bold text-sm">
              AI Career Coach
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V2M12 2L14 4M12 2L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 16L5 14L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 16L19 14L21 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8A6 6 0 0 0 6 8C6 7 6 9 6 9H18C18 9 18 7 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21A2 2 0 0 1 12 22A2 2 0 0 1 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

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
