import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Haqqımızda', href: '#about' },
    { name: 'Layihələr', href: '#projects' },
    { name: 'Rəylər', href: '#testimonials' },
  ],
  products: [
    { name: 'Kataloq', href: '/catalog' },
    { name: 'Mərmər Effekti', href: '/catalog?category=Mərmər Effekti' },
    { name: 'Daş Effekti', href: '/catalog?category=Daş Effekti' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-section py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/favicon.png" alt="iConstruction Logo" className="w-10 h-10" />
              <span className="font-semibold text-xl">iConstruction</span>
            </Link>

            <p className="text-white/60 leading-relaxed mb-6">
              Azərbaycanın lider keramoqranit təchizatçısı.
              Graniser Ceramics rəsmi distribütörü.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/imperium__construction/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/imperium.constructions.7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <h4 className="font-semibold mb-6">Şirkət</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-6">Məhsullar</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <h4 className="font-semibold mb-6">Əlaqə</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Bakı şəhəri</span>
              </li>
              <li>
                <a
                  href="tel:+994502132130"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+994 50 213 21 30</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@iconstruction.az"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@iconstruction.az</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-section py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <span>© 2026 iConstruction. Bütün hüquqlar qorunur.</span>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white/60 transition-colors">Məxfilik Siyasəti</Link>
              <Link to="/terms" className="hover:text-white/60 transition-colors">İstifadə Şərtləri</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
