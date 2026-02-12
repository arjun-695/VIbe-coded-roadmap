import { useState, useEffect } from "react";

export function useProgress() {
  const [solved, setSolved] = useState(() => {
    const saved = localStorage.getItem("cp_solved");
    return saved ? JSON.parse(saved) : {};
  });

  const toggleProblem = (problemName) => {
    setSolved((prev) => {
      const newState = { ...prev };
      if (newState[problemName]) {
        delete newState[problemName];
      } else {
        newState[problemName] = true;
      }
      localStorage.setItem("cp_solved", JSON.stringify(newState));
      return newState;
    });
  };

  const isSolved = (problemName) => !!solved[problemName];

  // Calculate topic progress
  const getTopicProgress = (topic) => {
    const total = topic.problems.length;
    const completed = topic.problems.filter((p) => solved[p.name]).length;
    return {
      completed,
      total,
      percentage: total === 0 ? 0 : (completed / total) * 100,
    };
  };

  return { solved, toggleProblem, isSolved, getTopicProgress };
}
