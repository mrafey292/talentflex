"use client";

import Image from "next/image";
import TopBar from "../layout/TopBar";
import FilterModal from "./FilterModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  duration: string;
  progress: number;
  level: string;
  hasCertificate?: boolean;
  backgroundImage?: string;
}

function CourseCard({ 
  id,
  title, 
  description, 
  instructor, 
  instructorAvatar, 
  duration, 
  progress, 
  level, 
  hasCertificate = true,
  backgroundImage 
}: CourseCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/course/${id}`);
  };
  return (
    <div 
      className="border border-[#EDEDED] rounded-2xl p-4 bg-white cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      {/* Header Image with badges */}
      <div 
        className="h-[164px] rounded-xl mb-4 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-3 left-3 bg-white/80 rounded-lg px-2 py-1">
          <span className="text-xs text-black">{level}</span>
        </div>
        {hasCertificate && (
          <div className="absolute top-3 right-3 bg-white/80 rounded-lg px-2 py-1">
            <span className="text-xs text-black">Get Certificate</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="font-bold text-base text-black leading-6">{title}</h3>
          <p className="text-sm text-[#676767] leading-5 h-10 overflow-hidden">{description}</p>
        </div>

        {/* Instructor and Duration */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full overflow-hidden">
              <Image
                src={instructorAvatar}
                alt={instructor}
                width={16}
                height={16}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-[#676767]">{instructor}</span>
          </div>
          
          <div className="w-1 h-1 bg-[#B5B5B5] rounded-full"></div>
          
          <div className="flex items-center gap-1">
            <Image
              src="/icons/clock.svg"
              alt="Duration"
              width={16}
              height={16}
              className="text-[#B5B5B5]"
            />
            <span className="text-xs text-[#676767]">{duration}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#EDEDED] rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs font-normal text-black">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  
  const myCourses = [
    {
      id: "graphic-design-1",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith",
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    },
    {
      id: "graphic-design-2",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith", 
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    },
    {
      id: "graphic-design-3",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith",
      instructorAvatar: "/images/instructor-avatar-1.png", 
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    },
    {
      id: "graphic-design-4",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith",
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min", 
      progress: 40,
      level: "Beginner"
    }
  ];

  const allCourses = [
    {
      id: "graphic-design-5",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith",
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    },
    {
      id: "graphic-design-6",
      title: "Graphic Design", 
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith",
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    },
    {
      id: "graphic-design-7",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects", 
      instructor: "John Smith",
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    },
    {
      id: "graphic-design-8",
      title: "Graphic Design",
      description: "Learn the core principles of design, color theory, and composition to create visually appealing projects",
      instructor: "John Smith", 
      instructorAvatar: "/images/instructor-avatar-1.png",
      duration: "48 min",
      progress: 40,
      level: "Beginner"
    }
  ];

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Top Bar */}
      <TopBar title="Skills Hub" />
      
      <div className="p-8 space-y-10">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Explore Skill Marketplace</h1>
            <p className="text-base text-[#676767]">Browse trending skills and see what others are learning.</p>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-3 w-full max-w-[400px]">
            <div className="flex-1 flex items-center gap-4 border-2 border-[#EDEDED] rounded-lg px-4 py-2">
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={24}
                height={24}
                className="text-[#676767]"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 text-base text-[#ACACAF] bg-transparent border-none outline-none"
              />
            </div>
            <button 
              onClick={() => setIsFilterModalOpen(true)}
              className="border border-[#D3D3D3] rounded-xl p-3"
            >
              <Image
                src="/icons/adjustments.svg"
                alt="Filter"
                width={24}
                height={24}
                className="text-[#1A1A1A]"
              />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-3">
            <button className="bg-[#3D80F8] text-white border border-[#3D80F8] px-6 py-2 rounded-xl text-sm font-bold">
              All
            </button>
            <button className="text-[#676767] border border-[#D3D3D3] px-6 py-2 rounded-xl text-sm">
              My Courses
            </button>
            <button className="text-[#676767] border border-[#D3D3D3] px-6 py-2 rounded-xl text-sm">
              Best Match
            </button>
            <button className="text-[#676767] border border-[#D3D3D3] px-6 py-2 rounded-xl text-sm">
              Most Recently Added
            </button>
          </div>
        </div>

        {/* My Courses Section */}
        <div className="space-y-6">
          <h2 className="text-[23px] font-bold text-black leading-tight">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {myCourses.map((course, index) => (
              <CourseCard key={`my-course-${index}`} {...course} />
            ))}
          </div>
        </div>

        {/* All Courses Section */}
        <div className="space-y-6">
          <h2 className="text-[23px] font-bold text-black leading-tight">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allCourses.map((course, index) => (
              <CourseCard key={`all-course-${index}`} {...course} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Filter Modal */}
      <FilterModal 
        isOpen={isFilterModalOpen} 
        onClose={() => setIsFilterModalOpen(false)} 
      />
    </div>
  );
}
