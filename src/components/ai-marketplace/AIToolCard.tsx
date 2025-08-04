import Image from "next/image";

interface AITool {
  id: string;
  name: string;
  description: string;
  rating: number;
  pricing: string;
  category: "Agents" | "Tools";
  backgroundColor: string;
  logo?: string;
}

interface AIToolCardProps {
  tool: AITool;
  onClick: () => void;
}

export default function AIToolCard({ tool, onClick }: AIToolCardProps) {
  const renderLogo = () => {
    switch (tool.id) {
      case "career-bot":
        return (
          <Image
            src="/images/ai-marketplace/rezi-agent-logo.jpg"
            alt="CareerBot"
            width={86}
            height={36}
            className="object-contain"
          />
        );
      case "canva-ai":
        return <span className="text-4xl font-bold text-[#24BECA]">canva</span>;
      case "remove-bg":
        return <div className="text-black font-bold text-2xl">remove.bg</div>;
      case "adobe-sensei":
        return (
          <div className="w-12 h-12 bg-[#FA0F00] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Ae</span>
          </div>
        );
      case "chat-gpt":
        return (
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-2xl">⚡</span>
          </div>
        );
      case "resume-genie":
      case "pathfinder-ai":
      case "jobmatch-ai":
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            <span className="text-black font-bold text-lg">{tool.name}</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            <span className="text-black font-bold text-lg">{tool.name}</span>
          </div>
        );
    }
  };

  return (
    <div 
      className="border border-[#EDEDED] rounded-2xl p-4 space-y-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div 
        className="h-56 rounded-xl relative"
        style={{ backgroundColor: tool.backgroundColor }}
      >
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Image
            src="/icons/star.svg"
            alt="Star"
            width={12}
            height={12}
            className="text-[#FFEB11]"
          />
          <span className="text-xs text-black tracking-[-2%]">{tool.rating}</span>
        </div>
        
        {/* Tool Logo/Brand */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center justify-center h-16">
            {renderLogo()}
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-black tracking-[-2%]">{tool.name}</h3>
          <p className="text-sm text-[#676767] tracking-[-2%]">{tool.description}</p>
        </div>
        
        <div className="flex items-end gap-1">
          <span className="text-xl font-bold text-black tracking-[-2%]">{tool.pricing}</span>
          {tool.pricing !== "Included with Adobe CC" && (
            <span className="text-sm text-[#676767] tracking-[-2%]">/month</span>
          )}
        </div>
        
        <button className="w-full border border-[#D3D3D3] text-black font-bold text-xs py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Add
        </button>
      </div>
    </div>
  );
}
