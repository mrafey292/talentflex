'use client';

import { useRef } from 'react';

interface CertificateCardProps {
  title: string;
  level: string;
  instructor: string;
  duration: string;
  image: string;
  instructorAvatar: string;
}

function CertificateCard({ title, level, instructor, duration, image, instructorAvatar }: CertificateCardProps) {
  return (
    <div className="w-80 border border-[#EDEDED] rounded-2xl p-4">
      <div className="space-y-5">
        {/* Certificate Image */}
        <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Level Badge */}
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg">
            <span className="text-sm font-normal text-[#000000]">{level}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h4 className="font-bold text-lg text-[#000000] leading-tight">{title}</h4>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img 
                  src={instructorAvatar}
                  alt={instructor}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-[#676767]">{instructor}</span>
              <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#B5B5B5" strokeWidth="1.33"/>
                  <path d="M8 4v4l2 2" stroke="#B5B5B5" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-[#676767]">{duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Button */}
        <button className="w-full bg-[#3D80F8] text-white text-sm font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Claim Reward
        </button>
      </div>
    </div>
  );
}

interface CertificatesSectionProps {
  certificates: Array<{
    id: string;
    title: string;
    level: string;
    instructor: string;
    duration: string;
    image: string;
    instructorAvatar: string;
  }>;
}

export default function CertificatesSection({ certificates }: CertificatesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -336, behavior: 'smooth' }); // 320px card + 16px gap
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 336, behavior: 'smooth' }); // 320px card + 16px gap
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-[#1A1A1A]">My Certificate</h3>
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

      {/* Certificates Grid */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          width: '100%',
          maxWidth: 'calc(2 * 320px + 16px)' // Show exactly 2 cards: 320px each + 16px gap
        }}
      >
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            title={certificate.title}
            level={certificate.level}
            instructor={certificate.instructor}
            duration={certificate.duration}
            image={certificate.image}
            instructorAvatar={certificate.instructorAvatar}
          />
        ))}
      </div>
    </div>
  );
}
