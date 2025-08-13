"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/layout/TopBar';

export default function EditRoadmapPage() {
  const router = useRouter();
  const [jobRole, setJobRole] = useState('Graphic Designer');
  const [specialization, setSpecialization] = useState('Branding');
  const [experience, setExperience] = useState('3-5 years');
  const [goals, setGoals] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.');

  const handleSave = () => {
    // Save logic here
    router.push('/roadmap');
  };


  const InputField = ({ 
    label, 
    value, 
    onChange, 
    placeholder,
    isTextarea = false 
  }: { 
    label: string; 
    value: string; 
    onChange: (value: string) => void;
    placeholder?: string;
    isTextarea?: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#1A1A1A] tracking-[-0.02em]">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-[10px] text-base text-[#05060F] placeholder-[#676767] resize-none focus:outline-none focus:border-[#4A83F0] transition-colors"
            rows={4}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-[10px] text-base text-[#05060F] placeholder-[#676767] focus:outline-none focus:border-[#4A83F0] transition-colors"
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar title="Edit Your Career Roadmap" showBack={true} onBackClick={() => router.push('/roadmap')} />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 bg-white">
        <div className="w-full max-w-[536px] flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-[-0.02em]">
              Personalized Career Roadmap
            </h2>
            <p className="text-base text-[#676767] leading-[24px] tracking-[-0.02em]">
              Customize your career path by refining goals, skills, and milestones to stay on track for success
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            <InputField
              label="Job Roles"
              value={jobRole}
              onChange={setJobRole}
              placeholder="Enter your job role"
            />

            <InputField
              label="Specialization"
              value={specialization}
              onChange={setSpecialization}
              placeholder="Enter your specialization"
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <InputField
                  label="Experience Level"
                  value={experience}
                  onChange={setExperience}
                  placeholder="e.g., 3-5 years"
                />
              </div>
              <div className="flex-1">
                <InputField
                  label="Target Timeline"
                  value="90 days"
                  onChange={() => {}}
                  placeholder="Select timeline"
                />
              </div>
            </div>

            <InputField
              label="Career Goals & Objectives"
              value={goals}
              onChange={setGoals}
              placeholder="Describe your career goals and objectives..."
              isTextarea={true}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-4">
            <button 
              onClick={() => {}}
              className="flex-1 px-8 py-4 border border-[#D3D3D3] rounded-lg text-base font-medium text-[#1A1A1A] hover:bg-gray-50 transition-colors"
            >
              AI Career Coach
            </button>
            <button 
              onClick={handleSave}
              className="flex-1 px-8 py-4 bg-[#3D80F8] text-white rounded-lg text-base font-medium hover:bg-[#4A83F0] transition-colors"
            >
              Save and Update Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}