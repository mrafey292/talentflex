"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Search, SlidersHorizontal, Users, ChevronDown } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  status: "On Progress" | "To Do" | "Completed";
  participants: number;
  image?: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Graphic Designer");

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Brand Identity for "Lunara Café"',
      description: "Lunara Café approached me with a vision to refresh their brand and connect with a younger, trend-savvy audience. I crafted a clean, modern visual identity that reflects their cozy, creative atmosphere—from logo design and color choices to packaging and digital assets. The new look not only elevated their brand presence but also helped boost engagement, especially on social media. It's a blend of simplicity and warmth—just like their coffee.",
      status: "On Progress",
      participants: 287
    },
    {
      id: 2,
      title: 'Brand Identity for "Lunara Café"',
      description: "Lunara Café approached me with a vision to refresh their brand and connect with a younger, trend-savvy audience. I crafted a clean, modern visual identity that reflects their cozy, creative atmosphere—from logo design and color choices to packaging and digital assets. The new look not only elevated their brand presence but also helped boost engagement, especially on social media. It's a blend of simplicity and warmth—just like their coffee.",
      status: "To Do",
      participants: 287
    },
    {
      id: 3,
      title: 'Brand Identity for "Lunara Café"',
      description: "Lunara Café approached me with a vision to refresh their brand and connect with a younger, trend-savvy audience. I crafted a clean, modern visual identity that reflects their cozy, creative atmosphere—from logo design and color choices to packaging and digital assets. The new look not only elevated their brand presence but also helped boost engagement, especially on social media. It's a blend of simplicity and warmth—just like their coffee.",
      status: "Completed",
      participants: 287
    },
    {
      id: 4,
      title: 'Brand Identity for "Lunara Café"',
      description: "Lunara Café approached me with a vision to refresh their brand and connect with a younger, trend-savvy audience. I crafted a clean, modern visual identity that reflects their cozy, creative atmosphere—from logo design and color choices to packaging and digital assets. The new look not only elevated their brand presence but also helped boost engagement, especially on social media. It's a blend of simplicity and warmth—just like their coffee.",
      status: "On Progress",
      participants: 287
    }
  ];

  const getStatusColor = (status: CaseStudy["status"]) => {
    switch (status) {
      case "On Progress":
        return { bg: "#EFF5FF", text: "#3D80F8" };
      case "To Do":
        return { bg: "#FDEFF7", text: "#9C4F7E" };
      case "Completed":
        return { bg: "#E8FBEB", text: "#229A1B" };
    }
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-[1176px] h-[90vh] max-h-[900px] flex flex-col">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#EDEDED]">
          <div className="flex items-center gap-6">
            <h1 className="text-[32px] font-bold text-[#1A1A1A] tracking-[-0.02em]">
              Case Study
            </h1>
            
            {/* Category Dropdown */}
            <div className="w-[200px] border border-[#B5B5B5] rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50">
              <span className="text-base text-[#1A1A1A]">{selectedCategory}</span>
              <ChevronDown className="w-4 h-4 text-[#1A1A1A]" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* AI Career Coach Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-[#D96570] to-[#4A83F0] text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity">
              AI Career Coach
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-[#EDEDED] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <X className="w-5 h-5 text-[#676767]" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[800px] mx-auto space-y-6">
            {/* Search and Filter */}
            <div className="flex gap-2 justify-center">
              <div className="flex-1 max-w-[600px] border-2 border-[#EDEDED] rounded-[10px] px-4 py-3 flex items-center gap-4">
                <Search className="w-5 h-5 text-[#676767]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none text-base text-[#1A1A1A] placeholder-[#ACACAF]"
                />
              </div>
              <button className="p-3 border border-[#EDEDED] rounded-[10px] hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-5 h-5 text-[#676767]" />
              </button>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-4">
              {caseStudies.map((study) => {
                const statusColors = getStatusColor(study.status);
                return (
                  <div
                    key={study.id}
                    className="flex items-center gap-6 p-4 border border-[#EDEDED] rounded-2xl hover:shadow-md transition-shadow"
                  >
                    {/* Thumbnail */}
                    <div className="w-40 h-40 bg-[#EDEDED] rounded-xl flex-shrink-0" />

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="px-2 py-1 rounded-lg text-sm font-normal"
                            style={{
                              backgroundColor: statusColors.bg,
                              color: statusColors.text
                            }}
                          >
                            {study.status}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-black">
                          {study.title}
                        </h3>
                        <p className="text-sm text-[#676767] line-clamp-2">
                          {study.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#B5B5B5]" />
                          <span className="text-xs text-[#676767]">
                            {study.participants} Participants
                          </span>
                        </div>
                        <button className="px-4 py-2 bg-[#3D80F8] text-white font-bold text-xs rounded-lg hover:bg-blue-600 transition-colors">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}