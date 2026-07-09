import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <Header />
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="heading-md mb-8">Məxfilik Siyasəti</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-primary/70">
            <p>
              iConstruction şirkəti ("Biz", "Bizim" və ya "Şirkət") məxfilikə və ma'lomatların qorunmasına sadiq qalmışdır.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Məlumatların Toplanması</h2>
            <p>
              Biz web saytımızı ziyarət etdikdə məlumatlarınızı toplamaq ola bilərik, o cümlədən:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Fərdi məlumatlar (ad, e-poçt, telefon nömrəsi)</li>
              <li>Naviqasiya məlumatları</li>
              <li>İpv4 ünvanı</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Məlumatların İstifadəsi</h2>
            <p>
              Topladığımız məlumatlar aşağıdakı məqsədlər üçün istifadə olunur:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Xidmət göstərməyin təkmilləşdirilməsi</li>
              <li>Sizinlə əlaqə saxlama</li>
              <li>Məhsullar və xidmətlər haqqında məlumatlandırma</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Məlumatların Qorunması</h2>
            <p>
              Sizin məlumatlarınızı qorunmaq üçün uyğun tədbirlər qəbul edirik.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Əlaqə</h2>
            <p>
              Məxfilik siyasətinə dair suallarınız varsa, bizimlə əlaqə saxlayın:
            </p>
            <ul className="space-y-2">
              <li>E-poçt: info@iconstruction.az</li>
              <li>Telefon: +994 50 213 21 30</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
