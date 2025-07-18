// "use client";


// import { Apps, NotificationsNone, ExpandMore } from "@mui/icons-material";
// import Image from "next/image";
// import SearchInput from "../../atoms/SearchInput";

// export default function Navbar() {
//   return (
//     <nav className="w-full h-[72px] bg-white flex items-center justify-between px-4 border-b border-[#EAECF0]">
//       {/* LEFT SECTION */}
//       <div className="flex items-center gap-6">
//         {/* Sidebar toggle */}
//         <Apps className="text-[#444CE7]" fontSize="medium" />

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src="/logo.svg" alt="Logo" width={28} height={28} />
//           <span className="text-[#444CE7] font-bold text-lg">Logoipsum</span>
//         </div>

//         {/* Vertical divider */}
//         <div className="h-6 w-px bg-[#EAECF0]" />

//         {/* Search bar */}
//         <SearchInput width="w-[400px]" height="h-[40px]"/>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="flex items-center gap-6">
//         {/* Notification bell */}
//         <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-md border border-[#EAECF0]">
//           <NotificationsNone className="text-gray-600" />
//           <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
//         </div>

//         {/* User info */}
//         <div className="flex items-center gap-3">
//           <Image
//             src="/avatar.jpg"
//             alt="User Avatar"
//             width={36}
//             height={36}
//             className="rounded-full"
//           />
//           <div className="flex flex-col">
//             <span className="text-sm font-medium text-gray-900">Chi Nguyen</span>
//             <span className="text-xs text-gray-500">Admin</span>
//           </div>
//           <ExpandMore className="text-gray-600" />
//         </div>
//       </div>
//     </nav>
//   );
// }


export default function Navbar() {
  return (
    <div className="h-14 bg-gray-200  border-b border-red-300 shadow-sm">
      <p>Navbar</p>
    </div>
  );
}


