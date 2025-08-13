"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, MessageSquare, Users, Send, Volume2, Phone, Video, Mic, MicOff, VideoOff, FileText, Upload, Plus } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import ResumeAnalysisModal from "./ResumeAnalysisModal";

export default function InterviewConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [interviewDate, setInterviewDate] = useState(new Date(2025, 4, 2)); // Default to May 2nd 2025
  const [showAIInterview, setShowAIInterview] = useState(false);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [transcriptMessages, setTranscriptMessages] = useState([
    { id: 1, speaker: "AI Interviewer", message: "Hello! Welcome to your interview. Can you please introduce yourself?", time: "10:00 AM" },
    { id: 2, speaker: "You", message: "Hi, I'm excited to be here. My name is...", time: "10:01 AM" }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Get date from query params if available
    const dateParam = searchParams.get('date');
    if (dateParam) {
      try {
        const date = new Date(dateParam);
        if (!isNaN(date.getTime())) {
          setInterviewDate(date);
        }
      } catch (error) {
        console.error('Invalid date parameter:', error);
      }
    }
  }, [searchParams]);

  const handleGoToRoom = () => {
    // Navigate to interview room page with date parameter
    const dateStr = interviewDate.toISOString();
    router.push(`/interview/room?date=${encodeURIComponent(dateStr)}`);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() && showAIInterview) {
      const newMessage = {
        id: transcriptMessages.length + 1,
        speaker: "You",
        message: currentMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setTranscriptMessages([...transcriptMessages, newMessage]);
      setCurrentMessage("");
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'application/pdf' || file.type.startsWith('image/'))) {
      setResumeFile(file);
      setShowResumeModal(true);
    } else if (file) {
      alert('Please upload a PDF or image file');
    }
  };

  const handleSelectFileClick = () => {
    fileInputRef.current?.click();
  };

  // Original Confirmation View
  return (
    <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-[#EDEDED]">
        <div className="flex items-center gap-6">
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 border border-[#EDEDED] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          
          {/* Title */}
          <h1 className="text-[32px] font-bold text-[#1A1A1A] tracking-[-0.02em]">
            Interview Test
          </h1>

          {/* Search/Filter Input */}
          <div className="w-[200px] border border-[#B5B5B5] rounded-lg px-4 py-2 flex items-center gap-2">
            <input 
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-sm text-[#1A1A1A] placeholder-[#969699]"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* AI Career Coach Button */}
          <button className="px-6 py-3 bg-gradient-to-r from-[#D96570] to-[#4A83F0] text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity">
            AI Career Coach
          </button>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center hover:bg-gray-200 transition-colors">
              <MessageSquare className="w-5 h-5 text-[#676767]" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Users className="w-5 h-5 text-[#676767]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-[1112px] mx-auto">
          {/* Left Column */}
          <div className="grid grid-cols-[1fr_440px] gap-8">
            <div className="space-y-6">
              {/* Header with Date and Go To Room Button */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-black tracking-[-0.02em]">
                  Interview scheduled for {interviewDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </h2>
                <button 
                  onClick={handleGoToRoom}
                  className="px-6 py-3 border border-[#D3D3D3] rounded-lg font-bold text-sm text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                >
                  Go To Room
                </button>
              </div>

              {/* Video Preview Section */}
              <div className="relative h-80 bg-[#EDEDED] rounded-xl overflow-hidden">
                {interviewCompleted ? (
                  <>
                    {/* Interview Completed View */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3D80F8] to-[#6B9CFF]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#3D80F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-xl text-center">
                        Interview Completed Successfully!
                      </h3>
                      <p className="text-white/90 text-sm text-center max-w-[364px]">
                        Your interview has been analyzed. Review your performance metrics below.
                      </p>
                      <button 
                        onClick={() => {
                          setInterviewCompleted(false);
                          setShowAIInterview(false);
                        }}
                        className="px-6 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-[#3D80F8] font-bold text-sm">Take Another Interview</span>
                      </button>
                    </div>
                  </>
                ) : showAIInterview ? (
                  <>
                    {/* AI Interview Active View */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gray-700 flex items-center justify-center">
                            <Users className="w-12 h-12 text-gray-500" />
                          </div>
                          <p className="text-white text-base">AI Interview Active</p>
                        </div>
                      </div>
                    </div>

                    {/* Participant's video (small rectangle in top right) */}
                    <div className="absolute top-4 right-4 w-[120px] h-[72px] bg-[#D9D9D9] rounded-lg overflow-hidden shadow-lg">
                      <div className="w-full h-full flex items-center justify-center bg-gray-700">
                        <div className="text-center">
                          <Users className="w-6 h-6 text-gray-500 mx-auto" />
                          <p className="text-white text-xs mt-1">You</p>
                        </div>
                      </div>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                      {/* Mute Button */}
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/50 hover:bg-white/60'
                        }`}
                      >
                        {isMuted ? (
                          <MicOff className="w-4 h-4 text-white" />
                        ) : (
                          <Mic className="w-4 h-4 text-white" />
                        )}
                      </button>

                      {/* End Interview Button */}
                      <button 
                        onClick={() => {
                          setShowAIInterview(false);
                          setInterviewCompleted(true);
                        }}
                        className="w-10 h-10 bg-[#E92929] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-white" />
                      </button>

                      {/* Video Toggle Button */}
                      <button 
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/50 hover:bg-white/60'
                        }`}
                      >
                        {isVideoOff ? (
                          <VideoOff className="w-4 h-4 text-white" />
                        ) : (
                          <Video className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/80" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8">
                      <h3 className="text-white font-bold text-base text-center">
                        Unlock Full Access to the AI Interview Test
                      </h3>
                      <p className="text-[#EDEDED] text-sm text-center max-w-[364px]">
                        Get unlimited interview attempts, detailed feedback, and insights to boost your performance.
                      </p>
                      <button 
                        onClick={() => setShowAIInterview(true)}
                        className="px-4 py-2 bg-[#D3D3D3] rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-[#1A1A1A] font-bold text-sm">Start AI Interview</span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* AI Interview Score Card */}
                <div className="border border-[#EDEDED] rounded-3xl p-6 h-[370px] relative">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-[-0.02em]">
                    AI Interview Score
                  </h3>
                  
                  {/* Radar Chart Area */}
                  <div className="relative h-[278px] flex items-center justify-center">
                    {/* Placeholder for radar chart */}
                    <div className="relative">
                      <svg width="260" height="260" viewBox="0 0 260 260" className={interviewCompleted ? "" : "opacity-10"}>
                        {/* Grid */}
                        <polygon 
                          points="130,30 200,70 230,140 200,210 130,250 60,210 30,140 60,70"
                          fill="none"
                          stroke="#D3D3D3"
                          strokeWidth="1"
                        />
                        <polygon 
                          points="130,60 175,85 195,130 175,175 130,200 85,175 65,130 85,85"
                          fill="none"
                          stroke="#D3D3D3"
                          strokeWidth="1"
                        />
                        <polygon 
                          points="130,90 150,100 165,120 150,150 130,170 110,150 95,120 110,100"
                          fill="none"
                          stroke="#D3D3D3"
                          strokeWidth="1"
                        />
                        
                        {/* Actual scores when completed */}
                        {interviewCompleted && (
                          <polygon 
                            points="130,50 180,75 210,130 180,190 130,220 80,190 50,130 80,75"
                            fill="rgba(61, 128, 248, 0.3)"
                            stroke="#3D80F8"
                            strokeWidth="2"
                          />
                        )}
                      </svg>
                      
                      {/* Skills Labels */}
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] text-[#676767]">
                        Communication
                      </span>
                      <span className="absolute bottom-0 left-0 text-[10px] text-[#676767]">
                        Leadership
                      </span>
                      <span className="absolute bottom-0 right-0 text-[10px] text-[#676767]">
                        Professionalism
                      </span>
                      <span className="absolute top-20 -left-4 text-[10px] text-[#676767]">
                        Creativity
                      </span>
                      <span className="absolute top-20 -right-4 text-[10px] text-[#676767]">
                        Teamwork
                      </span>
                      <span className="absolute bottom-20 -left-6 text-[10px] text-[#676767]">
                        Socialibility
                      </span>
                      <span className="absolute bottom-20 -right-2 text-[10px] text-[#676767]">
                        Attitude
                      </span>
                    </div>
                  </div>

                  {/* Overlay - Only show if not completed */}
                  {!interviewCompleted && (
                    <div className="absolute inset-0 bg-black/80 rounded-3xl flex items-center justify-center">
                      <p className="text-white font-bold text-base text-center px-8">
                        DO A TEST INTERVIEW TO SEE ANALYTICS
                      </p>
                    </div>
                  )}
                </div>

                {/* Job Fit Analysis Card */}
                <div className="border border-[#EDEDED] rounded-3xl p-6 h-[370px] relative">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-[-0.02em]">
                    Job Fit Analysis
                  </h3>
                  
                  {/* Bar Chart */}
                  <div className="space-y-4">
                    {interviewCompleted ? (
                      // Show actual data when completed
                      [
                        { skill: "Technical Skills", score: 85 },
                        { skill: "Problem Solving", score: 78 },
                        { skill: "Communication", score: 92 },
                        { skill: "Cultural Fit", score: 88 },
                        { skill: "Experience Match", score: 75 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-[#676767]">{item.skill}</span>
                            <span className="text-xs font-bold text-[#1A1A1A]">{item.score}%</span>
                          </div>
                          <div className="h-6 bg-[#F6F6F6] rounded relative overflow-hidden">
                            <div 
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3D80F8] to-[#6B9CFF] rounded"
                              style={{ width: `${item.score}%` }}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      // Show placeholder when not completed
                      [1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="w-24 h-2 bg-[#F6F6F6] rounded" />
                            <div className="w-16 h-2 bg-[#F6F6F6] rounded" />
                          </div>
                          <div className="h-6 bg-[#F6F6F6] rounded" />
                        </div>
                      ))
                    )}
                  </div>

                  {/* Overlay - Only show if not completed */}
                  {!interviewCompleted && (
                    <div className="absolute inset-0 bg-black/80 rounded-3xl flex items-center justify-center">
                      <p className="text-white font-bold text-base text-center px-8">
                        DO A TEST INTERVIEW TO SEE ANALYTICS
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Cards Row - Resume and Case Study */}
              <div className="grid grid-cols-2 gap-6">
                {/* Resume Card */}
                <div className="border border-[#EDEDED] rounded-3xl p-6 h-[370px]">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-[-0.02em]">
                    Resume
                  </h3>
                  
                  {/* Upload Area */}
                  <div className="h-[calc(100%-44px)] border border-dashed border-[#D3D3D3] rounded-2xl p-4 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-center space-y-2">
                        <h4 className="text-base font-bold text-[#1A1A1A]">Upload Your Resume</h4>
                        <p className="text-xs text-[#676767]">Drop your resume here or click to upload it</p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <button 
                        onClick={handleSelectFileClick}
                        className="px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xs font-bold text-[#1A1A1A]">Select File</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Case Study Card */}
                <div className="border border-[#EDEDED] rounded-3xl p-6 h-[370px]">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-[-0.02em]">
                    Case Study
                  </h3>
                  
                  {/* Add Case Study Area */}
                  <div className="h-[calc(100%-44px)] border border-dashed border-[#D3D3D3] rounded-2xl p-4 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-center space-y-2 max-w-[164px]">
                        <h4 className="text-base font-bold text-[#1A1A1A]">Add Case Study</h4>
                        <p className="text-xs text-[#676767]">Showcase your best work by adding a new case study</p>
                      </div>
                      <button 
                        onClick={() => router.push('/interview/case-study')}
                        className="px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xs font-bold text-[#1A1A1A]">Add Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Overall Score Summary */}
              <div className="border border-[#EDEDED] rounded-3xl p-6 relative">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-[-0.02em]">
                  Overall Score Summary
                </h3>
                
                {/* Score Display Area */}
                <div className="space-y-9">
                  {/* Main Score Circle */}
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-[200px] h-[200px] rounded-full border-8 flex items-center justify-center ${
                      interviewCompleted ? 'border-[#3D80F8]' : 'border-[#F6F6F6]'
                    }`}>
                      <span className={`text-5xl font-bold ${
                        interviewCompleted ? 'text-[#3D80F8]' : 'text-[#D3D3D3]'
                      }`}>
                        {interviewCompleted ? '84' : '--'}
                      </span>
                    </div>
                    <p className="text-base font-bold text-[#1A1A1A] text-center">Overall Score</p>
                  </div>

                  {/* Sub Scores */}
                  <div className="flex justify-center gap-12">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${
                        interviewCompleted ? 'border-[#4AE5A4]' : 'border-[#F6F6F6]'
                      }`}>
                        <span className={`text-xl font-bold ${
                          interviewCompleted ? 'text-[#4AE5A4]' : 'text-[#D3D3D3]'
                        }`}>
                          {interviewCompleted ? '88' : '--'}
                        </span>
                      </div>
                      <p className="text-xs text-[#676767]">Technical</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${
                        interviewCompleted ? 'border-[#FFB74D]' : 'border-[#F6F6F6]'
                      }`}>
                        <span className={`text-xl font-bold ${
                          interviewCompleted ? 'text-[#FFB74D]' : 'text-[#D3D3D3]'
                        }`}>
                          {interviewCompleted ? '79' : '--'}
                        </span>
                      </div>
                      <p className="text-xs text-[#676767]">Behavioral</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${
                        interviewCompleted ? 'border-[#9C88FF]' : 'border-[#F6F6F6]'
                      }`}>
                        <span className={`text-xl font-bold ${
                          interviewCompleted ? 'text-[#9C88FF]' : 'text-[#D3D3D3]'
                        }`}>
                          {interviewCompleted ? '85' : '--'}
                        </span>
                      </div>
                      <p className="text-xs text-[#676767]">Cultural Fit</p>
                    </div>
                  </div>
                </div>

                {/* Overlay - Only show if not completed */}
                {!interviewCompleted && (
                  <div className="absolute inset-0 bg-black/80 rounded-3xl flex items-center justify-center">
                    <p className="text-white font-bold text-base text-center px-8">
                      DO A TEST INTERVIEW TO SEE ANALYTICS
                    </p>
                  </div>
                )}
              </div>

              {/* Interview Transcript */}
              <div className="border border-[#EDEDED] rounded-3xl p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-0.02em]">
                    Interview Transcript
                  </h3>
                  {showAIInterview && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded animate-pulse">
                      LIVE
                    </span>
                  )}
                  {interviewCompleted && !showAIInterview && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                      COMPLETED
                    </span>
                  )}
                </div>
                
                {/* Transcript Content Area */}
                <div className="space-y-3 h-[400px] overflow-y-auto">
                  {(showAIInterview || interviewCompleted) ? (
                    // Show messages when AI interview is active or completed
                    transcriptMessages.map((msg) => (
                      <div key={msg.id} className={`p-3 rounded-lg ${msg.speaker === "AI Interviewer" ? 'bg-[#F6F6F6]' : 'bg-blue-50 ml-8'}`}>
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-xs text-[#969699] font-medium">{msg.speaker}</p>
                          <p className="text-xs text-[#969699]">{msg.time}</p>
                        </div>
                        <p className="text-sm text-[#1A1A1A]">{msg.message}</p>
                      </div>
                    ))
                  ) : (
                    // Show waiting message when not active
                    <div className="p-3 bg-[#F6F6F6] rounded-lg">
                      <p className="text-xs text-[#969699] mb-1">AI Interviewer</p>
                      <p className="text-sm text-[#1A1A1A]">Waiting for interview to begin...</p>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-[#EDEDED] my-4" />

                {/* Input Area */}
                <div className="flex items-center gap-3">
                  <input 
                    type="text"
                    placeholder="Type your response..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 px-4 py-2 border border-[#D3D3D3] rounded-lg text-sm outline-none focus:border-[#3D80F8] transition-colors"
                    disabled={!showAIInterview}
                  />
                  <button 
                    onClick={handleSendMessage}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      showAIInterview 
                        ? 'bg-[#3D80F8] hover:bg-blue-600' 
                        : 'bg-[#F6F6F6] hover:bg-gray-200'
                    }`}
                    disabled={!showAIInterview}
                  >
                    <Send className={`w-5 h-5 ${showAIInterview ? 'text-white' : 'text-[#969699]'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Analysis Modal */}
      <ResumeAnalysisModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        resumeFile={resumeFile}
      />
    </div>
  );
}