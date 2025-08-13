"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { type JobCard as JobCardType } from "@/types";

const featuredJob: JobCardType = {
  id: '1',
  title: 'Graphic Designer',
  company: 'Creative Vision',
  companyLogo: '/images/avatar-2.png',
  salary: '$4,000',
  period: '/mo',
  tags: ['Full Time', 'Remote'],
  isHighMatch: true,
  backgroundImage: '/images/avatar-4.png'
};

const jobList: JobCardType[] = [
  {
    id: '2',
    title: 'Graphic Designer',
    company: 'Moonlight Creatives',
    companyLogo: '/images/avatar-3.png',
    salary: '$4,000',
    period: '/mo',
    tags: ['LinkedIn', 'Full Time', 'Remote'],
    safetyVerified: true,
    backgroundImage: '/images/avatar-4.png'
  },
  {
    id: '3',
    title: 'Graphic Designer',
    company: 'Creative Vision',
    companyLogo: '/images/avatar-2.png',
    salary: '$3,600',
    period: '/mo',
    tags: ['LinkedIn', 'Full Time', 'Remote'],
    safetyVerified: true,
    backgroundImage: '/images/avatar-4.png'
  },
  {
    id: '4',
    title: 'Graphic Designer',
    company: 'NexaTech',
    companyLogo: '/images/avatar-5.png',
    salary: '$2,400',
    period: '/mo',
    tags: ['LinkedIn', 'Full Time', 'Remote'],
    safetyVerified: true
  }
];

function FeaturedJobCard({ job }: { job: JobCardType }) {
  return (
    <div className="relative bg-[#EDEDED] rounded-2xl p-4 min-h-[354px] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      
      {/* Content overlay */}
      <div className="absolute bottom-12 left-12 right-12 z-20 text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-white font-bold text-base">Apply Your Job Quickly</h3>
          <p className="text-[#EDEDED] text-xs">
            Auto-apply with an AI-tailored resume for this role
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <Image src="/icons/check.svg" alt="Check" width={8} height={6} />
              </div>
              <span className="text-xs text-[#EDEDED]">Swipe Right (Apply with AI Resume)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <Image src="/icons/x.svg" alt="X" width={6} height={6} />
              </div>
              <span className="text-xs text-[#EDEDED]">Swipe Left (Skip)</span>
            </div>
          </div>
        </div>
        
        <button className="bg-[#3D80F8] text-white font-bold text-sm px-6 py-3 rounded-lg">
          Start Now
        </button>
      </div>

      {/* Job Details - Top */}
      <div className="relative z-20">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            <span className="bg-white/80 text-[#1A1A1A] text-xs px-2 py-1 rounded">
              Full Time
            </span>
            <span className="bg-white/80 text-[#1A1A1A] text-xs px-2 py-1 rounded">
              Remote
            </span>
          </div>
          {job.isHighMatch && (
            <div className="bg-white/80 flex items-center gap-1 px-2 py-1 rounded">
              <div className="w-3 h-3 bg-[#EDEDED] rounded-full flex items-center justify-center">
                <Image src="/icons/check.svg" alt="Check" width={6} height={4} />
              </div>
              <span className="text-xs text-[#1A1A1A]">High Match</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-base">{job.title}</h3>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={job.companyLogo}
                  alt={job.company}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-white">{job.company}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-white">{job.salary}</span>
            <span className="text-xs text-[#D3D3D3]">{job.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ job }: { job: JobCardType }) {
  return (
    <div className="bg-white border border-[#EDEDED] rounded-2xl p-3">
      {/* Header Image */}
      <div className="w-[86px] h-[86px] rounded-xl mb-3 relative overflow-hidden">
        {job.backgroundImage && (
          <Image
            src={job.backgroundImage}
            alt=""
            fill
            className="object-cover"
          />
        )}
        {job.safetyVerified && (
          <div className="absolute top-1 left-1 bg-white/80 flex items-center gap-1 px-2 py-1 rounded">
            <div className="w-2 h-2 bg-[#EDEDED] rounded-full flex items-center justify-center">
              <Image src="/icons/check.svg" alt="Check" width={4} height={3} />
            </div>
            <span className="text-[10px] text-[#1A1A1A]">Safety</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex gap-1">
          {job.tags.map((tag: string, index: number) => (
            <span key={index} className="bg-[#F6F6F6] text-[#1A1A1A] text-[10px] px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <h4 className="font-bold text-sm text-[#1A1A1A]">{job.title}</h4>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-4 h-4 rounded-full overflow-hidden">
              <Image
                src={job.companyLogo}
                alt={job.company}
                width={16}
                height={16}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-[#676767]">{job.company}</span>
          </div>
        </div>

        <div className="flex items-end gap-1">
          <span className="font-bold text-base text-[#1A1A1A]">{job.salary}</span>
          <span className="text-[10px] text-[#676767]">{job.period}</span>
        </div>
      </div>
    </div>
  );
}

export default function JobForYou() {
  const router = useRouter();
  
  return (
    <div className="bg-white border border-[#EDEDED] rounded-3xl p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1A1A1A]">Job For You</h2>
        <button 
          onClick={() => router.push('/jobs/list')}
          className="text-sm text-[#676767] hover:text-[#1A1A1A] transition-colors"
        >
          View Detail
        </button>
      </div>

      {/* Content */}
      <div className="flex gap-6">
        {/* Featured Job */}
        <div className="flex-1">
          <FeaturedJobCard job={featuredJob} />
        </div>

        {/* Job List */}
        <div className="space-y-3 min-w-0">
          {jobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
