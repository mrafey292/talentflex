import AIToolCard from "./AIToolCard";

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

interface AIToolsGridProps {
  tools: AITool[];
  onToolClick: (tool: AITool) => void;
}

export default function AIToolsGrid({ tools, onToolClick }: AIToolsGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#676767] text-lg">No tools found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tools.map((tool) => (
        <AIToolCard 
          key={tool.id} 
          tool={tool} 
          onClick={() => onToolClick(tool)}
        />
      ))}
    </div>
  );
}
