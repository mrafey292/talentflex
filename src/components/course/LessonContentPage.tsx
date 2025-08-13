"use client";

import TopBar from "@/components/layout/TopBar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LessonContentPageProps {
  courseId: string;
  lessonId: string;
}

export default function LessonContentPage({ courseId, lessonId }: LessonContentPageProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/course/${courseId}/lesson/${lessonId}`);
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        {/* Top Bar */}
        <TopBar title="Graphic Design Fundamentals" showBack={true} onBackClick={handleBackClick} />
        
        {/* Main Content */}
        <div className="p-8 pb-16 space-y-6">
          {/* Main Content Area */}
          <div className="flex gap-6">
            {/* Left Column - Video and Content */}
            <div className="flex-1 space-y-6">
              {/* Video Player Section */}
              <div className="w-[720px] h-[405px] bg-[#EDEDED] rounded-2xl relative">
                <Image
                  src="/images/single-lesson-video.jpg"
                  alt="Introduction to Design Principles"
                  fill
                  className="object-cover rounded-2xl"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-4">
                    <Image
                      src="/icons/play.svg"
                      alt="Play"
                      width={64}
                      height={64}
                      className="text-[#1A1A1A]"
                    />
                  </div>
                </div>
              </div>

              {/* Video Info Section */}
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-black tracking-[-2%]">Introduction to Design Principles</h1>
                
                <div className="flex items-center gap-12">
                  {/* Instructor and Duration */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#D3D3D3] relative">
                        <Image
                          src="/images/instructor-avatar.jpg"
                          alt="John Smith"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span className="text-base text-[#676767] tracking-[-2%]">John Smith</span>
                    </div>
                    
                    <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
                    
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/clock-outline.svg"
                        alt="Duration"
                        width={24}
                        height={24}
                        className="text-[#B5B5B5]"
                      />
                      <span className="text-base text-[#676767] tracking-[-2%]">48 min</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button className="border border-[#D3D3D3] text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Download
                    </button>
                    <button className="border border-[#D3D3D3] text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-[720px] h-px bg-[#EDEDED]" />

              {/* Description Section */}
              <div className="space-y-6">
                <p className="text-base text-[#676767] tracking-[-2%] leading-relaxed">
                  Discover the foundational rules that shape great design. This course introduces core principles such as balance, 
                  contrast, alignment, hierarchy, and white space equipping you with the tools to create visually appealing and 
                  effective designs across any medium.
                </p>

                {/* Learning Points */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#676767] rounded-full" />
                    <span className="text-base text-[#676767] tracking-[-2%]">Learn the basics of color theory, typography, and composition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#676767] rounded-full" />
                    <span className="text-base text-[#676767] tracking-[-2%]">Analyze good vs. bad design examples</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#676767] rounded-full" />
                    <span className="text-base text-[#676767] tracking-[-2%]">Create a simple mood board</span>
                  </div>
                </div>

                <p className="text-base text-[#676767] tracking-[-2%] leading-relaxed">
                  By the end, you'll be equipped to spot good design, improve your own work, and build a solid design foundation.
                </p>
              </div>
            </div>

            {/* Right Column - Next Course and Explore */}
            <div className="w-[360px] space-y-6">
              {/* Next Course Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-black tracking-[-2%]">Next Course</h2>
                
                <div className="space-y-4">
                  {/* Color Theory Course */}
                  <div className="border border-[#EDEDED] rounded-2xl p-4">
                    <div className="w-full h-[180px] bg-[#D3D3D3] rounded-xl mb-4 relative">
                      <Image
                        src="/images/next-lesson-color.jpg"
                        alt="Color Theory"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Color Thory</h3>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-[#D3D3D3] relative">
                            <Image
                              src="/images/instructor-avatar.jpg"
                              alt="John Smith"
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-[#676767] tracking-[-2%]">John Smith</span>
                        </div>
                        
                        <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
                        
                        <div className="flex items-center gap-1">
                          <Image
                            src="/icons/clock-outline.svg"
                            alt="Duration"
                            width={16}
                            height={16}
                            className="text-[#B5B5B5]"
                          />
                          <span className="text-xs text-[#676767] tracking-[-2%]">48 min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Assessment Course */}
                  <div className="border border-[#EDEDED] rounded-2xl p-4">
                    <div className="w-full h-[180px] bg-[#EDEDED] rounded-xl mb-4 relative">
                      <Image
                        src="/images/next-lesson-assessment.jpg"
                        alt="Assessment"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Assesment Graphic Design Fundamentals</h3>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-[#D3D3D3] relative">
                            <Image
                              src="/images/instructor-avatar.jpg"
                              alt="John Smith"
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-[#676767] tracking-[-2%]">John Smith</span>
                        </div>
                        
                        <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
                        
                        <div className="flex items-center gap-1">
                          <Image
                            src="/icons/clock-outline.svg"
                            alt="Duration"
                            width={16}
                            height={16}
                            className="text-[#B5B5B5]"
                          />
                          <span className="text-xs text-[#676767] tracking-[-2%]">48 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore Other Course Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-black tracking-[-2%]">Explore Other Course</h2>
                
                <div className="space-y-4">
                  {/* Course 1 */}
                  <div className="border border-[#EDEDED] rounded-2xl p-4">
                    <div className="w-full h-[180px] bg-[#EDEDED] rounded-xl mb-4 relative">
                      <Image
                        src="/images/explore-lesson-1.jpg"
                        alt="Introduction to Design Principles"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Introduction to Design Principles</h3>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-[#D3D3D3] relative">
                            <Image
                              src="/images/instructor-avatar.jpg"
                              alt="John Smith"
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-[#676767] tracking-[-2%]">John Smith</span>
                        </div>
                        
                        <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
                        
                        <div className="flex items-center gap-1">
                          <Image
                            src="/icons/clock-outline.svg"
                            alt="Duration"
                            width={16}
                            height={16}
                            className="text-[#B5B5B5]"
                          />
                          <span className="text-xs text-[#676767] tracking-[-2%]">48 min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course 2 */}
                  <div className="border border-[#EDEDED] rounded-2xl p-4">
                    <div className="w-full h-[180px] bg-[#EDEDED] rounded-xl mb-4 relative">
                      <Image
                        src="/images/explore-lesson-1.jpg"
                        alt="Introduction to Design Principles"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Introduction to Design Principles</h3>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-[#D3D3D3] relative">
                            <Image
                              src="/images/instructor-avatar.jpg"
                              alt="John Smith"
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-[#676767] tracking-[-2%]">John Smith</span>
                        </div>
                        
                        <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
                        
                        <div className="flex items-center gap-1">
                          <Image
                            src="/icons/clock-outline.svg"
                            alt="Duration"
                            width={16}
                            height={16}
                            className="text-[#B5B5B5]"
                          />
                          <span className="text-xs text-[#676767] tracking-[-2%]">48 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
