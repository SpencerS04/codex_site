import { useState } from 'react';
import Reveal from '../components/Reveal';
import TerminalFrame from '../components/TerminalFrame';
import { projects } from '../data/site';

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState(projects[0]?.id ?? '');

  return (
    <div className="space-y-6">
      <Reveal>
        <TerminalFrame title="projects.index" badge="portfolio">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              <h1 className="font-display text-5xl uppercase tracking-[0.14em] text-terminal-text sm:text-6xl">
                Selected work.
              </h1>
              <p className="max-w-2xl text-sm leading-8 text-terminal-muted sm:text-base">
                Each card below opens inline so the page keeps a command-console feel while still carrying useful
                project detail. Replace the placeholder case studies with your own repos, demos, and outcomes.
              </p>
            </div>
            <div className="terminal-panel">
              <p className="terminal-label">Interaction</p>
              <p className="mt-3 text-sm leading-7 text-terminal-text">
                Click any project card to expand the implementation notes, stack, and delivery impact.
              </p>
            </div>
          </div>
        </TerminalFrame>
      </Reveal>

      <div className="space-y-4">
        {projects.map((project, index) => {
          const isExpanded = expandedProjectId === project.id;

          return (
            <Reveal key={project.id} delay={index * 80}>
              <TerminalFrame
                title={`project.${project.id}`}
                badge={project.status}
                className={isExpanded ? 'ring-1 ring-terminal-accent/40' : ''}
                actions={
                  <button
                    type="button"
                    className="terminal-inline-button"
                    onClick={() =>
                      setExpandedProjectId((current) => (current === project.id ? '' : project.id))
                    }
                  >
                    {isExpanded ? 'collapse' : 'inspect'}
                  </button>
                }
              >
                <div className="space-y-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-xl uppercase tracking-[0.18em] text-terminal-text">{project.name}</h2>
                      <p className="mt-2 text-sm leading-7 text-terminal-muted">{project.summary}</p>
                    </div>
                    <p className="terminal-label">{project.period}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="terminal-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  {isExpanded ? (
                    <div className="grid gap-4 border-t border-terminal-border pt-5 lg:grid-cols-[0.85fr_1.15fr]">
                      <div className="terminal-panel">
                        <p className="terminal-label">Deployment Notes</p>
                        <p className="mt-3 text-sm leading-7 text-terminal-text">
                          Structured as a portfolio card with room for live links, architecture notes, screenshots,
                          and measurable outcomes.
                        </p>
                      </div>
                      <div>
                        <p className="terminal-label">Impact</p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-terminal-muted">
                          {project.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </TerminalFrame>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
