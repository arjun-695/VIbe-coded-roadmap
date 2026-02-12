import React, { useState } from "react";
import { ChevronDown, ExternalLink, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProblemItem from "./ProblemItem";

export default function CategorySection({
  category,
  solvedData,
  toggleProblem,
  isSolved,
  isOpen,
  onToggle,
}) {
  // Calculate category progress
  const allProblems = category.topics.flatMap((t) => t.problems);
  const total = allProblems.length;
  const completed = allProblems.filter((p) => isSolved(p.name)).length;

  return (
    <div className="border border-white/10 rounded-2xl bg-[#1a1828]/50 overflow-hidden transition-colors hover:border-white/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white/5 hover:bg-white/10 transition-all"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{category.icon}</span>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">
              {category.category}
            </h2>
            <p className="text-sm text-gray-400">{category.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-gray-400 uppercase font-semibold">
              Progress
            </div>
            <div className="text-sm font-mono text-indigo-300">
              {completed} / {total}
            </div>
          </div>
          <ChevronDown
            className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            size={20}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 border-t border-white/10 space-y-8">
              {category.topics.map((topic, idx) => (
                <div
                  key={topic.id}
                  className="relative pl-4 border-l-2 border-white/10 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                      {topic.title}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                        {topic.rating}
                      </span>
                    </h3>

                    {/* Resources */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {topic.resources.map((res, rIdx) => (
                        <a
                          key={rIdx}
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md hover:bg-indigo-500/20 transition-colors"
                        >
                          <BookOpen size={10} />
                          {res.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Problems Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {topic.problems.map((prob, pIdx) => (
                      <ProblemItem
                        key={pIdx}
                        problem={prob}
                        isSolved={isSolved}
                        onToggle={toggleProblem}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
