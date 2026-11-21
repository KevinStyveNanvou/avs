import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBERS = ['237653509041', '237657029854'];

export default function Hero() {
  const { t } = useLanguage();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = t.hero.titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else if (displayedText.length > 0) {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % t.hero.titles.length);
      }
    }, isDeleting ? 45 : 95);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, t.hero.titles]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(
    t.whatsapp.message
  )}`;

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-white/40 dark:bg-transparent px-4 pt-28 pb-12 md:pt-24"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-[#E92252]/10 border border-[#E92252]/20 text-[#E92252] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E92252] animate-pulse" />
            {t.hero.badge}
          </div>

          <div className="min-h-[110px] sm:min-h-[120px] mb-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D1B2A] dark:text-white leading-tight">
              {displayedText}
              <span className="text-[#E92252] animate-pulse ml-1">|</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              {t.hero.cta1}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            <button
              onClick={() => scrollToSection('services')}
              className="btn-secondary"
            >
              {t.hero.cta1}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              {t.hero.cta2}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center w-full"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 rounded-2xl shadow-xl shadow-red-500/30">
            <video
              src="/VID-20261121-WA0006.mp4"
              controls
              preload="metadata"
              className="w-full max-h-[70vh] rounded-2xl object-cover bg-black"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 whatsapp-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </section>
  );
}
