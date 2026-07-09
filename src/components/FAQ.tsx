import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Ümumi',
    question: 'Keramoqranit nədir?',
    answer: 'Keramoqranit, soyuq preslənmiş və yüksək temperaturda fırında bişirilmiş artificial daş materialıdır. Təbii qaranit ilə eyni xassələri daşıyır və daha uzun ömürlü, daha rəngarəng seçimlərə malikdir. Evin daxili və xarici istifadə üçün uyğundur.',
  },
  {
    id: '2',
    category: 'Ümumi',
    question: 'Keramoqranit nə qədər davam edir?',
    answer: 'Düzgün quraşdırıldıqda keramoqranit 25-30 il və ya daha uzun müddət davam edə bilər. Təmizlik və baxım asandır və uzun müddət döşəmə üzərində rəngi solmur. Suda davamlı və qış şəraitində donmaya tab gətirə bilir.',
  },
  {
    id: '3',
    category: 'Quraşdırma',
    question: 'Keramoqranit quraşdırmaq çətindir?',
    answer: 'Keramoqranit quraşdırmaq nisbətən asan, lakin peşəkar tərəfindən quraşdırılması tövsiyə olunur. Düzgün əsas hazırlığı və mixi çox vacibdir. Döşəmə tamamilə düz olmalı və xüsusi yapışqan istifadə edilməlidir.',
  },
  {
    id: '4',
    category: 'Təmizlik',
    question: 'Keramoqranit necə təmizlənir?',
    answer: 'Keramoqranit sadə səbun və su ilə təmizlənə bilər. Çətin lekelər üçün xüsusi təmizləyicilər istifadə edilə bilər. Çizilməsindən qaçınmaq üçün abrasiv maddələrdən istifadə etməyin. Hər ay bir dəfə mühüm etmək faydalıdır.',
  },
 
  {
    id: '6',
    category: 'Quraşdırma',
    question: 'Keramoqranit harada istifadə edilə bilər?',
    answer: 'Keramoqranit mutfaq, vanna, yaşayış otağı, balkon, teras və hətta kommersial sahələrdə istifadə edilə bilər. Suya davamlı olduğu üçün yüksək nemlilik olan yerlərdə əla seçimdir. Isitmə sistemləri ilə uyumludur.',
  },
];

export default function FAQComponent() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
            Kömək Mərkəzi
          </span>
          <h2 className="heading-md sm:heading-lg mb-4">
            Tez-tez Soruşulan Suallar
          </h2>
          <p className="text-primary/60 max-w-xl mx-auto">
            Keramoqranit məhsulları, quraşdırma və baxım haqqında ən çox soruşulan suallara cavablar
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq: FAQ, idx: number) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  openId === faq.id
                    ? 'bg-white shadow-soft'
                    : 'bg-white/50 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-1 bg-secondary rounded-lg text-xs font-medium text-primary/60">
                      {faq.category}
                    </span>
                    <span className="font-medium text-lg pr-8 lg:pr-0">{faq.question}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openId === faq.id ? 'bg-primary text-white rotate-180' : 'bg-secondary'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-primary/70 leading-relaxed mt-4 pt-4 border-t border-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
