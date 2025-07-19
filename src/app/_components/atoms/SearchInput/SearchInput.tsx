"use client";

import { KeyboardCommandKey, Search } from "@mui/icons-material";

interface SearchInputProps {
  width?: string; // Tailwind class, e.g., "w-[400px]"
  height?: string; // Tailwind class, e.g., "h-[40px]"
  placeholder?: string;
}

export default function SearchInput({
  width = "w-[400px]",
  height = "h-[40px]",
  placeholder = "Search",
}: SearchInputProps) {
  return (
    <div
      className={`flex items-center justify-between bg-white border border-[#EAECF0] rounded-lg px-[14px] py-[10px] gap-2 ${width} ${height}`}
    >
      {/* Left: Search icon and label with wider gap */}
      <div className="flex items-center gap-3 text-[#667085]">
        <Search className="!w-[20px] !h-[20px]" />
        <span className="text-sm font-medium">{placeholder}</span>
      </div>

      {/* Right: Shortcut */}
      <div className="flex items-center gap-1 text-[#667085] text-sm font-mono">
        <span className="text-base !w-[18px] !h-[18px]">⌘</span>
        <span>+</span>
        <span className=" !w-[8px] !h-[20px]">F</span>
      </div>
    </div>
  );
}
