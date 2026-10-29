export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  tagline: string;
  category: 'Distributed Engines' | 'Cloud & Edge' | 'Developer Tooling' | 'AI Infrastructure';
  stars: string;
  version: string;
  language: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  description: string;
  architectureDetails: string[];
  codeSnippet: {
    filename: string;
    code: string;
  };
  demoType: 'consensus' | 'cache' | 'gateway' | 'graph';
  githubUrl: string;
  docsUrl: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  badge?: string;
  isCurrent?: boolean;
  summary: string;
  metrics: string[];
  achievements: string[];
  techStack: string[];
}

export interface TechSkill {
  name: string;
  level: number; // 0-100
  category: 'Systems & Backend' | 'Cloud & Infras' | 'Databases & Meshes' | 'Frontend & Interactive';
  years: string;
  tag: string;
  highlight: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  badge: string;
  description: string;
  achievements: string[];
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  id: string;
  desc: string;
}

export const PORTFOLIO_INFO = {
  name: 'Fathima Dhilfa',
  handle: 'dhilfa.dev',
  role: 'Full Stack Developer',
  roleSecondary: 'UI/UX Creator & Systems Architect',
  tagline: 'Building modern, high-performance web applications and scalable distributed systems.',
  location: 'San Francisco, CA / Remote',
  availabilityBadge: 'Open for Opportunities',
  statusPill: 'Available for Hire',
  shortBio:
    'Passionate Full Stack Developer specializing in building modern web applications, scalable backends, and intuitive user experiences with clean code and robust architecture.',
  bio: 'Passionate Full Stack Developer specializing in building modern web applications, scalable backends, and intuitive user experiences with clean code and robust architecture.',
  about: {
    intro:
      "Hello! I'm Fathima Dhilfa, a Full Stack Developer dedicated to creating clean, performant, and reliable web applications that solve real-world problems.",
    interests:
      'My primary interests lie in modern frontend engineering, scalable microservices, cloud-native deployments, and crafting responsive, accessible user interfaces. I love building practical digital tools that feel fast, intuitive, and enjoyable to use.',
    approach:
      'I approach software engineering with an emphasis on clean architecture, maintainability, and thorough testing. From optimizing client-side rendering to structuring robust database schemas and resilient APIs, I ensure every layer of the application is built for stability and long-term maintainability.',
  },
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'contact@dhilfa.dev',
    website: 'https://dhilfa.dev',
    location: 'San Francisco, CA / Remote',
    pgpKeyId: '0x8F3B92E1D4A760CB',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'aethermesh',
    projectNumber: '01',
    title: 'AetherMesh',
    tagline: 'High-concurrency Raft consensus mesh with zero-copy binary serialization',
    category: 'Distributed Engines',
    stars: '2.8k',
    version: 'v2.4.1',
    language: 'Rust',
    stack: ['Rust', 'Tokio', 'CapnProto', 'QUIC', 'Prometheus'],
    metrics: [
      { label: 'P99 Latency', value: '1.2 ms' },
      { label: 'Commit QPS', value: '240,000 /s' },
      { label: 'CPU Overhead', value: '-64%' },
    ],
    description:
      'A low-latency distributed state machine replication engine implementing pipelined Raft consensus over QUIC datagrams. Features deterministic WAL compaction, speculative leader leases, and zero-allocation frame serialization.',
    architectureDetails: [
      'Lock-free multi-producer ring buffers decouple network ingestion from consensus state transitions.',
      'Custom zero-copy binary protocol avoiding serde heap allocations in the critical commit path.',
      'Dynamic quorum rebalancing resilient against asymmetric WAN cross-continental partitions.',
      'Comprehensive fuzz testing with proptest and Jepsen validation suites running in CI.',
    ],
    codeSnippet: {
      filename: 'consensus_node.rs',
      code: `pub async fn handle_append_entries(
    &mut self,
    request: AppendEntriesRequest<LogEntry>,
) -> Result<AppendEntriesResponse, ConsensusError> {
    if request.term < self.state.current_term {
        return Ok(AppendEntriesResponse::reject(self.state.current_term));
    }
    
    // Heartbeat resets lease timer with zero-allocation clock
    self.heartbeat_tracker.reset_election_deadline();
    
    // Speculative pipelined write into memory-mapped WAL
    let log_idx = self.wal.append_batch(&request.entries).await?;
    self.state.commit_index = log_idx;
    
    Ok(AppendEntriesResponse::accept(self.state.current_term, log_idx))
}`,
    },
    demoType: 'consensus',
    githubUrl: 'https://github.com',
    docsUrl: 'https://docs.rs',
  },
  {
    id: 'hyperion-edge',
    projectNumber: '02',
    title: 'Hyperion Edge',
    tagline: 'Distributed multi-region key-value database engine powered by state-based CRDTs',
    category: 'Cloud & Edge',
    stars: '3.4k',
    version: 'v1.8.0',
    language: 'TypeScript / Go',
    stack: ['Go', 'TypeScript', 'Cloudflare Workers', 'eBPF', 'RocksDB'],
    metrics: [
      { label: 'Cold Starts', value: '< 2 ms' },
      { label: 'Replication Lag', value: '< 18 ms' },
      { label: 'Global POPs', value: '310+' },
    ],
    description:
      'A globally distributed edge key-value storage engine providing strong eventual consistency without centralized database locking bottlenecks. Uses state-based Delta-CRDTs synchronized via an anti-entropy epidemic gossip protocol.',
    architectureDetails: [
      'Delta-state vector clocks ensure monotonic forward progression even during cross-region undersea cable severed states.',
      'Memory-efficient bitset bloom filters prune unnecessary gossip rounds by 92%.',
      'Pluggable storage backend targeting RocksDB for persistent edge nodes and fast in-memory buffers for worker isolates.',
    ],
    codeSnippet: {
      filename: 'delta_crdt_sync.go',
      code: `func (c *CRDTStore) MergeDelta(ctx context.Context, peerID string, delta []byte) error {
    state, err := DecodeDeltaState(delta)
    if err != nil {
        return fmt.Errorf("crdt: invalid wire frame: %w", err)
    }

    c.mu.Lock()
    defer c.mu.Unlock()

    // Vector clock check for causal monotonicity
    if !c.clock.IsCausallyPrecedent(state.Clock) {
        c.metrics.ConflictsResolved.Inc()
    }
    c.lwwMap.Merge(state.Values)
    c.clock.Tick(peerID)
    return c.persistDirtyBlocks()
}`,
    },
    demoType: 'cache',
    githubUrl: 'https://github.com',
    docsUrl: 'https://github.com',
  },
  {
    id: 'vortex-telemetry',
    projectNumber: '03',
    title: 'Vortex Telemetry',
    tagline: 'Real-time distributed service mesh topology visualizer rendering 500k points at 60 FPS',
    category: 'Developer Tooling',
    stars: '1.9k',
    version: 'v3.1.2',
    language: 'TypeScript / WebGL',
    stack: ['React 19', 'WebGL', 'Web Workers', 'WebSockets', 'Protobuf'],
    metrics: [
      { label: 'Node Capacity', value: '500k nodes' },
      { label: 'Frame Rate', value: '60 FPS stable' },
      { label: 'Memory Footprint', value: '42 MB' },
    ],
    description:
      'High-performance distributed systems observability cockpit. Renders live dependency graphs, distributed trace spans, and circuit-breaker telemetry in hardware-accelerated WebGL with Web Workers stream ingestion.',
    architectureDetails: [
      'OffscreenCanvas with worker thread decouples physics layout computation from main UI rendering loop.',
      'Instanced array geometry shaders render thousands of dynamic pulsing RPC packet particles simultaneously.',
      'Binary Protobuf streaming protocol over persistent HTTP/3 connection reduces deserialization jank to zero.',
    ],
    codeSnippet: {
      filename: 'topology_worker.ts',
      code: `self.onmessage = (event: MessageEvent<ArrayBuffer>) => {
  const packetStream = decodeTraceStream(event.data);
  
  // Vectorized force-directed layout step
  for (let i = 0; i < packetStream.nodes.length; i++) {
    const node = packetStream.nodes[i];
    computeAttractiveForces(node, packetStream.edges);
    applyVelocityDamping(node);
  }
  
  // Direct zero-copy transfer of vertex buffer positions
  self.postMessage({ buffer: packetStream.buffer }, [packetStream.buffer]);
};`,
    },
    demoType: 'graph',
    githubUrl: 'https://github.com',
    docsUrl: 'https://github.com',
  },
  {
    id: 'synthetix-gateway',
    projectNumber: '04',
    title: 'Synthetix Gateway',
    tagline: 'Sub-millisecond AI inference routing gateway with speculative KV cache eviction',
    category: 'AI Infrastructure',
    stars: '2.1k',
    version: 'v1.2.0',
    language: 'Rust / C++',
    stack: ['Rust', 'C++', 'CUDA', 'gRPC', 'Redis Cluster'],
    metrics: [
      { label: 'Time-to-First-Token', value: '-48%' },
      { label: 'KV Cache Hit Rate', value: '88.4%' },
      { label: 'Gateway Latency', value: '0.4 ms' },
    ],
    description:
      'High-throughput reverse proxy for LLM clusters. Employs semantic prefix tree hashing to match prompt fragments against warmed GPU KV caches, dynamically routing incoming queries to the optimal host.',
    architectureDetails: [
      'Prefix tree radix index indexing 100k active context prefixes in shared host memory.',
      'Predictive spec-decoding draft verification pipeline executing asynchronously across available tensor cores.',
      'Adaptive token-bucket rate limiter with fair queuing prevents head-of-line blocking on long reasoning prompts.',
    ],
    codeSnippet: {
      filename: 'prefix_router.rs',
      code: `impl PrefixRouter {
    pub fn route_query<'a>(&self, tokens: &'a [u32]) -> OptimalWorkerNode {
        let prefix_hash = wyhash::wyhash(bytemuck::cast_slice(&tokens[..MIN_PREFIX_LEN]), 0);
        
        if let Some(warmed_node) = self.kv_index.find_warmed_replica(prefix_hash) {
            self.telemetry.record_cache_hit();
            return warmed_node;
        }
        
        // Fallback to least-loaded node with available VRAM
        self.load_balancer.select_least_utilized()
    }
}`,
    },
    demoType: 'gateway',
    githubUrl: 'https://github.com',
    docsUrl: 'https://github.com',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'nexus-cloud',
    period: '2023 - Present',
    role: 'Staff Distributed Systems Architect',
    company: 'Nexus Cloud Platforms',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time / Leadership',
    badge: 'CURRENT ROLE',
    isCurrent: true,
    summary:
      'Architect and tech lead for the Global Streaming Backplane and Edge Ingress Fabric, responsible for 40+ billion events daily across 4 global cloud regions.',
    metrics: [
      'Reduced P99 inter-region event latency from 72ms to 4.2ms by introducing custom QUIC transport layers.',
      'Slashed infrastructure footprint by 38% ($1.8M annual cloud savings) via Rust migration of legacy Java pipelines.',
      'Mentored 18 senior & staff engineers across distributed systems, networking, and high-concurrency architecture.',
    ],
    achievements: [
      'Led the architecture of zero-downtime multi-region disaster failover passing automated chaos engineering chaos drills.',
      'Authored the RFCs for distributed token-bucket rate limiting and deterministic log replay.',
      'Spearheaded RFC reviews across 8 engineering pods covering API versioning, telemetry standards, and eBPF observability.',
    ],
    techStack: ['Rust', 'Tokio', 'Kubernetes', 'eBPF', 'Go', 'Kafka', 'ClickHouse', 'PostgreSQL'],
  },
  {
    id: 'vertex-labs',
    period: '2021 - 2023',
    role: 'Lead Systems Architect & Full-Stack Principal',
    company: 'Vertex Data Labs',
    location: 'Remote / New York, NY',
    type: 'Full-time',
    summary:
      'Headed the telemetry platform engineering group. Built real-time query compilation engines and high-density web cockpits used by Fortune 500 SRE teams.',
    metrics: [
      'Engineered real-time visual query engine supporting 1M records/sec interactive canvas streaming at 60fps.',
      'Decreased mean time to detect (MTTD) outages across 85 enterprise customers by 63%.',
      'Designed and shipped customer-facing developer CLI with 99.4% developer satisfaction score.',
    ],
    achievements: [
      'Architected columnar compression format achieving 12:1 telemetry log compression in memory.',
      'Created open source TypeScript/WASM library for offscreen data frame interpolation with 250k monthly downloads.',
    ],
    techStack: ['TypeScript', 'React', 'Go', 'WebAssembly', 'ClickHouse', 'Docker', 'GraphQL', 'Tailwind'],
  },
  {
    id: 'horizon-stream',
    period: '2018 - 2021',
    role: 'Senior Core Infrastructure Engineer',
    company: 'Horizon Stream Networks',
    location: 'San Francisco, CA',
    type: 'Full-time',
    summary:
      'Core contributor to real-time audio/video signaling backbone and live streaming distributed edge relays.',
    metrics: [
      'Scaled WebSocket edge routing gateway from 250k to 3.2M concurrent active client connections.',
      'Implemented WebRTC media router forwarding 800 Gbps at peak gaming esports broadcasts.',
      'Reduced memory footprint per active connection from 48KB to 2.4KB through pooled slab allocators.',
    ],
    achievements: [
      'Patented dynamic bandwidth estimation algorithm for variable cellular uplink connections.',
      'Received company-wide Engineering Excellence award for zero-packet-drop World Cup streaming deployment.',
    ],
    techStack: ['Go', 'C++', 'WebRTC', 'Redis', 'Docker', 'AWS', 'Linux Kernel Netfilter', 'Prometheus'],
  },
  {
    id: 'algorithmic-systems',
    period: '2016 - 2018',
    role: 'Systems Software Engineer',
    company: 'Algorithmic Systems & Trading',
    location: 'Chicago, IL',
    type: 'Full-time',
    summary:
      'Developed low-latency order routing adapters, market data ticker decoders, and deterministic exchange simulation harnesses.',
    metrics: [
      'Engineered sub-microsecond FIX/FAST protocol decoders in modern C++14.',
      'Implemented zero-copy kernel bypass networking utilizing Solarflare OpenOnload.',
    ],
    achievements: [
      'Constructed deterministic historical backtesting engine replaying 100 GB market ticks in under 90 seconds.',
    ],
    techStack: ['C++', 'Python', 'Linux Kernel', 'Solarflare EF_VI', 'Bash', 'x86 SIMD'],
  },
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, high-performance user interfaces and single-page applications.',
    skills: [
      { name: 'React 19 & Next.js', tag: 'Components & SSR' },
      { name: 'TypeScript', tag: 'Type-Safe Architecture' },
      { name: 'JavaScript (ES6+)', tag: 'Core Web Platform' },
      { name: 'Tailwind CSS', tag: 'Design Systems' },
      { name: 'HTML5 & Modern CSS', tag: 'Semantic & Accessible' },
      { name: 'State Management', tag: 'Zustand · Redux · Context' },
      { name: 'WebSockets & Workers', tag: 'Real-Time & Offscreen' },
      { name: 'Responsive UI/UX', tag: 'Mobile-First Layouts' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Architecting resilient APIs, microservices, and server runtimes for high-concurrency workloads.',
    skills: [
      { name: 'Node.js & Express', tag: 'RESTful Microservices' },
      { name: 'Go (Golang)', tag: 'High-Throughput Proxies' },
      { name: 'Rust', tag: 'Memory-Safe Systems' },
      { name: 'REST & GraphQL APIs', tag: 'Schema Design & Routing' },
      { name: 'Auth & API Security', tag: 'OAuth2 · JWT · HTTPS' },
      { name: 'Microservices Architecture', tag: 'Service Discovery · RPC' },
      { name: 'Event-Driven Systems', tag: 'Async Message Queues' },
      { name: 'Performance Tuning', tag: 'Profiling & Low Latency' },
    ],
  },
  {
    title: 'Databases',
    description: 'Designing reliable data stores, cache layers, and real-time synchronization pipelines.',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational · ACID · Indexing' },
      { name: 'Redis & Valkey', tag: 'In-Memory Cache & Pub/Sub' },
      { name: 'MongoDB', tag: 'Document Data Stores' },
      { name: 'ClickHouse', tag: 'Columnar Analytics' },
      { name: 'Database Architecture', tag: 'Schema Design · Migrations' },
      { name: 'Query Optimization', tag: 'Execution Plans & Indexing' },
      { name: 'Distributed Caching', tag: 'Cache Invalidation · Locks' },
      { name: 'Data Replication', tag: 'Failover & Read Replicas' },
    ],
  },
  {
    title: 'Tools and Technologies',
    description: 'Leveraging cloud platforms, containerization, and modern developer tooling.',
    skills: [
      { name: 'Git & GitHub', tag: 'Version Control & Workflows' },
      { name: 'Docker & Containers', tag: 'Multi-Stage BuildKit' },
      { name: 'Kubernetes', tag: 'Container Orchestration' },
      { name: 'AWS & Cloudflare', tag: 'Cloud & Edge Infrastructure' },
      { name: 'CI/CD Pipelines', tag: 'GitHub Actions & Automation' },
      { name: 'Linux / Unix', tag: 'Shell Scripting & POSIX' },
      { name: 'Vite & Modern Bundlers', tag: 'Asset Optimization & HMR' },
      { name: 'Testing & Postman', tag: 'Unit Tests & API Validation' },
    ],
  },
];

export const TECH_SKILLS: TechSkill[] = [
  { name: 'React 19 & Next.js', level: 98, category: 'Frontend & Interactive', years: '8+ yrs', tag: 'Server Actions · Hooks · Concurrent', highlight: 'Tactile, zero-jank frontend architecture with state optimization' },
  { name: 'TypeScript', level: 98, category: 'Frontend & Interactive', years: '8+ yrs', tag: 'Strict Typing · Generics', highlight: 'Robust type safety and seamless developer experience' },
  { name: 'Node.js & Express', level: 96, category: 'Systems & Backend', years: '8+ yrs', tag: 'REST · WebSockets · Microservices', highlight: 'High-throughput APIs and async event loop tuning' },
  { name: 'PostgreSQL', level: 95, category: 'Databases & Meshes', years: '8+ yrs', tag: 'WAL · Citus · Extensions', highlight: 'Query planner internals, partition sharding, transactional locks' },
  { name: 'Docker & Kubernetes', level: 94, category: 'Cloud & Infras', years: '6+ yrs', tag: 'Multi-stage · Helm · Clusters', highlight: 'Container orchestration, reproducible builds, and cloud deployment' },
];

export const BENCHMARKS_DATA = [
  {
    scenario: 'HTTP Pipeline Throughput (Req/sec)',
    rust: 184500,
    go: 122000,
    node: 54000,
    unit: 'req/s (higher is better)',
    note: 'Tested with 1,000 concurrent pipelined connections over TLS 1.3',
  },
  {
    scenario: 'P99 Latency under 50k QPS',
    rust: 1.4,
    go: 4.8,
    node: 14.2,
    unit: 'ms (lower is better)',
    note: 'Measured with wrk2 benchmarking harness with zero jitter',
  },
  {
    scenario: 'Idle Process Memory Footprint',
    rust: 8.2,
    go: 22.4,
    node: 68.0,
    unit: 'MB (lower is better)',
    note: 'Standard container base runtime memory usage after boot',
  },
  {
    scenario: 'JSON Serialization of 100k Records',
    rust: 12.8,
    go: 38.6,
    node: 112.0,
    unit: 'ms (lower is better)',
    note: 'Using SIMD-accelerated deserializers in Rust (simd-json)',
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understanding architectural goals, audience demographics, latency budgets, and core product requirements.',
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'IDEATE',
    description: 'Wireframing, system topology mapping, evaluating tradeoffs, and choosing the optimal technology stack.',
    iconName: 'Lightbulb',
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Crafting pixel-perfect visual designs, design tokens, micro-interactions, and accessible design systems.',
    iconName: 'PenTool',
  },
  {
    number: '04',
    title: 'DEVELOP',
    description: 'Writing strictly typed, high-performance code across reactive frontends and resilient cloud microservices.',
    iconName: 'Code',
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'Automated chaos testing, load benchmarking, telemetry instrumentation, and deploying with zero downtime.',
    iconName: 'Send',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'B.S. in Computer Science & Software Engineering',
    institution: 'University of Illinois Urbana-Champaign',
    period: '2016 - 2020',
    badge: 'First Class Honors',
    description:
      'Rigorous foundation in distributed systems, modern web architecture, algorithms, database systems, and human-computer interaction.',
    achievements: [
      'Graduated in top 5% of engineering cohort with academic distinction.',
      'Lead Developer for university automated portal serving 40k+ active campus students.',
      'Published research on distributed state machines and consensus protocol optimization.',
    ],
    coursework: [
      'Distributed Systems',
      'Advanced Data Structures',
      'Database System Internals',
      'Cloud Architecture & DevOps',
      'Modern UI/UX Engineering',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Full Stack Web Development Professional',
    issuer: 'Meta & Coursera Specialization',
    year: '2022',
    id: 'META-FS-9428',
    desc: 'Advanced React 19, Node.js microservices, GraphQL, and modern state architectures.',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    id: 'AWS-SAA-8104',
    desc: 'High-availability multi-region cloud topologies, serverless, and IAM security.',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2024',
    id: 'CKA-9921',
    desc: 'Container orchestration, ingress fabrics, eBPF service meshes, and storage.',
  },
];
