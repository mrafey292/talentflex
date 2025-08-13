"use client";

import { useState } from 'react';
import { ChevronDown, Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/layout/TopBar';

interface RoadmapCard {
  number: string;
  time: string;
  status: 'finished' | 'ongoing' | 'soon';
  points: string[];
}

export default function RoadmapPage() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState('90 days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('roadmap');

  const periodOptions = ['90 days', '1 year', '3 years', '10 years'];

  const roadmapData90Days: RoadmapCard[] = [
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

  const roadmapData1Year: RoadmapCard[] = [
    {
      number: '1',
      time: 'Month 1',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '2',
      time: 'Month 2',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '3',
      time: 'Month 3',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '4',
      time: 'Month 4',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '5',
      time: 'Month 5',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '6',
      time: 'Month 6',
      status: 'ongoing',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '7',
      time: 'Month 7',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '8',
      time: 'Month 8',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '9',
      time: 'Month 9',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '10',
      time: 'Month 10',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '11',
      time: 'Month 11',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '12',
      time: 'Month 12',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    }
  ];

  // 3 Years data - spread across 3 rows (12 quarters total, showing as months)
  const roadmapData3Years: RoadmapCard[] = [
    {
      number: '1',
      time: 'Month 1-3',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '2',
      time: 'Month 4-6',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '3',
      time: 'Month 7-9',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '4',
      time: 'Month 10-12',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '5',
      time: 'Year 2 Q1',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '6',
      time: 'Year 2 Q2',
      status: 'ongoing',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '7',
      time: 'Year 2 Q3',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '8',
      time: 'Year 2 Q4',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '9',
      time: 'Year 3 Q1',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '10',
      time: 'Year 3 Q2',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '11',
      time: 'Year 3 Q3',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '12',
      time: 'Year 3 Q4',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    }
  ];

  // 10 Years data - also spread across 3 rows 
  const roadmapData10Years: RoadmapCard[] = [
    {
      number: '1',
      time: 'Year 1',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '2',
      time: 'Year 2',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '3',
      time: 'Year 3',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '4',
      time: 'Year 4',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '5',
      time: 'Year 5',
      status: 'finished',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '6',
      time: 'Year 6',
      status: 'ongoing',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '7',
      time: 'Year 7',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '8',
      time: 'Year 8',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '9',
      time: 'Year 9',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '10',
      time: 'Year 10',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '11',
      time: 'Year 11',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    },
    {
      number: '12',
      time: 'Year 12',
      status: 'soon',
      points: [
        'Set goals for your graphic design journey.',
        'Learn/review basic design principles',
        'Set up your essential tools: Figma, Photoshop, Illustrator, Canva.'
      ]
    }
  ];

  // Get the appropriate data based on selected period
  const getRoadmapData = () => {
    switch (selectedPeriod) {
      case '90 days':
        return roadmapData90Days;
      case '1 year':
        return roadmapData1Year;
      case '3 years':
        return roadmapData3Years;
      case '10 years':
        return roadmapData10Years;
      default:
        return roadmapData90Days;
    }
  };

  const currentRoadmapData = getRoadmapData();

  const handleEditClick = () => {
    router.push('/roadmap/edit');
  };

  const RoadmapCard = ({ card }: { card: RoadmapCard }) => {
    
    return (
      <div className="flex flex-col items-center gap-4 w-[214px]">
        {/* Number Circle */}
        <div className="relative w-24 h-24">
          {/* Outer ring with border */}
          <div className={`absolute inset-0 rounded-full ${
            card.status === 'finished' ? 'border-2 border-[#E2ECFF]' : 
            card.status === 'ongoing' ? '' : 
            card.status === 'soon' ? 'border-2 border-[#EDEDED]' : ''
          }`} />
          
          {/* Gradient border for ongoing status */}
          {card.status === 'ongoing' && (
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-[#D96570] to-[#4A83F0]">
              <div className="w-full h-full rounded-full bg-white" />
            </div>
          )}
          
          {/* Inner circle with number - centered */}
          <div className={`absolute inset-2 rounded-full flex items-center justify-center ${
            card.status === 'finished' ? 'bg-[#E2ECFF]' : 
            card.status === 'ongoing' ? 'bg-gradient-to-br from-[#D96570] to-[#4A83F0]' : 
            'bg-[#E2E2E2]'
          }`}>
            <span className={`text-[32px] font-bold leading-[40px] tracking-[-0.02em] ${
              card.status === 'finished' ? 'text-[#4A83F0]' : 
              card.status === 'ongoing' ? 'text-white' : 
              'text-white'
            }`}>
              {card.number}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col gap-2 w-full">
          <span className={`text-base font-bold leading-[24px] tracking-[-0.02em] text-center ${
            card.status === 'ongoing' ? 'text-transparent bg-gradient-to-r from-[#D96570] to-[#4A83F0] bg-clip-text' : 
            'text-[#1A1A1A]'
          }`}>
            {card.time}
          </span>
          
          <div className="flex flex-col gap-1.5">
            {card.points.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px] ${
                  card.status === 'finished' ? 'bg-[#4A83F0]' : 
                  card.status === 'ongoing' ? 'bg-gradient-to-br from-[#D96570] to-[#4A83F0]' : 
                  'bg-[#676767]'
                }`} />
                <p className={`text-sm leading-[20px] tracking-[-0.02em] ${
                  card.status === 'soon' ? 'text-[#676767]' : 'text-[#1A1A1A]'
                }`}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // All periods now display in the same 3x4 grid layout
  const renderRoadmap = () => {
    return (
      <>
        {/* Row 1 */}
        <div className="flex justify-center mb-20">
          <div className="flex gap-16">
            {currentRoadmapData.slice(0, 4).map((card) => (
              <RoadmapCard key={card.number} card={card} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center mb-20">
          <div className="flex gap-16">
            {currentRoadmapData.slice(4, 8).map((card) => (
              <RoadmapCard key={card.number} card={card} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-center">
          <div className="flex gap-16">
            {currentRoadmapData.slice(8, 12).map((card) => (
              <RoadmapCard key={card.number} card={card} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
      {/* Top Bar with Edit button */}
      <div className="relative">
        <TopBar title="Career Roadmap" />
        <button 
          onClick={handleEditClick}
          className="absolute left-[280px] top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Pencil className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
          <span className="text-base font-medium text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
            Edit
          </span>
        </button>
      </div>
      
      {/* Tab and Period Selector */}
      <div className="px-8 pt-8 pb-0">
        <div className="flex items-center justify-between">
          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-[#EDEDED] rounded-[10px] w-fit">
            <button 
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-lg text-base leading-[24px] tracking-[-0.02em] transition-all ${
                activeTab === 'roadmap' 
                  ? 'bg-white font-bold text-[#1A1A1A]' 
                  : 'font-normal text-[#676767] hover:text-[#1A1A1A]'
              }`}
            >
              Roadmap
            </button>
            <button 
              onClick={() => setActiveTab('visionboard')}
              className={`px-4 py-2 rounded-lg text-base leading-[24px] tracking-[-0.02em] transition-all ${
                activeTab === 'visionboard' 
                  ? 'bg-white font-bold text-[#1A1A1A]' 
                  : 'font-normal text-[#676767] hover:text-[#1A1A1A]'
              }`}
            >
              Vision Board
            </button>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-[132px] px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-normal text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
                {selectedPeriod}
              </span>
              <ChevronDown className={`w-4 h-4 text-[#1A1A1A] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={1.33} />
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
      <div className="flex-1 px-8 py-12 bg-white">
        {renderRoadmap()}
      </div>
    </div>
  );
}