"use client";

import { useEffect } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

export default function TeamPage() {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('team');
  }, [setCurrentPage]);

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#1A1A1A]">My Team</h1>
            <button className="bg-[#3D80F8] text-white rounded-lg px-6 py-2 hover:bg-blue-600">
              Invite Members
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Team Overview */}
            <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Team Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3D80F8] mb-2">8</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">12</div>
                  <div className="text-gray-600">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">85%</div>
                  <div className="text-gray-600">Team Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">24</div>
                  <div className="text-gray-600">Tasks Completed</div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Team Members</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Member 1 */}
                <div className="border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <img className="w-16 h-16 rounded-full mx-auto mb-4" src="/images/avatar-2.png" alt="Sarah Wilson" />
                  <h3 className="font-semibold mb-1">Sarah Wilson</h3>
                  <p className="text-gray-600 text-sm mb-2">Lead Designer</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Available</span>
                  </div>
                  <div className="text-center text-sm text-gray-600 mb-3">
                    <div>5 active tasks</div>
                    <div>95% completion rate</div>
                  </div>
                  <button className="w-full border border-[#3D80F8] text-[#3D80F8] py-2 rounded-lg hover:bg-blue-50">
                    View Profile
                  </button>
                </div>

                {/* Member 2 */}
                <div className="border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <img className="w-16 h-16 rounded-full mx-auto mb-4" src="/images/avatar-3.png" alt="Mark Johnson" />
                  <h3 className="font-semibold mb-1">Mark Johnson</h3>
                  <p className="text-gray-600 text-sm mb-2">UX Researcher</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">Busy</span>
                  </div>
                  <div className="text-center text-sm text-gray-600 mb-3">
                    <div>8 active tasks</div>
                    <div>88% completion rate</div>
                  </div>
                  <button className="w-full border border-[#3D80F8] text-[#3D80F8] py-2 rounded-lg hover:bg-blue-50">
                    View Profile
                  </button>
                </div>

                {/* Member 3 */}
                <div className="border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <img className="w-16 h-16 rounded-full mx-auto mb-4" src="/images/avatar-4.png" alt="Emma Davis" />
                  <h3 className="font-semibold mb-1">Emma Davis</h3>
                  <p className="text-gray-600 text-sm mb-2">Frontend Developer</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Available</span>
                  </div>
                  <div className="text-center text-sm text-gray-600 mb-3">
                    <div>3 active tasks</div>
                    <div>92% completion rate</div>
                  </div>
                  <button className="w-full border border-[#3D80F8] text-[#3D80F8] py-2 rounded-lg hover:bg-blue-50">
                    View Profile
                  </button>
                </div>

                {/* Member 4 */}
                <div className="border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <img className="w-16 h-16 rounded-full mx-auto mb-4" src="/images/avatar-5.png" alt="Alex Chen" />
                  <h3 className="font-semibold mb-1">Alex Chen</h3>
                  <p className="text-gray-600 text-sm mb-2">Product Manager</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">Offline</span>
                  </div>
                  <div className="text-center text-sm text-gray-600 mb-3">
                    <div>2 active tasks</div>
                    <div>90% completion rate</div>
                  </div>
                  <button className="w-full border border-[#3D80F8] text-[#3D80F8] py-2 rounded-lg hover:bg-blue-50">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Active Projects */}
            <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Active Projects</h2>
              
              <div className="space-y-4">
                {/* Project 1 */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold mb-1">E-commerce Platform Redesign</h3>
                      <p className="text-gray-600 text-sm">Complete overhaul of the shopping experience</p>
                    </div>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">On Track</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/avatar-2.png" alt="Member" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/avatar-3.png" alt="Member" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/avatar-4.png" alt="Member" />
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs">+2</div>
                    </div>
                    <div className="text-sm text-gray-600">5 team members</div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Due: March 15, 2024</span>
                    <button className="text-[#3D80F8] hover:underline text-sm">View Details</button>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold mb-1">Mobile App Development</h3>
                      <p className="text-gray-600 text-sm">Native iOS and Android app for fitness tracking</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">At Risk</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/avatar-4.png" alt="Member" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/avatar-5.png" alt="Member" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="/images/avatar-6.png" alt="Member" />
                    </div>
                    <div className="text-sm text-gray-600">3 team members</div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Due: March 30, 2024</span>
                    <button className="text-[#3D80F8] hover:underline text-sm">View Details</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Chat */}
            <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Team Activity</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img className="w-8 h-8 rounded-full" src="/images/avatar-2.png" alt="Sarah" />
                  <div>
                    <div className="text-sm">
                      <span className="font-semibold">Sarah Wilson</span> completed the user research phase
                    </div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img className="w-8 h-8 rounded-full" src="/images/avatar-3.png" alt="Mark" />
                  <div>
                    <div className="text-sm">
                      <span className="font-semibold">Mark Johnson</span> shared new wireframes
                    </div>
                    <div className="text-xs text-gray-500">4 hours ago</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img className="w-8 h-8 rounded-full" src="/images/avatar-4.png" alt="Emma" />
                  <div>
                    <div className="text-sm">
                      <span className="font-semibold">Emma Davis</span> updated the project timeline
                    </div>
                    <div className="text-xs text-gray-500">6 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
