"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, MessageSquare, Users, Send, Volume2, Phone, Video, Mic, MicOff, VideoOff, FileText, Upload, Plus } from "lucide-react";
import TopBar from "@/components/layout/TopBar";

export default function InterviewRoomPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [interviewDate, setInterviewDate] = useState(new Date(2025, 4, 2)); // Default to May 2nd 2025
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [transcriptMessages, setTranscriptMessages] = useState([
    { id: 1, speaker: "AI Interviewer", message: "Hello! Welcome to your interview. Can you please introduce yourself?", time: "10:00 AM" },
    { id: 2, speaker: "You", message: "Hi, I'm excited to be here. My name is...", time: "10:01 AM" }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

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

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
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

  return (
    <div className="flex-1 bg-white rounded-tl-3xl min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar 
        title="Interview Room" 
        showBack={true} 
        onBackClick={() => router.push('/interview/confirmation')}
      />

      {/* Main Content */}
      <div className="p-8 flex-1">
        <div className="max-w-[1112px] mx-auto h-full flex flex-col gap-8">
          {/* Video Area */}
          <div className="relative flex-1 bg-[#EDEDED] rounded-2xl overflow-hidden min-h-[560px]">
            {/* Main video background - shows interviewer video or placeholder */}
            {isInterviewStarted ? (
              // Active Interview View
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-500" />
                    </div>
                    <p className="text-white text-lg">AI Interviewer</p>
                  </div>
                </div>
              </div>
            ) : (
              // Waiting Room View
              <div className="absolute inset-0" style={{
                backgroundImage: 'url(/images/interview-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            )}

            {/* Participant's video (small rectangle in top right) */}
            <div className="absolute top-6 right-6 w-[200px] h-[120px] bg-[#D9D9D9] rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-gray-700">
                <div className="text-center">
                  <Users className="w-10 h-10 text-gray-500 mx-auto" />
                  <p className="text-white text-sm mt-1">You</p>
                </div>
              </div>
            </div>

            {/* Video Controls - Only show when interview is started */}
            {isInterviewStarted && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {/* Mute Button */}
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/50 hover:bg-white/60'
                  }`}
                >
                  {isMuted ? (
                    <MicOff className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </button>

                {/* End Call Button */}
                <button 
                  onClick={() => setIsInterviewStarted(false)}
                  className="w-12 h-12 bg-[#E92929] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Phone className="w-6 h-6 text-white" />
                </button>

                {/* Video Toggle Button */}
                <button 
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/50 hover:bg-white/60'
                  }`}
                >
                  {isVideoOff ? (
                    <VideoOff className="w-6 h-6 text-white" />
                  ) : (
                    <Video className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="space-y-3">
            {/* Status Pills */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#F6F6F6] rounded-lg text-xs text-[#676767]">
                Graphic Designer
              </span>
              <span className="px-3 py-1 bg-[#F6F6F6] rounded-lg text-xs text-[#676767]">
                Creative Vision
              </span>
              <span className="px-3 py-1 bg-[#F6F6F6] rounded-lg text-xs text-[#676767]">
                May 2nd, 2025
              </span>
            </div>

            {/* Interview Info and Start Button */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black tracking-[-0.02em]">
                Interview scheduled for {interviewDate.toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </h2>
              
              {!isInterviewStarted && (
                <button 
                  onClick={() => setIsInterviewStarted(true)}
                  className="px-6 py-3 bg-[#3D80F8] text-white font-bold text-sm rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Start Interview
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors">
                <Upload className="w-4 h-4 text-[#676767]" />
                <span className="text-sm text-[#676767]">Upload Resume</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4 text-[#676767]" />
                <span className="text-sm text-[#676767]">Add Case Study</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4 text-[#676767]" />
                <span className="text-sm text-[#676767]">View Transcript</span>
              </button>
            </div>
          </div>

          {/* Interview Transcript Section - Only visible when interview starts */}
          {isInterviewStarted && (
            <div className="border border-[#EDEDED] rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-[-0.02em]">
                  Interview Transcript
                </h3>
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded animate-pulse">
                  LIVE
                </span>
              </div>
              
              {/* Transcript Messages */}
              <div className="space-y-3 max-h-[200px] overflow-y-auto mb-4">
                {transcriptMessages.map((msg) => (
                  <div key={msg.id} className={`p-3 rounded-lg ${msg.speaker === "AI Interviewer" ? 'bg-[#F6F6F6]' : 'bg-blue-50 ml-8'}`}>
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-xs text-[#969699] font-medium">{msg.speaker}</p>
                      <p className="text-xs text-[#969699]">{msg.time}</p>
                    </div>
                    <p className="text-sm text-[#1A1A1A]">{msg.message}</p>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex items-center gap-3">
                <input 
                  type="text"
                  placeholder="Type your response..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 px-4 py-2 border border-[#D3D3D3] rounded-lg text-sm outline-none focus:border-[#3D80F8] transition-colors"
                />
                <button 
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-[#3D80F8] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}