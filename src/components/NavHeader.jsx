import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const tabs = [
  {
    path: "/",
    label: "DSA",
    icon: "🧩",
    color: "from-indigo-500 to-purple-500",
  },
  {
    path: "/golang",
    label: "Golang",
    icon: "🏗️",
    color: "from-cyan-500 to-blue-500",
  },
  {
    path: "/fullstack",
    label: "React + Node",
    icon: "⚛️",
    color: "from-emerald-500 to-teal-500",
  },
  {
    path: "/ml",
    label: "ML / DL",
    icon: "🧠",
    color: "from-amber-500 to-orange-500",
  },
];

export default function NavHeader() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0d0b14]/90 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-6 h-14 overflow-x-auto scrollbar-hide">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.svg" alt="CP" className="w-7 h-7" />
            <span className="text-sm font-bold text-white hidden md:block">
              Mastery Tracker
            </span>
          </NavLink>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 shrink-0" />

          {/* Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  className={`
                    relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                    transition-all duration-200 whitespace-nowrap
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }
                  `}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r ${tab.color}`}
                    />
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
