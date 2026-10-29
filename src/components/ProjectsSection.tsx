import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Github, ExternalLink, CheckCircle2, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Distributed Engines', 'Cloud & Edge', 'Developer Tooling', 'AI Infrastructure'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#0B0F19] border-t border-[#1E2A3A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6">
          <div>
            <p className="text-xs font-mono text-[#E8395A] uppercase tracking-[0.2em] mb-3">04 — Featured Projects</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-3xl sm:text-5xl font-black text-[#F0EBF5] tracking-tight leading-tight">
                Selected<br />
                <span className="text-[#FF6B8A]">Work</span>
              </h2>
              <p className="text-sm text-[#8B9BB4] max-w-xs leading-relaxed">
                High-impact full-stack and systems engineering projects — clean code, real problems.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-150 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#E8395A] text-white shadow-[0_2px_12px_rgba(232,57,90,0.35)]'
                    : 'bg-[#111827] text-[#8B9BB4] hover:text-[#F0EBF5] border border-[#1E2A3A] hover:border-[#E8395A]/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/40 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Card Header — code window style */}
              <div className="px-5 py-3.5 bg-[#0B0F19] border-b border-[#1E2A3A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                  <span className="ml-2 text-xs font-mono text-[#4A5568]">{project.language}</span>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#1A2035] text-[#FF6B8A] border border-[#E8395A]/20">
                  {project.category}
                </span>
              </div>

              {/* Code Preview */}
              <div className="px-5 py-4 bg-[#0D1220] border-b border-[#1E2A3A] font-mono overflow-x-auto">
                <div className="flex items-center justify-between text-[11px] text-[#4A5568] mb-2">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#E8395A]" />
                    {project.codeSnippet.filename}
                  </span>
                  <span className="text-[#FF6B8A]">{project.version}</span>
                </div>
                <pre className="text-[11px] text-[#8B9BB4] leading-relaxed line-clamp-3 overflow-hidden select-none">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-black text-[#F0EBF5] group-hover:text-[#FF6B8A] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-2xl font-black text-[#1E2A3A] font-mono shrink-0">
                      {project.projectNumber}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#E8395A] mt-1 font-semibold leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#8B9BB4] leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture highlights */}
                <div className="space-y-1.5 pt-2 border-t border-[#1E2A3A]">
                  {project.architectureDetails.slice(0, 2).map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#0B0F19] border border-[#1E2A3A] text-[#8B9BB4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 py-4 bg-[#0B0F19] border-t border-[#1E2A3A] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/40 text-xs font-mono text-[#8B9BB4] hover:text-[#FF6B8A] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Code</span>
                </a>

                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E8395A]/10 border border-[#E8395A]/25 hover:bg-[#E8395A] text-xs font-mono text-[#FF6B8A] hover:text-white transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
