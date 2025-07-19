import React from "react";

interface MainStatRowProps {
  description: string;
  value: string;
  onIconClick?: () => void;
}

export default function MainStatRow({
  description,
  value,
  onIconClick,
}: MainStatRowProps) {
  return (
    <div className="flex items-center justify-between bg-[#F8F6F2] rounded-xl px-6 py-4 mb-4">
      <div>
        <div className="text-gray-500 text-sm mb-1">{description}</div>
        <div className="text-2xl font-bold text-[#F04438]">{value}</div>
      </div>
      <button
        // onClick={onIconClick}
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#F04438] bg-[#FFF4F0] text-[#F04438] hover:bg-[#FEE2E2]"
      >
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
          <path
            d="M15 7L7 15M7 7l8 8"
            stroke="#F04438"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
