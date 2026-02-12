# 🧩 CP Mastery Tracker

A beautiful, interactive **Competitive Programming & DSA progress tracker** built with React. Track your journey across 200+ curated problems organized by topic — from Arrays & Linked Lists to Dynamic Programming & Graph Theory.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **📂 10 Categories, 46 Topics, 211 Problems** — Curated from LeetCode, Codeforces, CSES, and AtCoder
- **✅ Checkbox Progress Tracking** — Mark problems as solved with persistent localStorage
- **🔍 Instant Search** — Filter by topic or problem name in real time
- **📊 Status Filter** — Show All / Solved / Unsolved problems
- **📈 Global Progress Bar** — See your overall mastery percentage
- **🎯 Per-Category Counters** — Track progress within each section
- **📱 Responsive Design** — Works on desktop, tablet, and mobile
- **💾 Auto-Save** — All progress saved automatically to your browser

## 🗂️ Topics Covered

| #   | Category                 | Topics                                                                         |
| --- | ------------------------ | ------------------------------------------------------------------------------ |
| 1   | Dynamic Programming      | Intro, 1D, 2D/Grid, Knapsack, String DP, Tree DP, Bitmask DP                   |
| 2   | Graph Theory             | BFS/DFS, Topo Sort, Shortest Paths, DSU & MST, SCC & Bridges                   |
| 3   | Trees                    | Traversals, LCA & Binary Lifting, Euler Tour                                   |
| 4   | Data Structures          | Stacks, Segment Trees, BIT, Trie, Sparse Table, Linked Lists, Heaps, Hash Maps |
| 5   | Math & Number Theory     | Primes & Sieve, Modular Arithmetic, GCD/LCM, Combinatorics                     |
| 6   | Greedy & Sorting         | Activity Selection, Array/String Greedy, Custom Sorting                        |
| 7   | String Algorithms        | Hashing, KMP & Z-Function, Suffix Arrays                                       |
| 8   | Core Techniques          | Two Pointers, Binary Search, Sliding Window, Prefix Sums, Bit Manipulation     |
| 9   | Backtracking & Recursion | Recursion, Subsets, Permutations, N-Queens                                     |
| 10  | Intervals & Matrix       | Intervals, 2D Matrix, Stack Parsing                                            |

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cp-mastery-tracker.git
cd cp-mastery-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

Or push to `main` branch — GitHub Actions will auto-deploy.

## 🛠️ Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool
- **Tailwind CSS 3** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **localStorage** — Persistence (no backend needed!)

## 🤝 Contributing

Contributions are welcome! You can:

1. **Add new problems** — Edit `src/data/curriculum.js`
2. **Add new topics** — Follow the existing structure in `curriculum.js`
3. **Improve UI** — Components are in `src/components/`
4. **Fix bugs** — Open an issue or PR

### How to add a problem

Edit `src/data/curriculum.js` and add to the relevant topic's `problems` array:

```js
{
  name: "Problem Name",
  url: "https://leetcode.com/problems/...",
  d: "M"  // E = Easy, M = Medium, H = Hard
}
```

## 📄 License

[MIT](LICENSE) — Free to use, modify, and distribute.

## ⭐ Star this repo!

If you find this tracker useful, please ⭐ star the repo — it helps others discover it!
