"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Users, MessageSquare, Wand2 } from "lucide-react";

export default function CaseStudyDetailsPage() {
  const router = useRouter();
  const [showAIFeedback, setShowAIFeedback] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUploadCaseStudy = () => {
    setShowAIFeedback(true);
    setIsUploaded(true);
  };

  const handleAddToApplication = () => {
    // Handle adding to application
    router.push('/interview/confirmation');
  };

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
            Case Study
          </h1>
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
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[800px] mx-auto space-y-8">
          {/* Case Study Header */}
          <div className="flex gap-16 items-center">
            {/* Left Side - Content */}
            <div className="flex-1 space-y-8">
              {/* Status and Title */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="inline-block px-4 py-2 bg-[#EFF5FF] text-[#3D80F8] text-sm rounded-lg">
                    On Progress
                  </span>
                  <h2 className="text-2xl font-bold text-black">
                    Brand Identity for "Lunara Café
                  </h2>
                  <p className="text-base text-[#676767]">
                    Lunara Café approached me with a vision to refresh their brand and connect with a younger, trend-savvy audience. I crafted a clean, modern visual identity that reflects their cozy, creative atmosphere—from logo design and color choices to packaging and digital assets.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#B5B5B5]" />
                  <span className="text-sm text-[#676767]">287 Participants</span>
                </div>
                {!isUploaded ? (
                  <button 
                    onClick={handleUploadCaseStudy}
                    className="px-6 py-3 bg-[#3D80F8] text-white font-bold text-sm rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Upload Case Study
                  </button>
                ) : (
                  <div className="flex items-center gap-6">
                    <button 
                      onClick={handleAddToApplication}
                      className="px-6 py-3 bg-[#3D80F8] text-white font-bold text-sm rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Add to Application
                    </button>
                    <button className="text-base font-bold text-[#1A1A1A] hover:underline">
                      Change
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-60 h-full">
              <div className="w-full h-full min-h-[240px] bg-[#EDEDED] rounded-xl"></div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-[#EDEDED]" />

          {/* Goal Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Goal</h3>
            <p className="text-base text-[#676767]">
              Create a fresh, minimalist brand identity to attract young professionals and students.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-[#EDEDED]" />

          {/* Solution Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Solution:</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#676767] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-[#676767]">
                  Designed logo, color palette, and typography system
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#676767] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-[#676767]">
                  Developed packaging & social media templates
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#676767] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-[#676767]">
                  Ensured cohesive visual style across all touchpoints
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-[#EDEDED]" />

          {/* Result Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">Result:</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#676767] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-[#676767]">
                  Increased brand recognition by 40% on Instagram
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#676767] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-[#676767]">
                  Positive customer feedback on packaging design
                </p>
              </div>
            </div>
          </div>

          {/* AI Feedback Section - Shows when Upload Case Study is clicked */}
          {showAIFeedback && (
            <>
              {/* Divider */}
              <hr className="border-[#EDEDED]" />

              {/* AI Feedback */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-6 h-6 text-[#1A1A1A]" />
                  <h3 className="text-xl font-bold text-black">AI Feedback</h3>
                </div>
                
                <div className="space-y-4 text-base text-[#676767]">
                  <p>
                    Your redesign does a great job of bringing a fresh perspective while maintaining the essence of the original brand. The choice of colors is well thought out, creating a strong visual appeal. The typography complements the brand's identity, but experimenting with slight variations in weight or spacing could enhance readability and make it even more dynamic.
                  </p>
                  
                  <p>
                    In terms of structure, the proportions and spacing are generally well-balanced, but refining alignment and negative space could improve the overall harmony. The concept is creative and shows a strong design direction, but ask yourself: does the new logo still communicate the brand's core message effectively? Ensuring that the redesign aligns with the brand's personality and values will make it feel more authentic and purposeful.
                  </p>
                  
                  <p>
                    Another key consideration is scalability. While the design looks great at larger sizes, simplifying intricate details could help maintain clarity when the logo is resized for smaller applications like mobile screens, packaging, or social media icons.
                  </p>
                  
                  <p>
                    Overall, this is a solid and promising redesign! With a few refinements, it has the potential to be even more impactful. Keep pushing your creativity, and don't hesitate to experiment further to make the design even stronger!
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}