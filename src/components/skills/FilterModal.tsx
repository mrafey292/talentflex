"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [selectedTimeRange, setSelectedTimeRange] = useState("90 days");
  const [startDate, setStartDate] = useState("16 April 2024");
  const [endDate, setEndDate] = useState("16 July 2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const timeRangeOptions = [
    "30 days",
    "60 days", 
    "90 days",
    "6 months",
    "1 year",
    "All time"
  ];

  const handleTimeRangeSelect = (option: string) => {
    setSelectedTimeRange(option);
    setIsDropdownOpen(false);
    
    // Update date ranges based on selection
    const today = new Date();
    let startDateObj = new Date();
    
    switch(option) {
      case "30 days":
        startDateObj.setDate(today.getDate() - 30);
        break;
      case "60 days":
        startDateObj.setDate(today.getDate() - 60);
        break;
      case "90 days":
        startDateObj.setDate(today.getDate() - 90);
        break;
      case "6 months":
        startDateObj.setMonth(today.getMonth() - 6);
        break;
      case "1 year":
        startDateObj.setFullYear(today.getFullYear() - 1);
        break;
      default:
        startDateObj = new Date("2020-01-01");
    }
    
    setStartDate(startDateObj.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }));
    setEndDate(today.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }));
  };

  const handleApply = () => {
    console.log("Applied filters:", { selectedTimeRange, startDate, endDate });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-[1px] flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-6 w-[400px] max-w-[90vw] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-[-2%]">Filter</h2>
          <button 
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
          >
            <Image
              src="/icons/x-close.svg"
              alt="Close"
              width={12}
              height={12}
              className="text-[#676767]"
            />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Posting Date Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-2%]">Posting Date</h3>
            
            <div className="space-y-3">
              {/* Date Range Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between border border-[#D3D3D3] rounded-lg px-4 py-2 hover:border-[#3D80F8] transition-colors"
                >
                  <span className="text-base text-[#1A1A1A]">{selectedTimeRange}</span>
                  <Image
                    src="/icons/chevron-down.svg"
                    alt="Expand"
                    width={16}
                    height={16}
                    className={`text-[#1A1A1A] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#D3D3D3] rounded-lg shadow-lg z-10">
                    {timeRangeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleTimeRangeSelect(option)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          option === selectedTimeRange ? 'bg-blue-50 text-[#3D80F8]' : 'text-[#1A1A1A]'
                        } ${option === timeRangeOptions[0] ? 'rounded-t-lg' : ''} ${
                          option === timeRangeOptions[timeRangeOptions.length - 1] ? 'rounded-b-lg' : ''
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Date Range Inputs */}
              <div className="flex items-center gap-3">
                <input
                  type="date"
                  value={new Date(startDate).toISOString().split('T')[0]}
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    setStartDate(date.toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    }));
                  }}
                  className="flex-1 border border-[#D3D3D3] rounded-lg px-4 py-2 text-base text-[#1A1A1A] hover:border-[#3D80F8] focus:border-[#3D80F8] focus:outline-none transition-colors"
                />
                <span className="text-base text-[#676767]">to</span>
                <input
                  type="date"
                  value={new Date(endDate).toISOString().split('T')[0]}
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    setEndDate(date.toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    }));
                  }}
                  className="flex-1 border border-[#D3D3D3] rounded-lg px-4 py-2 text-base text-[#1A1A1A] hover:border-[#3D80F8] focus:border-[#3D80F8] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <button 
            onClick={handleApply}
            className="w-full bg-[#3D80F8] text-white font-bold text-base py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
