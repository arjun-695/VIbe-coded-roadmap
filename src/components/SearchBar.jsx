import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search topics or problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
        />
      </div>

      {/* Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:border-indigo-500/50 text-sm cursor-pointer appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' strokeWidth='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="all" className="bg-white text-black">
          All Problems
        </option>
        <option value="unsolved" className="bg-white text-black">
          Unsolved
        </option>
        <option value="solved" className="bg-white text-black">
          Solved
        </option>
      </select>
    </div>
  );
}
