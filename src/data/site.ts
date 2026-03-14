export const siteMeta = {
  name: "Spencer Stephen",
  domain: "spncrstphn.dev",
  title: "Software Engineering + IT Systems",
  status: "Available for engineering and infrastructure work",
  location: "British Columbia, Canada",
  email: "spncrstphn14@gmail.com",
  github: "https://github.com/SpencerS04",
};

export const focusAreas = [
  {
    title: "Systems Thinking",
    copy: "Designing software and infrastructure with calm operational behavior, clear ownership, and measurable outcomes.",
  },
  {
    title: "Practical Automation",
    copy: "Eliminating repetitive work with scripts, CI/CD pipelines, provisioning templates, and internal tooling that teams actually use.",
  },
  {
    title: "Secure Delivery",
    copy: "Building with least-privilege defaults, sensible observability, and maintainable deployment paths from day one.",
  },
];

export const skillMatrix = [
  {
    label: "Languages",
    values: ["C", "Rust", "Java", "Python"],
  },
  {
    label: "Frontend",
    values: ["React", "Tailwind CSS", "Vite", "Accessible UI"],
  },
  {
    label: "Platform",
    values: ["Linux", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    label: "Ops",
    values: [
      "Monitoring",
      "Infrastructure as Code",
      "Incident Response",
      "Automation",
    ],
  },
];

export const experienceNotes = [
  {
    title: "Operator mindset",
    copy: "I build for maintainability first: clean interfaces, transparent systems, and enough instrumentation to understand what is happening in production.",
  },
  {
    title: "Engineering leverage",
    copy: "The best internal tools reduce context switching, shorten response time, and make the next person faster than the last.",
  },
  {
    title: "Portfolio-ready delivery",
    copy: "This site is structured so project case studies, live links, and writing samples can be added quickly without redesigning the foundation.",
  },
];

export const projects = [
  {
    id: "observability",
    name: "Homelab Observability Stack",
    status: "Online",
    period: "2025",
    summary:
      "A monitoring stack for self-hosted services with dashboards, alert routing, and uptime tracking across core infrastructure.",
    impact: [
      "Centralized metrics and log visibility for services running across multiple nodes.",
      "Reduced time-to-diagnosis with lightweight health checks and alert thresholds.",
      "Documented recovery steps and automated service restarts for common failures.",
    ],
    stack: ["Docker", "Prometheus", "Grafana", "GitHub Actions"],
  },
  {
    id: "automation",
    name: "Incident Automation Toolkit",
    status: "Active",
    period: "2024",
    summary:
      "A collection of scripts and workflow helpers to turn repetitive operational triage into repeatable, documented actions.",
    impact: [
      "Automated environment inspection and standardized incident snapshots.",
      "Cut repetitive command-line setup with reusable command runners.",
      "Created a cleaner paper trail for follow-up and root-cause analysis.",
    ],
    stack: ["TypeScript", "Node.js", "Bash", "GitHub CLI"],
  },
  {
    id: "device-onboarding",
    name: "Zero-Trust Device Onboarding",
    status: "Prototype",
    period: "2024",
    summary:
      "A secure enrollment flow for workstations that enforces baseline policy, inventory registration, and access checks early.",
    impact: [
      "Moved access validation and machine hardening into a predictable first-run flow.",
      "Improved provisioning consistency across development and support devices.",
      "Prepared the system for future SSO, MDM, and secrets rotation integration.",
    ],
    stack: ["React", "TypeScript", "API Integration", "Security Policy"],
  },
  {
    id: "dashboard",
    name: "Reliability Command Dashboard",
    status: "Shipped",
    period: "2023",
    summary:
      "A compact internal dashboard that surfaces deployment health, queue status, and incident context in a single operator-focused UI.",
    impact: [
      "Consolidated multiple operational signals into one low-friction interface.",
      "Reduced context switching during deploys and live incident coordination.",
      "Made status communication faster for both technical and non-technical stakeholders.",
    ],
    stack: ["React", "Tailwind CSS", "REST APIs", "Service Telemetry"],
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "spncrstphn14@gmail.com",
    href: "mailto:spncrstphn14@gmail.com",
    note: "Best for project inquiries and technical discussions.",
  },
  {
    label: "GitHub",
    value: "github.com/SpencerS04",
    href: "https://github.com/SpencerS04",
    note: "Code samples, project repos, and contribution history.",
  },
  {
    label: "Timezone",
    value: "America/Vancouver",
    href: "",
    note: "Typically responsive during Pacific business hours.",
  },
];
