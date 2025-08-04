"use client";

import { useEffect } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

export default function AICoachPage() {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('ai-coach');
  }, [setCurrentPage]);

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#1A1A1A]">AI Career Coach</h1>
            <button className="bg-[#3D80F8] text-white rounded-lg px-6 py-2 hover:bg-blue-600">
              New Session
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Chat */}
            <div className="lg:col-span-2">
              {/* Chat Interface */}
              <div className="bg-white border border-[#EDEDED] rounded-xl p-6 h-[600px] flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Career Coach</h3>
                    <p className="text-gray-600 text-sm">Online • Ready to help</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {/* AI Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
                      <p className="text-gray-800">
                        Hello John! I'm your AI Career Coach. I'm here to help you with career guidance, 
                        skill development recommendations, and answering any questions about your professional growth. 
                        How can I assist you today?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-[#3D80F8] rounded-2xl p-4 max-w-[80%]">
                      <p className="text-white">
                        I want to transition from product design to UX research. What skills should I focus on developing?
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src="/images/avatar-1.png" alt="John" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
                      <p className="text-gray-800 mb-3">
                        Great question! Transitioning from product design to UX research is a natural progression. 
                        Here are the key skills to focus on:
                      </p>
                      <ul className="space-y-2 text-gray-800">
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D80F8]">•</span>
                          <span><strong>Research Methodologies:</strong> Learn qualitative and quantitative research methods</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D80F8]">•</span>
                          <span><strong>Data Analysis:</strong> Statistical analysis and user behavior insights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D80F8]">•</span>
                          <span><strong>User Interviewing:</strong> Conducting effective user interviews and surveys</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#3D80F8]">•</span>
                          <span><strong>Tools Proficiency:</strong> UserTesting, Hotjar, Google Analytics, Miro</span>
                        </li>
                      </ul>
                      <p className="text-gray-800 mt-3">
                        I recommend starting with our "UX Research Fundamentals" course. Would you like me to create a personalized learning path for you?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    placeholder="Ask me anything about your career..." 
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3D80F8]"
                  />
                  <button className="bg-[#3D80F8] text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Suggestions & Actions */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-800">Career Path Analysis</div>
                    <div className="text-sm text-gray-600">Get personalized career recommendations</div>
                  </button>
                  
                  <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-800">Skill Gap Assessment</div>
                    <div className="text-sm text-gray-600">Identify skills to develop</div>
                  </button>
                  
                  <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-800">Resume Review</div>
                    <div className="text-sm text-gray-600">Get AI feedback on your resume</div>
                  </button>
                  
                  <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-800">Interview Prep</div>
                    <div className="text-sm text-gray-600">Practice with mock interviews</div>
                  </button>
                </div>
              </div>

              {/* Recent Topics */}
              <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Topics</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-sm text-gray-800">UX Research Transition</div>
                    <div className="text-xs text-gray-600">2 hours ago</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-sm text-gray-800">Salary Negotiation Tips</div>
                    <div className="text-xs text-gray-600">1 day ago</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-sm text-gray-800">Portfolio Optimization</div>
                    <div className="text-xs text-gray-600">3 days ago</div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white border border-[#EDEDED] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">AI Insights</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <h4 className="font-medium text-blue-800">Skill Recommendation</h4>
                        <p className="text-sm text-blue-700">
                          Based on your interests, learning user research would be a great next step for your career growth.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📈</span>
                      <div>
                        <h4 className="font-medium text-green-800">Market Trend</h4>
                        <p className="text-sm text-green-700">
                          UX Researchers are in high demand with 15% job growth projected in your area.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h4 className="font-medium text-purple-800">Goal Reminder</h4>
                        <p className="text-sm text-purple-700">
                          You're 70% through your current learning goal! Keep up the great work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
