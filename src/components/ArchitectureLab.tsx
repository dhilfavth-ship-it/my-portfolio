import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  Zap, 
  RefreshCw, 
  AlertTriangle, 
  ShieldCheck, 
  Activity, 
  Radio, 
  Sliders, 
  Terminal as TerminalIcon 
} from 'lucide-react';

interface ClusterNode {
  id: string;
  name: string;
  role: 'Leader' | 'Follower' | 'Candidate' | 'Offline';
  region: string;
  term: number;
  cpu: number;
  load: number;
}

export const ArchitectureLab: React.FC = () => {
  const [nodes, setNodes] = useState<ClusterNode[]>([
    { id: 'node-1', name: 'raft-core-us-east', role: 'Leader', region: 'iad (US-East)', term: 42, cpu: 14, load: 45 },
    { id: 'node-2', name: 'raft-core-eu-west', role: 'Follower', region: 'fra (EU-West)', term: 42, cpu: 11, load: 38 },
    { id: 'node-3', name: 'raft-core-ap-east', role: 'Follower', region: 'nrt (AP-East)', term: 42, cpu: 9, load: 32 },
  ]);

  const [clusterStatus, setClusterStatus] = useState<'HEALTHY' | 'ELECTING' | 'RECOVERED'>('HEALTHY');
  const [trafficRate, setTrafficRate] = useState<number>(45000);
  const [isTrafficSpike, setIsTrafficSpike] = useState<boolean>(false);
  const [eventLogs, setEventLogs] = useState<string[]>([
    '[INIT] Cluster established: 3 nodes online across IAD, FRA, NRT.',
    '[RAFT] Node raft-core-us-east acquired leader lease (Term 42).',
    '[QUIC] Zero-copy pipelined channels active with 0 packet drops.',
  ]);

  const addLog = (msg: string) => {
    setEventLogs((prev) => [msg, ...prev.slice(0, 7)]);
  };

  const handleTrafficSpike = () => {
    setIsTrafficSpike(true);
    setTrafficRate(185000);
    addLog(`[TRAFFIC] Injected 185,000 QPS spike through eBPF ingress filter.`);

    setNodes((prev) =>
      prev.map((n) => ({
        ...n,
        cpu: Math.min(88, n.cpu + 35),
        load: Math.min(92, n.load + 40),
      }))
    );

    setTimeout(() => {
      setIsTrafficSpike(false);
      setTrafficRate(48000);
      setNodes((prev) =>
        prev.map((n) => ({
          ...n,
          cpu: Math.max(12, n.cpu - 30),
          load: Math.max(35, n.load - 35),
        }))
      );
      addLog(`[TRAFFIC] Rate returned to baseline 48,000 QPS. Zero request drop.`);
    }, 3500);
  };

  const handleSimulateLeaderCrash = () => {
    setClusterStatus('ELECTING');
    addLog(`[ALERT] Injected crash into Leader (node-1). Heartbeat missed!`);

    setNodes((prev) => [
      { ...prev[0], role: 'Offline', cpu: 0, load: 0 },
      { ...prev[1], role: 'Candidate', term: prev[1].term + 1, cpu: 45 },
      { ...prev[2], role: 'Follower', term: prev[2].term + 1 },
    ]);

    setTimeout(() => {
      addLog(`[RAFT] node-2 (fra) gathered 2/2 available quorum votes.`);
      addLog(`[RAFT] New leader elected: node-2 in 14.8 milliseconds!`);
      setNodes((prev) => [
        { ...prev[0], role: 'Follower', cpu: 12, load: 20 },
        { ...prev[1], role: 'Leader', cpu: 28, load: 50 },
        { ...prev[2], role: 'Follower', cpu: 15, load: 30 },
      ]);
      setClusterStatus('HEALTHY');
    }, 1800);
  };

  const handleResetCluster = () => {
    setClusterStatus('HEALTHY');
    setTrafficRate(45000);
    setIsTrafficSpike(false);
    setNodes([
      { id: 'node-1', name: 'raft-core-us-east', role: 'Leader', region: 'iad (US-East)', term: 43, cpu: 14, load: 45 },
      { id: 'node-2', name: 'raft-core-eu-west', role: 'Follower', region: 'fra (EU-West)', term: 43, cpu: 11, load: 38 },
      { id: 'node-3', name: 'raft-core-ap-east', role: 'Follower', region: 'nrt (AP-East)', term: 43, cpu: 9, load: 32 },
    ]);
    addLog(`[RESET] Cluster re-synchronized to initial state.`);
  };

  return (
    <section id="architecture" className="py-24 relative bg-[#09080A] border-t border-[#2B2230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-[#E11D48] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E11D48]"></span>
              LIVE INTERACTIVE SYSTEMS LAB
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide uppercase">
              DISTRIBUTED CONSENSUS SANDBOX
            </h2>
            <p className="text-sm sm:text-base text-[#C0B9C6] mt-2 max-w-xl font-light">
              Simulate real-time quorum replication, traffic burst ingestion, and sub-20ms leader failovers on our simulated multi-region cluster.
            </p>
          </div>

          {/* Interactive Cluster Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleTrafficSpike}
              disabled={isTrafficSpike || clusterStatus === 'ELECTING'}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#F43F5E] hover:to-[#E11D48] text-white text-xs font-mono font-medium transition-all shadow-[0_0_16px_rgba(225,29,72,0.35)] disabled:opacity-50 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Inject Traffic Burst</span>
            </button>

            <button
              onClick={handleSimulateLeaderCrash}
              disabled={clusterStatus === 'ELECTING'}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#16131A] border border-[#2B2230] hover:border-[#EF4444] text-[#EF4444] text-xs font-mono transition-all disabled:opacity-50 cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Simulate Leader Crash</span>
            </button>

            <button
              onClick={handleResetCluster}
              className="p-2.5 rounded-xl bg-[#16131A] border border-[#2B2230] text-[#9B93A2] hover:text-white hover:border-[#E11D48] transition-colors cursor-pointer"
              title="Reset Cluster State"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sandbox Canvas */}
        <div className="rounded-2xl bg-[#110F14] border border-[#2B2230] p-6 lg:p-8 space-y-8 shadow-[0_8px_32px_rgba(0,0,0,0.85)]">
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#2B2230]">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  clusterStatus === 'HEALTHY'
                    ? 'bg-[#10B981] shadow-[0_0_12px_#10B981]'
                    : 'bg-[#F59E0B] animate-ping'
                }`}
              />
              <div>
                <div className="text-xs font-mono text-[#8B8394]">CONSENSUS STATE</div>
                <div className="text-sm font-mono font-bold text-white">
                  {clusterStatus === 'HEALTHY' ? 'ACTIVE QUORUM (RAFT v2.4)' : 'LEADER RE-ELECTION IN PROGRESS...'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono">
              <div>
                <span className="text-[#8B8394]">THROUGHPUT: </span>
                <span className="text-[#FB7185] font-bold">
                  {trafficRate.toLocaleString()} req/s
                </span>
              </div>
              <div>
                <span className="text-[#8B8394]">AVG COMMIT RTT: </span>
                <span className="text-[#10B981] font-bold">0.82 ms</span>
              </div>
              <div>
                <span className="text-[#8B8394]">PACKET DROP: </span>
                <span className="text-white font-bold">0.000%</span>
              </div>
            </div>
          </div>

          {/* Architecture Topology Visual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {/* Ambient Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#E11D48]/30 via-[#FB7185]/40 to-[#E11D48]/30 -translate-y-1/2 -z-0 pointer-events-none" />

            {nodes.map((node) => (
              <div
                key={node.id}
                className={`relative z-10 rounded-xl bg-[#16131A] border transition-all duration-300 p-5 ${
                  node.role === 'Leader'
                    ? 'border-[#E11D48] shadow-[0_0_24px_rgba(225,29,72,0.3)]'
                    : node.role === 'Candidate'
                    ? 'border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : node.role === 'Offline'
                    ? 'border-[#EF4444]/60 opacity-60'
                    : 'border-[#2B2230] hover:border-[#4B4354]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Server
                      className={`w-4 h-4 ${
                        node.role === 'Leader'
                          ? 'text-[#E11D48]'
                          : node.role === 'Candidate'
                          ? 'text-[#F59E0B]'
                          : node.role === 'Offline'
                          ? 'text-[#EF4444]'
                          : 'text-[#FB7185]'
                      }`}
                    />
                    <span className="text-xs font-mono font-bold text-white">
                      {node.name}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      node.role === 'Leader'
                        ? 'bg-[#E11D48]/20 text-[#FB7185] border border-[#E11D48]/40'
                        : node.role === 'Candidate'
                        ? 'bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40'
                        : node.role === 'Offline'
                        ? 'bg-[#EF4444]/20 text-[#FCA5A5] border border-[#EF4444]/40'
                        : 'bg-[#110F14] text-[#8B8394] border border-[#2B2230]'
                    }`}
                  >
                    {node.role.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-[#CBC3D7]">
                    <span className="text-[#9CA3AF]">REGION:</span>
                    <span>{node.region}</span>
                  </div>

                  <div className="flex justify-between text-[#CBC3D7]">
                    <span className="text-[#9CA3AF]">RAFT TERM:</span>
                    <span className="text-[#38BDF8] font-semibold">{node.term}</span>
                  </div>

                  {/* CPU Metric Bar */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-[#9CA3AF]">CPU ALLOCATION</span>
                      <span className="text-white font-bold">{node.cpu}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#0F0D16] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          node.cpu > 75
                            ? 'bg-[#EF4444]'
                            : node.cpu > 40
                            ? 'bg-[#F59E0B]'
                            : 'bg-[#8B5CF6]'
                        }`}
                        style={{ width: `${node.cpu}%` }}
                      />
                    </div>
                  </div>

                  {/* Load / Memory Bar */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-[#9CA3AF]">RING BUFFER SATURATION</span>
                      <span className="text-white font-bold">{node.load}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#0F0D16] overflow-hidden">
                      <div
                        className="h-full bg-[#38BDF8] transition-all duration-300 rounded-full"
                        style={{ width: `${node.load}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Topology Event Stream Output */}
          <div className="rounded-xl bg-[#0A0810] border border-[#2A243D] p-4 text-xs font-mono">
            <div className="flex items-center justify-between text-[#8B5CF6] text-[11px] font-bold mb-3">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                DISTRIBUTED CLUSTER EVENT STREAM
              </span>
              <span className="text-[#9CA3AF] text-[10px]">AUTO-FLUSH BUFFER</span>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {eventLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    log.includes('[ALERT]')
                      ? 'text-[#EF4444]'
                      : log.includes('[TRAFFIC]')
                      ? 'text-[#F59E0B]'
                      : log.includes('[RAFT]')
                      ? 'text-[#38BDF8]'
                      : 'text-[#CBC3D7]'
                  }`}
                >
                  <span className="text-[#494454] mr-2">
                    {new Date().toISOString().substring(11, 19)}
                  </span>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
