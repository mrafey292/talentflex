'use client';

import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

export default function JobsPage() {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('jobs');
  }, [setCurrentPage]);
  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1A1A1A]">My Jobs</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job search filters */}
          <div className="col-span-full bg-white border border-[#EDEDED] rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Job Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input 
                type="text" 
                placeholder="Job title or keywords" 
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <input 
                type="text" 
                placeholder="Location" 
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Job Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
              <button className="bg-[#3D80F8] text-white rounded-lg px-6 py-2 hover:bg-blue-600">
                Search Jobs
              </button>
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Saved Jobs</h3>
            <p className="text-gray-600">View and manage your saved job listings</p>
            <button className="mt-4 text-[#3D80F8] hover:underline">View All →</button>
          </div>

          {/* Job Applications */}
          <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Applications</h3>
            <p className="text-gray-600">Track your job application status</p>
            <button className="mt-4 text-[#3D80F8] hover:underline">View All →</button>
          </div>

          {/* Job Recommendations */}
          <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
            <p className="text-gray-600">Jobs matched to your skills and preferences</p>
            <button className="mt-4 text-[#3D80F8] hover:underline">View All →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
