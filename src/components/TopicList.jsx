import React, { useState, useMemo } from "react";
import { curriculum } from "../data/curriculum";
import CategorySection from "./CategorySection";
import SearchBar from "./SearchBar";
import { useProgress } from "../hooks/useProgress";

export default function TopicList() {
  const { solved, toggleProblem, isSolved } = useProgress();

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Accordion open/close state (persist in localStorage)
  const [openSections, setOpenSections] = useState(() => {
    const saved = localStorage.getItem("cp_open_sections");
    return saved ? JSON.parse(saved) : { 0: true };
  });

  const toggleSection = (idx) => {
    setOpenSections((prev) => {
      const newState = { ...prev, [idx]: !prev[idx] };
      localStorage.setItem("cp_open_sections", JSON.stringify(newState));
      return newState;
    });
  };

  // Filter curriculum based on search + status
  const filteredCurriculum = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return curriculum
      .map((cat) => {
        const filteredTopics = cat.topics
          .map((topic) => {
            // Filter problems by search query and status
            const filteredProblems = topic.problems.filter((p) => {
              const matchesSearch =
                !query ||
                p.name.toLowerCase().includes(query) ||
                topic.title.toLowerCase().includes(query);

              const matchesStatus =
                statusFilter === "all" ||
                (statusFilter === "solved" && isSolved(p.name)) ||
                (statusFilter === "unsolved" && !isSolved(p.name));

              return matchesSearch && matchesStatus;
            });

            if (filteredProblems.length === 0) return null;
            return { ...topic, problems: filteredProblems };
          })
          .filter(Boolean);

        if (filteredTopics.length === 0) return null;
        return { ...cat, topics: filteredTopics };
      })
      .filter(Boolean);
  }, [searchQuery, statusFilter, solved]);

  // Global Progress (always based on full curriculum, not filtered)
  const totalProblems = curriculum.reduce(
    (acc, cat) =>
      acc + cat.topics.reduce((tAcc, topic) => tAcc + topic.problems.length, 0),
    0,
  );
  const totalSolved = Object.keys(solved).length;
  const progressPercent = Math.round((totalSolved / totalProblems) * 100) || 0;

  return (
    <div className="w-full max-w-5xl mx-auto pb-20 space-y-6">
      {/* Header & Global Progress */}
      <div className="sticky top-4 z-40 backdrop-blur-xl bg-[#13111C]/90 p-5 border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="CP Mastery" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                CP Mastery Tracker
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                Master Data Structures & Algorithms
              </p>
            </div>
          </div>

          <div className="text-right flex-1 w-full md:w-auto">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
              Total Progress
            </div>
            <div className="text-2xl font-bold text-white flex items-baseline justify-end gap-2">
              {progressPercent}%
              <span className="text-sm font-normal text-gray-400">
                ({totalSolved} / {totalProblems})
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Search & Filter Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* Accordion Categories */}
      <div className="space-y-4">
        {filteredCurriculum.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No results found.</p>
            <p className="text-sm mt-1">
              Try a different search term or filter.
            </p>
          </div>
        ) : (
          filteredCurriculum.map((category, idx) => (
            <CategorySection
              key={category.category}
              category={category}
              solvedData={solved}
              isSolved={isSolved}
              toggleProblem={toggleProblem}
              isOpen={!!openSections[idx]}
              onToggle={() => toggleSection(idx)}
            />
          ))
        )}
      </div>
    </div>
  );
}
