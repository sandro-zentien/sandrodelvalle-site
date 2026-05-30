import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 'zentien',
    name: 'Zentien',
    tagline: 'Salesforce Reliability Platform',
    description:
      'Real-time monitoring, alerting, and observability for Salesforce orgs. Zentien surfaces reliability risks before they become incidents — giving platform teams the visibility they need to ship with confidence.',
    url: 'https://zentien.io',
    urlLabel: 'zentien.io',
    status: 'Live',
    tags: ['SaaS', 'Salesforce', 'DevOps'],
    accent: 'blue',
  },
  {
    id: 'scorewell',
    name: 'ScoreWell',
    tagline: 'Health & Benefits Platform',
    description:
      'A private health platform built for MGM — connects HR, employees, health coaches, and doctors. Calculates a personalized health score based on lab results and delivers tailored recommendations from certified health coaches.',
    url: null,
    urlLabel: 'Private / Client Project',
    status: 'Delivered',
    tags: ['HealthTech', 'HR', 'Full-Stack'],
    accent: 'rose',
  },
  {
    id: 'lensy',
    name: 'Lensy',
    tagline: 'Optical Business Platform · by Zentien',
    description:
      'A full business platform built for Laboratorio del Valle — a webstore for glasses, frames, and prescription lenses, patient accounts with prescription history, appointment and calendar management, automatic lab order routing, and a complete POS and order tracker for the lab floor.',
    url: null,
    urlLabel: 'Private / Family Business',
    status: 'Live',
    tags: ['Ecommerce', 'Full-Stack', 'Healthcare'],
    accent: 'teal',
  },
  {
    id: 'tripflow',
    name: 'TripFlow',
    tagline: 'Social Travel App',
    description:
      'A social travel app that turns group travel planning into a shared experience — collaborative itineraries, real-time coordination, and travel memories built around the people you explore with. Available as a PWA with a full React Native + Expo mobile app in development.',
    url: null,
    urlLabel: 'Coming Soon',
    status: 'In Development',
    tags: ['React Native', 'Expo', 'PWA'],
    accent: 'amber',
  },
  {
    id: 'blueberry',
    name: 'BlueBerry',
    tagline: 'Enterprise Operations Platform',
    description:
      'A near-full ERP built from scratch at DASI — covering parts and inventory management, warehouse locations and transfers, document management, sales and purchase orders, repair orders, accounts, invoicing with automated email delivery, and a real-time sales order tracker. Ran in production for years before being succeeded by Salesforce.',
    url: null,
    urlLabel: 'Internal System',
    status: 'Succeeded',
    tags: ['ERP', 'Full-Stack', 'Enterprise'],
    accent: 'purple',
  },
  {
    id: 'docmanager',
    name: 'SF Document Manager',
    tagline: 'Salesforce Document Platform',
    description:
      'A custom document management system built inside Salesforce at DASI — LWC frontend, .NET API backend, Azure Blob Storage for files, and SQL Server for metadata. Documents are linked directly to Salesforce records, giving the entire org seamless, in-platform access.',
    url: null,
    urlLabel: 'Internal System',
    status: 'Live',
    tags: ['Salesforce', 'LWC', 'Azure', '.NET'],
    accent: 'teal',
  },
  {
    id: 'zenbook',
    name: 'Zenbook',
    tagline: 'Personal Finance Platform',
    description:
      'A personal finance web app designed to bring clarity to your money — tracking, planning, and insights built around how real people actually spend and save. Mobile app coming in a future release.',
    url: null,
    urlLabel: 'In Development',
    status: 'In Development',
    tags: ['Fintech', 'Web', 'React'],
    accent: 'green',
  },
  {
    id: 'lifepulse',
    name: 'LifePulse',
    tagline: 'Wellness Platform',
    description:
      'A wellness platform designed to help people build healthier habits — tracking, guidance, and personalized insights that fit into everyday life rather than demanding a lifestyle overhaul.',
    url: null,
    urlLabel: 'In Development',
    status: 'In Development',
    tags: ['Wellness', 'Full-Stack'],
    accent: 'rose',
  },
  {
    id: 'more',
    name: 'Always Building. Always Learning.',
    tagline: 'More Projects',
    description:
      'New ideas in progress across different domains and technologies. This list keeps growing — it always has. Follow along on GitHub to see what comes next.',
    url: 'https://github.com/sandro-zentien',
    urlLabel: 'github.com/sandro-zentien',
    status: 'Ongoing',
    tags: ['Open Source', 'GitHub'],
    accent: 'blue',
  },
]

const ACCENT = {
  blue:   { card: 'glass-card-blue',   hud: '',        dot: {},                                                                    badge: { borderColor: 'rgba(0,170,255,0.2)',   background: 'rgba(0,170,255,0.06)'   }, label: 'rgba(0,170,255,0.55)',   status: 'rgba(0,170,255,0.7)',   tag: { color: 'rgba(0,170,255,0.5)',   borderColor: 'rgba(0,170,255,0.15)',   background: 'rgba(0,170,255,0.04)'   }, link: { text: 'rgba(0,170,255,0.6)',   icon: '#00aaff'   } },
  amber:  { card: 'glass-card-amber',  hud: 'amber',   dot: { background: '#f5a623', boxShadow: '0 0 6px rgba(245,166,35,0.8)'  }, badge: { borderColor: 'rgba(245,166,35,0.25)', background: 'rgba(245,166,35,0.06)' }, label: 'rgba(245,166,35,0.55)', status: 'rgba(245,166,35,0.7)', tag: { color: 'rgba(245,166,35,0.5)', borderColor: 'rgba(245,166,35,0.15)', background: 'rgba(245,166,35,0.04)' }, link: { text: 'rgba(245,166,35,0.6)', icon: '#f5a623' } },
  purple: { card: 'glass-card-purple', hud: 'purple',  dot: { background: '#a855f7', boxShadow: '0 0 6px rgba(168,85,247,0.8)'  }, badge: { borderColor: 'rgba(168,85,247,0.25)', background: 'rgba(168,85,247,0.06)' }, label: 'rgba(168,85,247,0.55)', status: 'rgba(168,85,247,0.7)', tag: { color: 'rgba(168,85,247,0.5)', borderColor: 'rgba(168,85,247,0.15)', background: 'rgba(168,85,247,0.04)' }, link: { text: 'rgba(168,85,247,0.5)', icon: '#a855f7' } },
  teal:   { card: 'glass-card-teal',   hud: 'teal',    dot: { background: '#14b8a6', boxShadow: '0 0 6px rgba(20,184,166,0.8)'  }, badge: { borderColor: 'rgba(20,184,166,0.25)',  background: 'rgba(20,184,166,0.06)'  }, label: 'rgba(20,184,166,0.55)',  status: 'rgba(20,184,166,0.7)',  tag: { color: 'rgba(20,184,166,0.5)',  borderColor: 'rgba(20,184,166,0.15)',  background: 'rgba(20,184,166,0.04)'  }, link: { text: 'rgba(20,184,166,0.5)',  icon: '#14b8a6'  } },
  rose:   { card: 'glass-card-rose',   hud: 'rose',    dot: { background: '#fb7185', boxShadow: '0 0 6px rgba(251,113,133,0.8)' }, badge: { borderColor: 'rgba(251,113,133,0.25)', background: 'rgba(251,113,133,0.06)' }, label: 'rgba(251,113,133,0.55)', status: 'rgba(251,113,133,0.7)', tag: { color: 'rgba(251,113,133,0.5)', borderColor: 'rgba(251,113,133,0.15)', background: 'rgba(251,113,133,0.04)' }, link: { text: 'rgba(251,113,133,0.5)', icon: '#fb7185' } },
  green:  { card: 'glass-card-green',  hud: 'green',   dot: { background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.8)'   }, badge: { borderColor: 'rgba(34,197,94,0.25)',   background: 'rgba(34,197,94,0.06)'   }, label: 'rgba(34,197,94,0.55)',   status: 'rgba(34,197,94,0.7)',   tag: { color: 'rgba(34,197,94,0.5)',   borderColor: 'rgba(34,197,94,0.15)',   background: 'rgba(34,197,94,0.04)'   }, link: { text: 'rgba(34,197,94,0.5)',   icon: '#22c55e'   } },
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView()
  const a = ACCENT[project.accent]

  return (
    <div
      ref={ref}
      className={`${a.card} relative p-7 md:p-8 flex flex-col gap-6 group cursor-default fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* HUD corners */}
      <span className={`hud-tl ${a.hud ? `hud-tl-${a.hud}` : ''}`} />
      <span className={`hud-tr ${a.hud ? `hud-tr-${a.hud}` : ''}`} />
      <span className={`hud-bl ${a.hud ? `hud-bl-${a.hud}` : ''}`} />
      <span className={`hud-br ${a.hud ? `hud-br-${a.hud}` : ''}`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mono-label mb-2" style={{ color: a.label }}>
            {project.tagline}
          </div>
          <h3 className="font-sans text-2xl font-semibold text-white">
            {project.name}
          </h3>
        </div>

        {/* Status badge */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-sm border shrink-0"
          style={a.badge}
        >
          <span className="status-dot" style={a.dot} />
          <span
            className="font-mono text-[9px] tracking-[0.15em] uppercase"
            style={{ color: a.status }}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm border"
            style={a.tag}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <div className="pt-2 border-t border-white/5">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group/link"
          >
            <span
              className="font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-200"
              style={{ color: a.link.text }}
            >
              {project.urlLabel}
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 -translate-y-0.5 transition-all duration-200"
              style={{ color: a.link.icon }}
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <span
            className="font-mono text-[10px] tracking-[0.14em] uppercase"
            style={{ color: a.link.text }}
          >
            {project.urlLabel}
          </span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [tagRef, tagInView] = useInView()

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section tag */}
        <div
          ref={tagRef}
          className={`section-tag mb-10 fade-up ${tagInView ? 'visible' : ''}`}
        >
          <span className="h-px w-6 bg-electric/40" />
          <span>02 :: Projects</span>
        </div>

        <div className={`mb-8 fade-up ${tagInView ? 'visible' : ''}`} style={{ transitionDelay: '60ms' }}>
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white leading-snug">
            Things I've shipped.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
