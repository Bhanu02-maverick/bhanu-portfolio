import { useState } from 'react';
import toast from 'react-hot-toast';
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
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

const inputClass = `w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3
  text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors duration-200
  hover:border-white/20 focus:border-lime-300/60 focus:ring-2 focus:ring-lime-300/15`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_y2v49xw',
          template_id: 'template_j9tysx9',
          user_id: 'QkkS6i-DHKlSdulJH',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_email: data.email,
          },
        }),
      });

      if (response.ok) {
        toast.success("Message sent! I'll reply within 1-2 days.");
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: data.email, href: `mailto:${data.email}` },
    { icon: Phone, label: 'Phone', value: data.phone },
    { icon: MapPin, label: 'Location', value: data.location },
  ];

  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="section-kicker">Contact</div>
          <div className="section-title-row">
            <div>
              <h1 className="section-heading">Let us build something useful</h1>
              <p className="section-subtitle mt-4">
                Reach out for internships, full-stack projects, AI/ML work, collaborations, or a quick portfolio conversation.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse-slow" />
              Available now
            </div>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeUp>
            <div className="space-y-5">
              <div className="feature-panel">
                <p className="text-sm font-mono text-lime-200">Direct details</p>
                <div className="mt-6 space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/15 p-4 transition-colors hover:border-lime-300/25">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-300/10 text-lime-100">
                          <Icon size={19} />
                        </span>
                        <div>
                          <p className="text-xs text-slate-500">{item.label}</p>
                          <p className="mt-1 break-all text-sm font-semibold text-slate-200">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href}>{content}</a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className="profile-panel">
                <p className="text-sm font-mono text-lime-200">Online profiles</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a href={data.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-slate-300 transition-colors hover:text-lime-100">
                    <Github size={17} /> github.com/Bhanu02-maverick
                  </a>
                  <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold text-slate-300 transition-colors hover:text-lime-100">
                    <Linkedin size={17} /> linkedin.com/in/M-BHANU-TEJA
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            {sent ? (
              <div className="feature-panel flex min-h-[30rem] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-300/10 text-emerald-100 ring-1 ring-emerald-300/20">
                  <Send size={26} />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-white">Message sent</h2>
                <p className="mt-3 max-w-md text-slate-400">Thanks for reaching out. I will reply within 1-2 days.</p>
                <button onClick={() => setSent(false)} className="btn-ghost mt-8" type="button">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="feature-panel space-y-5">
                <p className="text-sm font-mono text-lime-200">Send a message</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-slate-400">Your name</span>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-slate-400">Email address</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} required />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Subject</span>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Internship / Project / Collaboration" className={inputClass} required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-slate-400">Message</span>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell me what you are working on..." className={`${inputClass} resize-none`} required />
                </label>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? <><Loader2 size={17} className="animate-spin" /> Sending...</> : <><Send size={17} /> Send message</>}
                </button>
                <p className="text-center text-xs text-slate-600">Powered by EmailJS. No data stored in this app.</p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
