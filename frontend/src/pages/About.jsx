import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight, Briefcase, CheckCircle2, Code2, GraduationCap, Trophy } from 'lucide-react';

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

export default function About() {
  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="section-kicker">About</div>
          <div className="section-title-row">
            <div>
              <h1 className="section-heading">Engineer in training, builder in practice</h1>
              <p className="section-subtitle mt-4">{data.bio}</p>
            </div>
            <a href="/Bhanu_Teja_Resume.pdf" className="btn-primary">Download resume</a>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {data.stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 80}>
              <div className="metric-tile">
                <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-lime-200">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3">
              <Code2 size={24} className="text-lime-200" />
              <h2 className="section-heading text-3xl">Technical toolkit</h2>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(data.skills).map(([category, skills], index) => (
              <FadeUp key={category} delay={index * 70}>
                <div className="feature-panel h-full">
                  <p className="text-sm font-mono text-lime-200">{category}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => <span key={skill} className="mini-tag">{skill}</span>)}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3">
              <Trophy size={24} className="text-lime-200" />
              <h2 className="section-heading text-3xl">Coding profiles</h2>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {data.codingProfiles.map((profile, index) => (
              <FadeUp key={profile.platform} delay={index * 90}>
                <a href={profile.url} target="_blank" rel="noreferrer" className="profile-panel group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-mono text-lime-200">{profile.platform}</p>
                      <h3>{profile.handle}</h3>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-500 transition-colors group-hover:text-lime-200" />
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

      <section className="section-band">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3">
              <Briefcase size={24} className="text-lime-200" />
              <h2 className="section-heading text-3xl">Experience</h2>
            </div>
          </FadeUp>

          <div className="mt-8 space-y-5">
            {data.experience.map((exp, index) => (
              <FadeUp key={exp.company} delay={index * 100}>
                <article className="timeline-panel">
                  <div>
                    <p className="text-sm font-mono text-lime-200">{exp.period}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="mt-1 text-slate-400">{exp.company} - {exp.location}</p>
                  </div>
                  <div className="space-y-5">
                    <ul className="grid gap-3 md:grid-cols-2">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-300" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => <span key={tag} className="mini-tag">{tag}</span>)}
                    </div>
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
            <div className="flex items-center gap-3">
              <GraduationCap size={24} className="text-lime-200" />
              <h2 className="section-heading text-3xl">Education and achievements</h2>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4">
              {data.education.map((edu, index) => (
                <FadeUp key={edu.school} delay={index * 80}>
                  <div className="education-row">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{edu.school}</h3>
                      <p className="mt-1 text-sm text-slate-400">{edu.degree}</p>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-sm font-mono text-slate-500">{edu.period}</p>
                      <p className="mt-1 text-sm font-semibold text-lime-200">{edu.score}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {data.achievements.map((achievement, index) => (
                <FadeUp key={achievement.title} delay={index * 80}>
                  <div className="feature-panel h-full">
                    <p className="text-sm font-mono text-lime-200">{achievement.title}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{achievement.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
