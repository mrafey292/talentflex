"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ResumeAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeFile?: File;
}

export default function ResumeAnalysisModal({ isOpen, onClose, resumeFile }: ResumeAnalysisModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleUpdateWithAI = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  const handleUpload = () => {
    onClose();
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 flex gap-8">
        {/* Left Section - Resume Preview */}
        <div className="flex flex-col gap-6">
          <div className="w-[400px] h-[568px] rounded-2xl overflow-hidden bg-[#F6F6F6] flex items-center justify-center">
            {resumeFile ? (
              <div className="text-center">
                <p className="text-[#676767] mb-2">Resume Preview</p>
                <p className="text-sm text-[#1A1A1A] font-semibold">{resumeFile.name}</p>
              </div>
            ) : (
              <p className="text-[#969699]">No resume uploaded</p>
            )}
          </div>
          
          {/* Update with AI Button */}
          <button
            onClick={handleUpdateWithAI}
            disabled={isAnalyzing || !resumeFile}
            className="w-full py-4 px-8 border border-[#D3D3D3] rounded-lg font-bold text-base text-[#1A1A1A] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? "Analyzing..." : "Update with AI"}
          </button>
        </div>

        {/* Divider */}
        <div className="w-px bg-[#EDEDED]" />

        {/* Right Section - Analysis Results */}
        <div className="flex flex-col gap-8">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-[#676767]" />
            </button>
          </div>

          {/* Analysis Metrics */}
          <div className="flex flex-col gap-6">
              {/* Relevance Score */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#E2E2E2"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="url(#gradient1)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${analysisComplete ? 201 : 0} 301`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D96570" />
                        <stop offset="100%" stopColor="#4A83F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1A1A1A]">
                      {analysisComplete ? "64%" : "--"}
                    </span>
                  </div>
                </div>
                <p className="text-base font-bold text-[#1A1A1A]">Relevance</p>
              </div>

              {/* Readability Score */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#D9D9D9"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="url(#gradient2)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${analysisComplete ? 156 : 0} 301`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D96570" />
                        <stop offset="100%" stopColor="#4A83F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1A1A1A]">
                      {analysisComplete ? "52%" : "--"}
                    </span>
                  </div>
                </div>
                <p className="text-base font-bold text-[#1A1A1A]">Readability</p>
              </div>

              {/* ATS Compatibility Score */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="#D9D9D9"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      stroke="url(#gradient3)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${analysisComplete ? 231 : 0} 301`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D96570" />
                        <stop offset="100%" stopColor="#4A83F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1A1A1A]">
                      {analysisComplete ? "77%" : "--"}
                    </span>
                  </div>
                </div>
                <p className="text-base font-bold text-[#1A1A1A]">ATS Compatibility</p>
              </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!analysisComplete}
              className="px-8 py-4 bg-[#3D80F8] text-white font-bold text-base rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}