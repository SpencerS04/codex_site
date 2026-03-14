import type { PropsWithChildren, ReactNode } from 'react';

type TerminalFrameProps = PropsWithChildren<{
  title: string;
  badge?: string;
  actions?: ReactNode;
  className?: string;
}>;

export default function TerminalFrame({
  title,
  badge,
  actions,
  className = '',
  children,
}: TerminalFrameProps) {
  return (
    <section className={`terminal-window ${className}`.trim()}>
      <div className="terminal-titlebar">
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.34em] text-terminal-muted">{title}</span>
          {badge ? <span className="terminal-badge">{badge}</span> : null}
        </div>
        {actions ? <div>{actions}</div> : null}
      </div>
      <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </section>
  );
}
