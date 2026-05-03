import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, MapPin, Download, Zap, Star } from 'lucide-react';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';

function FadeUp({ children, delay = 0, className = '' }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const topSkills = ['React.js', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'MongoDB'];

  return (
    <main className="pt-28 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 min-h-[80vh] flex items-center">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <FadeUp delay={0}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                  <span className="text-green-400 text-sm font-mono">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-body">
                  <MapPin size={14} />
                  <span>{data.location}</span>
                </div>
              </FadeUp>

              <FadeUp delay={100}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="gradient-text">{data.name}</span>
                </h1>
              </FadeUp>

              <FadeUp delay={200}>
                <p className="font-display text-xl md:text-2xl text-slate-400 font-medium">
                  {data.title}
                </p>
              </FadeUp>

              <FadeUp delay={300}>
                <p className="font-body text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {data.tagline}
                </p>
              </FadeUp>

              <FadeUp delay={400}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {topSkills.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={500}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link to="/projects" className="btn-primary">
                    View my work <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn-ghost">
                    Get in touch
                  </Link>
                  <a href={data.social.github} target="_blank" rel="noreferrer"
                    className="btn-ghost px-4">
                    <Github size={18} />
                  </a>
                  <a href={data.social.linkedin} target="_blank" rel="noreferrer"
                    className="btn-ghost px-4">
                    <Linkedin size={18} />
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Avatar card */}
            <FadeUp delay={200} className="lg:w-80 w-full">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-sky-500/30 to-slate-800/0 rounded-3xl blur-xl" />
                <div className="relative card p-8 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-4xl font-display font-bold text-white">
                    BT
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white">{data.name}</p>
                    <p className="text-slate-400 text-sm mt-1">{data.title}</p>
                  </div>
                  <div className="border-t border-slate-800 pt-4 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-sky-400 font-display font-bold text-lg">9.66</p>
                      <p className="text-slate-500 text-xs">CGPA</p>
                    </div>
                    <div>
                      <p className="text-sky-400 font-display font-bold text-lg">3+</p>
                      <p className="text-slate-500 text-xs">Projects</p>
                    </div>
                    <div>
                      <p className="text-sky-400 font-display font-bold text-lg">2</p>
                      <p className="text-slate-500 text-xs">Internships</p>
                    </div>
                  </div>
                  <a href="/Bhanu_Teja_Resume.pdf" className="btn-primary w-full justify-center text-sm py-2">
                    <Download size={14} /> Download CV
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <FadeUp>
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sky-400 font-mono text-sm mb-2">// featured work</p>
              <h2 className="section-heading">Projects</h2>
            </div>
            <Link to="/projects" className="btn-ghost text-sm py-2 hidden md:flex">
              All projects <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((p, i) => (
            <FadeUp key={p.title} delay={i * 100}>
              <div className={`card h-full flex flex-col group cursor-default ${p.highlight ? 'border-sky-500/40 bg-sky-950/20' : ''}`}>
                {p.highlight && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Star size={12} className="text-sky-400 fill-sky-400" />
                    <span className="text-sky-400 text-xs font-mono">Featured</span>
                  </div>
                )}
                <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-sky-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-800">
                  {p.tags.map(t => <span key={t} className="tag text-[10px] px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <FadeUp>
          <p className="text-sky-400 font-mono text-sm mb-2">// recognition</p>
          <h2 className="section-heading mb-10">Achievements</h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.achievements.map((a, i) => (
            <FadeUp key={a.title} delay={i * 80}>
              <div className="card text-center space-y-2 hover:scale-[1.02] transition-transform">
                <div className="text-3xl">{a.icon}</div>
                <p className="font-display font-semibold text-white text-sm">{a.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden border border-sky-500/20 bg-gradient-to-br from-sky-950/40 to-slate-900/40 p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none" />
            <Zap className="mx-auto text-sky-400 mb-4" size={28} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build something great together
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto font-body">
              I'm actively looking for internships and full-time roles in Full Stack, Cloud, and AI development. Let's talk.
            </p>
            <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
              Get in touch <ArrowRight size={17} />
            </Link>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
