import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Home,
  Sparkles,
  Check,
  Star,
  Droplets,
  Bug,
  TreePine,
  Factory,
  HeartPulse,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tabs = [
    { icon: Building2, label: t.services.tabs.business },
    { icon: Home, label: t.services.tabs.home },
    { icon: Sparkles, label: t.services.tabs.oneTime },
  ];

  const businessPlans = [
    {
      ...t.services.business.premium,
      popular: true,
    },
    t.services.business.honorable,
    t.services.business.standard,
    t.services.business.basic,
  ];

  const homeFormulas = [
    t.services.home.formula1,
    t.services.home.formula2,
    t.services.home.formula3,
    t.services.home.formula4,
  ];

  const oneTimeServices = [
    { ...t.services.oneTime.cleaning, icon: Droplets },
    { ...t.services.oneTime.treatment, icon: Bug },
    { ...t.services.oneTime.outdoor, icon: TreePine },
    { ...t.services.oneTime.industrial, icon: Factory },
    { ...t.services.oneTime.hospital, icon: HeartPulse },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-[#23b1e0]/40 dark:bg-[#0E0A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.services.title}</h2>
          <div className="section-underline"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === index
                  ? 'bg-gradient-to-r from-[#5BC4F0] to-[#D62839] dark:from-[#7B2FBE] dark:to-[#D4AF37] text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="business"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {businessPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`wave-card glass-card p-6 hover-lift relative ${
                      plan.popular ? 'ring-2 ring-[#FFE600] scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFE600] text-[#0D1B2A] px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {plan.badge}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-[#D62839] dark:text-[#D4AF37] mb-4">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <p className="text-gray-600 dark:text-gray-400">{plan.frequency}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {plan.schedule}
                      </p>
                    </div>
                    <div className="text-4xl font-bold text-[#0D1B2A] dark:text-white mb-6">
                      {plan.price}
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        {' '}
                        XAF
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="wave-card glass-card p-8"
              >
                <h4 className="text-xl font-bold text-[#D62839] dark:text-[#D4AF37] mb-4">
                  {t.services.business.included}
                </h4>
                <ul className="space-y-3">
                  {t.services.business.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#5BC4F0] dark:text-[#7B2FBE] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-block bg-gradient-to-r from-[#5BC4F0] to-[#D62839] dark:from-[#7B2FBE] dark:to-[#D4AF37] text-white px-6 py-2 rounded-full font-medium">
                  {t.services.business.materials}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {homeFormulas.map((formula, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="wave-card glass-card p-6 hover-lift"
                  >
                    <h3 className="text-2xl font-bold text-[#D62839] dark:text-[#D4AF37] mb-4">
                      {formula.name}
                    </h3>
                    <div className="mb-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        {formula.desc || formula.frequency}
                      </p>
                      {formula.note && (
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {formula.note}
                        </p>
                      )}
                    </div>
                    <div className="text-4xl font-bold text-[#0D1B2A] dark:text-white">
                      {formula.price}
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        {' '}
                        XAF
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="wave-card glass-card p-8"
              >
                <h4 className="text-xl font-bold text-[#D62839] dark:text-[#D4AF37] mb-4">
                  {t.services.business.included}
                </h4>
                <ul className="space-y-3">
                  {t.services.home.tasks.map((task, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#5BC4F0] dark:text-[#7B2FBE] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="onetime"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {oneTimeServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="wave-card glass-card p-6 hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#5BC4F0] to-[#D62839] dark:from-[#7B2FBE] dark:to-[#D4AF37] rounded-full mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#D62839] dark:text-[#D4AF37] mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-[#5BC4F0] dark:text-[#7B2FBE] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
