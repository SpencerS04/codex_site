import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import TerminalFrame from '../components/TerminalFrame';
import TypewriterText from '../components/TypewriterText';
import { focusAreas, projects, siteMeta, skillMatrix } from '../data/site';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Reveal>
        <TerminalFrame title="boot.sequence" badge="main">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <p className="terminal-label">$ init portfolio --profile engineering</p>
              <h1 className="max-w-3xl font-display text-5xl uppercase leading-none tracking-[0.12em] text-terminal-text sm:text-6xl">
                Terminal-first portfolio for software and infrastructure work.
              </h1>
              <p className="max-w-2xl text-sm leading-8 text-terminal-muted sm:text-base">
                <TypewriterText text="Shipping reliable systems, clean interfaces, and operationally sane tooling." />
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="terminal-button" to="/projects">
                  Inspect projects
                </Link>
                <Link className="terminal-button terminal-button-muted" to="/contact">
                  Open contact channel
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="terminal-panel">
                <p className="terminal-label">Domain</p>
                <p className="mt-3 font-display text-3xl uppercase tracking-[0.16em] text-terminal-accent">
                  {siteMeta.domain}
                </p>
              </div>
              <div className="terminal-panel">
                <p className="terminal-label">Role Focus</p>
                <p className="mt-3 text-sm leading-7 text-terminal-text">
                  IT operations, software engineering, platform tooling, and maintainable delivery pipelines.
                </p>
              </div>
              <div className="terminal-panel">
                <p className="terminal-label">Portfolio State</p>
                <p className="mt-3 text-sm leading-7 text-terminal-text">
                  {projects.length} project slots loaded and ready for case-study expansion.
                </p>
              </div>
            </div>
          </div>
        </TerminalFrame>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {focusAreas.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <TerminalFrame title={`focus.${index + 1}`} badge="signal" className="h-full">
              <h2 className="text-lg uppercase tracking-[0.18em] text-terminal-text">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-terminal-muted">{item.copy}</p>
            </TerminalFrame>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <TerminalFrame title="operator.log" badge="about">
            <div className="space-y-4 text-sm leading-8 text-terminal-muted sm:text-base">
              <p>
                This homepage is styled like a stripped-down terminal, but the real objective is clarity:
                communicate technical range, show how projects fit together, and make it obvious how to get in touch.
              </p>
              <p>
                The layout is intentionally modular so new work, writing, certifications, and project detail pages
                can be layered in without throwing away the visual system.
              </p>
            </div>
          </TerminalFrame>
        </Reveal>

        <Reveal delay={120}>
          <TerminalFrame title="stack.snapshot" badge="matrix">
            <div className="space-y-5">
              {skillMatrix.map((group) => (
                <div key={group.label}>
                  <p className="terminal-label">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.values.map((value) => (
                      <span key={value} className="terminal-chip">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TerminalFrame>
        </Reveal>
      </div>
    </div>
  );
}
