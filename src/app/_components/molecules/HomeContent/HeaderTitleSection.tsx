import React from "react";

const tabs = [
  "Lorem ipsum",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem",
  "Lect...",
  "Nunc"
];

export default function HeaderTitleSection() {
  return (
    <div className="bg-[#FFFCF5] px-6 pt-4 pb-2 border-b border-[#EAECF0] shadow-sm">
      <div className="flex gap-0.5">
        {tabs.map((tab, idx) => (
          <div
            key={tab + idx}
            className={`px-6 py-3 rounded-t-lg font-semibold text-base transition-all whitespace-nowrap ${
              idx === 0
                ? "bg-[#FFFCF5] text-[#1A1A1A] shadow-none border-b-2 border-[#FFFCF5] text-lg font-bold"
                : "bg-[#F5F6F7] text-gray-400 shadow-sm border-b-2 border-[#EAECF0]"
            }`}
            style={{
              boxShadow: idx !== 0 ? "0 2px 6px 0 rgba(16, 24, 40, 0.04)" : undefined,
              maxWidth: idx === 10 ? 60 : 120,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}
