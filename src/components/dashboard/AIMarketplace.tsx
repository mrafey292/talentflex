"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { type AITool } from "@/types";

const aiTools: AITool[] = [
  {
    id: '1',
    name: 'Canva AI (Magic Design)',
    description: 'Instantly generate design templates with AI',
    pricing: 'Free - $30',
    rating: 4.9,
    logo: (
      <div className="w-40 h-20 flex items-center justify-center">
        <svg width="132" height="56" viewBox="0 0 132 56" fill="none">
          <path d="M40.31 0H0V55.6H40.31C52.42 55.6 62.32 45.7 62.32 33.59V22.01C62.32 9.9 52.42 0 40.31 0Z" fill="#24BECA"/>
          <path d="M35.04 27.07C35.04 27.07 35.04 27.07 35.04 27.07Z" fill="#24BECA"/>
          <path d="M110.38 27.33H132.37V54.26H110.38V27.33Z" fill="#24BECA"/>
          <path d="M60.71 27.33H91.51V50.26H60.71V27.33Z" fill="#24BECA"/>
          <path d="M89.1 22.4H115.1V50.13H89.1V22.4Z" fill="#24BECA"/>
        </svg>
      </div>
    ),
    backgroundColor: '#EFF5FF'
  },
  {
    id: '2',
    name: 'Remove.bg',
    description: 'Instantly remove image backgrounds with AI precision',
    pricing: 'Free - $9.99',
    rating: 4.5,
    logo: (
      <div className="w-25 h-25 flex items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M9.83 22.69H90.01V62.97H9.83V22.69Z" stroke="#000000" strokeWidth="2.08"/>
          <path d="M9.38 48.44H90.63V77.32H9.38V48.44Z" stroke="#000000" strokeWidth="2.08"/>
        </svg>
      </div>
    ),
    backgroundColor: '#F6F6F6'
  },
  {
    id: '3',
    name: 'Adobe Sensei',
    description: 'AI-powered design enhancements and automation',
    pricing: 'Included with Adobe CC',
    rating: 4.7,
    logo: (
      <div className="w-22 h-20 flex items-center justify-center">
        <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
          <path d="M90.22 79.85H0V0H90.22V79.85Z" fill="#FA0F00"/>
        </svg>
      </div>
    ),
    backgroundColor: '#FEF6F5'
  }
];

function AIToolCard({ tool }: { tool: AITool }) {
  return (
    <div className="bg-white border border-[#EDEDED] rounded-2xl p-4 space-y-4">
      {/* Header */}
      <div 
        className="h-[164px] rounded-xl relative flex items-center justify-center"
        style={{ backgroundColor: tool.backgroundColor }}
      >
        <div className="absolute top-3 left-3 bg-white/80 flex items-center gap-1 px-2 py-1 rounded">
          <Image src="/icons/star.svg" alt="Star" width={12} height={12} />
          <span className="text-xs text-black">{tool.rating}</span>
        </div>
        {tool.logo}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="font-bold text-sm text-black">{tool.name}</h3>
          <p className="text-xs text-[#676767]">{tool.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className="font-bold text-base text-[#1A1A1A]">{tool.pricing}</span>
            <span className="text-[10px] text-[#676767]">/month</span>
          </div>
        </div>

        <button className="w-full border border-[#D3D3D3] text-[#1A1A1A] font-bold text-xs px-4 py-2 rounded hover:bg-gray-50 transition-colors">
          Add
        </button>
      </div>
    </div>
  );
}

export default function AIMarketplace() {
  const router = useRouter();
  
  return (
    <div className="bg-white border border-[#EDEDED] rounded-3xl p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1A1A1A]">AI Marketplace</h2>
        <button 
          onClick={() => router.push('/ai-marketplace')}
          className="text-sm text-[#676767] hover:text-[#1A1A1A] transition-colors"
        >
          View All
        </button>
      </div>

      {/* AI Tools Grid */}
      <div className="grid grid-cols-3 gap-4">
        {aiTools.map((tool) => (
          <AIToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
