import { data } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/25 bg-lime-300/10 font-display font-bold text-lime-100">BT</span>
          <p className="font-display font-bold text-white text-lg">M Bhanu Teja</p>
        </div>
        <p className="text-center text-slate-500 text-sm font-body">
          {new Date().getFullYear()} portfolio. Built with React, Tailwind CSS, and Node.js.
        </p>
        <div className="flex gap-4">
          <a href={data.social.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-lime-200 transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-lime-200 transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${data.email}`} className="text-slate-500 hover:text-lime-200 transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
