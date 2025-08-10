'use client';

import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import SearchAndFilter from './SearchAndFilter';
import ChallengeGrid from './ChallengeGrid';
import ChallengeDetailPage from './ChallengeDetailPage';
import { Challenge } from './ChallengeCard';
import { challengesData, filterChallenges } from './challengesData';

export default function ChallengesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(challengesData);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

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
      <TopBar title="Challenge Hub" />
      
      {/* Role Selector */}
      <div className="px-8 pt-6">
        <div className="flex items-center gap-2 px-4 py-2 border border-[#B5B5B5] rounded-lg w-fit">
          <span className="text-[#1A1A1A]">Graphic Designer</span>
          <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-8 py-6 space-y-6">
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
