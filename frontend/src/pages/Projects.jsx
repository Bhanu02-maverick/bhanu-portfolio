import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import { ExternalLink, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function FadeUp({ children, delay = 0, className = '' }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <main className="pt-28 pb-16 max-w-6xl mx-auto px-6">
      <FadeUp>
        <p className="text-sky-400 font-mono text-sm mb-2">// my work</p>
        <h1 className="section-heading mb-4">Projects</h1>
        <p className="text-slate-400 font-body mb-12 max-w-xl">
          A collection of projects spanning AI/ML systems, full-stack web apps, and developer tools.
        </p>
      </FadeUp>

      <div className="space-y-8">
        {data.projects.map((p, i) => (
          <FadeUp key={p.title} delay={i * 100}>
            <div className={`card group ${p.highlight ? 'border-sky-500/40 bg-sky-950/10' : ''}`}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {p.highlight && (
                      <div className="flex items-center gap-1.5">
                        <Star size={13} className="text-sky-400 fill-sky-400" />
                        <span className="text-sky-400 text-xs font-mono">Featured</span>
                      </div>
                    )}
                    <span className="text-slate-500 text-xs font-mono">{p.period}</span>
                  </div>

                  <h2 className="font-display font-bold text-white text-xl md:text-2xl mb-3 group-hover:text-sky-400 transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-slate-400 font-body leading-relaxed mb-6">{p.description}</p>

                  <ul className="space-y-2 mb-6">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={14} className="text-sky-500 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>

                <div className="lg:w-56 flex flex-col justify-between gap-4">
                  <a href={data.social.github} target="_blank" rel="noreferrer"
                    className="btn-ghost text-sm py-2 justify-center">
                    <ExternalLink size={14} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* CTA */}
      <FadeUp className="mt-16 text-center">
        <p className="text-slate-400 mb-4">Interested in collaborating?</p>
        <Link to="/contact" className="btn-primary">Let's talk</Link>
      </FadeUp>
    </main>
  );
}
