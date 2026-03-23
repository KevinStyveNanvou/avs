import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Building2,
  HeartPulse,
  Briefcase,
  Hotel,
  GraduationCap,
  Factory,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function References() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const clientIcons = [
    Building2,
    HeartPulse,
    Briefcase,
    Hotel,
    GraduationCap,
    Factory,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prev) => (prev + 1) % t.references.testimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [t.references.testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev + 1) % t.references.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + t.references.testimonials.length) %
        t.references.testimonials.length
    );
  };

  return (
    <section
      id="references"
      className="py-24 px-4 bg-white/70 dark:bg-[#0E0A1A]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.references.title}</h2>
          <div className="section-underline"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.references.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {t.references.clients.map((client, index) => {
            const Icon = clientIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="wave-card glass-card p-6 text-center hover-lift"
              >
                <Icon className="w-12 h-12 mx-auto mb-3 text-[#5BC4F0] dark:text-[#7B2FBE]" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {client}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="wave-card glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-[#5BC4F0] dark:text-[#7B2FBE] opacity-20 text-8xl font-serif">
              "
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(t.references.testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[#FFE600] text-[#FFE600]"
                    />
                  )
                )}
              </div>

              <p className="text-xl text-gray-700 dark:text-gray-200 text-center mb-6 leading-relaxed">
                {t.references.testimonials[currentTestimonial].text}
              </p>

              <div className="text-center">
                <p className="font-bold text-[#D62839] dark:text-[#D4AF37] text-lg">
                  {t.references.testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.references.testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 text-[#5BC4F0] dark:text-[#7B2FBE] opacity-20 text-8xl font-serif transform rotate-180">
              "
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-[#5BC4F0] dark:text-[#7B2FBE]" />
            </button>

            <div className="flex space-x-2">
              {t.references.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-[#D62839] dark:bg-[#D4AF37] w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-[#5BC4F0] dark:text-[#7B2FBE]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
