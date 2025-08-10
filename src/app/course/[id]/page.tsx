"use client";

import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CoursePageProps {
  params: { id: string };
}

export default function CoursePage({ params }: CoursePageProps) {
  const [selectedWeek, setSelectedWeek] = useState(2);
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/skills');
  };

  return (
    <div className="min-h-screen bg-[#010917] flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        {/* Top Bar */}
        <TopBar title="Course" showBack={true} onBackClick={handleBackClick} />
        
        {/* Main Content */}
        <div className="p-8 space-y-10">
          {/* Course Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center gap-6">
              {/* Course Info */}
              <div className="flex-1 space-y-2">
                <h1 className="text-2xl font-bold text-[#1A1A1A] tracking-[-2%]">Graphic Design</h1>
                <p className="text-base text-[#676767] tracking-[-2%] w-[470px]">
                  Learn the fundamentals of visual design, from color theory and typography to layout and branding
                </p>
              </div>
              
              {/* Progress Section */}
              <div className="flex items-center gap-3 w-[240px]">
                <div className="flex-1 bg-[#EDEDED] rounded-full h-4 relative">
                  <div 
                    className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] h-4 rounded-full"
                    style={{ width: '25%' }}
                  />
                </div>
                <span className="text-sm font-normal text-[#1A1A1A] tracking-[-2%]">25%</span>
              </div>
              
              {/* Dropdown */}
              <div className="flex items-center justify-between border border-[#D3D3D3] rounded-lg px-4 py-2 w-[124px]">
                <span className="text-base text-[#1A1A1A] tracking-[-2%]">90 days</span>
                <Image
                  src="/icons/chevron-down.svg"
                  alt="Expand"
                  width={16}
                  height={16}
                  className="text-[#1A1A1A]"
                />
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="flex gap-8">
            {/* Main Course Content */}
            <div className="flex-1 border border-[#EDEDED] rounded-3xl p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#1A1A1A] tracking-[-2%]">Week 2</h2>
                
                {/* Course Card */}
                <div 
                  className="border border-[#EDEDED] rounded-2xl p-4 space-y-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => router.push(`/course/${params.id}/lesson/1`)}
                >
                  {/* Course Image */}
                  <div 
                    className="w-full h-[400px] rounded-xl relative"
                    style={{
                      backgroundImage: 'url(/images/course-bg.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Certificate Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                        <span className="text-sm font-normal text-black tracking-[-2%]">Get Certificate</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#EDEDED] rounded-lg px-2 py-1">
                        <span className="text-xs text-black tracking-[-2%]">Beginner</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-black tracking-[-2%]">Graphic Design Fundamentals</h3>
                        <p className="text-sm text-[#676767] tracking-[-2%] h-10">
                          Learn the core principles of design, color theory, and composition to create visually appealing projects
                        </p>
                      </div>
                      
                      {/* Instructor and Duration */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 rounded-full bg-[#D3D3D3] relative">
                            <Image
                              src="/images/instructor-avatar.jpg"
                              alt="Instructor"
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
                  
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-[#EDEDED] rounded-full h-3 relative">
                      <div 
                        className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] h-3 rounded-full"
                        style={{ width: '40%' }}
                      />
                    </div>
                    <span className="text-xs text-[#1A1A1A] tracking-[-2%]">40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Week Navigation Sidebar */}
            <div className="w-80 space-y-3">
              {/* Week 1 - Completed */}
              <div className="border border-[#EDEDED] rounded-3xl p-6 flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-2%]">Week 1</h3>
                </div>
                <div className="bg-[#E2ECFF] rounded-full p-2">
                  <Image
                    src="/icons/check.svg"
                    alt="Completed"
                    width={24}
                    height={24}
                    className="text-[#3D80F8]"
                  />
                </div>
              </div>

              {/* Week 2 - Current */}
              <div className="border border-[#3D80F8] rounded-3xl p-6">
                <h3 className="text-xl font-bold text-[#3D80F8] tracking-[-2%]">Week 2</h3>
              </div>

              {/* Week 3 - Upcoming */}
              <div className="border border-[#EDEDED] rounded-3xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-2%]">Week 3</h3>
              </div>

              {/* Week 4 - Upcoming */}
              <div className="border border-[#EDEDED] rounded-3xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-2%]">Week 4</h3>
              </div>

              {/* Week 5 - Upcoming */}
              <div className="border border-[#EDEDED] rounded-3xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-2%]">Week 5</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
