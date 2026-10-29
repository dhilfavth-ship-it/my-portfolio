import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_INFO, PROJECTS } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-[#E11D48] font-bold">
            Crimson Noir Developer CLI [Version 4.0.0-dhilfa-mesh]
          </div>
          <div className="text-[#9B93A2]">
            Type <span className="text-[#FB7185] font-bold">help</span> to list available commands or click quick suggestions below.
          </div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#CBC3D7]">
            <div className="text-[#D0BCFF] font-bold mb-1">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 font-mono">
              <div><span className="text-[#38BDF8] font-bold">projects</span> - List flagship open source repositories</div>
              <div><span className="text-[#38BDF8] font-bold">skills</span> - Display technical competency matrix</div>
              <div><span className="text-[#38BDF8] font-bold">cat resume.md</span> - Print curriculum vitae summary</div>
              <div><span className="text-[#38BDF8] font-bold">curl /status</span> - Check edge cluster health & latency</div>
              <div><span className="text-[#38BDF8] font-bold">benchmark</span> - Run in-browser compute benchmark</div>
              <div><span className="text-[#38BDF8] font-bold">contact</span> - Output direct channels & email</div>
              <div><span className="text-[#38BDF8] font-bold">whoami</span> - Inspect caller session metadata</div>
              <div><span className="text-[#38BDF8] font-bold">clear</span> - Clear terminal session output</div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <div className="text-[#D0BCFF] font-bold">FLAGSHIP ARCHITECTURE REPOSITORIES:</div>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 rounded bg-[#13101C] border border-[#2A243D] text-[#CBC3D7]">
                <div className="flex justify-between font-bold text-white">
                  <span>{p.title} ({p.language})</span>
                  <span className="text-[#F59E0B]">★ {p.stars}</span>
                </div>
                <div className="text-[11px] text-[#9CA3AF] mt-0.5">{p.tagline}</div>
                <div className="text-[10px] text-[#A78BFA] mt-1 font-mono">{p.stack.join(' · ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#CBC3D7] font-mono">
            <div className="text-[#D0BCFF] font-bold">ENGINEERING CORE CAPABILITIES:</div>
            <div>[■■■■■■■■■■] 98% - TypeScript, React 19, Distributed Web Architecture</div>
            <div>[■■■■■■■■■□] 96% - Rust, Tokio, Async Concurrency, Memory Safety</div>
            <div>[■■■■■■■■■□] 95% - PostgreSQL, Citus, Query Tuning, Connection Pooling</div>
            <div>[■■■■■■■■■□] 94% - Kubernetes, eBPF, Cilium, Zero-Downtime Deployments</div>
            <div>[■■■■■■■■□□] 92% - Go (Golang), gRPC, Lightweight Microservices</div>
            <div>[■■■■■■■■□□] 90% - Apache Kafka, Event Sourcing, Stream Compaction</div>
          </div>
        );
        break;

      case 'cat resume.md':
      case 'resume':
        outputNode = (
          <div className="space-y-2 text-xs text-[#CBC3D7] leading-relaxed">
            <div className="text-white font-bold text-sm">ALEX RIVERA - SENIOR STAFF SYSTEMS ARCHITECT</div>
            <div className="text-[#8B5CF6]">8+ years scaling high-throughput distributed systems & UI platforms.</div>
            <div className="border-t border-[#2A243D] pt-2 text-[#9CA3AF]">
              Experience: Nexus Cloud Platforms (Staff Architect, 2023-Present) | Vertex Data Labs (Lead Architect, 2021-2023) | Horizon Stream (Sr Infrastructure, 2018-2021)
            </div>
            <div className="text-[#38BDF8]">
              Available for Q2 Technical Advisory, Fractional Staff Architecture, and High-Throughput System Audits.
            </div>
          </div>
        );
        break;

      case 'curl /status':
      case 'status':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-[#CBC3D7]">
            <div className="text-[#10B981] font-bold">HTTP/2 200 OK</div>
            <div>Content-Type: application/json; charset=utf-8</div>
            <div>Server: AetherMesh-Edge/2.4.1 (Anycast)</div>
            <pre className="p-2 rounded bg-[#0A0810] border border-[#2A243D] text-[#D0BCFF] mt-1 text-[11px]">
{JSON.stringify(
  {
    cluster_health: 'OPTIMAL',
    active_edge_nodes: 310,
    edge_p99_latency: '4.8ms',
    raft_term: 42,
    memory_pressure: 'LOW',
    uptime_seconds: 4892014,
  },
  null,
  2
)}
            </pre>
          </div>
        );
        break;

      case 'benchmark':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-[#CBC3D7]">
            <div className="text-[#38BDF8] font-bold">[V8/WASM BENCHMARK HARNESS RUNNING...]</div>
            <div>Warmup cycles: 10,000 passes</div>
            <div>Tested: In-memory hash lookup & crypto verification</div>
            <div className="text-[#10B981] font-bold bg-[#10B981]/10 p-2 rounded border border-[#10B981]/30 mt-1">
              ✓ COMPLETED: 1,842,500 ops/sec | Jitter: 0.04ms | Allocation: 0 heap escape
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs font-mono text-[#CBC3D7]">
            <div>User: guest-engineer@{window.location.hostname || 'remote'}</div>
            <div>Capabilities: [READ_PROJECTS, RUN_BENCHMARK, DISPATCH_INQUIRY]</div>
            <div>Session ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-[#C0B9C6]">
            <div className="text-[#FB7185] font-bold">DIRECT CHANNELS:</div>
            <div>Email: <a href={`mailto:${PORTFOLIO_INFO.socials.email}`} className="text-[#E11D48] underline">{PORTFOLIO_INFO.socials.email}</a></div>
            <div>Website: <span className="text-white">{PORTFOLIO_INFO.socials.website}</span></div>
            <div>PGP Key: <span className="text-[#F59E0B]">{PORTFOLIO_INFO.socials.pgpKeyId}</span></div>
            <div className="text-[#10B981] pt-1">Open to select advisory, systems architecture, and engineering roles.</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <div className="text-xs text-[#EF4444] font-mono">
            zsh: command not found: {trimmed}. Type <span className="text-[#E11D48] font-bold">help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickCommands = ['help', 'projects', 'cat resume.md', 'curl /status', 'benchmark', 'contact'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#09080A]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full rounded-2xl bg-[#09080A] border border-[#2B2230] shadow-[0_24px_64px_rgba(0,0,0,0.95)] flex flex-col transition-all duration-300 overflow-hidden ${
          isFullScreen ? 'h-[96vh] max-w-[96vw]' : 'h-[620px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#110F14] border-b border-[#2B2230]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#10B981]/70 inline-block"></span>
            </div>
            <div className="text-xs font-mono text-[#D4CEDB] flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>dhilfa@crimson-mesh: ~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1.5 rounded bg-[#16131A] border border-[#2B2230] text-[#9B93A2] hover:text-white cursor-pointer"
              title={isFullScreen ? 'Restore' : 'Maximize'}
            >
              {isFullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-[#16131A] border border-[#2B2230] text-[#9B93A2] hover:text-white hover:border-[#E11D48] cursor-pointer"
              title="Close Terminal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#16131A]/60 border-b border-[#2B2230]/60 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#9B93A2] shrink-0">QUICK:</span>
          {quickCommands.map((qCmd) => (
            <button
              key={qCmd}
              onClick={() => executeCommand(qCmd)}
              className="px-2 py-0.5 rounded bg-[#110F14] hover:bg-[#201A24] border border-[#2B2230] text-[#FB7185] hover:text-white shrink-0 transition-colors cursor-pointer"
            >
              {qCmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 font-mono text-xs cursor-text bg-[#09080A]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#9B93A2]">
                <span className="text-[#E11D48]">➜</span>
                <span className="text-[#FB7185]">dhilfa-mesh</span>
                <span className="text-[#D4CEDB]">git:(main)</span>
                <span className="text-white font-semibold">$ {item.command}</span>
              </div>
              <div className="pl-5">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 text-[#9B93A2] pt-1">
            <span className="text-[#E11D48]">➜</span>
            <span className="text-[#FB7185]">dhilfa-mesh</span>
            <span className="text-[#D4CEDB]">git:(main)</span>
            <span className="text-white">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 p-0"
              placeholder="type command (e.g. 'help', 'projects', 'contact')..."
              autoFocus
            />
            <button type="submit" className="text-[#9B93A2] hover:text-white cursor-pointer">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
