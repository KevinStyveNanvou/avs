// components/Contact.tsx
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Préparer les données pour Formspree
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch('https://formspree.io/f/mzdjlnny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès !');
        // Réinitialiser le formulaire
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        toast.error('Erreur lors de l’envoi. Veuillez réessayer.');
      }
      toast.success('Message envoyé avec succès !');
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Erreur de connexion. Vérifiez votre réseau.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: t.contact.info.address, link: null },
    { icon: Phone, label: t.contact.info.phone, link: `tel:${t.contact.info.phone}` },
    { icon: Mail, label: t.contact.info.email, link: `mailto:${t.contact.info.email}` },
    {
      icon: MessageCircle,
      label: t.contact.info.whatsapp,
      link: `https://wa.me/237654122760?text=${encodeURIComponent(t.whatsapp.message)}`,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-[#0E0A1A]"
      ref={ref}
    >
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-underline"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Colonne gauche : coordonnées + carte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="wave-card glass-card p-6 hover-lift"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-[#E92252] rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{info.label}</span>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#E92252] rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{info.label}</span>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="wave-card bg-[#E92252] p-1"
            >
              <div className="wave-card overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9161887744684!2d11.516666!3d3.867722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDMuOCJOIDExwrAzMScwMC4wIkU!5e0!3m2!1sen!2scm!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AVS Location"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite : formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[650px] rounded-2xl overflow-hidden"
          >
            <img
              src="/img/call.jpg"
              alt="Contact background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#E92252]/70" />

            <div className="relative z-10 h-full flex items-center justify-center p-6">
              <form
                onSubmit={handleSubmit}
                className="w-full mt-18 max-w-lg bg-white/20 p-10 dark:bg-black/40 rounded-2xl shadow-xl space-y-6"
              >
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
                  <label className="form-label">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input-premium"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
                  <label className="form-label">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input-premium"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
                  <label className="form-label">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input-premium"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
                  <label className="form-label">{t.contact.form.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input-premium"
                  >
                    {t.contact.form.serviceOptions.map((option, index) => (
                      <option key={index} value={index === 0 ? '' : option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}>
                  <label className="form-label">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input-premium resize-none"
                    placeholder='optional...'
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-[#E92252] hover:bg-[#c01e46] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {loading ? '...' : t.contact.form.submit}
                  <Send className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}