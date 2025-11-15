import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Dioing</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors">
            Start a project
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg hover:bg-black/5 text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
