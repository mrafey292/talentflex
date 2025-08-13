"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DateTimeModal from "./DateTimeModal";

export default function JobDetailsPage() {
  const router = useRouter();
  const [selectedApplyMethod, setSelectedApplyMethod] = useState("Auto Apply");
  const [showDateTimeModal, setShowDateTimeModal] = useState(false);

  const applyMethods = ["Auto Apply", "AI Apply", "Interview+Apply", "Common Application"];

  const requirements = [
    "2+ years of experience in graphic design",
    "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
    "Strong portfolio showcasing branding, digital, and print designs",
    "Ability to work in a fast-paced environment and meet deadlines"
  ];

  return (
    <div className="flex-1 bg-white rounded-tl-3xl h-screen flex flex-col overflow-hidden">
      {/* Top Bar */}
      <TopBar 
        title="Detail Job" 
        showBack={true} 
        onBackClick={() => router.push('/jobs/list')}
      />

      {/* Content */}
      <div className="flex-1 flex px-16 py-8 gap-16 bg-white h-full">
        {/* Left Column - Job Details */}
        <div className="flex-1 flex flex-col justify-center gap-8">
          <div className="space-y-8">
            {/* Job Header */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  {/* Job Title and Tags */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-6">
                      <h1 className="text-2xl font-bold text-black tracking-[-0.02em]">
                        Graphic Designer
                      </h1>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-[#F6F6F6] rounded-lg text-xs font-normal text-black">
                          LinkedIn
                        </span>
                        <span className="px-2 py-1 bg-[#F6F6F6] rounded-lg text-xs font-normal text-black">
                          Full Time
                        </span>
                        <span className="px-2 py-1 bg-[#F6F6F6] rounded-lg text-xs font-normal text-black">
                          Remote
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-[#676767] max-w-2xl">
                      CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools
                    </p>
                  </div>

                  {/* Company Info */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#D9D9D9] rounded-full overflow-hidden">
                      <img src="/images/company-logo.jpg" alt="Company" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-base text-[#1A1A1A]">Creative Vision</span>
                  </div>
                </div>

                {/* Salary */}
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-bold text-[#1A1A1A] leading-[40px] tracking-[-0.02em]">
                    $4,000
                  </span>
                  <span className="text-sm text-[#676767]">/mo</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#EDEDED]" />

              {/* Requirements Section */}
              <div className="space-y-3">
                <h2 className="text-base font-bold text-[#1A1A1A] tracking-[-0.02em]">
                  Requirements
                </h2>
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full border border-[#676767] p-[3px] flex-shrink-0 mt-0.5">
                        <Check className="w-full h-full text-[#676767]" strokeWidth={1} />
                      </div>
                      <span className="text-sm text-[#676767]">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Methods */}
              <div className="flex gap-3">
                {applyMethods.map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedApplyMethod(method)}
                    className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                      selectedApplyMethod === method
                        ? "border border-[#3D80F8] text-[#3D80F8] font-bold"
                        : "border border-[#B5B5B5] text-[#676767] hover:border-[#969699]"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button 
              onClick={() => setShowDateTimeModal(true)}
              className="w-full bg-[#3D80F8] text-white font-bold text-base py-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Right Column - Job Image */}
        <div className="w-[464px] relative rounded-xl overflow-hidden bg-[#EDEDED] self-stretch"
          style={{
            backgroundImage: `url('/images/job-bg-large.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Safety Badge */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-2">
            <div className="w-5 h-5 bg-[#EDEDED] rounded-full p-[2px] flex items-center justify-center">
              <Check className="w-3 h-3 text-[#111827]" strokeWidth={1} />
            </div>
            <span className="text-xs font-normal text-black">Safety</span>
          </div>
        </div>
      </div>

      {/* Date Time Modal */}
      <DateTimeModal 
        isOpen={showDateTimeModal}
        onClose={() => setShowDateTimeModal(false)}
        onConfirm={(date) => {
          console.log('Interview scheduled for:', date);
          // Navigate to confirmation page with date in query params
          const dateStr = date.toISOString();
          router.push(`/interview/confirmation?date=${encodeURIComponent(dateStr)}`);
        }}
      />
    </div>
  );
}