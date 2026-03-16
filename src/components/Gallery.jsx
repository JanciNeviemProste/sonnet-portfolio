const galleryImages = [
  { src: 'https://loremflickr.com/600/600/photography,portrait?random=5', alt: 'Portrét ženy v prírode' },
  { src: 'https://loremflickr.com/600/600/wedding,couple?random=6', alt: 'Svadobný pár' },
  { src: 'https://loremflickr.com/600/600/landscape,nature?random=7', alt: 'Krajinná fotografia' },
  { src: 'https://loremflickr.com/600/600/architecture,city?random=8', alt: 'Architektúra mesta' },
  { src: 'https://loremflickr.com/600/600/fashion,model?random=9', alt: 'Módna fotografia' },
  { src: 'https://loremflickr.com/600/600/event,people?random=10', alt: 'Eventová fotografia' },
  { src: 'https://loremflickr.com/600/600/family,children?random=11', alt: 'Rodinná fotografia' },
  { src: 'https://loremflickr.com/600/600/food,restaurant?random=12', alt: 'Produktová fotografia jedla' },
  { src: 'https://loremflickr.com/600/600/sport,action?random=13', alt: 'Športová akcia' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Ukážky prác
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fotografická galéria
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Výber z mojich najobľúbenejších fotografií naprieč rôznymi žánrami a projektmi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-xl bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 hover:scale-[1.02]"
          >
            Objednať fotografovanie
          </a>
        </div>
      </div>
    </section>
  );
}
