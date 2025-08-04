'use client';

import { useState, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import SearchAndFilter from './SearchAndFilter';
import ChallengeGrid from './ChallengeGrid';
import ChallengeDetailPage from './ChallengeDetailPage';
import { Challenge } from './ChallengeCard';
import { challengesData, filterChallenges } from './challengesData';

export default function ChallengesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(challengesData);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('challenges');
  }, [setCurrentPage]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const filtered = filterChallenges(challengesData, query);
    setFilteredChallenges(filtered);
  };

  const handleFilterClick = () => {
    // Handle filter functionality - could open a modal or sidebar
    console.log('Filter clicked');
  };

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleBackToList = () => {
    setSelectedChallenge(null);
  };

  // If a challenge is selected, show the detail page
  if (selectedChallenge) {
    return (
      <ChallengeDetailPage 
        challenge={selectedChallenge} 
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Challenge Hub</h1>
          <div className="flex items-center gap-2 px-4 py-2 border border-[#B5B5B5] rounded-lg">
            <span className="text-[#1A1A1A]">Graphic Designer</span>
            <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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
              <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h1a3 3 0 003-3V9a5 5 0 0110 0v3h2a2 2 0 012 2v5a2 2 0 01-2 2H4z" />
              </svg>
            </button>
            
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center text-[#676767] text-sm font-medium">
                JC
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator Line */}
      <div className="w-full h-px bg-[#EDEDED] mx-8" style={{ width: 'calc(100% - 64px)' }} />
      
      {/* Content */}
      <div className="px-8 py-8 space-y-6">
        {/* Search and Filter */}
        <SearchAndFilter
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onFilterClick={handleFilterClick}
        />
        
        {/* Challenge Grid */}
        <ChallengeGrid
          challenges={filteredChallenges}
          onChallengeClick={handleChallengeClick}
        />
      </div>
    </div>
  );
}
