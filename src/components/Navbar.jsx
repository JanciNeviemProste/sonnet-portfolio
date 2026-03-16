import { useState } from 'react';

const navLinks = [
  { label: 'Domov', href: '#hero' },
  { label: 'Služby', href: '#features' },
  { label: 'Galéria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-all duration-300">
            Martin <span className="text-blue-500">Foto</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Spolupracujme
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Spolupracujme
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
