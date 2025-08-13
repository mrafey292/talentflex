"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { type SkillCourse } from "@/types";

const skillCourse: SkillCourse = {
  id: '1',
  title: 'Graphic Design Fundamentals',
  description: 'Master design basics, color, and composition',
  instructor: 'John Smith',
  instructorAvatar: '/images/avatar-6.png',
  duration: '48 min',
  progress: 40,
  level: 'Beginner',
  backgroundImage: '/images/avatar-4.png'
};

export default function SkillsHub() {
  const router = useRouter();
  
  return (
    <div className="bg-white border border-[#EDEDED] rounded-3xl p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1A1A1A]">Skills Hub</h2>
        <button 
          onClick={() => router.push('/skills')}
          className="text-sm text-[#676767] hover:text-[#1A1A1A] transition-colors"
        >
          View All
        </button>
      </div>

      {/* Course Card */}
      <div className="bg-white border border-[#EDEDED] rounded-2xl p-3">
        {/* Course Header */}
        <div className="h-[132px] rounded-xl mb-3 relative overflow-hidden">
          {skillCourse.backgroundImage && (
            <Image
              src={skillCourse.backgroundImage}
              alt=""
              fill
              className="object-cover"
            />
          )}
          <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded">
            <span className="text-xs text-[#1A1A1A]">{skillCourse.level}</span>
          </div>
        </div>

        {/* Course Content */}
        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-[#1A1A1A]">{skillCourse.title}</h3>
            <p className="text-xs text-[#676767]">{skillCourse.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full overflow-hidden">
                  <Image
                    src={skillCourse.instructorAvatar}
                    alt={skillCourse.instructor}
                    width={16}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] text-[#676767]">{skillCourse.instructor}</span>
              </div>
              <div className="w-1 h-1 bg-[#B5B5B5] rounded-full"></div>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/clock.svg"
                  alt="Duration"
                  width={12}
                  height={12}
                />
                <span className="text-[10px] text-[#676767]">{skillCourse.duration}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#EDEDED] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#D96570] to-[#4A83F0] rounded-full"
                style={{ width: `${skillCourse.progress}%` }}
              />
            </div>
            <span className="text-[10px] text-[#1A1A1A]">{skillCourse.progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
