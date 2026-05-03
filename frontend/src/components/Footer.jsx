import { data } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-white text-lg">
          BT<span className="text-sky-400">.</span>
        </p>
        <p className="text-slate-500 text-sm font-body">
          © {new Date().getFullYear()} M Bhanu Teja · Built with React + Node.js
        </p>
        <div className="flex gap-4">
          <a href={data.social.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
            <Github size={18} />
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${data.email}`} className="text-slate-500 hover:text-sky-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
