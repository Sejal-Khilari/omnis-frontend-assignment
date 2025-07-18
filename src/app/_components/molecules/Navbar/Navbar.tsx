"use client";

import Image from "next/image";
import SearchInput from "../../atoms/SearchInput";

export default function Navbar() {
  return (
    <div className="h-16 bg-white border-b border-[#EAECF0] flex items-center px-4 justify-between w-full">
      {/* Left: Logo and Icon */}
      <div className="flex  min-w-[260px]">
        <Image src="/logo.svg" alt="Logoipsum" width={200} height={32} />
      </div>

      <div className="w-px h-16 bg-[#EAECF0] mx-4" />
      
      {/* Center: Search */}
      <div className="flex-1 flex ">
        <SearchInput width="w-[400px]" height="h-11" placeholder="Search" />
      </div>
      {/* Right: Notification and Profile */}
      <div className="flex items-center gap-4 min-w-[220px] justify-end">
        {/* Notification Bell */}
        <div className="relative">
          <button className="w-11 h-11 flex items-center justify-center rounded-lg bg-white border border-[#EAECF0] hover:bg-gray-50">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <path d="M11 19.25a2.062 2.062 0 0 1-2.062-2.062h4.124A2.062 2.062 0 0 1 11 19.25Zm7.188-4.125h-1.031V9.625a6.156 6.156 0 0 0-5.125-6.07V2.062a1.031 1.031 0 1 0-2.062 0v1.493a6.156 6.156 0 0 0-5.125 6.07v5.5H3.812a1.031 1.031 0 0 0 0 2.062h15.376a1.031 1.031 0 0 0 0-2.062Z" fill="#667085"/>
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E4E7EC] text-[#344054] font-medium text-sm">
  C
</div>

          <div className="flex flex-col items-start justify-center">
            <span className="text-sm font-medium text-gray-900 leading-4">Chi Nguyen</span>
            <span className="text-xs text-gray-500 leading-3">Admin</span>
          </div>
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path d="M6.75 7.5l2.25 2.25 2.25-2.25" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}


