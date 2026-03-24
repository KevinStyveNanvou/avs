// components/Footer.tsx
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t.nav.home,       id: 'accueil'    },
    { label: t.nav.about,      id: 'apropos'    },
    { label: t.nav.services,   id: 'services'   },
    { label: t.nav.references, id: 'references' },
    { label: t.nav.contact,    id: 'contact'    },
  ];

  const primaryPhone = t.contact.info.phones[0].replace(/\s/g, '').replace('+', '');
  const whatsappUrl = `https://wa.me/${primaryPhone}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <footer className="relative bg-gray-100 dark:bg-[#0A0614] text-gray-800 dark:text-white pt-16 pb-8 px-4 overflow-hidden">

      {/* Bulles décoratives en fond */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bubble bubble-light"
            style={{
              width:  `${40 + i * 12}px`,
              height: `${40 + i * 12}px`,
              left:   `${10 + i * 20}%`,
              animationDelay:    `${i * 1.5}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* ── Colonne 1 : logo + tagline ──────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/img/logo.png" alt="AVS Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* ── Colonne 2 : liens rapides ────────────────────────────────── */}
          <div>
            <h3 className="text-base font-bold mb-5 text-[#5BC4F0] dark:text-[#7B2FBE] uppercase tracking-wide">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-500 dark:text-gray-400 hover:text-[#E92252] dark:hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonne 3 : contact + réseaux ───────────────────────────── */}
          <div>
            <h3 className="text-base font-bold mb-5 text-[#5BC4F0] dark:text-[#7B2FBE] uppercase tracking-wide">
              {t.nav.contact}
            </h3>

            <ul className="space-y-3 mb-6">
              {/* Adresse */}
              <li className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#E92252] mt-0.5 flex-shrink-0" />
                <span>{t.contact.info.address}</span>
              </li>

              {/* Tous les numéros */}
              {t.contact.info.phones.map((num, i) => (
                <li key={i}>
                  <a
                    href={`tel:${num.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#E92252] dark:hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#E92252] flex-shrink-0" />
                    {num}
                  </a>
                </li>
              ))}

              {/* Email */}
              <li>
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#E92252] dark:hover:text-[#D4AF37] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#E92252] flex-shrink-0" />
                  {t.contact.info.email}
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook,  href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin,  href: '#' },
                { Icon: Twitter,   href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#5BC4F0] dark:bg-[#7B2FBE] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#E92252] dark:hover:bg-[#D4AF37] transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Barre de copyright ────────────────────────────────────────── */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            {t.footer.copyright}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-[#E92252] transition-colors flex items-center gap-1"
          >
            💬 {t.contact.info.whatsapp}
          </a>
        </div>

      </div>
    </footer>
  );
}
