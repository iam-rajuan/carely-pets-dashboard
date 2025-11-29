"use client";

interface NavbarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export default function Navbar({ collapsed, toggleSidebar }: NavbarProps) {
  return (
    <header
      className={`h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 
  fixed top-0 z-20 transition-all duration-300 
  ${
    collapsed ? "left-20 w-[calc(100%-80px)]" : "left-64 w-[calc(100%-256px)]"
  }`}
    >
      {/* Collapse Button */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition"
      >
        <img src="/btn.svg" className="w-10 h-10 opacity-90" />
      </button>

      {/* Profile right side */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/60"
          alt="avatar"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div className="text-right">
          <p className="text-[15px] font-medium text-gray-800">Steve Hard</p>
          <p className="text-[13px] text-gray-500">steve@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
