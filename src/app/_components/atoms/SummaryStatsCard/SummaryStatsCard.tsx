import React from "react";

interface SummaryStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  textColor?: string;
  bgColor?: string;
}

export default function SummaryStatCard({
  icon,
  label,
  value,
  textColor = "text-gray-900",
  bgColor = "bg-white",
}: SummaryStatCardProps) {
  return (
    <div
      className={`flex justify-between items-start p-4 rounded-xl shadow-sm ${bgColor}`}
    >
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className={`text-lg font-semibold mt-1 ${textColor}`}>{value}</p>
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-md">
        {icon}
      </div>
    </div>
  );
}
