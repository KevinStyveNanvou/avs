import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(
    t.whatsapp.message
  )}`;

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-white/40 dark:bg-transparent px-4"
    >
      <div className="max-w-7xl w-full mx-auto">

        {/* ✅ FIX : vrai space-between */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* ── TEXTE ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#E92252]/10 border border-[#E92252]/20 text-[#E92252] text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E92252] animate-pulse" />
              Yaoundé, Cameroun — N°1 du nettoyage professionnel
            </motion.div>

            <div className="min-h-[120px] mb-4">
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0D1B2A] dark:text-white leading-tight">
                {displayedText}
                <span className="text-[#E92252] animate-pulse ml-1">|</span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              {t.hero.tagline}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="btn-primary flex items-center"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                {t.hero.cta2}
              </button>
            </div>
          </motion.div>

          {/* ── IMAGE ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            {/* ✅ FIX : vraie bordure gradient */}
            <div className="bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 rounded-2xl shadow-xl">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#0E0A1A]">
                <img
                  src="/img/pdg.jpg"
                  alt="AVS"
                  className="w-[350px] h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

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