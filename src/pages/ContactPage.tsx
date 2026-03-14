import { useState } from 'react';
import Reveal from '../components/Reveal';
import TerminalFrame from '../components/TerminalFrame';
import { contactChannels, siteMeta } from '../data/site';

export default function ContactPage() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteMeta.email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }

    window.setTimeout(() => setCopyState('idle'), 2000);
  }

  return (
    <div className="space-y-6">
      <Reveal>
        <TerminalFrame title="contact.channel" badge="open">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <h1 className="font-display text-5xl uppercase tracking-[0.14em] text-terminal-text sm:text-6xl">
                Reach out.
              </h1>
              <p className="max-w-2xl text-sm leading-8 text-terminal-muted sm:text-base">
                The site is static by design, so the fastest route is direct contact. Use email for opportunities,
                consulting, collaboration, or interesting infrastructure problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="terminal-button" href={`mailto:${siteMeta.email}`}>
                  Send email
                </a>
                <button type="button" className="terminal-button terminal-button-muted" onClick={copyEmail}>
                  {copyState === 'copied'
                    ? 'Email copied'
                    : copyState === 'error'
                      ? 'Clipboard blocked'
                      : 'Copy email'}
                </button>
              </div>
            </div>
            <div className="terminal-panel">
              <p className="terminal-label">Preferred Contact</p>
              <p className="mt-3 text-xl uppercase tracking-[0.18em] text-terminal-accent">{siteMeta.email}</p>
              <p className="mt-4 text-sm leading-7 text-terminal-muted">
                Short project summary, scope, timeline, and current constraints are enough to start a useful
                conversation.
              </p>
            </div>
          </div>
        </TerminalFrame>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <TerminalFrame title="contact.methods" badge="index">
            <div className="space-y-4">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="terminal-panel">
                  <p className="terminal-label">{channel.label}</p>
                  {channel.href ? (
                    <a
                      className="mt-3 block text-lg uppercase tracking-[0.14em] text-terminal-text transition hover:text-terminal-accent"
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-lg uppercase tracking-[0.14em] text-terminal-text">{channel.value}</p>
                  )}
                  <p className="mt-3 text-sm leading-7 text-terminal-muted">{channel.note}</p>
                </div>
              ))}
            </div>
          </TerminalFrame>
        </Reveal>

        <Reveal delay={100}>
          <TerminalFrame title="contact.quickstart" badge="guide">
            <div className="space-y-5">
              <div className="terminal-panel">
                <p className="terminal-label">Recommended Message Format</p>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-terminal-text">
{`subject: Project inquiry
scope: what needs to be built or fixed
timeline: target date or urgency
stack: current tools or environment
context: blockers, risks, or constraints`}
                </pre>
              </div>
              <div className="terminal-panel">
                <p className="terminal-label">Response Pattern</p>
                <p className="mt-3 text-sm leading-7 text-terminal-muted">
                  A good first exchange usually clarifies the problem, identifies the shortest path to value, and
                  avoids prematurely locking into a tool choice before the constraints are clear.
                </p>
              </div>
            </div>
          </TerminalFrame>
        </Reveal>
      </div>
    </div>
  );
}
