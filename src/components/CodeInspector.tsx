import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Cpu, Gauge } from 'lucide-react';

interface CodeSnippet {
  id: string;
  filename: string;
  lang: string;
  code: string;
  metrics: { ops: string; latency: string; alloc: string };
  simulatedOutput: string[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'raft',
    filename: 'consensus_engine.rs',
    lang: 'Rust',
    metrics: { ops: '240,000 /s', latency: '0.84 ms P99', alloc: '0 bytes (stack)' },
    code: `// AetherMesh: Lock-Free Pipelined Raft Consensus
pub async fn process_commit_pipeline<T: StatePayload>(
    &mut self,
    batch: LogBatch<T>,
) -> Result<CommitReceipt, ConsensusError> {
    let lease_guard = self.leader_lease.acquire_pinned()?;
    let current_term = self.state.load_term();

    // Zero-copy ring buffer enqueue with atomic fence
    let seq_id = self.wal_ring.reserve_slot(batch.len())?;
    
    // Speculative pipelining across QUIC peer quorums
    let quorum_fut = self.peer_quorums.broadcast_uncompressed(
        current_term, 
        seq_id, 
        &batch
    );
    
    tokio::select! {
        res = quorum_fut => match res {
            Ok(ack_count) if ack_count >= self.quorum_size => {
                self.wal_ring.commit_slot(seq_id);
                Ok(CommitReceipt::new(seq_id, ack_count))
            }
            _ => Err(ConsensusError::QuorumTimeout),
        },
        _ = tokio::time::sleep(self.heartbeat_timeout) => {
            self.step_down_to_follower();
            Err(ConsensusError::LeaderFencingViolation)
        }
    }
}`,
    simulatedOutput: [
      '[AetherMesh Core] Initializing ring buffer arena: 64MB locked memory...',
      '[QUIC Transport] 5 node cluster handshake complete. Term: 142',
      '[Pipeline] Batch ingestion reserved: slot #892,104 (1,024 entries)',
      '[Quorum ACK] 4/5 nodes acknowledged in 0.82ms. Leader lease: ACTIVE',
      '>> BENCHMARK RESULT: 242,100 commits/sec | p99 = 0.84ms | Zero heap allocs',
    ],
  },
  {
    id: 'crdt',
    filename: 'edge_router.ts',
    lang: 'TypeScript',
    metrics: { ops: '85,000 /s', latency: '1.8 ms P99', alloc: 'WeakMap cached' },
    code: `// Hyperion Edge: Multi-Region Eventual Consistency Hook
export class EdgeVectorClockRouter implements EdgeIngressHandler {
  private readonly stateVector: Map<NodeId, bigint> = new Map();
  private readonly dirtyRegister: Set<VectorSlot> = new Set();

  async handleIngress(request: IngressPacket): Promise<IngressResponse> {
    const traceId = crypto.randomUUID();
    const packetSlot = this.decodeFastHeader(request.payload);

    // Conflict-free replicated merge with monotonic tick
    const causalOrder = this.evaluateCausality(packetSlot.vector);
    if (causalOrder === Causality.Concurrent) {
      await this.resolveLWWRegister(packetSlot);
    }

    // Gossip delta state to nearest 3 edge nodes over WebSocket
    this.scheduleGossipDelta(packetSlot);

    return {
      status: 200,
      syncedEpoch: this.stateVector.get(request.originNodeId) ?? 0n,
      latencyBudgetRemainingUs: 1200,
    };
  }
}`,
    simulatedOutput: [
      '[Edge Router] Worker isolate booted at POP: SFO-01',
      '[Vector Clock] Monotonic tick: node_sfo #4892 -> node_iad #4893',
      '[CRDT Engine] Concurrent write detected for key /sessions/user_99182',
      '[LWW Resolution] Last-Write-Wins resolved via wall-clock tiebreak (0.1ms)',
      '>> BENCHMARK RESULT: 85,200 req/sec | Edge roundtrip: 1.8ms | Delta size: 48B',
    ],
  },
  {
    id: 'ebpf',
    filename: 'trace_filter.c',
    lang: 'C (eBPF)',
    metrics: { ops: '1,450,000 /s', latency: '< 40 ns', alloc: 'BPF_MAP_TYPE_HASH' },
    code: `// Vortex eBPF: Zero-Overhead Kernel Latency Probe
SEC("kprobe/tcp_v4_connect")
int BPF_KPROBE(trace_tcp_connect, struct sock *sk) {
    u64 pid_tgid = bpf_get_current_pid_tgid();
    u64 ts = bpf_ktime_get_ns();

    struct packet_meta meta = {
        .timestamp_ns = ts,
        .saddr = BPF_CORE_READ(sk, __sk_common.skc_rcv_saddr),
        .daddr = BPF_CORE_READ(sk, __sk_common.skc_daddr),
        .dport = BPF_CORE_READ(sk, __sk_common.skc_dport)
    };

    bpf_map_update_elem(&active_connections, &pid_tgid, &meta, BPF_ANY);
    return 0;
}`,
    simulatedOutput: [
      '[eBPF Verifier] Bytecode verified: 12 instructions, 0 backward jumps.',
      '[Kernel Hook] Attached to tracepoint kprobe/tcp_v4_connect (PID: 1)',
      '[Ring Buffer] Forwarding kernel events to userspace daemon @ 1.45M pkts/s',
      '>> BENCHMARK RESULT: In-kernel inspection latency = 38 nanoseconds.',
    ],
  },
];

export const CodeInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('raft');
  const [copied, setCopied] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [terminalOutput, setTerminalOutput] = useState<string[] | null>(null);

  const currentSnippet = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunBenchmark = () => {
    setIsRunning(true);
    setTerminalOutput(null);
    setTimeout(() => {
      setTerminalOutput(currentSnippet.simulatedOutput);
      setIsRunning(false);
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl bg-[#110F14] border border-[#2B2230] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
      {/* Window Title Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#16131A] border-b border-[#2B2230] gap-2">
        {/* Mock Window Controls & Tabs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-2 border-r border-[#2B2230]">
            <span className="w-3 h-3 rounded-full bg-[#E11D48]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/70 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981]/70 inline-block"></span>
          </div>

          <div className="flex items-center gap-1">
            {SNIPPETS.map((snippet) => (
              <button
                key={snippet.id}
                onClick={() => {
                  setActiveTab(snippet.id);
                  setTerminalOutput(null);
                }}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-150 flex items-center gap-1.5 ${
                  activeTab === snippet.id
                    ? 'bg-[#221C26] text-[#FB7185] border border-[#E11D48]/40 shadow-inner'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-[#1A1620]'
                }`}
              >
                <span>{snippet.filename}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunBenchmark}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E11D48]/20 border border-[#E11D48]/50 hover:bg-[#E11D48]/30 text-[#FB7185] text-xs font-mono transition-all duration-150 disabled:opacity-50"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Benchmarking...' : 'Run Benchmark'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-[#16131A] border border-[#2B2230] hover:border-[#E11D48] text-[#9CA3AF] hover:text-white transition-colors"
            title="Copy source code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Real-time Performance Metrics Ribbon */}
      <div className="grid grid-cols-3 bg-[#0D0B10] border-b border-[#2B2230]/60 px-4 py-2 text-[11px] font-mono text-[#CBC3D7]">
        <div className="flex items-center gap-1.5">
          <Gauge className="w-3.5 h-3.5 text-[#E11D48]" />
          <span className="text-[#9CA3AF]">THROUGHPUT:</span>
          <span className="text-white font-semibold">{currentSnippet.metrics.ops}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="text-[#9CA3AF]">P99 LATENCY:</span>
          <span className="text-[#38BDF8] font-semibold">{currentSnippet.metrics.latency}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
          <span className="text-[#9CA3AF]">ALLOCATION:</span>
          <span className="text-white font-semibold">{currentSnippet.metrics.alloc}</span>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed bg-[#0B0A0E]">
        <pre className="text-[#D1D5DB]">
          <code>
            {currentSnippet.code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row group">
                <span className="table-cell pr-4 text-right select-none text-[#52495C] text-[11px] font-mono group-hover:text-[#958EA0]">
                  {(idx + 1).toString().padStart(2, ' ')}
                </span>
                <span className="table-cell whitespace-pre">
                  {/* Basic syntax highlight tokens */}
                  {line.startsWith('//') ? (
                    <span className="text-[#6B7280] italic">{line}</span>
                  ) : line.includes('pub ') || line.includes('async ') || line.includes('fn ') || line.includes('return ') || line.includes('export ') || line.includes('class ') ? (
                    <span>
                      {line.split(/(pub |async |fn |return |export |class |let |const |await |SEC\(|int )/g).map((token, tIdx) =>
                        ['pub ', 'async ', 'fn ', 'return ', 'export ', 'class ', 'let ', 'const ', 'await ', 'SEC(', 'int '].includes(token) ? (
                          <span key={tIdx} className="text-[#FB7185] font-medium">{token}</span>
                        ) : token.includes('Result<') || token.includes('Option<') || token.includes('Promise<') ? (
                          <span key={tIdx} className="text-[#38BDF8]">{token}</span>
                        ) : (
                          <span key={tIdx}>{token}</span>
                        )
                      )}
                    </span>
                  ) : (
                    <span>{line}</span>
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Interactive Execution Output Console */}
      {terminalOutput && (
        <div className="border-t border-[#2B2230] bg-[#070608] p-4 text-xs font-mono transition-all">
          <div className="flex items-center justify-between text-[#E11D48] text-[11px] mb-2 font-bold tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
              RUNTIME BENCHMARK EXECUTION LOG
            </span>
            <button
              onClick={() => setTerminalOutput(null)}
              className="text-[#9CA3AF] hover:text-white text-[10px]"
            >
              [CLOSE]
            </button>
          </div>
          <div className="space-y-1">
            {terminalOutput.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.startsWith('>>')
                    ? 'text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-1 rounded border border-[#10B981]/30 mt-1.5'
                    : 'text-[#CBC3D7]'
                }
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
