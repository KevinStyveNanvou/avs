import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // https://avs-63yd3me81-nanvous-projects.vercel.app/

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0E0A1A]/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div>
              <img src="/img/loghho.png" alt="Logo" className="w-25 h-20" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="nav-link"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="nav-link"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="nav-link"
            >
              {t.nav.references}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'fr'
                    ? 'bg-[#5BC4F0] dark:bg-[#7B2FBE] text-white'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-[#5BC4F0] dark:bg-[#7B2FBE] text-white'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-[#D4AF37]" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0E0A1A] shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.nav.references}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {t.nav.contact}
            </button>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === 'fr'
                      ? 'bg-[#5BC4F0] dark:bg-[#7B2FBE] text-white'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-[#5BC4F0] dark:bg-[#7B2FBE] text-white'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700" />
                ) : (
                  <Sun className="w-5 h-5 text-[#D4AF37]" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
