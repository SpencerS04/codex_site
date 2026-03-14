import { useState } from 'react';
import Reveal from '../components/Reveal';
import TerminalFrame from '../components/TerminalFrame';
import { projects } from '../data/site';

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? '');
  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <div className="space-y-5">
      <Reveal>
        <TerminalFrame title="projects.index" badge="portfolio">
          <div className="space-y-6">
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-4">
                <h1 className="font-display text-5xl uppercase tracking-[0.14em] text-terminal-text sm:text-6xl">
                  Selected work.
                </h1>
                <p className="max-w-2xl text-sm leading-8 text-terminal-muted sm:text-base">
                  The project section now behaves more like a tabbed workspace: one index on the left, one active case
                  study on the right, and the context stays inside the same parent frame.
                </p>
              </div>
              <div className="terminal-panel">
                <p className="terminal-label">Interaction</p>
                <p className="mt-3 text-sm leading-7 text-terminal-text">
                  Select a project to load its implementation notes, stack, and delivery impact without breaking out
                  into a new floating window.
                </p>
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-3">
                {projects.map((project, index) => {
                  const isActive = activeProject?.id === project.id;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      className={`terminal-panel w-full text-left transition duration-200 ${
                        isActive ? 'border-terminal-accent bg-terminal-accent/10' : 'hover:border-terminal-accent/30'
                      }`}
                      onClick={() => setActiveProjectId(project.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="terminal-label">slot.{index + 1}</p>
                          <h2 className="mt-3 text-lg uppercase tracking-[0.18em] text-terminal-text">
                            {project.name}
                          </h2>
                        </div>
                        <span className="terminal-badge">{project.status}</span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-terminal-muted">{project.summary}</p>
                      <div className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-terminal-muted">
                        <span>{project.period}</span>
                        <span>{isActive ? 'active' : 'inspect'}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {activeProject ? (
                <div className="terminal-panel space-y-6">
                  <div className="flex flex-col gap-3 border-b border-terminal-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="terminal-label">active.case</p>
                      <h2 className="mt-3 text-2xl uppercase tracking-[0.18em] text-terminal-text">
                        {activeProject.name}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-terminal-muted">
                        {activeProject.summary}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-terminal-muted">
                      <span>{activeProject.period}</span>
                      <span className="terminal-badge">{activeProject.status}</span>
                    </div>
                  </div>

                  <div>
                    <p className="terminal-label">Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.stack.map((item) => (
                        <span key={item} className="terminal-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
                    <div className="terminal-panel">
                      <p className="terminal-label">Deployment Notes</p>
                      <p className="mt-3 text-sm leading-7 text-terminal-text">
                        Structured as a case-study slot with room for live links, architecture notes, screenshots, and
                        measurable outcomes without changing the surrounding page layout.
                      </p>
                    </div>
                    <div>
                      <p className="terminal-label">Impact</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-terminal-muted">
                        {activeProject.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </TerminalFrame>
      </Reveal>
    </div>
  );
}
