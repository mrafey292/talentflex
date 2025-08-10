"use client";

import { useState } from 'react';
import { ChevronDown, Check, Pencil } from 'lucide-react';

interface RoadmapCard {
  number: string;
  time: string;
  status: 'finished' | 'ongoing' | 'soon';
  points: string[];
}

export default function RoadmapPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('90 days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const periodOptions = ['90 days', '1 year', '3 years', '10 years'];

  const roadmapData: RoadmapCard[] = [
    {
      number: '1',
      time: 'Week 1',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '2',
      time: 'Week 2',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '3',
      time: 'Week 3',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '4',
      time: 'Week 4',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '5',
      time: 'Week 5',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '6',
      time: 'Week 6',
      status: 'ongoing',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '7',
      time: 'Week 7',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '8',
      time: 'Week 8',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '9',
      time: 'Week 9',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '10',
      time: 'Week 10',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '11',
      time: 'Week 11',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '12',
      time: 'Week 12',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    }
  ];

  const getCardStyle = (status: string) => {
    switch (status) {
      case 'finished':
        return {
          bg: 'bg-[#E2ECFF]',
          border: 'border-[#3D80F8]',
          text: 'text-[#1A1A1A]',
          numberBg: 'bg-[#3D80F8]',
          numberText: 'text-white'
        };
      case 'ongoing':
        return {
          bg: 'bg-gradient-to-br from-[#FFE5E7] to-[#E2ECFF]',
          border: 'border-[#D96570]',
          text: 'text-[#1A1A1A]',
          numberBg: 'bg-gradient-to-br from-[#D96570] to-[#4A83F0]',
          numberText: 'text-white'
        };
      case 'soon':
        return {
          bg: 'bg-white',
          border: 'border-[#EDEDED]',
          text: 'text-[#676767]',
          numberBg: 'bg-[#EDEDED]',
          numberText: 'text-[#676767]'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-[#EDEDED]',
          text: 'text-[#676767]',
          numberBg: 'bg-[#EDEDED]',
          numberText: 'text-[#676767]'
        };
    }
  };

  const RoadmapCard = ({ card }: { card: RoadmapCard }) => {
    
    return (
      <div className="flex flex-col gap-4" style={{ width: '214px' }}>
        {/* Number Circle with Progress Border */}
        <div className="relative">
          {/* Progress Ring for finished/ongoing */}
          {(card.status === 'finished' || card.status === 'ongoing') && (
            <svg className="absolute inset-0" width="96" height="96" viewBox="0 0 96 96">
              <circle
                cx="48"
                cy="48"
                r="47"
                stroke={card.status === 'finished' ? '#E2ECFF' : 'url(#gradient)'}
                strokeWidth="2"
                fill="none"
              />
              {card.status === 'ongoing' && (
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D96570" />
                    <stop offset="100%" stopColor="#4A83F0" />
                  </linearGradient>
                </defs>
              )}
            </svg>
          )}
          
          <div className={`relative w-24 h-24 flex items-center justify-center`}>
            <div className={`w-20 h-20 rounded-full ${card.status === 'finished' ? 'bg-[#E2ECFF]' : card.status === 'ongoing' ? 'bg-gradient-to-br from-[#D96570] to-[#4A83F0]' : 'bg-[#E2E2E2]'} flex items-center justify-center`}>
              <span className={`text-[32px] font-bold ${card.status === 'soon' ? 'text-[#1A1A1A]' : card.status === 'finished' ? 'text-[#3D80F8]' : 'text-white'} leading-[40px] tracking-[-0.02em]`}>
                {card.number}
              </span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-base font-bold ${card.status === 'ongoing' ? 'text-transparent bg-gradient-to-r from-[#D96570] to-[#4A83F0] bg-clip-text' : 'text-[#1A1A1A]'} leading-[24px] tracking-[-0.02em]`}>
              {card.time}
            </span>
          </div>
          
          <div className="flex flex-col gap-1">
            {card.points.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className={`w-5 h-5 rounded ${card.status === 'finished' ? 'bg-[#3D80F8]' : card.status === 'ongoing' ? 'bg-gradient-to-br from-[#D96570] to-[#4A83F0]' : 'bg-[#EDEDED]'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  {(card.status === 'finished' || card.status === 'ongoing') && (
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  )}
                </div>
                <p className={`text-sm ${card.status === 'soon' ? 'text-[#676767]' : 'text-[#1A1A1A]'} leading-[20px] tracking-[-0.02em]`}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden" style={{ width: '1176px', minHeight: '1431px' }}>
      {/* Custom Top Bar with Edit button */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-[#EDEDED]">
        <div className="flex items-center gap-6">
          <h1 className="text-[32px] font-bold text-[#1A1A1A] leading-[40px] tracking-[-0.02em]">
            Career Roadmap
          </h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#969699] rounded-lg hover:bg-gray-50 transition-colors">
            <Pencil className="w-6 h-6 text-[#1A1A1A]" strokeWidth={1.5} />
            <span className="text-base font-bold text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
              Edit
            </span>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-[#D96570] to-[#4A83F0] rounded-lg hover:opacity-90 transition-opacity">
            <span className="text-sm font-bold text-white leading-[20px] tracking-[-0.02em]">
              AI Career Coach
            </span>
          </button>
        </div>
      </div>
      
      {/* Tab and Period Selector */}
      <div className="px-8 pt-8 pb-6">
        <div className="flex items-center justify-between">
          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-[#EDEDED] rounded-[10px]">
            <button className="px-4 py-2 bg-white rounded-lg text-base font-bold text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
              Roadmap
            </button>
            <button className="px-4 py-2 text-base font-normal text-[#676767] hover:text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
              Vision Board
            </button>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 w-[132px] px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="flex-1 text-base font-normal text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
                {selectedPeriod}
              </span>
              <ChevronDown className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.33} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[132px] bg-white border border-[#D3D3D3] rounded-lg shadow-lg z-10">
                {periodOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedPeriod(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-base hover:bg-gray-50 ${
                      selectedPeriod === option ? 'text-[#3D80F8] font-medium' : 'text-[#1A1A1A] font-normal'
                    } leading-[24px] tracking-[-0.02em]`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Roadmap Content */}
      <div className="relative" style={{ paddingLeft: '88px', paddingRight: '88px', paddingTop: '0px' }}>
        {/* Row 1: Weeks 1-4 */}
        <div className="flex relative" style={{ gap: '64px', marginBottom: '384px' }}>
          {roadmapData.slice(0, 4).map((card) => (
            <RoadmapCard key={card.number} card={card} />
          ))}
        </div>

        {/* Row 2: Weeks 5-8 */}
        <div className="flex relative" style={{ gap: '64px', marginBottom: '384px', flexDirection: 'row-reverse' }}>
          {roadmapData.slice(4, 8).map((card) => (
            <RoadmapCard key={card.number} card={card} />
          ))}
        </div>

        {/* Row 3: Weeks 9-12 */}
        <div className="flex relative" style={{ gap: '64px' }}>
          {roadmapData.slice(8, 12).map((card) => (
            <RoadmapCard key={card.number} card={card} />
          ))}
        </div>

        {/* Connector Lines - Positioned Absolutely */}
        {/* Row 1 connectors */}
        <svg className="absolute" style={{ left: '184px', top: '48px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#E2ECFF" strokeWidth="2" />
        </svg>
        <svg className="absolute" style={{ left: '450px', top: '48px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#E2ECFF" strokeWidth="2" />
        </svg>
        <svg className="absolute" style={{ left: '716px', top: '48px', width: '172px', height: '2px' }}>
          <line x1="0" y1="1" x2="172" y2="1" stroke="#E2ECFF" strokeWidth="2" />
        </svg>
        
        {/* Curved connector from row 1 to row 2 */}
        <svg className="absolute" style={{ left: '981.5px', top: '48px', width: '162.5px', height: '384px' }}>
          <path d="M 0 1 Q 81.25 1 81.25 192 T 162.5 383" fill="none" stroke="#E2ECFF" strokeWidth="2" />
        </svg>

        {/* Row 2 connectors */}
        <svg className="absolute" style={{ left: '716px', top: '432px', width: '170px', height: '2px' }}>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2ECFF" />
              <stop offset="50%" stopColor="#D96570" />
              <stop offset="100%" stopColor="#4A83F0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="1" x2="170" y2="1" stroke="url(#gradient2)" strokeWidth="2" />
        </svg>
        <svg className="absolute" style={{ left: '450px', top: '432px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#EDEDED" strokeWidth="2" />
        </svg>
        <svg className="absolute" style={{ left: '184px', top: '432px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#EDEDED" strokeWidth="2" />
        </svg>

        {/* Curved connector from row 2 to row 3 */}
        <svg className="absolute" style={{ left: '32px', top: '432px', width: '57px', height: '383px' }}>
          <path d="M 57 1 Q 0 1 0 192 T 57 383" fill="none" stroke="#EDEDED" strokeWidth="2" />
        </svg>

        {/* Row 3 connectors */}
        <svg className="absolute" style={{ left: '184px', top: '816px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#EDEDED" strokeWidth="2" />
        </svg>
        <svg className="absolute" style={{ left: '450px', top: '816px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#EDEDED" strokeWidth="2" />
        </svg>
        <svg className="absolute" style={{ left: '716px', top: '816px', width: '170px', height: '2px' }}>
          <line x1="0" y1="1" x2="170" y2="1" stroke="#EDEDED" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}