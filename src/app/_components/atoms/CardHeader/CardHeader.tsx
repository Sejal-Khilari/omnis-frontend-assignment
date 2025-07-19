import { Tag2 } from "iconsax-react";

export default function CardHeader() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-gray-100 rounded-xl">
          <Tag2 size="20" color="#6B7280" variant="Linear" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Lorem ipsum dolor sit
          </h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <button className="p-2 bg-white border rounded-lg hover:bg-gray-100">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5L16 12L9 19"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
