import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080a0f]/85 backdrop-blur-xl border-b border-white/10 py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-display font-bold text-white text-lg tracking-tight">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/25 bg-lime-300/10 text-lime-100">BT</span>
          <span className="hidden sm:inline">Bhanu Teja</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-lime-200' : ''}`
              }>
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn-primary hidden py-2.5 text-sm md:inline-flex">Hire me</Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d14]/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-display font-medium ${isActive ? 'text-lime-200' : 'text-slate-400'}`
              }>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
