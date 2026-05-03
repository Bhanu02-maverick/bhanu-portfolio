// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { data } from '../data';
// import { useReveal } from '../hooks/useReveal';
// import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react';

// function FadeUp({ children, delay = 0, className = '' }) {
//   const { ref, inView } = useReveal();
//   return (
//     <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}>
//       {children}
//     </div>
//   );
// }

// const inputClass = `w-full bg-slate-900/60 border border-slate-700 hover:border-slate-600 focus:border-sky-500
//   rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 text-sm font-body
//   outline-none transition-colors duration-200 focus:ring-1 focus:ring-sky-500/40`;

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
//   const [loading, setLoading] = useState(false);
//   const [sent, setSent] = useState(false);

//   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.subject || !form.message) {
//       toast.error('Please fill in all fields.');
//       return;
//     }
//     setLoading(true);
//     try {
//       const res = await fetch('https://bhanu-portfolio-1vai.onrender.com/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const json = await res.json();
//       if (json.success) {
//         toast.success('Message sent! I\'ll reply within 1–2 days.');
//         setSent(true);
//         setForm({ name: '', email: '', subject: '', message: '' });
//       } else {
//         toast.error(json.message || 'Something went wrong.');
//       }
//     } catch {
//       toast.error('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="pt-28 pb-16 max-w-6xl mx-auto px-6">
//       <FadeUp>
//         <p className="text-sky-400 font-mono text-sm mb-2">// get in touch</p>
//         <h1 className="section-heading mb-4">Contact me</h1>
//         <p className="text-slate-400 font-body mb-14 max-w-xl">
//           Whether it's a job opportunity, a collaboration, or just a hello — I'd love to hear from you. I'll get back within 1–2 business days.
//         </p>
//       </FadeUp>

//       <div className="grid lg:grid-cols-2 gap-12">
//         {/* Info */}
//         <FadeUp>
//           <div className="space-y-6">
//             <div className="card space-y-5">
//               <a href={`mailto:${data.email}`}
//                 className="flex items-center gap-4 group hover:text-sky-400 transition-colors">
//                 <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
//                   <Mail size={18} className="text-sky-400" />
//                 </div>
//                 <div>
//                   <p className="text-slate-500 text-xs mb-0.5">Email</p>
//                   <p className="text-slate-200 text-sm group-hover:text-sky-400 transition-colors">{data.email}</p>
//                 </div>
//               </a>

//               <div className="flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
//                   <Phone size={18} className="text-sky-400" />
//                 </div>
//                 <div>
//                   <p className="text-slate-500 text-xs mb-0.5">Phone</p>
//                   <p className="text-slate-200 text-sm">{data.phone}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
//                   <MapPin size={18} className="text-sky-400" />
//                 </div>
//                 <div>
//                   <p className="text-slate-500 text-xs mb-0.5">Location</p>
//                   <p className="text-slate-200 text-sm">{data.location}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <p className="font-mono text-sky-400 text-xs mb-4">// find me online</p>
//               <div className="flex flex-col gap-3">
//                 <a href={data.social.github} target="_blank" rel="noreferrer"
//                   className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors text-sm">
//                   <Github size={16} /> github.com/Bhanu02-maverick
//                 </a>
//                 <a href={data.social.linkedin} target="_blank" rel="noreferrer"
//                   className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors text-sm">
//                   <Linkedin size={16} /> linkedin.com/in/M-BHANU-TEJA
//                 </a>
//               </div>
//             </div>

//             <div className="card bg-green-950/20 border-green-500/20">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
//                 <span className="text-green-400 text-sm font-display font-medium">Available for work</span>
//               </div>
//               <p className="text-slate-400 text-sm font-body">
//                 Currently seeking internship and full-time roles in Full Stack, Cloud, or AI/ML development. Remote friendly.
//               </p>
//             </div>
//           </div>
//         </FadeUp>

//         {/* Form */}
//         <FadeUp delay={150}>
//           {sent ? (
//             <div className="card text-center py-16 space-y-4">
//               <div className="text-5xl">🎉</div>
//               <h3 className="font-display font-bold text-white text-xl">Message sent!</h3>
//               <p className="text-slate-400 font-body">Thanks for reaching out. I'll reply to <span className="text-sky-400">{form.email || 'your email'}</span> within 1–2 days.</p>
//               <button onClick={() => setSent(false)} className="btn-ghost text-sm py-2 mt-4">Send another</button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="card space-y-4">
//               <p className="font-mono text-sky-400 text-xs mb-2">// send a message</p>

//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-slate-400 text-xs mb-1.5 font-body">Your name *</label>
//                   <input type="text" name="name" value={form.name} onChange={handleChange}
//                     placeholder="Ravi Kumar" className={inputClass} required />
//                 </div>
//                 <div>
//                   <label className="block text-slate-400 text-xs mb-1.5 font-body">Email address *</label>
//                   <input type="email" name="email" value={form.email} onChange={handleChange}
//                     placeholder="ravi@company.com" className={inputClass} required />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-slate-400 text-xs mb-1.5 font-body">Subject *</label>
//                 <input type="text" name="subject" value={form.subject} onChange={handleChange}
//                   placeholder="Job opportunity / Collaboration / Hello" className={inputClass} required />
//               </div>

//               <div>
//                 <label className="block text-slate-400 text-xs mb-1.5 font-body">Message *</label>
//                 <textarea name="message" value={form.message} onChange={handleChange}
//                   rows={5} placeholder="Tell me about the opportunity or what's on your mind..."
//                   className={`${inputClass} resize-none`} required />
//               </div>

//               <button type="submit" disabled={loading}
//                 className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
//                 {loading ? (
//                   <><Loader2 size={16} className="animate-spin" /> Sending...</>
//                 ) : (
//                   <><Send size={16} /> Send message</>
//                 )}
//               </button>

//               <p className="text-slate-600 text-xs text-center font-body">
//                 You'll receive an auto-reply confirming your message.
//               </p>
//             </form>
//           )}
//         </FadeUp>
//       </div>
//     </main>
//   );
// }
import { useState } from 'react';
import toast from 'react-hot-toast';
import { data } from '../data';
import { useReveal } from '../hooks/useReveal';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react';

function FadeUp({ children, delay = 0, className = '' }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const inputClass = `w-full bg-slate-900/60 border border-slate-700 hover:border-slate-600 focus:border-sky-500
  rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 text-sm font-body
  outline-none transition-colors duration-200 focus:ring-1 focus:ring-sky-500/40`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
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
            to_email: 'bhanuteja766192@gmail.com',
          },
        }),
      });

      if (res.ok) {
        toast.success("Message sent! I'll reply within 1-2 days.");
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const err = await res.text();
        console.error('EmailJS error:', err);
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Network error:', err);
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 pb-16 max-w-6xl mx-auto px-6">
      <FadeUp>
        <p className="text-sky-400 font-mono text-sm mb-2">// get in touch</p>
        <h1 className="section-heading mb-4">Contact me</h1>
        <p className="text-slate-400 font-body mb-14 max-w-xl">
          Whether it's a job opportunity, a collaboration, or just a hello — I'd love to hear from you. I'll get back within 1–2 business days.
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-2 gap-12">
        <FadeUp>
          <div className="space-y-6">
            <div className="card space-y-5">
              <a href={`mailto:${data.email}`}
                className="flex items-center gap-4 group hover:text-sky-400 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Email</p>
                  <p className="text-slate-200 text-sm group-hover:text-sky-400 transition-colors">{data.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Phone</p>
                  <p className="text-slate-200 text-sm">{data.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Location</p>
                  <p className="text-slate-200 text-sm">{data.location}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="font-mono text-sky-400 text-xs mb-4">// find me online</p>
              <div className="flex flex-col gap-3">
                <a href={data.social.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors text-sm">
                  <Github size={16} /> github.com/Bhanu02-maverick
                </a>
                <a href={data.social.linkedin} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors text-sm">
                  <Linkedin size={16} /> linkedin.com/in/M-BHANU-TEJA
                </a>
              </div>
            </div>

            <div className="card bg-green-950/20 border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-green-400 text-sm font-display font-medium">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm font-body">
                Currently seeking internship and full-time roles in Full Stack, Cloud, or AI/ML development. Remote friendly.
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          {sent ? (
            <div className="card text-center py-16 space-y-4">
              <div className="text-5xl">🎉</div>
              <h3 className="font-display font-bold text-white text-xl">Message sent!</h3>
              <p className="text-slate-400 font-body">Thanks for reaching out. I'll reply within 1–2 days.</p>
              <button onClick={() => setSent(false)} className="btn-ghost text-sm py-2 mt-4">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-4">
              <p className="font-mono text-sky-400 text-xs mb-2">// send a message</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 font-body">Your name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Ravi Kumar" className={inputClass} required />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 font-body">Email address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="ravi@company.com" className={inputClass} required />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-1.5 font-body">Subject *</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Job opportunity / Collaboration / Hello" className={inputClass} required />
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-1.5 font-body">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  rows={5} placeholder="Tell me about the opportunity or what's on your mind..."
                  className={`${inputClass} resize-none`} required />
              </div>
              <button type="submit" disabled={loading}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send message</>
                )}
              </button>
              <p className="text-slate-600 text-xs text-center font-body">
                Powered by EmailJS · No data stored
              </p>
            </form>
          )}
        </FadeUp>
      </div>
    </main>
  );
}
