// components/Contact.tsx
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';

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
    try {
      //https://formspree.io/f/mgopgnvz
      const response = await fetch('https://formspree.io/f/mgopgnvz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success(t.contact.sucess_toast);
      } else {
        toast.error(t.contact.error_toast);
      }
    } catch {
      toast.error(t.contact.error_toast);
    } finally {
      setLoading(false);
    }
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  // Numéro principal pour WhatsApp (premier du tableau)
  const primaryPhone = t.contact.info.phones[0].replace(/\s/g, '').replace('+', '');
  const whatsappUrl = `https://wa.me/${primaryPhone}?text=${encodeURIComponent(t.whatsapp.message)}`;

  // Cartes de contact : adresse + 3 numéros + email + WhatsApp
  const contactCards = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      link: 'https://maps.google.com/?q=Yaoundé,+Mobil+Essos,+Cameroun',
    },
    ...t.contact.info.phones.map((num) => ({
      icon: Phone,
      label: num,
      link: `tel:${num.replace(/\s/g, '')}`,
    })),
    {
      icon: Mail,
      label: t.contact.info.email,
      link: `mailto:${t.contact.info.email}`,
    },
    {
      icon: MessageCircle,
      label: t.contact.info.whatsapp,
      link: whatsappUrl,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-[#0E0A1A]" ref={ref}>

      <div className="max-w-7xl mx-auto">

        {/* ── Titre ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-underline" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ── Colonne gauche : coordonnées + carte ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactCards.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.08 }}
                className="wave-card glass-card p-4 hover-lift"
              >
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 bg-[#E92252] rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {info.label}
                  </span>
                </a>
              </motion.div>
            ))}

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="md:wave-card lg:wave-card bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 mt-2"
            >
              <div className="md:wave-card lg:wave-card overflow-hidden h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9161887744684!2d11.516666!3d3.867722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDMuOCJOIDExwrAzMScwMC4wIkU!5e0!3m2!1sfr!2scm!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AVS — Yaoundé, Mobil Essos"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Colonne droite : formulaire ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden min-h-[680px]"
          >
            <img
              src="/img/call.jpg"
              alt="Contactez AVS"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#E92252]/50" />

            <div className="relative z-10 h-full flex items-center justify-center p-1 lg:p-6 lg:py-10">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white/20 backdrop-blur-md dark:bg-black/30 rounded-2xl shadow-2xl p-2 lg:p-8 space-y-5"
              >
                {/* Nom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 }}
                >
                  <label className="form-label">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean-Pierre Nkomo"
                    className="form-input-premium"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.42 }}
                >
                  <label className="form-label">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="exemple@email.com"
                    className="form-input-premium"
                  />
                </motion.div>

                {/* Téléphone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.49 }}
                >
                  <label className="form-label">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+237 6XX XX XX XX"
                    className="form-input-premium"
                  />
                </motion.div>

                {/* Type de service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.56 }}
                >
                  <label className="form-label">{t.contact.form.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input-premium"
                  >
                    {t.contact.form.serviceOptions.map((option, index) => (
                      <option
                        key={index}
                        value={index === 0 ? '' : option}
                        className="text-black"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.63 }}
                >
                  <label className="form-label">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre besoin..."
                    className="form-input-premium resize-none"
                  />
                </motion.div>

                {/* Bouton */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-[#E92252] hover:bg-[#c01e46] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 shadow-lg"
                >
                  {loading ? (
                    <div className="w-64 h-2 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, #5BC4F0 0%, #E92252 60%, #FFE600 100%)',
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: ['10%', '50%', '90%', '100%'] }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        {/* Shimmer animé sur la barre */}
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
                          }}
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
