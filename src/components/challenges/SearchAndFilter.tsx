import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterClick: () => void;
}

export default function SearchAndFilter({ 
  searchQuery, 
  onSearchChange, 
  onFilterClick 
}: SearchAndFilterProps) {
  return (
    <div className="flex justify-center gap-2 w-full">
      <div className="flex items-center gap-4 px-4 py-2 border-2 border-[#EDEDED] rounded-lg flex-1 max-w-[800px] h-12">
        <MagnifyingGlassIcon className="w-6 h-6 text-[#969699]" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 text-[#969699] placeholder:text-[#969699] border-none outline-none bg-transparent"
        />
      </div>
      
      <button 
        onClick={onFilterClick}
        className="p-3 border border-[#EDEDED] rounded-lg hover:bg-gray-50 transition-colors h-12 w-12 flex items-center justify-center"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6 text-[#676767]" />
      </button>
    </div>
  );
}
