export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-90" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://loremflickr.com/1200/800/photography,camera?random=1"
          alt="Fotografické pozadie"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Fotograf • Martin Novák
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Zachytávam{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            vaše príbehy
          </span>{' '}
          vo fotografii
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto opacity-80 mb-10 leading-relaxed">
          Profesionálna fotografia pre svadby, portréty, firemné udalosti a reklamné kampane. Každý záber je výnimočný príbeh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 hover:scale-[1.02]"
          >
            Pozrieť galériu
          </a>
          <a
            href="#contact"
            className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 hover:scale-[1.02] hover:bg-gray-800/50"
          >
            Kontaktovať ma
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Projektov' },
            { value: '8+', label: 'Rokov skúseností' },
            { value: '200+', label: 'Spokojných klientov' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
