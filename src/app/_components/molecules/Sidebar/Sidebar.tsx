"use client";
// Sidebar.jsx
import Image from "next/image";
import { useState } from "react";

const sidebarItems = [
  { key: "tab1", icon: "/sideBarIcons/1.svg", alt: "Tab 1" },
  { key: "tab2", icon: "/sideBarIcons/2.svg", alt: "Tab 2" },
  { key: "tab3", icon: "/sideBarIcons/3.svg", alt: "Tab 3" },
  { key: "tab4", icon: "/sideBarIcons/4.svg", alt: "Tab 4" },
  { key: "tab5", icon: "/sideBarIcons/5.svg", alt: "Tab 5" },
  { key: "tab6", icon: "/sideBarIcons/6.svg", alt: "Tab 6" },
  // Add more items as needed, using available SVGs
];

const sidebarMidItems = [
  { key: "tab1_mid", icon: "/sideBarIcons/1_mid.svg", alt: "Tab 1 Mid" },
  { key: "tab2_mid", icon: "/sideBarIcons/2_mid.svg", alt: "Tab 2 Mid" },
  { key: "tab3_mid", icon: "/sideBarIcons/3_mid.svg", alt: "Tab 3 Mid" },
  { key: "tab4_mid", icon: "/sideBarIcons/4_mid.svg", alt: "Tab 4 Mid" },
  // { key: "tab5_mid", icon: "/sideBarIcons/5_mid.svg", alt: "Tab 5 Mid" },
  // { key: "tab6_mid", icon: "/sideBarIcons/6_mid.svg", alt: "Tab 6 Mid" },
];

const sidebarEndItems = [
  { key: "tab1_end", icon: "/sideBarIcons/1_end.svg", alt: "Tab 1 End" },
  { key: "tab2_end", icon: "/sideBarIcons/2_end.svg", alt: "Tab 2 End" },
  // { key: "tab3_end", icon: "/sideBarIcons/3_end.svg", alt: "Tab 3 End" },
  // { key: "tab4_end", icon: "/sideBarIcons/4_end.svg", alt: "Tab 4 End" },
  // { key: "tab5_end", icon: "/sideBarIcons/5_end.svg", alt: "Tab 5 End" },
  // { key: "tab6_end", icon: "/sideBarIcons/6_end.svg", alt: "Tab 6 End" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <aside className="w-16 bg-[#1A2234]  flex flex-col items-center py-4 px-1.5 justify-between border-r border-[#E4E7EC]">

      <div className="flex flex-col gap-2 items-center w-full">
        {/* Top section (first 6 icons, with divider after 6th) */}
        {sidebarItems.slice(0, 6).map((item, idx) => (
          <button
            key={item.key}
            onClick={() => setSelected(idx)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors mb-1 ${
              selected === idx
                ? "bg-[#444CE7] shadow text-white"
                : "hover:bg-[#232B3E] text-[#D0D5DD]"
            }`}
            style={{ outline: "none", border: "none" }}
            aria-label={item.alt}
          >
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
          </button>
        ))}
        {/* Divider */}
        <div className="w-full h-px bg-[#EAECF0] opacity-70 my-2 mt-auto" />

        {/* Mid section (mid icons) */}
        {sidebarMidItems.slice(0, 6).map((item, idx) => (
          <button
            key={item.key}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#232B3E] text-[#D0D5DD] mb-1"
            aria-label={item.alt}
            style={{ outline: "none", border: "none" }}
          >
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
          </button>
        ))}
        {/* Divider */}
        <div className="w-full h-px bg-[#EAECF0] opacity-70 my-2 mt-auto" />
        {/* End section (end icons) */}
        {sidebarEndItems.slice(0, 6).map((item, idx) => (
          <button
            key={item.key}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#232B3E] text-[#D0D5DD] mb-1"
            aria-label={item.alt}
            style={{ outline: "none", border: "none" }}
          >
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
          </button>
        ))}
      </div>
      {/* Bottom icon (profile/settings) */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#232B3E] text-[#D0D5DD] mb-2"
        aria-label="Profile"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" stroke="#D0D5DD" strokeWidth="2" />
          <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#D0D5DD" strokeWidth="2" />
        </svg>
      </button>
    </aside>
  );
}
