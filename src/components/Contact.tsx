import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Ünvan',
      value: 'Bakı şəhəri',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+994 50 213 21 30',
      href: 'tel:+994502132130',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@iconstruction.az',
      href: 'mailto:info@iconstruction.az',
    },
    {
      icon: Clock,
      label: 'İş Saatları',
      value: 'Bazar ertəsi - Şənbə: 09:00 - 18:00',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
            Əlaqə
          </span>
          <h2 className="heading-md sm:heading-lg mb-4">
            Bizimlə Əlaqə Saxlayın
          </h2>
          <p className="text-primary/60 max-w-xl mx-auto">
            Sualınız var? Bizimlə əlaqə saxlayın və ya showrooomumuza gəlin
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-soft h-full">
              <h3 className="text-xl font-semibold mb-8">Məlumat Göndərin</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Adınız *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary/30 rounded-xl border border-transparent focus:border-primary/20 focus:outline-none transition-all"
                    placeholder="Adınızı daxil edin"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary/30 rounded-xl border border-transparent focus:border-primary/20 focus:outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Mesajınız *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary/30 rounded-xl border border-transparent focus:border-primary/20 focus:outline-none transition-all resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary w-full gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Göndərildi!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Göndər</span>
                    </>
                  )}
                </button>
              </form>

              <a
                href="https://wa.me/994502132130"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 mt-6 py-4 px-6 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp ilə Yazın</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm text-primary/60 block mb-1">{info.label}</span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary/70 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-medium">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden shadow-soft bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.44!2d49.87!3d40.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzEyLjAiTiA0OcKwNTInMTIuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Xəritə"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
