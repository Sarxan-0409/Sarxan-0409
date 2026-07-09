import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Header from '../components/Header';

export default function TermsPage() {
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
          <h1 className="heading-md mb-8">İstifadə Şərtləri</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-primary/70">
            <p>
              Bu İstifadə Şərtləri iConstruction ("Şirkət", "Biz" və ya "Bizim") veb saytının istifadəsini tənzimləyir.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Qəbul</h2>
            <p>
              Bu veb saytdan istifadə etməklə, siz bu Şərtləri qəbul etmiş sayılırsınız. Əgər siz bu Şərtlərə razı deyilsinizsə, 
              lütfən veb saytdan istifadə etməyin.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. İstifadə Lisenziyası</h2>
            <p>
              Biz sizə veb saytda olan məlumatlardan şəxsi, ticarət dışı istifadə üçün məhdud, geri çəkilə biləcək lisenziya verirəm.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Məhdudiyyətlər</h2>
            <p>
              Siz aşağıdakıları etməməyə razı olursunuz:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Məlumatları kopyalamaq və ya yenidən istehsal etmək</li>
              <li>Veb saytı hücuma uğratmaq</li>
              <li>Qanunun pozulmasına nəticə verən fəaliyyətlər</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Məxsuliyet</h2>
            <p>
              Veb saytda olan məlumatlar "OLDUĞU KİMİ" təqdim olunur. Biz nə qədər diqqətlə yaratmış olsaq da, 
              xətalar ola biləcəyini qəbul edirik.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Dəyişikliklər</h2>
            <p>
              Biz bu Şərtləri istənə biləcəyi vaxt dəyişə bilərik. Dəyişikliklər veb saytda dərc olunduqda qüvvə alacaq.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Əlaqə</h2>
            <p>
              Bu Şərtlərə dair suallarınız varsa, bizimlə əlaqə saxlayın:
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
