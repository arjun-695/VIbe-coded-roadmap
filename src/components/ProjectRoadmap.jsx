import React, { useState, useCallback, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { Search } from "lucide-react";

export default function ProjectRoadmap({ data }) {
  // Load progress from localStorage
  const storageKey = `cp_project_progress_${data.title.toLowerCase().replace(/\s/g, "_")}`;
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : {};
  });

  const [searchQuery, setSearchQuery] = useState("");

  const toggleMilestone = useCallback(
    (key) => {
      setProgress((prev) => {
        const updated = { ...prev };
        if (updated[key]) {
          delete updated[key];
        } else {
          updated[key] = true;
        }
        localStorage.setItem(storageKey, JSON.stringify(updated));
        return updated;
      });
    },
    [storageKey],
  );

  // Global stats
  const allProjects = data.tiers.flatMap((t) =>
    t.projects.map((p) => ({ ...p, tier: t.name })),
  );

  const totalMilestones = allProjects.reduce(
    (acc, p) => acc + p.milestones.length,
    0,
  );
  const completedMilestones = Object.keys(progress).length;
  const globalPercent =
    Math.round((completedMilestones / totalMilestones) * 100) || 0;

  // Filter projects by search
  const filteredTiers = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return data.tiers;

    return data.tiers
      .map((tier) => ({
        ...tier,
        projects: tier.projects.filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.techStack.some((t) => t.toLowerCase().includes(query)) ||
            p.concepts.some((c) => c.toLowerCase().includes(query)),
        ),
      }))
      .filter((tier) => tier.projects.length > 0);
  }, [data.tiers, searchQuery]);

  const tierColors = {
    green: "from-green-500 to-emerald-500",
    yellow: "from-amber-500 to-yellow-500",
    red: "from-red-500 to-rose-500",
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-20 space-y-6">
      {/* Header */}
      <div className="sticky top-14 z-40 backdrop-blur-xl bg-[#13111C]/90 p-5 border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{data.icon}</span>
              <h1 className="text-xl font-bold text-white">{data.title}</h1>
            </div>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              {data.description}
            </p>
          </div>
          <div className="text-right flex-1 w-full md:w-auto">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
              Overall Progress
            </div>
            <div className="text-2xl font-bold text-white flex items-baseline justify-end gap-2">
              {globalPercent}%
              <span className="text-sm font-normal text-gray-400">
                ({completedMilestones} / {totalMilestones} milestones)
              </span>
            </div>
          </div>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            style={{ width: `${globalPercent}%` }}
          />
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search projects, tech stack, or concepts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
        />
      </div>

      {/* Tiers */}
      {filteredTiers.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">No projects found.</p>
          <p className="text-sm mt-1">Try a different search term.</p>
        </div>
      ) : (
        filteredTiers.map((tier) => (
          <div key={tier.name} className="space-y-3">
            {/* Tier Header */}
            <div className="flex items-center gap-3 pt-4">
              <h2
                className={`text-lg font-bold bg-gradient-to-r ${tierColors[tier.color] || tierColors.green} bg-clip-text text-transparent`}
              >
                {tier.name}
              </h2>
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-xs text-gray-600 font-mono">
                {tier.projects.length} project
                {tier.projects.length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Project Cards */}
            <div className="space-y-3">
              {tier.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={{ ...project, tier: tier.name }}
                  progress={progress}
                  onToggleMilestone={toggleMilestone}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
