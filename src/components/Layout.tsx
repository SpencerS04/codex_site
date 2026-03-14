import type { PropsWithChildren } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteMeta } from '../data/site';

const navItems = [
  { label: 'Main', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const pageLabels: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/contact': 'contact',
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

  return (
    <div className="min-h-screen bg-terminal-bg px-4 py-5 text-terminal-text sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="terminal-window">
          <div className="terminal-titlebar">
            <div className="flex items-center gap-2">
              <span className="window-dot bg-terminal-amber" />
              <span className="window-dot bg-terminal-accent" />
              <span className="window-dot bg-terminal-muted" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.34em] text-terminal-muted">
              {siteMeta.domain}
            </span>
          </div>
          <div className="grid gap-5 px-4 py-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-6">
            <div className="space-y-3">
              <p className="font-display text-4xl uppercase tracking-[0.18em] text-terminal-accent sm:text-5xl">
                {siteMeta.name}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-terminal-muted sm:text-base">
                {siteMeta.title}. Retro terminal shell outside, modern project presentation underneath.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="flex flex-wrap gap-2">
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
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-terminal-muted">
                <span className="status-pill">
                  <span className="status-dot" />
                  {siteMeta.status}
                </span>
                <span>{formatDate()}</span>
                <span>{pageLabels[location.pathname] ?? 'session'}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="terminal-window hidden h-fit lg:block">
            <div className="terminal-titlebar">
              <span className="text-[11px] uppercase tracking-[0.34em] text-terminal-muted">
                system-status
              </span>
            </div>
            <div className="space-y-6 px-5 py-5 text-sm">
              <section className="space-y-2">
                <p className="terminal-label">Location</p>
                <p className="leading-7 text-terminal-text">{siteMeta.location}</p>
              </section>
              <section className="space-y-2">
                <p className="terminal-label">Current Mode</p>
                <p className="leading-7 text-terminal-text">Building resilient systems and clean interfaces.</p>
              </section>
              <section className="space-y-2">
                <p className="terminal-label">Stack Bias</p>
                <ul className="space-y-2 text-terminal-muted">
                  <li>TypeScript-first delivery</li>
                  <li>GitHub-centered workflows</li>
                  <li>Automation over repetition</li>
                </ul>
              </section>
            </div>
          </aside>

          <main className="min-w-0">{children}</main>
        </div>

        <footer className="terminal-window">
          <div className="flex flex-col gap-3 px-4 py-4 text-xs uppercase tracking-[0.26em] text-terminal-muted sm:flex-row sm:items-center sm:justify-between">
            <span>{siteMeta.domain}</span>
            <span>Built with React, TypeScript, Tailwind, and GitHub Pages</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
