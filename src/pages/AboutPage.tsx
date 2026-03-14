import Reveal from '../components/Reveal';
import TerminalFrame from '../components/TerminalFrame';
import { experienceNotes, skillMatrix } from '../data/site';

const operatingPrinciples = [
  'Build for the on-call version of yourself.',
  'Prefer understandable systems over clever ones.',
  'Automate only after the failure modes are visible.',
  'Treat documentation as part of the product.',
];

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <Reveal>
        <TerminalFrame title="profile.readme" badge="about">
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4 text-sm leading-8 text-terminal-muted sm:text-base">
                <p>
                  I work in the overlap between software engineering and practical IT: shipping interfaces,
                  automating repetitive tasks, and building infrastructure that is easier to operate tomorrow than it
                  was yesterday.
                </p>
                <p>
                  The projects that matter most to me remove friction. That can mean a faster deployment path, a
                  cleaner dashboard during an incident, or a workflow that saves the team from memorizing another five
                  commands.
                </p>
              </div>
              <div className="terminal-panel">
                <p className="terminal-label">Operating Principles</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-terminal-text">
                  {operatingPrinciples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {experienceNotes.map((note, index) => (
                <div key={note.title} className="terminal-panel">
                  <p className="terminal-label">note.{index + 1}</p>
                  <h2 className="mt-3 text-lg uppercase tracking-[0.18em] text-terminal-text">{note.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-terminal-muted">{note.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </TerminalFrame>
      </Reveal>

      <Reveal delay={100}>
        <TerminalFrame title="skill.matrix" badge="capabilities">
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
        </TerminalFrame>
      </Reveal>
    </div>
  );
}
