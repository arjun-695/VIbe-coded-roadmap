import React from "react";
import { CheckCircle, ExternalLink, BookOpen, Calculator } from "lucide-react";

export default function ProblemItem({ problem, isSolved, onToggle }) {
  const solved = isSolved(problem.name);

  // Difficulty Badge Colors
  const diffColor =
    problem.d === "E"
      ? "text-green-400 bg-green-400/10 border-green-400/20"
      : problem.d === "M"
        ? "text-amber-400 bg-amber-400/10 border-amber-400/20"
        : "text-red-400 bg-red-400/10 border-red-400/20";

  return (
    <div
      className={`group flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
        solved
          ? "bg-green-500/5 border-green-500/20"
          : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <button
          onClick={() => onToggle(problem.name)}
          className={`flex-shrink-0 w-5 h-5 rounded-[6px] border flex items-center justify-center transition-all ${
            solved
              ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-transparent text-white"
              : "border-gray-600 hover:border-gray-500 bg-transparent"
          }`}
        >
          {solved && <CheckCircle size={12} strokeWidth={3} />}
        </button>

        <a
          href={problem.url}
          target="_blank"
          rel="noreferrer"
          className={`truncate text-sm font-medium transition-colors ${
            solved
              ? "line-through text-gray-500"
              : "text-gray-200 group-hover:text-white"
          }`}
        >
          {problem.name}
        </a>
      </div>

      <span
        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffColor} ml-2 flex-shrink-0`}
      >
        {problem.d === "E" ? "EASY" : problem.d === "M" ? "MED" : "HARD"}
      </span>
    </div>
  );
}
