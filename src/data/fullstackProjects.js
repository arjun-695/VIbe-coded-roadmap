export const fullstackProjects = {
  title: "Node.js + React",
  subtitle: "Full Stack Engineering",
  icon: "⚛️",
  description:
    "Build production-grade full-stack applications with React frontends and Node.js backends.",
  tiers: [
    {
      name: "Beginner",
      color: "green",
      projects: [
        {
          id: "fs-1",
          title: "API Gateway with Rate Limiting & Caching",
          description:
            "A reverse proxy API gateway that routes requests to microservices, implements token bucket rate limiting, Redis-based response caching, request/response logging, and JWT authentication middleware.",
          techStack: ["Node.js", "Express", "Redis", "JWT"],
          concepts: [
            "Reverse proxy pattern",
            "Token bucket rate limiting algorithm",
            "Redis caching layer",
            "Middleware chain architecture",
            "Request logging & metrics",
          ],
          videos: [
            {
              name: "Protect Your API With Rate Limiting — Full Guide (2024)",
              url: "https://www.youtube.com/watch?v=2JBObeGbqKc",
              channel: "Web Dev Simplified",
            },
            {
              name: "Build a Secure REST API with Rate Limiting (Node.js)",
              url: "https://www.youtube.com/watch?v=PtiO1pHw0Bs",
              channel: "Coding With Dawid",
            },
            {
              name: "Build API Gateway in Node.js Using Express Gateway",
              url: "https://www.youtube.com/watch?v=_FGCVhRFIE4",
              channel: "Daily Code Buffer",
            },
          ],
          resources: [
            {
              name: "Kong Gateway Architecture",
              url: "https://docs.konghq.com/gateway/latest/",
              d: "M",
            },
            {
              name: "Rate Limiting Algorithms Explained",
              url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals",
              d: "M",
            },
            {
              name: "Redis Caching Patterns",
              url: "https://redis.io/docs/manual/patterns/",
              d: "M",
            },
          ],
          milestones: [
            "HTTP proxy forwarding requests",
            "Route configuration (YAML/JSON)",
            "Token bucket rate limiter",
            "Redis response cache with TTL",
            "JWT auth middleware",
            "Request/response logging",
            "Health check endpoints",
            "Dashboard showing traffic stats",
          ],
        },
        {
          id: "fs-2",
          title: "Real-Time Multiplayer Game (WebSocket)",
          description:
            "A real-time multiplayer game (e.g. battle arena or strategy) with WebSocket-based state synchronization, room management, matchmaking, reconnection handling, and an ELO rating system.",
          techStack: ["React", "Node.js", "Socket.io", "Canvas/Pixi.js"],
          concepts: [
            "WebSocket bidirectional communication",
            "Game loop & tick rate",
            "Client-side prediction",
            "Server authoritative state",
            "Room/lobby management",
          ],
          videos: [
            {
              name: "Build a Multiplayer Game with React Three Fiber + Socket.io",
              url: "https://www.youtube.com/watch?v=LfnSFa3OF6M",
              channel: "Wawa Sensei",
            },
            {
              name: "Full Socket.io + React Multiplayer Game Tutorial",
              url: "https://www.youtube.com/watch?v=rapATXga3qE",
              channel: "PedroTech",
            },
            {
              name: "Socket.io + ReactJS Tutorial — Learn Socket.io For Beginners",
              url: "https://www.youtube.com/watch?v=djMy4QsPWiI",
              channel: "PedroTech",
            },
          ],
          resources: [
            {
              name: "Socket.io Game Tutorial",
              url: "https://socket.io/get-started/",
              d: "E",
            },
            {
              name: "Multiplayer Game Networking (Gaffer)",
              url: "https://gafferongames.com/post/introduction_to_networked_physics/",
              d: "H",
            },
          ],
          milestones: [
            "WebSocket connection & room management",
            "Game state broadcast (tick-based)",
            "Player input handling & validation",
            "Client-side interpolation",
            "Reconnection with state recovery",
            "Matchmaking queue",
            "ELO rating system",
            "Spectator mode",
          ],
        },
      ],
    },
    {
      name: "Intermediate",
      color: "yellow",
      projects: [
        {
          id: "fs-3",
          title: "Browser-Based Code Editor with Live Execution",
          description:
            "A web-based code editor (like a mini Replit) with Monaco editor, syntax highlighting, multi-language support, Docker-sandboxed code execution, and real-time output streaming via WebSocket.",
          techStack: [
            "React",
            "Monaco Editor",
            "Node.js",
            "Docker",
            "WebSocket",
          ],
          concepts: [
            "Monaco editor integration",
            "Docker container sandboxing",
            "Stdin/stdout streaming over WebSocket",
            "Resource limits (CPU, memory, time)",
            "Multi-language runtime management",
          ],
          videos: [
            {
              name: "Build a Browser Code Editor in React (Monaco + Piston API)",
              url: "https://www.youtube.com/watch?v=JD1dGo38tiE",
              channel: "NikitaDev",
            },
            {
              name: "Build a Code Editor in React — Monaco Playground",
              url: "https://www.youtube.com/watch?v=K_YN5bRqTGo",
              channel: "Colby Fayock",
            },
            {
              name: "Build a Code Editor/Compiler in Next.js + Monaco + Piston",
              url: "https://www.youtube.com/watch?v=Rl61FtHfVfQ",
              channel: "MUKE-coder",
            },
          ],
          resources: [
            {
              name: "Monaco Editor: Getting Started",
              url: "https://microsoft.github.io/monaco-editor/",
              d: "M",
            },
            {
              name: "Docker SDK for Node.js (Dockerode)",
              url: "https://github.com/apocas/dockerode",
              d: "M",
            },
            {
              name: "Judge0: Open Source Code Execution",
              url: "https://github.com/judge0/judge0",
              d: "M",
            },
          ],
          milestones: [
            "Monaco editor with syntax highlighting",
            "Language selector (Python, JS, Go, C++)",
            "Backend code execution endpoint",
            "Docker sandbox per execution",
            "Resource limits (timeout, memory)",
            "Real-time stdout/stderr streaming",
            "Stdin input support",
            "Code sharing via unique URLs",
          ],
        },
        {
          id: "fs-4",
          title: "CI/CD Pipeline Dashboard",
          description:
            "A GitHub Actions-style CI/CD system with webhook ingestion, YAML pipeline definitions, Docker-based build stages, real-time log streaming, build artifacts, and a React dashboard.",
          techStack: ["React", "Node.js", "Docker", "WebSocket", "PostgreSQL"],
          concepts: [
            "GitHub webhook processing",
            "YAML pipeline parsing",
            "Docker-based build execution",
            "Real-time log streaming",
            "Build artifact storage",
            "Pipeline DAG execution",
          ],
          videos: [
            {
              name: "How to Build a CI/CD Workflow Dashboard — GitLab API",
              url: "https://www.youtube.com/watch?v=xY4FXlJV2CY",
              channel: "Appsmith",
            },
            {
              name: "CI/CD Pipeline Tutorial for Beginners — GitHub Actions",
              url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
              channel: "TechWorld with Nana",
            },
          ],
          resources: [
            {
              name: "GitHub Webhooks Documentation",
              url: "https://docs.github.com/en/webhooks",
              d: "M",
            },
            {
              name: "Drone CI Architecture (Reference)",
              url: "https://docs.drone.io/",
              d: "M",
            },
          ],
          milestones: [
            "GitHub webhook receiver",
            "YAML pipeline config parser",
            "Docker-based step execution",
            "Sequential & parallel stages",
            "Real-time log streaming to frontend",
            "Build status badges",
            "Artifact upload & download",
            "Pipeline history & re-run support",
          ],
        },
        {
          id: "fs-5",
          title: "Infrastructure Monitoring Dashboard (Mini Datadog)",
          description:
            "A monitoring platform that collects system metrics (CPU, memory, disk, network) via agents, stores time-series data, supports custom alerting rules, and displays everything on a real-time React dashboard with charts.",
          techStack: [
            "React",
            "Node.js",
            "InfluxDB/TimescaleDB",
            "WebSocket",
            "D3.js/Chart.js",
          ],
          concepts: [
            "Agent-based metrics collection",
            "Time-series database design",
            "WebSocket real-time data push",
            "Alerting rules engine",
            "Dashboard & chart rendering",
          ],
          videos: [
            {
              name: "Prometheus + Grafana Monitoring — Full Setup Tutorial",
              url: "https://www.youtube.com/watch?v=9TJx7QTrTyo",
              channel: "TechWorld with Nana",
            },
            {
              name: "AdminJS + Recharts: Data Dashboard in Node.js and React",
              url: "https://www.youtube.com/watch?v=PGiIBzUCh8s",
              channel: "SoftwareBrothers",
            },
          ],
          resources: [
            {
              name: "Prometheus Architecture",
              url: "https://prometheus.io/docs/introduction/overview/",
              d: "M",
            },
            {
              name: "SRE Book: Monitoring Distributed Systems",
              url: "https://sre.google/sre-book/monitoring-distributed-systems/",
              d: "M",
            },
            {
              name: "InfluxDB Node.js Client",
              url: "https://docs.influxdata.com/influxdb/",
              d: "M",
            },
            {
              name: "Grafana Panel Architecture (Reference)",
              url: "https://grafana.com/docs/grafana/latest/",
              d: "M",
            },
          ],
          milestones: [
            "Metrics collection agent (CPU, RAM, disk)",
            "Agent → server push via HTTP/gRPC",
            "Time-series storage with retention",
            "REST API for querying metrics",
            "Real-time charts (line, area, gauge)",
            "Custom alert rules (thresholds)",
            "Alert notifications (email/Slack webhook)",
            "Multi-host dashboard view",
          ],
        },
      ],
    },
    {
      name: "Advanced",
      color: "red",
      projects: [
        {
          id: "fs-6",
          title: "Build Your Own Notion (Block-Based Editor)",
          description:
            "A Notion-like workspace with a block-based editor supporting rich text, tables, code blocks, nested pages, drag-and-drop reordering, real-time collaboration via CRDTs, and a REST/GraphQL API.",
          techStack: [
            "React",
            "Node.js",
            "Yjs (CRDT)",
            "PostgreSQL",
            "WebSocket",
          ],
          concepts: [
            "Block-based document model",
            "CRDT for real-time collaboration",
            "Drag-and-drop with nested structures",
            "Rich text editing (Slate.js/TipTap)",
            "Optimistic UI updates",
          ],
          videos: [
            {
              name: "Fullstack Notion Clone: Next.js 13, React, Convex — Full Course (10 hrs)",
              url: "https://www.youtube.com/watch?v=0OaDyjB9Ib8",
              channel: "Code With Antonio",
            },
            {
              name: "CRDTs Explained — Real-Time Collaboration (talk)",
              url: "https://www.youtube.com/watch?v=M8-WFTjZoA0",
              channel: "Martin Kleppmann",
            },
          ],
          resources: [
            {
              name: "TipTap Editor (Collaborative)",
              url: "https://tiptap.dev/",
              d: "M",
            },
            {
              name: "Yjs: CRDT Framework for Collaboration",
              url: "https://docs.yjs.dev/",
              d: "M",
            },
            {
              name: "How Notion's Editor Works",
              url: "https://www.notion.so/blog/data-model-behind-notion",
              d: "M",
            },
          ],
          milestones: [
            "Block data model (paragraph, heading, list, code, image)",
            "Rich text editing with TipTap/Slate",
            "Drag-and-drop block reordering",
            "Nested pages & navigation sidebar",
            "Slash command menu (/ to insert blocks)",
            "Real-time collaboration with Yjs CRDT",
            "User presence & cursors",
            "Export to Markdown/HTML",
          ],
        },
        {
          id: "fs-7",
          title: "Live Stock Market Simulator",
          description:
            "A real-time stock trading simulator with a limit order book engine, WebSocket price feeds from public APIs, portfolio tracking, P&L calculation, candlestick charts, and paper trading with virtual currency.",
          techStack: [
            "React",
            "Node.js",
            "WebSocket",
            "Redis",
            "D3.js/Lightweight Charts",
          ],
          concepts: [
            "Limit order book (price-time priority)",
            "Order matching engine",
            "WebSocket streaming architecture",
            "Candlestick chart rendering",
            "Portfolio valuation & P&L",
          ],
          videos: [
            {
              name: "Stock Trading Tracker — React + MongoDB (MERN)",
              url: "https://www.youtube.com/watch?v=W19ILqxxqas",
              channel: "Beau Carnes",
            },
            {
              name: "Build a Stocks Price Tracker — React Native + GraphQL",
              url: "https://www.youtube.com/watch?v=eVs0PujaMvA",
              channel: "notJust.dev",
            },
            {
              name: "Build a Stock Watchlist App with React + Tailwind",
              url: "https://www.youtube.com/watch?v=3hwwWV0stw0",
              channel: "react-with-masoud",
            },
          ],
          resources: [
            {
              name: "Order Book Explained",
              url: "https://blog.bytebytego.com/p/stock-exchange",
              d: "M",
            },
            {
              name: "TradingView Lightweight Charts",
              url: "https://tradingview.github.io/lightweight-charts/",
              d: "M",
            },
            {
              name: "Alpaca/Yahoo Finance API",
              url: "https://alpaca.markets/docs/",
              d: "M",
            },
          ],
          milestones: [
            "Real-time price feed ingestion (WebSocket)",
            "Limit order book data structure",
            "Order matching engine (price-time priority)",
            "Buy/Sell UI with order types (market, limit, stop)",
            "Candlestick & depth charts",
            "Portfolio tracker with P&L",
            "Trade history & performance analytics",
            "Watchlists & price alerts",
          ],
        },
        {
          id: "fs-8",
          title: "Decentralized P2P File Sharing",
          description:
            "A peer-to-peer file sharing application using WebRTC for data channels, chunked file transfers with integrity verification, NAT traversal, and a React UI showing transfer progress.",
          techStack: ["React", "Node.js", "WebRTC/libp2p", "Kademlia DHT"],
          concepts: [
            "Distributed Hash Table (Kademlia)",
            "Chunked file transfer & reassembly",
            "Content-based addressing (SHA-256)",
            "NAT traversal (STUN/TURN)",
            "Peer discovery & routing",
          ],
          videos: [
            {
              name: "Share Large Files Using WebRTC Data Channel",
              url: "https://www.youtube.com/watch?v=dIgFk5S1KDk",
              channel: "Coding With Chaim",
            },
            {
              name: "P2P Video Chat with JavaScript / WebRTC (data channel fundamentals)",
              url: "https://www.youtube.com/watch?v=DvlyzDZDEq4",
              channel: "Traversy Media",
            },
            {
              name: "WebRTC Crash Course — Peer-to-Peer Communication",
              url: "https://www.youtube.com/watch?v=WmR9IMUD_CY",
              channel: "Hussein Nasser",
            },
          ],
          resources: [
            {
              name: "Kademlia Paper (Original)",
              url: "https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf",
              d: "H",
            },
            {
              name: "libp2p Documentation",
              url: "https://docs.libp2p.io/",
              d: "M",
            },
            {
              name: "WebRTC for P2P Communication",
              url: "https://webrtc.org/getting-started/overview",
              d: "M",
            },
          ],
          milestones: [
            "Peer node with unique ID",
            "Kademlia routing table & XOR distance",
            "Peer discovery via bootstrap nodes",
            "File chunking & SHA-256 hashing",
            "Chunk transfer between peers",
            "File reassembly & integrity check",
            "NAT traversal with STUN",
            "Transfer progress UI with speed stats",
          ],
        },
      ],
    },
  ],
};
