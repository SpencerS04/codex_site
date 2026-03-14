import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import TerminalFrame from '../components/TerminalFrame';
import TypewriterText from '../components/TypewriterText';
import { focusAreas, projects, siteMeta, skillMatrix } from '../data/site';

export default function HomePage() {
  return (
    <div className="space-y-5">
      <Reveal>
        <TerminalFrame title="boot.sequence" badge="main">
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
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

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="terminal-panel">
                <p className="terminal-label">Domain</p>
                <p className="mt-3 font-display text-3xl uppercase tracking-[0.16em] text-terminal-text">
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

      <Reveal delay={90}>
        <TerminalFrame title="focus.map" badge="systems">
          <div className="grid gap-4 lg:grid-cols-3">
            {focusAreas.map((item, index) => (
              <div key={item.title} className="terminal-panel">
                <p className="terminal-label">sector.{index + 1}</p>
                <h2 className="mt-3 text-lg uppercase tracking-[0.18em] text-terminal-text">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-terminal-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </TerminalFrame>
      </Reveal>

      <Reveal delay={160}>
        <TerminalFrame title="profile.snapshot" badge="operator">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4 text-sm leading-8 text-terminal-muted sm:text-base">
              <p>
                This homepage keeps the terminal language, but the point is still clarity: show how the work fits
                together, what kinds of systems I build, and where to go next.
              </p>
              <p>
                The site is structured like one continuous workspace so new case studies, writing, and supporting
                details can slot in without turning the layout into a pile of disconnected panes.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {skillMatrix.map((group) => (
                <div key={group.label} className="terminal-panel">
                  <p className="terminal-label">{group.label}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.values.map((value) => (
                      <span key={value} className="terminal-chip">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TerminalFrame>
      </Reveal>
    </div>
  );
}
