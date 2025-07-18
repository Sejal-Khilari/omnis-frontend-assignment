import React from "react";

const steps = [
  { label: "Lorem", status: "done" },
  { label: "Lorem", status: "current" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
  { label: "Lorem", status: "upcoming" },
];

function StepIcon({ status }: { status: string }) {
  if (status === "done") {
    return (
      <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full border-2 border-blue-600">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7" fill="#444CE7" />
          <path d="M5.5 8.5l2 2 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (status === "current") {
    return (
      <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full border-2 border-blue-600">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7" fill="#fff" />
          <circle cx="8" cy="8" r="4" fill="#444CE7" />
        </svg>
      </span>
    );
  }
  return (
    <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full border-2 border-gray-200">
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" fill="#F2F4F7" />
        <circle cx="8" cy="8" r="4" fill="#D0D5DD" />
      </svg>
    </span>
  );
}

export default function StepProgressBar() {
  return (
    <div className="bg-[#FFFCF5] ">
      <div className=" rounded-md bg-white flex overflow-x-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex items-center relative ${
              idx === 0
                ? "bg-[#444CE7] text-white z-10"
                : idx === 1
                ? "bg-[#444CE7] text-white z-10"
                : "bg-white text-gray-500"
            } ${idx !== steps.length - 1 ? "after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-4 after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(68,76,231,0.1)_100%)] after:z-0" : ""}`}
            style={{
              clipPath:
                idx !== steps.length - 1
                  ? "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%)",
              minWidth: 120,
            }}
          >
            <div className="flex items-center gap-2 z-10">
              <StepIcon status={step.status} />
              <span className="font-medium text-base truncate">{step.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
