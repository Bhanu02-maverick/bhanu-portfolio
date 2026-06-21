import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink, Github, Star, Target } from 'lucide-react';
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

export default function Projects() {
  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="section-kicker">Project lab</div>
          <div className="section-title-row">
            <div>
              <h1 className="section-heading">AI, full-stack, and cloud-ready builds</h1>
              <p className="section-subtitle mt-4">
                A practical collection of systems built around business workflows, intelligent automation, and clean developer execution.
              </p>
            </div>
            <a href={data.social.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github size={18} /> GitHub
            </a>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6">
          {data.projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 90}>
              <article className={`work-row ${project.highlight ? 'work-row-featured' : ''}`}>
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="tag">{project.type}</span>
                    <span className="text-xs font-mono text-slate-500">{project.period}</span>
                    {project.highlight && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-200">
                        <Star size={13} className="fill-amber-200" /> Featured
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{project.description}</p>
                  </div>

                  <div className="impact-strip max-w-3xl">
                    <Target size={16} />
                    <span>{project.impact}</span>
                  </div>

                  <ul className="grid gap-3 md:grid-cols-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between gap-6 lg:w-72">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="mini-tag">{tag}</span>)}
                    </div>
                  </div>

                  <a href={data.social.github} target="_blank" rel="noreferrer" className="btn-primary justify-center">
                    View code <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-20">
        <FadeUp>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="section-kicker">More proof</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white">Coding profiles and DSA consistency</h2>
                <p className="mt-4 max-w-2xl text-slate-400">
                  Alongside projects, I maintain coding profiles that show consistency in Java, Python, SQL, and problem solving fundamentals.
                </p>
              </div>
              <Link to="/about" className="btn-ghost justify-center">
                See profiles <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
