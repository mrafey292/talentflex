"use client";

import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LessonPageProps {
  params: { id: string; lessonId: string };
}

export default function LessonPage({ params }: LessonPageProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/course/${params.id}`);
  };

  return (
    <div className="min-h-screen bg-[#010917] flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        {/* Top Bar */}
        <TopBar title="Detail Course" showBack={true} onBackClick={handleBackClick} />
        
        {/* Main Content */}
        <div className="p-8 pb-16 space-y-8">
          {/* Course Header Section */}
          <div className="flex items-center gap-16">
            {/* Left Column - Course Info */}
            <div className="flex-1 space-y-8">
              {/* Course Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-black tracking-[-2%]">Graphic Design Fundamentals</h1>
                  <p className="text-base text-[#676767] tracking-[-2%]">
                    Learn the core principles of design, color theory, and composition to create visually appealing projects
                  </p>
                </div>
                
                {/* Progress and Instructor Info */}
                <div className="flex items-center gap-12">
                  {/* Progress */}
                  <div className="flex items-center gap-3">
                    <div className="w-60 bg-[#EDEDED] rounded-full h-3 relative">
                      <div 
                        className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] h-3 rounded-full"
                        style={{ width: '40%' }}
                      />
                    </div>
                    <span className="text-xs text-[#1A1A1A] tracking-[-2%]">40%</span>
                  </div>
                  
                  {/* Instructor and Duration */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-6 rounded-full bg-[#D3D3D3] relative">
                        <Image
                          src="/images/instructor-avatar.jpg"
                          alt="Instructor"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-[#676767] tracking-[-2%]">John Smith</span>
                    </div>
                    
                    <div className="w-1 h-1 bg-[#B5B5B5] rounded-full" />
                    
                    <div className="flex items-center gap-1">
                      <Image
                        src="/icons/clock-outline.svg"
                        alt="Duration"
                        width={20}
                        height={20}
                        className="text-[#B5B5B5]"
                      />
                      <span className="text-sm text-[#676767] tracking-[-2%]">48 min</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Continue Learning Button */}
              <button className="bg-[#3D80F8] text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors">
                Continue Learning
              </button>
            </div>
            
            {/* Right Column - Course Image */}
            <div className="w-[400px] h-[264px] relative">
              <div 
                className="w-full h-full rounded-xl relative"
                style={{
                  backgroundImage: 'url(/images/course-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Certificate Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-sm text-black tracking-[-2%]">Get Certificate</span>
                  </div>
                </div>
                
                {/* Beginner Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <span className="text-sm text-black tracking-[-2%]">Beginner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-[#EDEDED]" />

          {/* List Task Section */}
          <div className="flex gap-8">
            {/* Left Column - Task List */}
            <div className="w-[720px] space-y-6">
              <h2 className="text-xl font-bold text-black tracking-[-2%]">List Task</h2>
              
              <div className="space-y-4">
                {/* Task 1 - Completed */}
                <div 
                  onClick={() => router.push(`/course/${params.id}/lesson/${params.lessonId}/content`)}
                  className="border border-[#EDEDED] rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 flex items-center gap-4">
                    {/* Task Image */}
                    <div className="w-[148px] h-[148px] rounded-xl">
                      <Image
                        src="/images/lesson-intro.jpg"
                        alt="Introduction to Design Principles"
                        width={148}
                        height={148}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    {/* Task Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Introduction to Design Principles</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Learn the basics of color theory, typography, and composition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Analyze good vs. bad design examples</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Create a simple mood board</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Completed Badge */}
                  <div className="bg-[#EFF5FF] rounded-full p-3">
                    <Image
                      src="/icons/check.svg"
                      alt="Completed"
                      width={24}
                      height={24}
                      className="text-[#3D80F8]"
                    />
                  </div>
                </div>

                {/* Task 2 - Current */}
                <div className="bg-[#EFF5FF] border border-[#3D80F8] rounded-2xl p-4 flex items-center gap-4">
                  <div className="flex-1 flex items-center gap-4">
                    {/* Task Image */}
                    <div className="w-[148px] h-[148px] rounded-xl">
                      <Image
                        src="/images/lesson-color-theory.jpg"
                        alt="Color Theory"
                        width={148}
                        height={148}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    {/* Task Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Color Theory</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Learn the basics of color theory, typography, and composition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Analyze good vs. bad design examples</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Create a simple mood board</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <button 
                    onClick={() => router.push(`/course/${params.id}/lesson/${params.lessonId}/content`)}
                    className="bg-[#3D80F8] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View
                  </button>
                </div>

                {/* Task 3 - Upcoming */}
                <div className="border border-[#EDEDED] rounded-2xl p-4 flex items-stretch gap-4">
                  <div className="flex-1 flex items-center gap-4">
                    {/* Task Image */}
                    <div className="w-[148px] h-[148px] rounded-xl">
                      <Image
                        src="/images/lesson-assessment.jpg"
                        alt="Assessment"
                        width={148}
                        height={148}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    {/* Task Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Assessment Graphic Design Fundamentals</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Learn the basics of color theory, typography, and composition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Analyze good vs. bad design examples</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#676767] rounded-full" />
                          <span className="text-sm text-[#676767] tracking-[-2%]">Create a simple mood board</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Summary Card */}
            <div className="flex-1 border border-[#EDEDED] rounded-2xl p-4 h-fit">
              <div className="flex gap-4">
                {/* Course Image */}
                <div className="w-20 h-20 rounded-xl">
                  <Image
                    src="/images/course-bg.jpg"
                    alt="Course"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Course Details */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-black tracking-[-2%]">Graphic Design Fundamentals</h3>
                      <p className="text-sm text-[#676767] tracking-[-2%]">
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
                  
                  {/* Progress */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-[#EDEDED] rounded-full h-3 relative">
                      <div 
                        className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] h-3 rounded-full"
                        style={{ width: '40%' }}
                      />
                    </div>
                    <span className="text-xs text-[#1A1A1A] tracking-[-2%]">40%</span>
                  </div>
                  
                  {/* Continue Learning Button */}
                  <button className="w-full bg-[#3D80F8] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
