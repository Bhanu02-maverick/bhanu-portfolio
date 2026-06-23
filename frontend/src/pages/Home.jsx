import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Rocket,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';

function FadeUp({ children, delay = 0, className = '' }) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const serviceIcons = [Code2, BrainCircuit, ShieldCheck];

export default function Home() {
  const featuredProjects = data.projects.slice(0, 3);

  return (
    <main className="overflow-hidden">
      <section className="hero-surface relative min-h-screen px-6 pt-28 pb-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-weave absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#080a0f] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto min-h-[calc(100vh-7rem)] grid lg:grid-cols-[1.12fr_0.88fr] gap-12 items-center">
          <div className="space-y-8">
            <FadeUp>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-display font-semibold text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse-slow" />
                  Open to internships and full-time roles
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  <MapPin size={15} />
                  {data.location}
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div>
                <p className="mb-4 text-sm font-mono uppercase tracking-[0.28em] text-lime-200/80">Full Stack. AI. Cloud.</p>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] text-white md:text-7xl lg:text-8xl">
                  Portfolio built around real projects, clean interfaces, and strong fundamentals.
                </h1>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                {data.name} is a {data.title.toLowerCase()} focused on MERN applications, AI/ML systems, cloud deployment, and consistent DSA problem solving.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn-primary">
                  Explore projects <ArrowRight size={18} />
                </Link>
                <a href="/Bhanu_Teja_Resume.pdf" className="btn-ghost">
                  <Download size={18} /> Resume
                </a>
                <a href={data.social.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={400}>
              <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="metric-tile">
                    <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-lime-200">{stat.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={180} className="relative">
            <div className="hero-panel">
              <div className="profile-card-header">
                <div className="profile-avatar">BT</div>
                <div className="min-w-0">
                  <p className="text-sm font-mono uppercase tracking-[0.22em] text-lime-200/80">Profile overview</p>
                  <h2 className="mt-3 font-display text-3xl font-bold text-white">{data.name}</h2>
                  <p className="mt-2 text-slate-400">{data.title}</p>
                </div>
              </div>

              <div className="my-8 grid gap-3 sm:grid-cols-2">
                <div className="profile-stat">
                  <span>Current CGPA</span>
                  <strong>9.66</strong>
                </div>
                <div className="profile-stat">
                  <span>Problem solving</span>
                  <strong>50+ days</strong>
                </div>
              </div>

              <div className="space-y-3">
                {data.focus.map((item, index) => (
                  <div key={item} className="profile-row">
                    <div className="flex items-center gap-3">
                      <span className="profile-index">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                    <BadgeCheck size={18} className="text-emerald-300" />
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-band">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="section-kicker">What I build</div>
            <div className="section-title-row">
              <h2 className="section-heading">Useful systems, not just screens</h2>
              <p className="section-subtitle">I like projects where frontend polish, backend logic, and intelligent automation all meet in one product.</p>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {data.services.map((service, index) => {
              const Icon = serviceIcons[index] || Rocket;
              return (
                <FadeUp key={service.title} delay={index * 90}>
                  <div className="feature-panel">
                    <div className="feature-icon"><Icon size={22} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="section-kicker">Featured work</div>
            <div className="section-title-row">
              <h2 className="section-heading">Projects with practical outcomes</h2>
              <Link to="/projects" className="btn-ghost hidden md:inline-flex">
                View all <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <FadeUp key={project.title} delay={index * 100}>
                <article className={`project-card ${project.highlight ? 'project-card-featured' : ''}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="tag">{project.type}</span>
                    {project.highlight && <Trophy size={18} className="text-amber-300" />}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="impact-strip">
                    <BarChart3 size={16} />
                    <span>{project.impact}</span>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => <span key={tag} className="mini-tag">{tag}</span>)}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="section-kicker">Coding profiles</div>
            <div className="section-title-row">
              <h2 className="section-heading">Problem solving proof</h2>
              <p className="section-subtitle">Recruiters can quickly jump into coding profiles and see consistency beyond the portfolio UI.</p>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {data.codingProfiles.map((profile, index) => (
              <FadeUp key={profile.platform} delay={index * 100}>
                <a href={profile.url} target="_blank" rel="noreferrer" className="profile-panel group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-mono text-lime-200">{profile.platform}</p>
                      <h3>{profile.handle}</h3>
                    </div>
                    <ExternalLink size={18} className="text-slate-500 transition-colors group-hover:text-lime-200" />
                  </div>
                  <p className="profile-metric">{profile.metric}</p>
                  <p className="text-sm leading-6 text-slate-400">{profile.note}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.tags.map((tag) => <span key={tag} className="mini-tag">{tag}</span>)}
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <FadeUp>
          <div className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-lime-300/20 bg-gradient-to-r from-lime-300/12 via-slate-900 to-cyan-300/10 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="section-kicker">Let us build</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">Have an internship, project, or idea?</h2>
                <p className="mt-4 max-w-2xl text-slate-300">I am ready to contribute across frontend, backend, cloud, and AI/ML work with strong fundamentals and a builder mindset.</p>
              </div>
              <Link to="/contact" className="btn-primary justify-center">
                Contact me <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}