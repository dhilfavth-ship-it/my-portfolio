import React, { useState } from 'react';
import { PORTFOLIO_INFO, EXPERIENCES, TECH_SKILLS } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedMd, setCopiedMd] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateMarkdownResume = () => {
    return `# ${PORTFOLIO_INFO.name}
**${PORTFOLIO_INFO.role}**
Location: ${PORTFOLIO_INFO.location} | Email: ${PORTFOLIO_INFO.socials.email} | GitHub: ${PORTFOLIO_INFO.socials.github}

---

## Executive Summary
${PORTFOLIO_INFO.bio}

## Core Competencies
- **Languages:** Rust, TypeScript, Go, C++, Python, SQL
- **Distributed Systems:** Raft Consensus, CRDTs, Vector Clocks, Pipelined Serialization, Event Sourcing
- **Cloud & Edge:** Kubernetes, eBPF, Docker, Cloudflare Workers, AWS, Terraform
- **Databases:** PostgreSQL, Citus, Redis Cluster, Apache Kafka, ClickHouse, RocksDB

## Professional Experience
${EXPERIENCES.map(
  (e) => `
### ${e.role} — ${e.company}
*${e.period} | ${e.location}*
${e.summary}
Key Accomplishments:
${e.metrics.map((m) => `- ${m}`).join('\n')}
${e.achievements.map((a) => `- ${a}`).join('\n')}
Technologies: ${e.techStack.join(', ')}
`
).join('\n')}

## Education
- **B.S. in Computer Science & Distributed Systems** — University of Illinois Urbana-Champaign (2012 - 2016)
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownResume());
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdownResume();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Fathima_Dhilfa_Full_Stack_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#09080A]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#110F14] border border-[#2B2230] shadow-[0_24px_64px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16131A] border-b border-[#2B2230]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#E11D48]" />
            <span className="text-sm font-mono font-bold text-white tracking-wider">
              CURRICULUM VITAE // FATHIMA DHILFA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#110F14] border border-[#2B2230] text-xs font-mono text-[#D4CEDB] hover:text-white hover:border-[#E11D48] transition-colors cursor-pointer"
              title="Print Document / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#110F14] border border-[#2B2230] text-xs font-mono text-[#D4CEDB] hover:text-white hover:border-[#E11D48] transition-colors cursor-pointer"
              title="Download as Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download .MD</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="p-1.5 rounded-lg bg-[#110F14] border border-[#2B2230] text-[#D4CEDB] hover:text-white cursor-pointer"
              title="Copy Markdown"
            >
              {copiedMd ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#110F14] border border-[#2B2230] text-[#9B93A2] hover:text-white hover:border-[#E11D48] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0D0B10] text-[#D4CEDB] font-sans printable-area">
          {/* Header */}
          <div className="border-b border-[#2B2230] pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PORTFOLIO_INFO.name}
            </h1>
            <div className="text-sm font-mono text-[#E11D48] font-medium mt-1">
              {PORTFOLIO_INFO.role} · {PORTFOLIO_INFO.roleSecondary}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#9B93A2] mt-3">
              <span>{PORTFOLIO_INFO.location}</span>
              <span>·</span>
              <a href={`mailto:${PORTFOLIO_INFO.socials.email}`} className="text-[#FB7185] underline">
                {PORTFOLIO_INFO.socials.email}
              </a>
              <span>·</span>
              <span>Website: {PORTFOLIO_INFO.socials.website}</span>
            </div>
            <p className="text-sm text-[#C0B9C6] mt-3 leading-relaxed">
              {PORTFOLIO_INFO.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-[#E11D48] tracking-widest uppercase">
              PROFESSIONAL HISTORY
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2 border-b border-[#2B2230]/60 pb-5 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-white text-base">
                      {exp.role} <span className="text-[#FB7185]">@ {exp.company}</span>
                    </span>
                    <span className="font-mono text-xs text-[#9B93A2]">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-[#C0B9C6] leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-1 pt-1">
                    {exp.metrics.concat(exp.achievements).slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#C0B9C6]">
                        <span className="text-[#E11D48] font-bold">›</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-[#9B93A2] pt-1">
                    <span className="text-[#E11D48]">Stack:</span> {exp.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Core Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#2B2230]">
            <div>
              <h2 className="text-xs font-mono font-bold text-[#E11D48] tracking-widest uppercase mb-3">
                EDUCATION
              </h2>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white">B.S. in Computer Science & Software Engineering</div>
                <div className="text-xs text-[#FB7185]">University of Illinois Urbana-Champaign</div>
                <div className="text-xs text-[#9B93A2] font-mono">2016 - 2020 · First Class Honors</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold text-[#E11D48] tracking-widest uppercase mb-3">
                SELECTED PATENTS & RFCs
              </h2>
              <div className="space-y-2 text-xs text-[#C0B9C6]">
                <div>• US Patent #10,892,104: Pipelined zero-copy packet serialization in userspace ring buffers.</div>
                <div>• RFC-281: Deterministic state machine compaction over asymmetric WAN links.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
