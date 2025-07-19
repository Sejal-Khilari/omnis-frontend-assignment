import React from "react";
import Button from "../../atoms/Button";
import { Category2, Calendar, Setting4, ArrowDown2 } from "iconsax-react";

export default function HomeSummaryHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 pt-6 pb-4 bg-[#FFFCF5] gap-4">
      {/* Left: Title and subtitle */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      {/* Right: Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Customize Layout Button with Category2 icon */}
        <Button className="bg-[#444CE7] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <Category2 size="18" color="#fff" variant="Linear" />
          Customize Layout
        </Button>

        {/* Date Range with Calendar icon */}
        <div className="flex items-center bg-white border border-[#EAECF0] rounded-lg text-sm text-gray-700 overflow-hidden divide-x divide-[#EAECF0]">
          {/* Left: Calendar & Date Range */}
          <div className="flex items-center gap-2 px-3 py-2">
            <Calendar size="18" color="#667085" variant="Linear" />
            Oct 18 - Nov 18
          </div>

          {/* Right: Dropdown */}
          <select className="px-3 py-2 bg-white focus:outline-none">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>

        {/* Filters with Setting4 icon */}
        <div className="flex items-center gap-2 bg-white border border-[#EAECF0] rounded-lg px-3 py-2 text-sm text-gray-700">
          <Setting4 size="18" color="#667085" variant="Linear" />
          <span>Filters</span>

          <select className="bg-white text-gray-700 outline-none border-0 focus:ring-0 text-sm"></select>
        </div>
      </div>
    </div>
  );
}
