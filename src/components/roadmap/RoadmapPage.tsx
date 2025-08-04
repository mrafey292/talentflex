"use client";

import { useEffect } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

export default function RoadmapPage() {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('roadmap');
  }, [setCurrentPage]);

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#1A1A1A]">Career Roadmap</h1>
          </div>
          
          <div className="space-y-6">
            {/* Current Level */}
            <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Current Level: Intermediate Designer</h2>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-[#3D80F8] h-3 rounded-full" style={{width: '65%'}}></div>
              </div>
              <p className="text-gray-600">You're 65% towards becoming a Senior Designer</p>
            </div>

            {/* Roadmap Steps */}
            <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Your Learning Path</h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-700">Master Design Fundamentals</h3>
                    <p className="text-gray-600">Complete color theory, typography, and layout principles</p>
                    <div className="text-sm text-green-600 mt-1">Completed</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#3D80F8] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#3D80F8]">Advanced Design Tools</h3>
                    <p className="text-gray-600">Learn Figma advanced features, prototyping, and design systems</p>
                    <div className="text-sm text-[#3D80F8] mt-1">In Progress - 70% Complete</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">3</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-700">UX Research & Strategy</h3>
                    <p className="text-gray-600">Learn user research, persona development, and strategic thinking</p>
                    <div className="text-sm text-gray-500 mt-1">Upcoming</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">4</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-700">Leadership & Team Collaboration</h3>
                    <p className="text-gray-600">Develop leadership skills and team management capabilities</p>
                    <div className="text-sm text-gray-500 mt-1">Upcoming</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Next Recommended Course</h3>
                <p className="text-gray-600 mb-4">Advanced Prototyping in Figma</p>
                <button className="bg-[#3D80F8] text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                  Start Course
                </button>
              </div>

              <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Skills to Develop</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Design Systems</span>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">User Research</span>
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Prototyping</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
