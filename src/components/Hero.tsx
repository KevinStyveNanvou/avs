// components/Hero.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Numéros WhatsApp réels AVS
const WHATSAPP_NUMBERS = ['237653509041', '237657029854'];

export default function Hero() {
  const { t } = useLanguage();
  const [titleIndex, setTitleIndex]     = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting]     = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = t.hero.titles[titleIndex];
    const timeout = setTimeout(
      () => {
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
      },
      isDeleting ? 45 : 95
    );
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, t.hero.titles]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(
    t.whatsapp.message
  )}`;

  const phoneUrl = `tel:+${WHATSAPP_NUMBERS[0]}`;

  return (
    <section
      id="accueil"
      className="min-h-screen flex bg-white/40 dark:bg-transparent items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Côté texte ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Badge de confiance */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#E92252]/10 border border-[#E92252]/20 text-[#E92252] text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E92252] animate-pulse" />
              Yaoundé, Cameroun — N°1 du nettoyage professionnel
            </motion.div>

            {/* Titre animé */}
            <div className="min-h-[120px] md:min-h-[160px] mb-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0D1B2A] dark:text-white leading-tight">
                {displayedText}
                <span className="text-[#E92252] animate-pulse ml-0.5">|</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              {t.hero.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollToSection('services')}
                className="btn-primary group flex items-center"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                {t.hero.cta2}
              </button>
            </div>

            {/* Numéros de contact rapides */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {['+237 653 50 90 41', '+237 657 02 98 54'].map(
                (num, i) => (
                  <a
                    key={i}
                    href={`tel:${num.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-[#E92252] dark:hover:text-[#E92252] transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {num}
                  </a>
                )
              )}
            </motion.div>
          </motion.div>

          {/* ── Côté image ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="wave-card bg-gradient-to-br from-[#E92252] to-yellow-400 p-1">
              <div className="wave-card bg-white dark:bg-[#0E0A1A] p-0 overflow-hidden">
                <img
                  src="/img/girl.png"
                  alt="AVS — Service de nettoyage professionnel à Yaoundé"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badge stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-[#1a1030] shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#E92252]/10 flex items-center justify-center">
                <span className="text-[#E92252] text-lg font-black">✓</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Matériel inclus</p>
                <p className="text-sm font-bold text-[#0D1B2A] dark:text-white">100% Professionnel</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Bouton WhatsApp flottant ──────────────────────────────────────── */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 whatsapp-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        title={t.whatsapp.message}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </section>
  );
}
