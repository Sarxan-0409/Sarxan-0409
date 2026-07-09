import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ali Məmmədov",
    role: "Layihə Müdürü",
    company: "Mətbəə Konstruksiyası",
    content: "iConstruction-dan aldığımız keramoqranit məhsullarının keyfiyyəti və sürətli xidməti layihəmizin müvəffəqiyyətini təmin etdi. Peşəkar yanaşma və konsultasiya xidmətindən çox razıyıq.",
  },
  {
    id: 2,
    name: "Fərid Əlizadə",
    role: "Həyat Salonunun Sahibi",
    company: "Dəkoration Studyası",
    content: "İtaliyan dizaynlı keramoqranit kolleksiyaları müştərilerimizin üzləri tərəfindən çox maraqla qarşılanmışdır. Müasır dizayn və dəqiq ölçülər bizim iş keyfiyyətini artırmışdır.",
  },
  {
    id: 3,
    name: "Naila Hacıyeva",
    role: "İç Dizaynçı",
    company: "Luxe Design Agensi",
    content: "Hər bir layihə üçün iConstruction-dan müxtəlif təklif aldığım üçün çox xoşbəxtəm. Yüksək keyfiyyət, çeşidli rəmlər və dəmirbaş xidmət bizim müştərilərimizi həmişə qane edir.",
  },
  {
    id: 4,
    name: "Rəşad Qasımov",
    role: "Kooperativ Direktoru",
    company: "Bina Qruppa",
    content: "iConstruction ilə işləmək böyük zəvqdir. Onların dəstəyi, texniki məsləhət və sürətli çatdırılma xidməti bizim tikinti layihəsini vaxtında bitirməyimizə kömək etdi.",
  },
  {
    id: 5,
    name: "Leyla Rahimova",
    role: "Restoran Mütəşəbbisi",
    company: "Culinary Palace",
    content: "Restoranımız üçün seçdiyimiz keramoqranit məhsulları əsl müvəffəqiyyət oldu. Həm estetik, həm də ekoloji cəhətdən mükəmməl seçim. Müştərilərimiz çox bəyənir!",
  },
  {
    id: 6,
    name: "Vüqar Həsənov",
    role: "Hərşəy Mənzil Sahibi",
    company: "Yaşayış Kompleksi",
    content: "Villamın bütün sahəsində iConstruction məhsullarını istifadə etdik. Davamlılığı, gözəl görünüşü və asan təmizlənməsi ilə tam razıyam. Hərə meydanın böyük hissəsi fərqlidir!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
            Rəylər
          </span>
          <h2 className="heading-md sm:heading-lg">
            Müştərilərimiz Nə Deyir
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-8 left-0 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center -z-10">
            <Quote className="w-6 h-6 text-primary/30" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-sand text-xl">★</span>
                ))}
              </div>

              <p className="text-xl lg:text-2xl leading-relaxed text-primary/80 mb-8">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[current].name}</div>
                  <div className="text-sm text-primary/60">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/70 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-primary w-6' : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/70 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
