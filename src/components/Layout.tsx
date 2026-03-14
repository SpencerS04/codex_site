import type { PropsWithChildren } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteMeta } from '../data/site';

const navItems = [
  { label: 'Main', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const pageMeta: Record<string, { label: string; summary: string }> = {
  '/': {
    label: 'home',
    summary: 'Overview of focus areas, current stack, and the core direction of the portfolio.',
  },
  '/about': {
    label: 'about',
    summary: 'Background, working principles, and the kinds of systems and interfaces I prefer to build.',
  },
  '/projects': {
    label: 'projects',
    summary: 'A browsable project index with one active case study open inside the workspace at a time.',
  },
  '/contact': {
    label: 'contact',
    summary: 'Direct contact paths, preferred message format, and the fastest way to start a useful conversation.',
  },
};

function formatDate() {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date());
}

export default function Layout({ children }: PropsWithChildren) {
  const location = useLocation();
  const currentPage = pageMeta[location.pathname] ?? {
    label: 'session',
    summary: 'Portfolio workspace',
  };

  return (
    <div className="min-h-screen bg-terminal-bg px-4 py-5 text-terminal-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="terminal-shell">
          <div className="terminal-titlebar px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="window-dot bg-terminal-signal" />
              <span className="text-[11px] uppercase tracking-[0.34em] text-terminal-muted">
                terminal://{siteMeta.domain}
              </span>
            </div>
            <div className="hidden items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-terminal-muted sm:flex">
              <span>{formatDate()}</span>
              <span>{currentPage.label}</span>
            </div>
          </div>

          <div className="border-b border-terminal-border/70 px-5 py-5 sm:px-6">
            <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
              <div className="space-y-3">
                <p className="font-display text-4xl uppercase tracking-[0.18em] text-terminal-text sm:text-5xl">
                  {siteMeta.name}
                </p>
                <p className="max-w-3xl text-sm leading-7 text-terminal-muted sm:text-base">
                  {siteMeta.title}. Retro terminal cues, but organized like one continuous operator workspace.
                </p>
              </div>
              <div className="space-y-4 xl:text-right">
                <div className="flex flex-wrap gap-0 border-b border-terminal-border/70 xl:ml-auto xl:w-fit xl:justify-end">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? 'menu-link menu-link-active' : 'menu-link'
                      }
                      end={item.to === '/'}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-terminal-muted xl:justify-end">
                  <span className="status-pill">
                    <span className="status-dot" />
                    {siteMeta.status}
                  </span>
                  <span>{siteMeta.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="border-b border-terminal-border/70 px-5 py-5 sm:px-6 xl:border-b-0 xl:border-r">
              <div className="space-y-6 text-sm">
                <section className="space-y-2">
                  <p className="terminal-label">Session</p>
                  <p className="leading-7 text-terminal-text">{currentPage.summary}</p>
                </section>
                <section className="space-y-2">
                  <p className="terminal-label">Location</p>
                  <p className="leading-7 text-terminal-text">{siteMeta.location}</p>
                </section>
                <section className="space-y-2">
                  <p className="terminal-label">Current Mode</p>
                  <p className="leading-7 text-terminal-text">
                    Building resilient systems and clean interfaces with a practical operator mindset.
                  </p>
                </section>
                <section className="space-y-2">
                  <p className="terminal-label">Stack Bias</p>
                  <ul className="space-y-2 leading-7 text-terminal-muted">
                    <li>TypeScript-first delivery</li>
                    <li>GitHub-centered workflows</li>
                    <li>Automation over repetition</li>
                  </ul>
                </section>
              </div>
            </aside>

            <main className="min-w-0 px-5 py-6 sm:px-6">{children}</main>
          </div>

          <footer className="flex flex-col gap-3 border-t border-terminal-border/70 px-5 py-4 text-xs uppercase tracking-[0.26em] text-terminal-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <span>{siteMeta.domain}</span>
            <span>Built with React, TypeScript, Tailwind, and GitHub Pages</span>
          </footer>
        </section>
      </div>
    </div>
  );
}
