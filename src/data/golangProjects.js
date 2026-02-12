export const golangProjects = {
  title: "Golang",
  subtitle: "Systems & Backend Engineering",
  icon: "🏗️",
  description:
    "Build low-level systems, networking tools, and distributed infrastructure from scratch in Go.",
  tiers: [
    {
      name: "Beginner",
      color: "green",
      projects: [
        {
          id: "go-1",
          title: "Build Your Own Shell",
          description:
            "A Unix-like shell that supports command execution, pipes (|), I/O redirection (>, <), background processes (&), and built-in commands (cd, exit, history).",
          techStack: ["Go", "OS Syscalls", "Process Management"],
          concepts: [
            "Process spawning (exec)",
            "Pipe & I/O redirection",
            "Signal handling (SIGINT, SIGTERM)",
            "Tokenization & parsing",
          ],
          videos: [
            {
              name: "How to Write a Shell in Go — GoLab talk by Qi Xiao",
              url: "https://www.youtube.com/watch?v=xdjBfoMGNKs",
              channel: "GoLab",
            },
            {
              name: "Build Your First CLI Tool in Go — DigitalOcean Tech Talk",
              url: "https://www.youtube.com/watch?v=gBs6scb_1HA",
              channel: "DigitalOcean",
            },
          ],
          resources: [
            {
              name: "CodeCrafters: Build Your Own Shell",
              url: "https://app.codecrafters.io/courses/shell/overview",
              d: "M",
            },
            {
              name: "Tutorial: Writing a Shell in Go",
              url: "https://blog.init-io.net/post/2018/07-01-go-unix-shell/",
              d: "M",
            },
            {
              name: "Go os/exec Package Docs",
              url: "https://pkg.go.dev/os/exec",
              d: "E",
            },
          ],
          milestones: [
            "REPL loop with prompt",
            "Execute external commands",
            "Built-in commands (cd, pwd, exit)",
            "Pipe operator support",
            "I/O redirection (>, >>, <)",
            "Command history",
            "Signal handling (Ctrl+C)",
          ],
        },
        {
          id: "go-2",
          title: "HTTP Server From Scratch (No net/http)",
          description:
            "Build an HTTP/1.1 server using raw TCP sockets. Parse HTTP requests, handle routing, serve static files, and support concurrent connections — without using Go's net/http package.",
          techStack: ["Go", "TCP Sockets", "HTTP Protocol"],
          concepts: [
            "TCP listener & connection handling",
            "HTTP request/response parsing",
            "Goroutines for concurrency",
            "Content-Type negotiation",
            "Keep-alive connections",
          ],
          videos: [
            {
              name: "From TCP to HTTP — Full Course",
              url: "https://www.youtube.com/watch?v=gMY0KMFaGnY",
              channel: "ThePrimeagen",
            },
            {
              name: "Build a Simple HTTP Server From Scratch in Go (TCP + POST)",
              url: "https://www.youtube.com/watch?v=sRz0Kpgf8lM",
              channel: "DevLog",
            },
            {
              name: "How To Build A Custom TCP Server In Golang",
              url: "https://www.youtube.com/watch?v=IJaMEjpivCA",
              channel: "Anthony GG",
            },
          ],
          resources: [
            {
              name: "CodeCrafters: Build Your Own HTTP Server",
              url: "https://app.codecrafters.io/courses/http-server/overview",
              d: "M",
            },
            {
              name: "RFC 7230: HTTP/1.1 Message Syntax",
              url: "https://datatracker.ietf.org/doc/html/rfc7230",
              d: "H",
            },
            {
              name: "Go net Package Docs",
              url: "https://pkg.go.dev/net",
              d: "E",
            },
          ],
          milestones: [
            "TCP listener accepting connections",
            "Parse HTTP request line & headers",
            "Route matching (GET /path)",
            "Send proper HTTP responses",
            "Serve static files",
            "Concurrent connections with goroutines",
            "Connection keep-alive support",
          ],
        },
      ],
    },
    {
      name: "Intermediate",
      color: "yellow",
      projects: [
        {
          id: "go-3",
          title: "Build Your Own Redis",
          description:
            "An in-memory key-value store implementing the RESP (Redis Serialization Protocol). Supports GET, SET, DEL, TTL expiry, pub/sub messaging, and persistence via RDB snapshots.",
          techStack: ["Go", "TCP", "RESP Protocol", "Concurrency"],
          concepts: [
            "RESP protocol parsing",
            "Concurrent hash map with locking",
            "TTL expiry with lazy/active deletion",
            "Pub/Sub pattern",
            "Snapshot persistence (RDB)",
          ],
          videos: [
            {
              name: "Anthony GG — Building Redis From Scratch In Golang (Series)",
              url: "https://www.youtube.com/results?search_query=anthony+gg+building+redis+from+scratch+golang",
              channel: "Anthony GG",
            },
            {
              name: "I Built My Own Redis in Go — And It Was Actually Easy",
              url: "https://www.youtube.com/results?search_query=i+built+my+own+redis+in+go",
              channel: "Various",
            },
            {
              name: "Building a Redis Clone in Go — TCP Server + RESP Protocol",
              url: "https://www.youtube.com/results?search_query=building+redis+clone+golang+tcp+resp+protocol",
              channel: "Various",
            },
          ],
          resources: [
            {
              name: "CodeCrafters: Build Your Own Redis",
              url: "https://app.codecrafters.io/courses/redis/overview",
              d: "M",
            },
            {
              name: "Redis RESP Protocol Spec",
              url: "https://redis.io/docs/reference/protocol-spec/",
              d: "M",
            },
            {
              name: "Build Redis from Scratch (Book)",
              url: "https://www.build-redis-from-scratch.dev/en/introduction",
              d: "M",
            },
          ],
          milestones: [
            "RESP protocol parser",
            "PING/ECHO commands",
            "SET/GET with concurrent map",
            "TTL expiry (PX/EX flags)",
            "DEL, EXISTS, KEYS commands",
            "Pub/Sub channels",
            "RDB snapshot persistence",
            "Master-replica replication",
          ],
        },
        {
          id: "go-4",
          title: "Container Runtime (Mini Docker)",
          description:
            "Build a minimal container runtime using Linux kernel features. Create isolated process environments with their own filesystem, network, and PID namespace — essentially a tiny Docker.",
          techStack: ["Go", "Linux Namespaces", "cgroups", "chroot"],
          concepts: [
            "Linux namespaces (PID, NET, MNT, UTS)",
            "Control groups (cgroups) for resource limits",
            "chroot / pivot_root for filesystem isolation",
            "Overlay filesystem",
            "Container image format",
          ],
          videos: [
            {
              name: "Containers From Scratch • Liz Rice • GOTO 2018",
              url: "https://www.youtube.com/watch?v=8fi7uSYlOdc",
              channel: "GOTO Conferences",
            },
            {
              name: "Building a Container from Scratch in Go — Liz Rice",
              url: "https://www.youtube.com/watch?v=Utf-A4rODH8",
              channel: "Container Camp",
            },
            {
              name: "What Is a Container? Write One in Go from Scratch — Liz Rice",
              url: "https://www.youtube.com/watch?v=HPuvDm8IC-4",
              channel: "O'Reilly",
            },
          ],
          resources: [
            {
              name: "Liz Rice: Containers From Scratch (Code)",
              url: "https://github.com/lizrice/containers-from-scratch",
              d: "M",
            },
            {
              name: "Linux Namespaces Deep Dive",
              url: "https://man7.org/linux/man-pages/man7/namespaces.7.html",
              d: "H",
            },
            {
              name: "Build Your Own Docker (Article)",
              url: "https://github.com/codecrafters-io/build-your-own-x#build-your-own-docker",
              d: "M",
            },
          ],
          milestones: [
            "Run a process in a new PID namespace",
            "Isolate UTS namespace (hostname)",
            "Mount namespace with chroot",
            "Set cgroup memory/CPU limits",
            "Overlay filesystem for layers",
            "Pull and extract container images",
            "Network namespace with veth pairs",
          ],
        },
        {
          id: "go-5",
          title: "DNS Resolver From Scratch",
          description:
            "A recursive DNS resolver that queries root servers, follows delegation chains, and resolves domain names to IP addresses — implementing the DNS protocol over raw UDP sockets.",
          techStack: ["Go", "UDP Sockets", "DNS Protocol"],
          concepts: [
            "DNS packet structure (header, question, answer)",
            "UDP socket communication",
            "Recursive vs iterative resolution",
            "DNS record types (A, AAAA, CNAME, MX, NS)",
            "Caching with TTL",
          ],
          videos: [
            {
              name: "Write a DNS Server/Resolver in Go — Under 200 Lines",
              url: "https://www.youtube.com/watch?v=Pa-qr07MKIQ",
              channel: "Edward Viaene",
            },
            {
              name: "Codecrafters DNS Challenge in Go",
              url: "https://www.youtube.com/watch?v=HB2ixElnHXA",
              channel: "Brooks Builds",
            },
          ],
          resources: [
            {
              name: "CodeCrafters: Build Your Own DNS Server",
              url: "https://app.codecrafters.io/courses/dns-server/overview",
              d: "M",
            },
            {
              name: "Julia Evans: Implement DNS in a Weekend",
              url: "https://implement-dns.wizardzines.com/",
              d: "M",
            },
            {
              name: "RFC 1035: DNS Specification",
              url: "https://datatracker.ietf.org/doc/html/rfc1035",
              d: "H",
            },
          ],
          milestones: [
            "Parse DNS wire format packets",
            "Send UDP queries to root servers",
            "Handle A record responses",
            "Follow NS delegations recursively",
            "CNAME chain resolution",
            "Response caching with TTL",
            "Support MX and AAAA records",
          ],
        },
      ],
    },
    {
      name: "Advanced",
      color: "red",
      projects: [
        {
          id: "go-6",
          title: "Build Your Own Database (LSM Tree + WAL)",
          description:
            "A persistent key-value database engine using Log-Structured Merge Trees. Features write-ahead logging for crash recovery, SSTables for sorted storage, compaction, bloom filters, and a basic SQL query parser.",
          techStack: ["Go", "LSM Trees", "WAL", "B+ Trees"],
          concepts: [
            "Write-ahead log (WAL) for durability",
            "MemTable (in-memory sorted structure)",
            "SSTable serialization & compaction",
            "Bloom filters for read optimization",
            "Basic SQL tokenizer & parser",
          ],
          videos: [
            {
              name: "Building SimpleDB Database From Scratch In Go — Series Intro",
              url: "https://www.youtube.com/watch?v=kVrJf-YRGR0",
              channel: "inelpandzic",
            },
            {
              name: "Building a Database From Scratch — Part 1: File Manager",
              url: "https://www.youtube.com/watch?v=xv7jhHLtB7I",
              channel: "inelpandzic",
            },
          ],
          resources: [
            {
              name: "Build a Database from Scratch (Book)",
              url: "https://build-your-own.org/database/",
              d: "M",
            },
            {
              name: "LSM Trees Explained (Paper)",
              url: "https://www.cs.umb.edu/~poneil/lsmtree.pdf",
              d: "H",
            },
            {
              name: "Phil Eaton: Database Basics Series",
              url: "https://notes.eatonphil.com/tags/databases.html",
              d: "M",
            },
          ],
          milestones: [
            "In-memory MemTable (skip list / red-black tree)",
            "Write-ahead log (WAL) for crash recovery",
            "Flush MemTable to SSTable on disk",
            "SSTable reader with binary search",
            "Bloom filter for fast key lookups",
            "Compaction (tiered / leveled)",
            "Range scan queries",
            "Basic SQL parser (SELECT, INSERT, WHERE)",
          ],
        },
        {
          id: "go-7",
          title: "Distributed Task Queue (Like Celery)",
          description:
            "A distributed async task queue with worker pools, task scheduling (cron + delayed), priority queues, retry logic with exponential backoff, dead-letter queues, and a web dashboard for monitoring.",
          techStack: ["Go", "Redis/NATS", "gRPC", "WebSocket"],
          concepts: [
            "Worker pool pattern with goroutines",
            "Task serialization & routing",
            "Retry with exponential backoff",
            "Dead-letter queue handling",
            "Cron-based scheduled tasks",
            "Distributed locking",
          ],
          videos: [
            {
              name: "Go Concurrency Patterns — Google I/O Talk",
              url: "https://www.youtube.com/watch?v=f6kdp27TYZs",
              channel: "Google",
            },
            {
              name: "Building a Job Queue System in Go",
              url: "https://www.youtube.com/watch?v=VUzcem4tEOg",
              channel: "Anthony GG",
            },
          ],
          resources: [
            {
              name: "Machinery: Go Task Queue (Reference)",
              url: "https://github.com/RichardKnop/machinery",
              d: "M",
            },
            {
              name: "Asynq: Simple Go Task Queue",
              url: "https://github.com/hibiken/asynq",
              d: "M",
            },
            {
              name: "System Design: Message Queues",
              url: "https://www.youtube.com/watch?v=xErwDaOc-Gs",
              d: "M",
            },
          ],
          milestones: [
            "Task definition & serialization",
            "Redis-backed task broker",
            "Worker pool with configurable concurrency",
            "Task routing to specific workers",
            "Retry logic with exponential backoff",
            "Dead-letter queue for failed tasks",
            "Scheduled tasks (cron expressions)",
            "Web dashboard with real-time stats",
          ],
        },
        {
          id: "go-8",
          title: "Build Your Own Git",
          description:
            "Implement Git's core internals: content-addressable object store (blobs, trees, commits), refs, branching, diffing, merge, and the pack protocol for clone/push/pull.",
          techStack: ["Go", "SHA-1", "zlib", "Pack Protocol"],
          concepts: [
            "Content-addressable storage",
            "Merkle tree structure",
            "Object types (blob, tree, commit, tag)",
            "Index file & staging area",
            "Three-way merge algorithm",
            "Pack protocol for network ops",
          ],
          videos: [
            {
              name: "Build Your Own Git — Piyush Garg (CodeCrafters Challenge)",
              url: "https://www.youtube.com/results?search_query=piyush+garg+build+your+own+git+codecrafters",
              channel: "Piyush Garg",
            },
            {
              name: "Git Internals — How Git Works Under The Hood",
              url: "https://www.youtube.com/results?search_query=git+internals+how+git+works+under+the+hood",
              channel: "Various",
            },
            {
              name: "Implementing Git from Scratch — Jon Gjengset (Livestream)",
              url: "https://www.youtube.com/results?search_query=jon+gjengset+implementing+git+from+scratch",
              channel: "Jon Gjengset",
            },
          ],
          resources: [
            {
              name: "CodeCrafters: Build Your Own Git",
              url: "https://app.codecrafters.io/courses/git/overview",
              d: "M",
            },
            {
              name: "Git Internals (Pro Git Book Ch. 10)",
              url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain",
              d: "M",
            },
            {
              name: "Write Yourself a Git (Tutorial)",
              url: "https://wyag.thb.lt/",
              d: "M",
            },
          ],
          milestones: [
            "Initialize .git directory structure",
            "Hash objects with SHA-1 (blob storage)",
            "cat-file: read objects from store",
            "Write tree objects from index",
            "Create commits with parent tracking",
            "Branch creation & checkout",
            "Diff algorithm (Myers)",
            "Clone via pack protocol",
          ],
        },
      ],
    },
  ],
};
