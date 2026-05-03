import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import { Briefcase, GraduationCap, Code2, CheckCircle2 } from 'lucide-react';

function FadeUp({ children, delay = 0, className = '' }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <main className="pt-28 pb-16 max-w-6xl mx-auto px-6">
      <FadeUp>
        <p className="text-sky-400 font-mono text-sm mb-2">// about me</p>
        <h1 className="section-heading mb-12">Who I am</h1>
      </FadeUp>

      {/* Bio */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <FadeUp>
          <div className="space-y-4 font-body text-slate-400 leading-relaxed">
            <p className="text-lg text-slate-300">{data.bio}</p>
            <p>When I'm not coding, I mentor junior students in Java and Python, participate in hackathons, and grind LeetCode daily. I believe in building tools that actually matter — especially for small businesses and underserved communities.</p>
            <div className="flex gap-4 pt-2 flex-wrap">
              <a href={data.social.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm py-2">GitHub</a>
              <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-sm py-2">LinkedIn</a>
              <a href={data.social.leetcode} target="_blank" rel="noreferrer" className="btn-ghost text-sm py-2">LeetCode</a>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <div className="card space-y-4">
            <p className="font-mono text-sky-400 text-sm">// quick stats</p>
            {[
              ['Current CGPA', '9.66 / 10.00'],
              ['College', 'Vardhaman College of Engineering'],
              ['Degree', 'B.Tech CSE (2023–2027)'],
              ['Location', data.location],
              ['Email', data.email],
              ['Status', '✅ Open to work'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                <span className="text-slate-500 text-sm">{k}</span>
                <span className="text-slate-200 text-sm font-medium text-right max-w-[60%]">{v}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Skills */}
      <FadeUp>
        <div className="flex items-center gap-3 mb-8">
          <Code2 size={22} className="text-sky-400" />
          <h2 className="section-heading text-2xl">Technical Skills</h2>
        </div>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {Object.entries(data.skills).map(([category, skills], i) => (
          <FadeUp key={category} delay={i * 80}>
            <div className="card h-full">
              <p className="font-mono text-sky-400 text-xs mb-3">{category}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Experience */}
      <FadeUp>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase size={22} className="text-sky-400" />
          <h2 className="section-heading text-2xl">Experience</h2>
        </div>
      </FadeUp>
      <div className="space-y-6 mb-20">
        {data.experience.map((exp, i) => (
          <FadeUp key={exp.company} delay={i * 100}>
            <div className="card relative pl-6 border-l-2 border-sky-500/40 rounded-l-none">
              <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-sky-500" />
              <div className="flex flex-wrap gap-3 items-start justify-between mb-3">
                <div>
                  <h3 className="font-display font-semibold text-white text-lg">{exp.role}</h3>
                  <p className="text-sky-400 text-sm font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                </div>
                <span className="tag text-xs">{exp.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={14} className="text-sky-500 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(t => <span key={t} className="tag text-[10px] px-2 py-0.5">{t}</span>)}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Education */}
      <FadeUp>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap size={22} className="text-sky-400" />
          <h2 className="section-heading text-2xl">Education</h2>
        </div>
      </FadeUp>
      <div className="grid md:grid-cols-3 gap-5">
        {data.education.map((edu, i) => (
          <FadeUp key={edu.school} delay={i * 100}>
            <div className="card text-center space-y-2">
              <GraduationCap size={28} className="text-sky-400 mx-auto" />
              <h3 className="font-display font-semibold text-white text-sm">{edu.school}</h3>
              <p className="text-slate-400 text-xs">{edu.degree}</p>
              <p className="text-slate-500 text-xs">{edu.period}</p>
              <span className="tag text-xs">{edu.score}</span>
            </div>
          </FadeUp>
        ))}
      </div>
    </main>
  );
}
