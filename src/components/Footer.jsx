const footerLinks = [
  { label: 'Domov', href: '#hero' },
  { label: 'Služby', href: '#features' },
  { label: 'Galéria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-all duration-300">
              Martin <span className="text-blue-500">Foto</span>
            </a>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Profesionálna fotografia v Bratislave a okolí. Svadby, portréty, firemné udalosti.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Navigácia</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 martin@martinfoto.sk</p>
              <p>📞 +421 900 123 456</p>
              <p>📍 Bratislava, Slovensko</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Martin Foto. Všetky práva vyhradené.
          </p>
          <p className="text-gray-600 text-xs">
            Vyrobené s ❤️ na Slovensku
          </p>
        </div>
      </div>
    </footer>
  );
}
