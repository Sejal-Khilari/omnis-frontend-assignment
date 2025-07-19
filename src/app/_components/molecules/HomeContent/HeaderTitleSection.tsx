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
  "Nunc",
];

export default function HeaderTitleSection() {
  return (
    <div className="bg-[#FFFCF5] px-6 pt-4 pb-2 border-b border-[#EAECF0]">
      <div className="flex overflow-x-auto">
        {tabs.map((tab, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === tabs.length - 1;
          const clipPath = isFirst
            ? "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)"
            : isLast
            ? "polygon(12px 0, 100% 0, 100% 100%, 12px 100%, 0 50%)"
            : "polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)";

          return (
            <div
              key={tab + idx}
              className={`relative px-6 py-3 text-sm font-medium transition-all whitespace-nowrap h-[44px] flex items-center justify-center shadow-sm ${
                isFirst
                  ? "bg-[#FFFCF5] text-[#1A1A1A] text-base font-bold z-20"
                  : "bg-white text-gray-500 z-10"
              }`}
              style={{
                clipPath,
                marginRight: !isLast ? "-12px" : "0",
                maxWidth: idx === 10 ? 60 : 100,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
}
