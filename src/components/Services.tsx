// components/Services.tsx
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Home,
  Sparkles,
  Sofa,
  Check,
  Star,
  Droplets,
  Bug,
  TreePine,
  Factory,
  HeartPulse,
  Clock,
  CalendarDays,
  Maximize2,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tabs = [
    { icon: Building2, label: t.services.tabs.business },
    { icon: Home,      label: t.services.tabs.home },
    { icon: Sparkles,  label: t.services.tabs.oneTime },
    { icon: Sofa,      label: t.services.tabs.sofa },
  ];

  const businessPlans = [
    { ...t.services.business.premium,  popular: true  },
    { ...t.services.business.honorable, popular: false },
    { ...t.services.business.standard,  popular: false },
    { ...t.services.business.basic,     popular: false },
  ];

  const homeFormulas = [
    t.services.home.formula1,
    t.services.home.formula2,
    t.services.home.formula3,
    t.services.home.formula4,
  ];

  const oneTimeServices = [
    { ...t.services.oneTime.cleaning,   icon: Droplets,   category: 'particuliers' },
    { ...t.services.oneTime.treatment,  icon: Bug,        category: 'particuliers' },
    { ...t.services.oneTime.outdoor,    icon: TreePine,   category: 'particuliers' },
    { ...t.services.oneTime.industrial, icon: Factory,    category: 'professionnels' },
    { ...t.services.oneTime.hospital,   icon: HeartPulse, category: 'professionnels' },
  ];

  // Plan color accents
  const planColors = [
    { ring: 'ring-[#FFE600]', badge: 'bg-[#FFE600] text-[#0D1B2A]', price: 'text-[#FFE600]' },
    { ring: 'ring-[#5BC4F0]', badge: 'bg-[#5BC4F0] text-white',     price: 'text-[#5BC4F0]' },
    { ring: 'ring-white/40',  badge: 'bg-white/20 text-white',       price: 'text-white'     },
    { ring: 'ring-white/20',  badge: 'bg-white/10 text-white',       price: 'text-gray-200'  },
  ];

  // Pexels images — stable, cleaning-related
  const bgImages = {
    business: [
      'https://images.pexels.com/photos/4239118/pexels-photo-4239118.jpeg',
      '/img/clear.png',
      '/img/standar.png',
      'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg',
    ],
    home: [
      'https://images.pexels.com/photos/6195957/pexels-photo-6195957.jpeg',
      '/img/cusine.png',
      '/img/habit.png',
      'https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg',
    ],
    oneTime: [
      '/img/foteil.png',
      '/img/desin.png',
      '/img/vert.png',
      '/img/moquet.png',
      '/img/hosto.png',
    ],
    included:
      'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg',
    sofa:
      'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg',
  };

  return (
    <section id="services" className="py-24 px-4 bg-white/70 dark:bg-[#0E0A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* ── Titre ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.services.title}</h2>
          <div className="section-underline" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* ── Onglets ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-[#E92252] text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Contenu des onglets ───────────────────────────────────────── */}
        <AnimatePresence mode="wait">

          {/* ══════════════════════════════════════════════════════
              TAB 0 — OFFRE ENTREPRISES
          ══════════════════════════════════════════════════════ */}
          {activeTab === 0 && (
            <motion.div
              key="business"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Note d'intro */}
              <p className="text-center text-gray-500 dark:text-gray-400 mb-8 italic text-sm">
                {t.services.business.intro}
              </p>

              {/* 4 cartes tarifaires */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {businessPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    className={`relative overflow-hidden rounded-2xl ring-2 ${
                      plan.popular ? planColors[0].ring + ' scale-[1.03]' : planColors[index].ring
                    } shadow-xl group`}
                    style={{
                      backgroundImage: `url(${bgImages.business[index]}?auto=compress&cs=tinysrgb&w=600)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 group-hover:from-black/40 transition-all duration-300" />

                    {/* Badge populaire */}
                    {plan.popular && (
                      <div className={`absolute top-3 left-1/2 -translate-x-1/2 z-20 ${planColors[0].badge} px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                        <Star className="w-3 h-3" /> {plan.badge}
                      </div>
                    )}

                    <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                      {/* Nom du plan */}
                      <h3 className="text-xl font-extrabold text-white mt-4 mb-4 tracking-wide">
                        {plan.name}
                      </h3>

                      {/* Fréquence */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 mb-3 w-full">
                        <p className="text-white font-semibold text-sm">{plan.frequency}</p>
                        <p className="text-gray-300 text-xs">{plan.days}</p>
                      </div>

                      {/* Détails : heure & surface */}
                      <div className="flex gap-2 w-full mb-4">
                        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#5BC4F0] flex-shrink-0" />
                          <span className="text-gray-200 text-xs">{plan.hours}</span>
                        </div>
                        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 flex items-center gap-1">
                          <Maximize2 className="w-3 h-3 text-[#5BC4F0] flex-shrink-0" />
                          <span className="text-gray-200 text-xs">{plan.surface}</span>
                        </div>
                      </div>

                      {/* Prix */}
                      <div className={`text-3xl font-black mt-auto ${planColors[index]?.price ?? 'text-white'}`}>
                        {plan.price}
                        <span className="text-base font-semibold text-gray-300"> XAF</span>
                      </div>
                      <span className="text-gray-400 text-xs mt-1">/ mois</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Services inclus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative overflow-hidden rounded-2xl shadow-xl"
                style={{
                  backgroundImage: `url(${bgImages.included}?auto=compress&cs=tinysrgb&w=1200)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
                <div className="relative z-10 p-8 md:p-12 text-center">
                  <h4 className="text-xl font-bold text-white mb-6">
                    {t.services.business.included}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
                    {t.services.business.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3 text-left">
                        <Check className="w-5 h-5 text-[#E92252] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block bg-[#E92252] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                    {t.services.business.materials}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════
              TAB 1 — SERVICES À DOMICILE
          ══════════════════════════════════════════════════════ */}
          {activeTab === 1 && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Note d'intro */}
              <p className="text-center text-gray-500 dark:text-gray-400 mb-8 italic text-sm">
                {t.services.home.intro}
              </p>

              {/* 4 formules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {homeFormulas.map((formula, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                    className="relative overflow-hidden rounded-2xl ring-2 ring-white/20 shadow-xl group"
                    style={{
                      backgroundImage: `url(${bgImages.home[index]}?auto=compress&cs=tinysrgb&w=600)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 group-hover:from-black/40 transition-all duration-300" />
                    <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                      <h3 className="text-xl font-extrabold text-white mt-2 mb-3">
                        {formula.name}
                      </h3>

                      {/* Fréquence ou description */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 mb-3 w-full">
                        <p className="text-white font-semibold text-sm">
                          {formula.desc ?? formula.frequency}
                        </p>
                        {formula.days && (
                          <p className="text-gray-300 text-xs mt-0.5">{formula.days}</p>
                        )}
                      </div>

                      {/* Horaire */}
                      <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 mb-4 w-full">
                        <Clock className="w-3.5 h-3.5 text-[#5BC4F0] flex-shrink-0" />
                        <span className="text-gray-200 text-xs">{formula.hours}</span>
                      </div>

                      {/* Prix */}
                      <div className="text-3xl font-black text-[#FFE600] mt-auto">
                        {formula.price}
                        <span className="text-base font-semibold text-gray-300"> XAF</span>
                      </div>
                      {formula.note && (
                        <span className="text-gray-400 text-xs mt-1">{formula.note}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tâches détaillées par formule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {homeFormulas.map((formula, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-[#E92252] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {formula.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {formula.frequency ?? formula.desc}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {formula.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#E92252] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════
              TAB 2 — SERVICES PONCTUELS
          ══════════════════════════════════════════════════════ */}
          {activeTab === 2 && (
            <motion.div
              key="onetime"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Particuliers */}
              <div className="mb-10">
                <h3 className="text-center text-lg font-bold text-[#E92252] mb-6 uppercase tracking-widest">
                  {t.services.oneTime.particuliers}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {oneTimeServices
                    .filter((s) => s.category === 'particuliers')
                    .map((service, index) => (
                      <ServiceCard
                        key={index}
                        service={service}
                        index={index}
                        bgImage={bgImages.oneTime[index]}
                      />
                    ))}
                </div>
              </div>

              {/* Professionnels */}
              <div>
                <h3 className="text-center text-lg font-bold text-[#E92252] mb-6 uppercase tracking-widest">
                  {t.services.oneTime.professionnels}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {oneTimeServices
                    .filter((s) => s.category === 'professionnels')
                    .map((service, index) => (
                      <ServiceCard
                        key={index}
                        service={service}
                        index={index + 3}
                        bgImage={bgImages.oneTime[index + 3]}
                      />
                    ))}
                </div>
              </div>

              {/* Note de bas */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-sm text-gray-500 dark:text-gray-400 italic mt-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl py-4 px-6"
              >
                {t.services.oneTime.note}
              </motion.p>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════
              TAB 3 — CANAPÉ & DÉSINFECTION
          ══════════════════════════════════════════════════════ */}
          {activeTab === 3 && (
            <motion.div
              key="sofa"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* ── Colonne gauche : Canapé + extras ── */}
              <div className="space-y-6">
                {/* Nettoyage canapé */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                  style={{
                    backgroundImage: `url(${bgImages.sofa}?auto=compress&cs=tinysrgb&w=800)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Sofa className="w-5 h-5 text-[#5BC4F0]" />
                      {t.services.sofa.sofaTitle}
                    </h3>
                    <div className="space-y-2">
                      {t.services.sofa.sofaItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-2.5"
                        >
                          <span className="text-gray-200 font-medium text-sm">{item.label}</span>
                          <span className="text-[#FFE600] font-bold text-sm">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs italic mt-3">
                      {t.services.sofa.sofaNote}
                    </p>
                  </div>
                </motion.div>

                {/* Extras */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-bold text-[#0D1B2A] dark:text-white mb-4">
                    {t.services.sofa.extrasTitle}
                  </h3>
                  <div className="space-y-2">
                    {t.services.sofa.extras.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-gray-50 dark:bg-white/5 rounded-xl px-4 py-2.5"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{item.label}</span>
                        <span className="text-[#E92252] font-bold text-sm">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Colonne droite : Désinfection ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-[#0D1B2A] dark:text-white mb-1 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-[#E92252]" />
                  {t.services.sofa.disinfTitle}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs italic mb-5">
                  {t.services.oneTime.note}
                </p>
                <div className="space-y-2">
                  {t.services.sofa.disinfItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-gray-50 dark:bg-white/5 rounded-xl px-4 py-3 group hover:bg-[#E92252]/5 dark:hover:bg-[#E92252]/10 transition-colors"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-[#E92252] transition-colors">
                        {item.label}
                      </span>
                      <span className="text-[#E92252] font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Badges visuels */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Dératisation', 'Désinsectisation', 'Désinfection'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#E92252]/10 text-[#E92252] text-xs font-semibold px-3 py-1 rounded-full border border-[#E92252]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}

// ── Sous-composant carte service ponctuel ─────────────────────────────────────
function ServiceCard({
  service,
  index,
  bgImage,
}: {
  service: { title: string; items: string[]; icon: React.ElementType };
  index: number;
  bgImage: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative overflow-hidden rounded-2xl shadow-xl group min-h-[260px]"
      style={{
        backgroundImage: `url(${bgImage}?auto=compress&cs=tinysrgb&w=600)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/75 group-hover:from-black/30 transition-all duration-300" />

      {/* Icône */}
      <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-sm rounded-lg p-2">
        <service.icon className="w-6 h-6 text-white" />
      </div>

      <div className="relative z-10 p-6 pt-16 flex flex-col h-full">
        <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
        <ul className="space-y-1.5">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#E92252] mt-0.5 flex-shrink-0" />
              <span className="text-gray-200 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
