import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = t.hero.titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
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
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, t.hero.titles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumbers = ['237654122760', '237695247534', '237651557161'];
  const whatsappUrl = `https://wa.me/${whatsappNumbers[0]}?text=${encodeURIComponent(
    t.whatsapp.message
  )}`;

  return (
    <section
      id="accueil"
      className="min-h-screen flex bg-[#23b1e0]/40 dark:bg-transparent items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="h-24 mb-4">
              <h1 className="text-5xl md:text-7xl font-bold text-[#0D1B2A] dark:text-white">
                {displayedText}
                <span className="text-[#D62839] dark:text-[#D4AF37] animate-pulse">
                  |
                </span>
              </h1>
            </div>

            <p className="text-2xl text-gray-600 dark:text-gray-300 mt-12 mb-8">
              {t.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="btn-primary group"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
            transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            
              <div className="wave-card bg-gradient-to-br from-[#5BC4F0] to-[#1909c6] dark:from-[#7B2FBE] dark:to-[#D4AF37] p-1">
                <div className="wave-card bg-white dark:bg-[#0E0A1A] p-0 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional cleaning service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
          
          </motion.div>
        </div>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 whatsapp-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      <div className="wave-divider">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-[#0E0A1A]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
