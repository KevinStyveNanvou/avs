// components/About.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView && (
        <motion.span
          initial={{ textContent: '0' }}
          animate={{ textContent: end }}
          transition={{
            duration: duration / 1000,
            ease: 'easeOut',
          }}
          onUpdate={(latest) => {
            if (ref.current) {
              const value = Math.round(latest.textContent as number);
              (ref.current as HTMLElement).textContent = value + suffix;
            }
          }}
        />
      )}
    </motion.span>
  );
}

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: 500, suffix: '+', label: t.about.stats.clients },
    { icon: Award, value: 5, suffix: '+', label: t.about.stats.years },
    { icon: Briefcase, value: 3, suffix: '', label: t.about.stats.categories },
  ];

  return (
    <section id="apropos" className="py-24 px-4 bg-white/70 dark:bg-[#0E0A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-underline"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="wave-card bg-[#E92252] p-1">
              <div className="wave-card overflow-hidden h-80 bg-white dark:bg-[#0E0A1A]">
                <img
                  src="https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="min-w-0 p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="wave-card glass-card p-8 overflow-hidden">
              <p className="text-lg m-3 text-center text-gray-700 dark:text-gray-200 leading-relaxed break-words whitespace-normal">
                {t.about.content}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="wave-card glass-card p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E92252] rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-[#E92252] dark:text-[#E92252] mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}