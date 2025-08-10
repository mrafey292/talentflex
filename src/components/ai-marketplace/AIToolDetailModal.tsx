import Image from "next/image";
import { AITool } from "./aiToolsData";
import BackButton from "@/components/ui/BackButton";

interface AIToolDetailModalProps {
  tool: AITool;
  isOpen: boolean;
  onClose: () => void;
}

export default function AIToolDetailModal({ tool, isOpen, onClose }: AIToolDetailModalProps) {
  if (!isOpen) return null;

  const renderCanvaLogo = () => (
    <div className="group">
      <svg width="280" height="116" viewBox="0 0 280 117" fill="none" className="w-full h-auto">
        <path d="M0 58.195C0 25.91 26.12 0 58.49 0h163.02C253.88 0 280 25.91 280 58.195S253.88 116.39 221.51 116.39H58.49C26.12 116.39 0 90.48 0 58.195z" fill="#24BECA"/>
        <path d="M74.12 56.66h67.63v48.57H74.12V56.66z" fill="#24BECA"/>
        <path d="M233.48 57.22h46.52v56.38h-46.52V57.22z" fill="#24BECA"/>
        <path d="M128.42 57.22h65.15v48.01h-65.15V57.22z" fill="#24BECA"/>
        <path d="M188.48 46.89H243.48v58.06h-55V46.89z" fill="#24BECA"/>
      </svg>
    </div>
  );

  const features = [
    "AI-Powered Templates – Instantly generate design ideas tailored to your content",
    "One-Click Enhancements – Remove backgrounds, upscale images, and adjust colors with AI",
    "Text-to-Image – Turn text descriptions into unique visuals",
    "Brand Kit Integration – Maintain brand consistency with automated font and color suggestions",
    "Magic Resize – Instantly adapt designs for social media, print, and presentations"
  ];

  const steps = [
    "Enter your content or upload images.",
    "AI suggests the best layouts, colors, and elements.",
    "Customize with easy drag-and-drop editing",
    "Export in high-quality formats for any platform"
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#EDEDED]">
          <div className="flex items-center gap-4">
            <BackButton onClick={onClose} />
            <h1 className="text-2xl font-bold text-black">Detail AI Tools</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] text-white font-bold text-sm px-6 py-3 rounded-lg">
              AI Career Coach
            </button>
            <button className="border border-[#EDEDED] rounded-full p-3">
              <Image src="/icons/magic.svg" alt="Magic" width={24} height={24} />
            </button>
            <button className="border border-[#EDEDED] rounded-full p-3">
              <Image src="/icons/bell.svg" alt="Notifications" width={24} height={24} />
            </button>
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          <div className="flex gap-16">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              {/* Tool Header */}
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-black">{tool.name}</h2>
                    <div className="bg-[#FBFAF0] rounded-lg px-3 py-1 flex items-center gap-1">
                      <Image src="/icons/star.svg" alt="Star" width={20} height={20} />
                      <span className="text-sm text-black">{tool.rating}</span>
                    </div>
                  </div>

                  <p className="text-base text-[#676767] leading-relaxed">
                    Canva AI (Magic Design) helps designers and non-designers instantly create stunning visuals with AI-powered suggestions, automated layouts, and smart editing tools
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="border border-[#676767] rounded-full p-1 mt-1">
                          <Image src="/icons/check.svg" alt="Check" width={12} height={12} />
                        </div>
                        <span className="text-sm text-[#676767]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button className="bg-[#3D80F8] text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Add AI Tool
                  </button>
                  <button className="text-black font-bold hover:text-gray-600 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Logo Display */}
            <div className="w-[400px] h-[300px] bg-[#EFF5FF] rounded-xl flex items-center justify-center">
              {tool.id === "canva-ai" ? (
                renderCanvaLogo()
              ) : (
                <span className="text-6xl font-bold text-[#24BECA]">{tool.name}</span>
              )}
            </div>
          </div>

          <hr className="border-[#EDEDED]" />

          {/* How It Works & Feedback Section */}
          <div className="flex gap-8">
            <div className="w-[464px] space-y-8">
              {/* How It Works */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-black">How It Works?</h3>
                <div className="space-y-2">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="border border-[#EDEDED] rounded-full w-8 h-8 flex items-center justify-center text-sm text-[#676767]">
                        {index + 1}
                      </div>
                      <span className="text-sm text-[#676767]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-[#EDEDED]" />

              {/* Feedback Section */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-black">Smarter AI, Better Experience</h4>
                  <p className="text-sm text-[#676767]">
                    Share your feedback and rate AI responses to help improve accuracy, relevance, and user experience.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Image 
                        key={star} 
                        src="/icons/star.svg" 
                        alt="Star" 
                        width={36} 
                        height={36}
                        className={star <= 4 ? "text-[#FFEB11]" : "text-[#EDEDED]"}
                      />
                    ))}
                  </div>

                  {/* Feedback Input */}
                  <div className="border-2 border-[#EDEDED] rounded-lg p-4">
                    <textarea 
                      placeholder="Give feedback for this AI"
                      className="w-full text-base text-[#969699] resize-none outline-none h-20"
                    />
                  </div>

                  <button className="w-full bg-[#3D80F8] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors">
                    Send Feedback
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              {/* Free Plan */}
              <div className="border border-[#EDEDED] rounded-3xl p-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-black">Free Plan</h4>
                  <p className="text-base text-[#676767]">Basic AI tools and templates</p>
                </div>
                <div className="text-4xl font-bold text-black">Free</div>
                <button className="w-full border border-[#D3D3D3] text-black font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="border-2 border-[#3D80F8] rounded-3xl p-6 space-y-4 relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#0C3784] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-black">Pro Plan</h4>
                  <p className="text-base text-[#676767]">Full AI access, premium templates, and advanced editing</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-black">$12.99</span>
                  <span className="text-sm text-[#969699]">/month</span>
                </div>
                <button className="w-full bg-[#3D80F8] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="border border-[#EDEDED] rounded-3xl p-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-black">Enterprise</h4>
                  <p className="text-base text-[#676767]">Team collaboration, brand control, and AI automation</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-black">$30</span>
                  <span className="text-sm text-[#969699]">/month</span>
                </div>
                <button className="w-full border border-[#D3D3D3] text-black font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
