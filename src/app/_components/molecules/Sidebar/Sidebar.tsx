"use client";
// Sidebar.jsx
import Image from "next/image";
import { useState } from "react";

const sidebarItems = [
  { key: "home", icon: "/sideBarIcons/1.svg", alt: "Home", label: "Home" },
  { key: "meetings", icon: "/sideBarIcons/2.svg", alt: "Meetings", label: "Meetings" },
  { key: "status", icon: "/sideBarIcons/3.svg", alt: "Meeting Status", label: "Meeting Status" },
  { key: "playlist", icon: "/sideBarIcons/4.svg", alt: "Playlist", label: "Playlist" },
  { key: "contact", icon: "/sideBarIcons/5.svg", alt: "Contact", label: "Contact" },
  { key: "uploads", icon: "/sideBarIcons/6.svg", alt: "Uploads", label: "Uploads" },
];

const sidebarMidItems = [
  { key: "integrations", icon: "/sideBarIcons/1_mid.svg", alt: "Integrations", label: "Integrations" },
  { key: "ai_apps", icon: "/sideBarIcons/2_mid.svg", alt: "AI Apps", label: "AI Apps" },
  { key: "topic_tracker", icon: "/sideBarIcons/3_mid.svg", alt: "Topic Tracker", label: "Topic Tracker" },
  { key: "analytics", icon: "/sideBarIcons/4_mid.svg", alt: "Analytics", label: "Analytics" },
];

const sidebarEndItems = [
  { key: "team", icon: "/sideBarIcons/1_end.svg", alt: "Team", label: "Team" },
  { key: "settings", icon: "/sideBarIcons/2_end.svg", alt: "Settings", label: "Settings" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`bg-[#1A2234] flex flex-col items-center py-4 px-1.5  border-r border-[#E4E7EC] transition-all duration-300 ${
      isExpanded ? "w-64" : "w-16"
    }`}>
      {/* Toggle Button */}
      <div className="w-full flex justify-center mb-4">
        <button
          onClick={toggleSidebar}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white hover:bg-gray-100 transition-colors"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <svg 
            width="16" 
            height="16" 
            fill="none" 
            viewBox="0 0 16 16"
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          >
            <path d="M6 12L10 8L6 4" stroke="#1A2234" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-2 items-center w-full">
        {/* Top section */}
        {sidebarItems.map((item, idx) => (
          <button
            key={item.key}
            onClick={() => setSelected(idx)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors mb-1 ${
              selected === idx
                ? "bg-[#444CE7] shadow text-white"
                : "hover:bg-[#232B3E] text-[#D0D5DD]"
            }`}
            style={{ outline: "none", border: "none" }}
            aria-label={item.alt}
          >
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
            {isExpanded && (
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            )}
          </button>
        ))}
        
        {/* Divider */}
        <div className="w-full h-px bg-[#EAECF0] opacity-70 my-2 mt-auto" />

        {/* Mid section */}
        {sidebarMidItems.map((item, idx) => (
          <button
            key={item.key}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#232B3E] text-[#D0D5DD] mb-1 transition-colors"
            aria-label={item.alt}
            style={{ outline: "none", border: "none" }}
          >
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
            {isExpanded && (
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            )}
          </button>
        ))}
        
        {/* Divider */}
        <div className="w-full h-px bg-[#EAECF0] opacity-70 my-2 mt-auto" />
        
        {/* End section */}
        {sidebarEndItems.map((item, idx) => (
          <button
            key={item.key}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#232B3E] text-[#D0D5DD] mb-1 transition-colors"
            aria-label={item.alt}
            style={{ outline: "none", border: "none" }}
          >
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
            {isExpanded && (
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            )}
          </button>
        ))}
      </div>
    </aside>
  );
}
