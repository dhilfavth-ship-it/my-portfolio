import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { Github, ExternalLink, Code2, FolderGit2, CheckCircle2, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Distributed Engines', 'Cloud & Edge', 'Developer Tooling', 'AI Infrastructure'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#0D0B10] border-t border-[#1F1B26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181420] border border-[#2B2336] text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Section 04 · Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#9E97A6] mt-2 max-w-xl font-normal">
              A curated selection of high-impact full-stack and systems engineering projects showcasing clean code and practical problem-solving.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#E11D48] text-white font-semibold shadow-sm'
                    : 'bg-[#15121B] text-[#9E97A6] hover:text-white border border-[#251F2E]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#121017] border border-[#231E2C] hover:border-[#E11D48]/50 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm group hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Card Preview Window Header */}
                <div className="px-5 py-3.5 bg-[#17131E] border-b border-[#231E2C] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70 inline-block" />
                    <span className="ml-2 text-xs font-mono text-[#8E8798]">
                      {project.language}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-[#20192A] text-[#FB7185] border border-[#30263B]">
                    {project.category}
                  </span>
                </div>

                {/* Card Code/Architecture Preview Banner */}
                <div className="px-5 py-4 bg-[#0F0D14] border-b border-[#201B28] font-mono text-xs text-[#9E97A6] overflow-x-auto">
                  <div className="flex items-center justify-between text-[11px] text-[#6E6778] mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#E11D48]" />
                      {project.codeSnippet.filename}
                    </span>
                    <span>{project.version}</span>
                  </div>
                  <pre className="text-[12px] text-[#D4CEDB] leading-relaxed line-clamp-3 overflow-hidden select-none opacity-85">
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FB7185] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#E11D48] mt-1 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#C5BFCB] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Details / Problem Solved */}
                  <div className="space-y-1.5 pt-2 border-t border-[#201B28]">
                    {project.architectureDetails.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#9E97A6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#191522] border border-[#2B2336] text-[#D4CEDB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 py-4 bg-[#15121B] border-t border-[#201B28] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1B1624] border border-[#2C2438] hover:border-[#E11D48]/50 text-xs font-mono text-white hover:text-[#FB7185] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#FB7185]" />
                  <span>View Code</span>
                </a>

                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E11D48]/15 border border-[#E11D48]/30 hover:bg-[#E11D48] text-xs font-mono text-[#FB7185] hover:text-white transition-all duration-200"
                >
                  <span>Live Demo / Docs</span>
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
