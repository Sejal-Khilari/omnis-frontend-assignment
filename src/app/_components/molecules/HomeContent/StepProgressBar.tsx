import React from "react";

const steps = [
  { label: "Lorem", status: "completed" },
  { label: "Lorem", status: "current" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
];

function StepIcon({ status }: { status: string }) {
  if (status === "completed") {
    return (
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7" fill="#444CE7" />
          <path
            d="M5.5 8.5l2 2 3-3"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-[#444CE7]">
        <div className="w-3 h-3 bg-[#444CE7] rounded-full"></div>
      </div>
    );
  }
  return (
    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
    </div>
  );
}

export default function StepProgressBar() {
  return (
    <div className="bg-[#FFFCF5] py-4 px-4">
      <div className="flex">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex items-center px-6 py-2 relative  ${
              step.status === "completed"
                ? "bg-[#444CE7] text-white"
                : step.status === "current"
                  ? "bg-[#2E3A8C] text-white"
                  : "bg-white text-gray-600 border border-gray-200"
            }`}
            style={{
              clipPath:
                idx !== 0
                  ? idx !== steps.length - 1
                    ? "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%)"
                  : "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)",
              marginRight: idx !== steps.length - 1 ? "-14px" : "0",
              zIndex: steps.length - idx,
            }}
          >
            <div className="flex items-center">
              <StepIcon status={step.status} />
              <span className="font-semibold text-sm whitespace-nowrap">
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
