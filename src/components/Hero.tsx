import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Flame, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBERS = ['237653509041', '237657029854'];

export default function Hero() {
  const { t } = useLanguage();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  // Effet machine à écrire
  useEffect(() => {
    const currentTitle = t.hero.titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % t.hero.titles.length);
        }
      }
    }, isDeleting ? 45 : 95);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, t.hero.titles]);

  // Fermer l'image agrandie avec Échap + bloquer le scroll
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoomed(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoomed]);

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
      <div className="max-w-7xl w-full mx-auto">
        {/* ── BANDEAU PROMO ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 rounded-2xl bg-gradient-to-r from-[#E92252] via-red-600 to-[#E92252] text-white shadow-lg shadow-red-500/30 px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="hidden sm:block"
          >
            <Flame className="w-8 h-8 text-yellow-300" />
          </motion.span>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide leading-tight">
              🔥 {t.hero.promo.title} 🔥
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 mt-1">
              {t.hero.promo.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* ── TEXTE ───────────────── */}
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
                {t.hero.promo.cta}
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

          {/* ── FLYER PROMO ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md">
              {/* Badge flottant */}
              <motion.span
                animate={{ rotate: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute -top-3 -right-3 z-10 bg-yellow-400 text-[#0D1B2A] text-xs sm:text-sm font-black uppercase px-3 py-1.5 rounded-full shadow-lg"
              >
                {t.hero.promo.badge}
              </motion.span>

              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label={t.hero.promo.zoom}
                className="group block w-full bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 rounded-2xl shadow-xl shadow-red-500/30 cursor-zoom-in"
              >
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0E0A1A]">
                  <img
                    src="/images/pub.jpg"
                    alt={t.hero.promo.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    loading="eager"
                  />
                  <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full opacity-90 group-hover:opacity-100">
                    <ZoomIn className="w-3.5 h-3.5" />
                    {t.hero.promo.zoom}
                  </span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── IMAGE AGRANDIE ───────────────── */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label={t.hero.promo.close}
              className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 text-white rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src="/images/pub.jpg"
              alt={t.hero.promo.title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
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
