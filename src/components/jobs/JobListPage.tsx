"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Check } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Image from "next/image";

interface JobListing {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  salary: string;
  tags: string[];
  description: string;
  source: string;
  type: string;
  location: string;
  hasHighMatch: boolean;
}

export default function JobListPage() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("Best Matches");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = ["Best Matches", "Most Recent", "Popular"];

  const jobListings: JobListing[] = [
    {
      id: "1",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      tags: ["LinkedIn", "Full Time", "Remote"],
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      source: "LinkedIn",
      type: "Full Time",
      location: "Remote",
      hasHighMatch: true
    },
    {
      id: "2",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      tags: ["LinkedIn", "Full Time", "Remote"],
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      source: "LinkedIn",
      type: "Full Time",
      location: "Remote",
      hasHighMatch: true
    },
    {
      id: "3",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      tags: ["LinkedIn", "Full Time", "Remote"],
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      source: "LinkedIn",
      type: "Full Time",
      location: "Remote",
      hasHighMatch: true
    },
    {
      id: "4",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      tags: ["LinkedIn", "Full Time", "Remote"],
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      source: "LinkedIn",
      type: "Full Time",
      location: "Remote",
      hasHighMatch: true
    },
    {
      id: "5",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      tags: ["LinkedIn", "Full Time", "Remote"],
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      source: "LinkedIn",
      type: "Full Time",
      location: "Remote",
      hasHighMatch: true
    },
    {
      id: "6",
      title: "Graphic Designer",
      company: "Creative Vision",
      salary: "$4,000",
      tags: ["LinkedIn", "Full Time", "Remote"],
      description: "CreativeVision Studio is looking for a Graphic Designer to craft visually stunning designs for digital and print media. If you have a keen eye for aesthetics, a passion for branding, and expertise in design tools, we'd love to have you on our team",
      source: "LinkedIn",
      type: "Full Time",
      location: "Remote",
      hasHighMatch: true
    }
  ];

  const JobCard = ({ job }: { job: JobListing }) => (
    <div 
      className="border border-[#EDEDED] rounded-2xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => router.push(`/jobs/${job.id}`)}
    >
      {/* Job Image/Thumbnail */}
      <div className="w-full h-[140px] bg-cover bg-center rounded-xl mb-4 relative"
        style={{
          backgroundImage: `url('/images/job-bg.jpg')`,
          backgroundColor: '#EDEDED'
        }}
      >
        {/* Safety badge */}
        {job.hasHighMatch && (
          <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
            <div className="w-5 h-5 bg-[#EDEDED] rounded-full p-[2px] flex items-center justify-center">
              <Check className="w-3 h-3 text-[#111827]" strokeWidth={1} />
            </div>
            <span className="text-xs font-normal text-black">Safety</span>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {job.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-[#F6F6F6] rounded-lg text-xs font-normal text-black"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Job Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-base font-bold text-black">{job.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-6 h-6 bg-[#D9D9D9] rounded-full overflow-hidden">
                {job.companyLogo ? (
                  <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#D9D9D9]" />
                )}
              </div>
              <span className="text-sm text-[#676767]">{job.company}</span>
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-[#1A1A1A]">{job.salary}</span>
            <span className="text-xs text-[#676767]">/mo</span>
          </div>
        </div>
        
        <p className="text-xs text-[#676767] line-clamp-2">
          {job.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
      {/* Top Bar with Edit button */}
      <div className="relative">
        <TopBar title="List Job For You" />
        <button 
          className="absolute left-[280px] top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 border border-[#969699] rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Image
            src="/icons/magic.svg"
            alt="Magic"
            width={24}
            height={24}
          />
          <span className="text-base font-bold text-[#1A1A1A] leading-[24px] tracking-[-0.02em]">
            Edit
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-8 py-8 bg-white">
        <div className="w-full max-w-[800px] space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-black tracking-[-0.02em]">
              Your Safety, Our Priority
            </h2>
            <p className="text-base text-[#676767] max-w-md mx-auto">
              Discover simple tips, tools, and projects designed to help keep everyone safe. Let's build a safer world together!
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-4 px-4 py-2 border-2 border-[#EDEDED] rounded-[10px]">
              <Search className="w-6 h-6 text-[#969699]" strokeWidth={2} />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-base text-[#969699] outline-none placeholder-[#969699]"
              />
            </div>
            <button className="p-3 border border-[#EDEDED] rounded-[10px] hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-6 h-6 text-[#676767]" strokeWidth={2} />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-colors ${
                  selectedFilter === option
                    ? "border border-[#3D80F8] text-[#3D80F8]"
                    : "border border-[#D3D3D3] text-[#676767] hover:border-[#969699]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-2 gap-4">
            {jobListings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}