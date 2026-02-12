import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  Circle,
  Play,
} from "lucide-react";

export default function ProjectCard({ project, progress, onToggleMilestone }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedMilestones = project.milestones.filter(
    (_, i) => progress[`${project.id}-ms-${i}`],
  ).length;
  const totalMilestones = project.milestones.length;
  const percent = Math.round((completedMilestones / totalMilestones) * 100);

  const tierConfig = {
    Beginner: {
      badge: "🟢 Beginner",
      border: "border-green-500/30",
      glow: "shadow-green-500/10",
    },
    Intermediate: {
      badge: "🟡 Intermediate",
      border: "border-amber-500/30",
      glow: "shadow-amber-500/10",
    },
    Advanced: {
      badge: "🔴 Advanced",
      border: "border-red-500/30",
      glow: "shadow-red-500/10",
    },
  };
  const tier = tierConfig[project.tier] || tierConfig.Beginner;

  return (
    <div
      className={`bg-[#1a1828] border ${tier.border} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${tier.glow}`}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-5 flex items-start gap-4 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              {tier.badge}
            </span>
            {percent === 100 && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                ✅ Completed
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {project.description}
          </p>

          {/* Progress bar */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 font-mono shrink-0">
              {completedMilestones}/{totalMilestones}
            </span>
          </div>
        </div>

        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
        )}
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-5 pb-5 space-y-5 border-t border-white/5 pt-4">
          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Concepts */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              Key Concepts
            </h4>
            <ul className="space-y-1">
              {project.concepts.map((concept, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-300 flex items-start gap-2"
                >
                  <span className="text-indigo-400 mt-0.5">•</span>
                  {concept}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Tutorials */}
          {project.videos && project.videos.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                Video Tutorials
              </h4>
              <div className="space-y-1.5">
                {project.videos.map((vid, i) => (
                  <a
                    key={i}
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-red-400 transition-colors group"
                  >
                    <Play className="w-3.5 h-3.5 text-red-500 shrink-0 fill-red-500" />
                    <span className="truncate">{vid.name}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-gray-500 shrink-0 font-medium">
                      {vid.channel}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              Resources
            </h4>
            <div className="space-y-1.5">
              {project.resources.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-indigo-400 transition-colors group"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 shrink-0" />
                  <span className="truncate">{res.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded font-mono shrink-0 ${
                      res.d === "E"
                        ? "text-green-400 bg-green-500/10"
                        : res.d === "H"
                          ? "text-red-400 bg-red-500/10"
                          : "text-amber-400 bg-amber-500/10"
                    }`}
                  >
                    {res.d === "E" ? "Easy" : res.d === "H" ? "Hard" : "Med"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              Milestones
            </h4>
            <div className="space-y-1.5">
              {project.milestones.map((milestone, i) => {
                const key = `${project.id}-ms-${i}`;
                const done = !!progress[key];
                return (
                  <button
                    key={i}
                    onClick={() => onToggleMilestone(key)}
                    className="flex items-center gap-2.5 w-full text-left group cursor-pointer"
                  >
                    {done ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-600 group-hover:text-gray-400 shrink-0" />
                    )}
                    <span
                      className={`text-sm ${done ? "text-gray-500 line-through" : "text-gray-300 group-hover:text-white"} transition-colors`}
                    >
                      {milestone}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
