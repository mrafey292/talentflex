import Image from "next/image";

type FilterCategory = "All" | "Agents" | "Tools";

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: FilterCategory;
  setActiveFilter: (filter: FilterCategory) => void;
}

export default function SearchAndFilter({ 
  searchQuery, 
  setSearchQuery, 
  activeFilter, 
  setActiveFilter 
}: SearchAndFilterProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-black tracking-[-2%] text-center">Your Personal AI Toolkit</h1>
        <p className="text-base text-[#676767] tracking-[-2%] text-center max-w-[445px]">
          Discover AI tools and agents to boost your job search, resume, and career growth effortlessly!
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="flex items-center gap-2 w-[400px]">
        <div className="flex-1 flex items-center gap-4 border-2 border-[#EDEDED] rounded-lg px-4 py-2 h-12">
          <Image
            src="/icons/search.svg"
            alt="Search"
            width={24}
            height={24}
            className="text-[#969699]"
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-base text-[#969699] tracking-[-2%] outline-none bg-transparent placeholder:text-[#969699]"
          />
        </div>
        <button className="border border-[#EDEDED] rounded-lg p-3">
          <Image
            src="/icons/adjustments.svg"
            alt="Filter"
            width={24}
            height={24}
            className="text-[#676767]"
          />
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setActiveFilter("All")}
          className={`text-sm px-6 py-2 rounded-xl font-bold transition-colors ${
            activeFilter === "All" 
              ? "bg-[#3D80F8] border border-[#3D80F8] text-white" 
              : "border border-[#D3D3D3] text-[#676767] hover:bg-gray-50"
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveFilter("Agents")}
          className={`text-sm px-6 py-2 rounded-xl transition-colors ${
            activeFilter === "Agents" 
              ? "bg-[#3D80F8] border border-[#3D80F8] text-white font-bold" 
              : "border border-[#D3D3D3] text-[#676767] hover:bg-gray-50"
          }`}
        >
          Agents
        </button>
        <button 
          onClick={() => setActiveFilter("Tools")}
          className={`text-sm px-6 py-2 rounded-xl transition-colors ${
            activeFilter === "Tools" 
              ? "bg-[#3D80F8] border border-[#3D80F8] text-white font-bold" 
              : "border border-[#D3D3D3] text-[#676767] hover:bg-gray-50"
          }`}
        >
          Tools
        </button>
      </div>
    </div>
  );
}
