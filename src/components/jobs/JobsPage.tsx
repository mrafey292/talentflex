"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";

interface FormData {
  jobTitle: string;
  jobType: string;
  jobLocation: string;
  salaryRangeFrom: string;
  salaryRangeTo: string;
  experience: string;
  education: string;
  aiSummary: string;
}

interface JobCard {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  type: string;
  match: string;
  description: string;
  tags: string[];
}

export default function JobsPage() {
  const [showSwipeMode, setShowSwipeMode] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);


  const [formData, setFormData] = useState<FormData>({
    jobTitle: "Graphic Designer",
    jobType: "Freelance",
    jobLocation: "Singapore",
    salaryRangeFrom: "3000",
    salaryRangeTo: "5000",
    experience: "2 - 5 years",
    education: "Bachelor's",
    aiSummary: "Looking for a creative, remote-friendly graphic design role that offers flexibility and opportunities for growth. Ideally, the job allows you to work on diverse projects like website UI, branding, or digital content for forward-thinking companies"
  });

  const aiTags = [
    "Graphic Designer",
    "Freelance", 
    "Singapore",
    "Flexible Hours",
    "Remote Friendly",
    "Client Collaboration"
  ];

  const sampleJobs: JobCard[] = [
    {
      id: "1",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      location: "Remote",
      type: "Full Time",
      match: "High Match",
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      tags: ["Full Time", "Remote", "High Match"]
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePersonalizeJob = () => {
    setShowSwipeMode(true);
  };

  const handleStartSwiping = () => {
    setShowJobDetails(true);
  };

  const handleSwipeRight = () => {
    console.log("Swiped right - Interested");
    // Add logic for interested
  };

  const handleSwipeLeft = () => {
    console.log("Swiped left - Not interested");
    // Add logic for not interested
  };

  const handleSkip = () => {
    console.log("Skipped job");
    // Add logic for skip
  };

  const handleCardClick = () => {
    setShowJobDetails(!showJobDetails);
  };

  if (showSwipeMode) {
    return (
      <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        {/* Top Bar */}
        <TopBar 
          title="Job Match" 
          showBack={false} 
          onBackClick={() => {}}
        />
        
        {/* Content */}
        <div className="flex p-8 gap-16 h-full">
          {/* Left Column - Form */}
          <div className="w-[464px] space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">Personalized Job Matching with AI</h2>
              <p className="text-base text-[#676767]">Fill in your details, swipe through job cards, and let AI recommend the best-fit opportunities just for you</p>
            </div>

            {/* Form continues here - same as before but condensed for space */}
            <div className="space-y-4">
              {/* Job Title */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Job Title</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>

              {/* Job Type & Location Row */}
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Job Type</label>
                  <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                    <input
                      type="text"
                      value={formData.jobType}
                      onChange={(e) => handleInputChange('jobType', e.target.value)}
                      className="w-full text-base text-[#ACACAF] outline-none"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Job Location</label>
                  <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                    <input
                      type="text"
                      value={formData.jobLocation}
                      onChange={(e) => handleInputChange('jobLocation', e.target.value)}
                      className="w-full text-base text-[#ACACAF] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Years of Experience</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none bg-transparent cursor-pointer"
                  >
                    <option value="0 - 1 years">0 - 1 years</option>
                    <option value="2 - 5 years">2 - 5 years</option>
                    <option value="5 - 10 years">5 - 10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Educational Qualification</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <select
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none bg-transparent cursor-pointer"
                  >
                    <option value="High School">High School</option>
                    <option value="Associate's">Associate&apos;s</option>
                    <option value="Bachelor's">Bachelor&apos;s</option>
                    <option value="Master's">Master&apos;s</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
              </div>

              {/* AI Summary */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">AI Summary</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-4 space-y-3">
                  <p className="text-base text-black leading-relaxed">{formData.aiSummary}</p>
                  <div className="flex flex-wrap gap-2">
                    {aiTags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#EDEDED] text-black text-sm px-3 py-1.5 rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handlePersonalizeJob}
              className="w-full bg-[#3D80F8] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Personalized My Job
            </button>
          </div>

          {/* Right Column - Job Card */}
          <div className="flex-1 relative">
            <div 
              className="relative w-full h-full bg-cover bg-center rounded-3xl overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 1) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 916" fill="%23EDEDED"><rect width="520" height="916"/></svg>')`
              }}
              onClick={handleCardClick}
            >
              {/* Top badges */}
              <div className="absolute top-6 left-6 flex gap-2">
                {sampleJobs[0].tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-xl text-sm font-normal ${
                      tag === "High Match" 
                        ? "bg-white/80 text-black flex items-center gap-2" 
                        : "bg-white/80 text-black"
                    }`}
                  >
                    {tag === "High Match" && (
                      <div className="w-5 h-5 bg-[#EDEDED] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    {tag}
                  </span>
                ))}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkip();
                  }}
                  className="border border-[#D3D3D3] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Skip
                </button>
              </div>

              {/* Job content */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-white">{sampleJobs[0].title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#D9D9D9] rounded-full"></div>
                        <span className="text-base text-white">{sampleJobs[0].company}</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold text-white">{sampleJobs[0].salary}</span>
                      <span className="text-sm text-[#D3D3D3]">/mo</span>
                    </div>
                  </div>
                </div>

                {showJobDetails && (
                  <p className="text-sm text-[#D3D3D3] leading-relaxed h-10 overflow-hidden">
                    {sampleJobs[0].description}
                  </p>
                )}
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleSwipeLeft();
                }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleSwipeRight();
                }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Overlay with instructions */}
              {!showJobDetails && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <div className="text-center text-white space-y-8 max-w-sm">
                    <h3 className="text-2xl font-bold">Find Your Perfect Job – Swipe & Match!</h3>
                    <div className="space-y-4">
                      <p className="text-sm text-[#EDEDED]">
                        Our smart AI learns from your choices to recommend better jobs every time. Start swiping and land your dream job faster
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-[#EDEDED]">Button Right (Interested)</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-sm text-[#EDEDED]">Button Left (Not Interested)</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#EDEDED]">
                        Or you can choose to skip if you don&apos;t want to select it. The description will appear when you click once on the card
                      </p>
                    </div>
                    <button 
                      onClick={handleStartSwiping}
                      className="bg-[#3D80F8] text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Top Bar */}
      <TopBar 
        title="Job Match" 
        showBack={false} 
        onBackClick={() => {}}
      />
      
      {/* Content */}
      <div className="flex p-8 gap-16">
        {/* Left Column - Form */}
        <div className="w-[464px] space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-black">Personalized Job Matching with AI</h2>
            <p className="text-base text-[#676767]">Fill in your details, swipe through job cards, and let AI recommend the best-fit opportunities just for you</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Job Title */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#676767]">Job Title</label>
              <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="w-full text-base text-[#ACACAF] outline-none"
                />
              </div>
            </div>

            {/* Job Type & Location Row */}
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-bold text-[#676767]">Job Type</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.jobType}
                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-sm font-bold text-[#676767]">Job Location</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.jobLocation}
                    onChange={(e) => handleInputChange('jobLocation', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Salary Range */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#676767]">Salary Range</label>
              <div className="flex items-center gap-2">
                <div className="flex-1 border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.salaryRangeFrom}
                    onChange={(e) => handleInputChange('salaryRangeFrom', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
                <span className="text-base text-black">-</span>
                <div className="flex-1 border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.salaryRangeTo}
                    onChange={(e) => handleInputChange('salaryRangeTo', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#676767]">Years of Experience</label>
              <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full text-base text-[#ACACAF] outline-none bg-transparent cursor-pointer"
                >
                  <option value="0 - 1 years">0 - 1 years</option>
                  <option value="2 - 5 years">2 - 5 years</option>
                  <option value="5 - 10 years">5 - 10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#676767]">Educational Qualification</label>
              <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                <select
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="w-full text-base text-[#ACACAF] outline-none bg-transparent cursor-pointer"
                >
                  <option value="High School">High School</option>
                  <option value="Associate's">Associate&apos;s</option>
                  <option value="Bachelor's">Bachelor&apos;s</option>
                  <option value="Master's">Master&apos;s</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
            </div>

            {/* AI Summary */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#676767]">AI Summary</label>
              <div className="border-2 border-[#EDEDED] rounded-xl p-4 space-y-3">
                <p className="text-base text-black leading-relaxed">{formData.aiSummary}</p>
                <div className="flex flex-wrap gap-2">
                  {aiTags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#EDEDED] text-black text-sm px-3 py-1.5 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handlePersonalizeJob}
            className="w-full bg-[#3D80F8] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Personalized My Job
          </button>
        </div>

        {/* Right Column - Placeholder */}
        <div className="flex-1 bg-[#EDEDED] rounded-3xl flex items-center justify-center">
          <div className="text-center text-[#676767]">
            <p className="text-lg">Job cards will appear here after personalization</p>
          </div>
        </div>
      </div>
    </div>
  );
}
