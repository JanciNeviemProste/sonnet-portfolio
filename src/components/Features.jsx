const features = [
  {
    icon: '📷',
    title: 'Svadobná fotografia',
    description:
      'Zachytím každý výnimočný moment vášho svadobného dňa — od prípravy až po večernú zábavu. Diskrétne, s citom pre detail.',
    img: 'https://loremflickr.com/800/600/wedding,photography?random=2',
    imgAlt: 'Svadobná fotografia',
  },
  {
    icon: '🖼️',
    title: 'Portrétna fotografia',
    description:
      'Profesionálne portréty pre LinkedIn, hereckú kariéru alebo osobný projekt. Vytvoríme spolu obraz, ktorý hovorí za vás.',
    img: 'https://loremflickr.com/800/600/portrait,photography?random=3',
    imgAlt: 'Portrétna fotografia',
  },
  {
    icon: '🏢',
    title: 'Firemná fotografia',
    description:
      'Teambuildingy, firemné eventy, produktová fotografia a reklamné kampane. Vizuál, ktorý posilní vašu značku.',
    img: 'https://loremflickr.com/800/600/corporate,photography?random=4',
    imgAlt: 'Firemná fotografia',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Čo ponúkam
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Moje fotografické služby
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Od svadobných reportáží až po firemné portréty — každý projekt pristupujem individuálne a s plným nasadením.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.imgAlt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed opacity-80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
