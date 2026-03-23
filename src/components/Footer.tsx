import { Sparkles, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t.nav.home, id: 'accueil' },
    { label: t.nav.about, id: 'apropos' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.references, id: 'references' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <footer className="relative bg-[#0D1B2A] dark:bg-[#0E0A1A] text-white pt-16 pb-8 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bubble bubble-light"
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
                <img src="/img/logo.png" alt="Logo" className="w-23 h-21" />

            </div>
            <p className="text-gray-400 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#5BC4F0] dark:text-[#7B2FBE]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#5BC4F0] dark:hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#5BC4F0] dark:text-[#7B2FBE]">
              {t.nav.contact}
            </h3>
            <div className="space-y-2 text-gray-400">
              <p>{t.contact.info.address}</p>
              <p>{t.contact.info.phone}</p>
              <p>+237 695.24.75.34</p>
              <p>+237 651.55.71.61</p>
              <p>{t.contact.info.email}</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-[#5BC4F0] dark:bg-[#7B2FBE] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#5BC4F0] dark:bg-[#7B2FBE] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#5BC4F0] dark:bg-[#7B2FBE] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#5BC4F0] dark:bg-[#7B2FBE] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
