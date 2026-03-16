import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300';

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spojme sa
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Máte projekt na mysli? Rád si vypočujem vaše predstavy a spoločne nájdeme najlepšie riešenie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-md">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-white mb-2">Správa odoslaná!</h3>
                <p className="text-gray-400">Ďakujem za vašu správu. Ozvem sa do 24 hodín.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Meno a priezvisko *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ján Novák"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    E-mailová adresa *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jan@example.sk"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Predmet správy *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Svadobná fotografia — jún 2026"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Správa *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Popíšte váš projekt alebo otázku..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 hover:scale-[1.01]"
                >
                  Odoslať správu
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné informácie</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: '📧',
                    label: 'E-mail',
                    value: 'martin@martinfoto.sk',
                    href: 'mailto:martin@martinfoto.sk',
                  },
                  {
                    icon: '📞',
                    label: 'Telefón',
                    value: '+421 900 123 456',
                    href: 'tel:+421900123456',
                  },
                  {
                    icon: '📍',
                    label: 'Adresa',
                    value: 'Bratislava, Slovensko',
                    href: null,
                  },
                  {
                    icon: '📸',
                    label: 'Instagram',
                    value: '@martin.foto',
                    href: '#',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-200 hover:text-blue-400 transition-all duration-300 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-md">
              <h3 className="text-lg font-semibold text-white mb-4">Pracovné hodiny</h3>
              <div className="space-y-2">
                {[
                  { day: 'Pondelok – Piatok', hours: '9:00 – 18:00' },
                  { day: 'Sobota', hours: '10:00 – 14:00' },
                  { day: 'Nedeľa', hours: 'Zatvorené' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{item.day}</span>
                    <span className={`text-sm font-medium ${item.hours === 'Zatvorené' ? 'text-gray-600' : 'text-gray-200'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
