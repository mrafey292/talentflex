"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
      <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
        {/* Top Bar */}
        <TopBar 
          title="Job Match" 
          showBack={false} 
          onBackClick={() => {}}
        />
        
        {/* Content */}
        <div className="flex-1 flex justify-between items-stretch px-8 py-6 gap-8 bg-white">
          {/* Left Column - Form */}
          <div className="w-[464px] space-y-6 flex flex-col justify-center">
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

            <div className="flex gap-4">
              <button 
                onClick={handlePersonalizeJob}
                className="flex-1 bg-[#3D80F8] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Personalized My Job
              </button>
              <button 
                onClick={() => router.push('/jobs/list')}
                className="px-6 py-4 border-2 border-[#3D80F8] text-[#3D80F8] font-bold rounded-lg hover:bg-[#3D80F8] hover:text-white transition-colors"
              >
                View All Jobs
              </button>
            </div>
          </div>

          {/* Right Column - Job Card */}
          <div className="flex items-center justify-center flex-1">
            <div 
              className="relative w-[520px] h-full min-h-[700px] bg-[#EDEDED] rounded-3xl overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 1) 100%), url('/images/job-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={handleCardClick}
            >
              {/* Top badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-xl text-[14px] font-normal bg-white/80 backdrop-blur-sm text-black leading-[20px] tracking-[-0.02em]">
                    Full Time
                  </span>
                  <span className="px-3 py-1.5 rounded-xl text-[14px] font-normal bg-white/80 backdrop-blur-sm text-black leading-[20px] tracking-[-0.02em]">
                    Remote
                  </span>
                  <span className="px-3 py-1.5 rounded-xl text-[14px] font-normal bg-white/80 backdrop-blur-sm text-black flex items-center gap-2 leading-[20px] tracking-[-0.02em]">
                    <div className="w-5 h-5 bg-[#EDEDED] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    High Match
                  </span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkip();
                  }}
                  className="border border-[#D3D3D3] bg-transparent text-white text-[12px] font-bold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors leading-[16px] tracking-[-0.02em]"
                >
                  Skip
                </button>
              </div>

              {/* Job content - shows differently based on state */}
              {!showJobDetails ? (
                // Before clicking - content at bottom
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[24px] font-bold text-white leading-[32px] tracking-[-0.02em]">{sampleJobs[0].title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#D9D9D9] rounded-full overflow-hidden">
                          <img src="/images/company-logo.jpg" alt="Company" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[16px] font-normal text-white leading-[24px] tracking-[-0.02em]">{sampleJobs[0].company}</span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[32px] font-bold text-white leading-[40px] tracking-[-0.02em]">{sampleJobs[0].salary}</span>
                      <span className="text-[14px] font-normal text-[#D3D3D3] leading-[20px] tracking-[-0.02em]">/mo</span>
                    </div>
                  </div>
                  <p className="text-[14px] font-normal text-[#D3D3D3] leading-[20px] tracking-[-0.02em] line-clamp-2">
                    {sampleJobs[0].description}
                  </p>
                </div>
              ) : (
                // After clicking - expanded content with requirements
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A] to-[#1A1A1A]/0 min-h-[537px]">
                  <div className="px-6 pb-6 pt-52">
                    <div className="space-y-3">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[24px] font-bold text-white leading-[32px] tracking-[-0.02em]">{sampleJobs[0].title}</h3>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-[#D9D9D9] rounded-full overflow-hidden">
                              <img src="/images/company-logo.jpg" alt="Company" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[16px] font-normal text-white leading-[24px] tracking-[-0.02em]">{sampleJobs[0].company}</span>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[32px] font-bold text-white leading-[40px] tracking-[-0.02em]">{sampleJobs[0].salary}</span>
                          <span className="text-[14px] font-normal text-[#EDEDED] leading-[20px] tracking-[-0.02em]">/mo</span>
                        </div>
                      </div>
                      <p className="text-[14px] font-normal text-[#EDEDED] leading-[20px] tracking-[-0.02em]">
                        {sampleJobs[0].description}
                      </p>
                      
                      {/* Requirements section */}
                      <div className="mt-4 space-y-2">
                        <h4 className="text-[16px] font-bold text-white leading-[24px] tracking-[-0.02em]">Requirements</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full border border-white p-[3px] flex-shrink-0 mt-0.5">
                              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-[14px] font-normal text-[#EDEDED] leading-[20px] tracking-[-0.02em]">2+ years of experience in graphic design</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full border border-white p-[3px] flex-shrink-0 mt-0.5">
                              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-[14px] font-normal text-[#EDEDED] leading-[20px] tracking-[-0.02em]">Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full border border-white p-[3px] flex-shrink-0 mt-0.5">
                              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-[14px] font-normal text-[#EDEDED] leading-[20px] tracking-[-0.02em]">Strong portfolio showcasing branding, digital, and print designs</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full border border-white p-[3px] flex-shrink-0 mt-0.5">
                              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-[14px] font-normal text-[#EDEDED] leading-[20px] tracking-[-0.02em]">Ability to work in a fast-paced environment and meet deadlines</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation arrows - only show when description is not expanded */}
              {!showJobDetails && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSwipeLeft();
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-[14px] h-[14px] text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSwipeRight();
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-[14px] h-[14px] text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar 
        title="Job Match" 
        showBack={false} 
        onBackClick={() => {}}
      />
      
      {/* Content */}
      <div className="flex-1 flex justify-between items-stretch px-8 py-6 gap-8 bg-white">
        {/* Left Column - Form */}
        <div className="w-[464px] space-y-6 flex flex-col justify-center">
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
        <div className="flex items-center justify-center flex-1">
          <div className="w-[520px] h-full min-h-[700px] bg-[#EDEDED] rounded-3xl flex items-center justify-center">
            <div className="text-center text-[#676767]">
              <p className="text-lg">Job cards will appear here after personalization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
