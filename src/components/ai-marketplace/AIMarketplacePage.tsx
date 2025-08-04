"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import SearchAndFilter from "./SearchAndFilter";
import AIToolsGrid from "./AIToolsGrid";
import AIToolDetailPage from "./AIToolDetailPage";
import { aiTools, AITool } from "./aiToolsData";
import { useNavigation } from "@/contexts/NavigationContext";

type FilterCategory = "All" | "Agents" | "Tools";

export default function AIMarketplacePage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage('ai-marketplace');
  }, [setCurrentPage]);

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = activeFilter === "All" || tool.category === activeFilter;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToolClick = (tool: AITool) => {
    setSelectedTool(tool);
  };

  const handleBackToMarketplace = () => {
    setSelectedTool(null);
  };

  // If a tool is selected, show the detail page
  if (selectedTool) {
    return (
      <AIToolDetailPage
        tool={selectedTool}
        onBack={handleBackToMarketplace}
      />
    );
  }

  // Otherwise, show the marketplace grid
  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Top Bar */}
      <TopBar title="AI Marketplace" showBack={false} />
      
      <div className="p-8 space-y-8">
        {/* Header Section with Search and Filters */}
        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* AI Tools Grid */}
        <div className="space-y-4">
          <AIToolsGrid tools={filteredTools} onToolClick={handleToolClick} />
        </div>
      </div>
    </div>
  );
}
