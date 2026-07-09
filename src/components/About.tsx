import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
const statistics = [
  {
    label: "İl Təcrübə",
    value: "10+",
  },
  {
    label: "Layihə",
    value: "500+",
  },
  {
    label: "Müştəri",
    value: "1000+",
  },
  {
    label: "Brend",
    value: "20+",
  },
];

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const numValue = parseInt(value.replace(/[^\d]/g, ''));
  const actualSuffix = suffix || value.includes('%') ? '%' : '+';

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = numValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setDisplayValue(numValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numValue]);

  return (
    <span ref={ref}>
      {displayValue}{actualSuffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent-beige/30 rounded-3xl -z-10" />
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium keramoqranit mağazası"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft-lg p-6"
            >
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-primary/60">il təcrübə</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
              Haqqımızda
            </span>
            <h2 className="heading-md sm:heading-lg mb-6">
              Azərbaycanın Lider Keramoqranit Təchizatçısı
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed mb-8">
              2010-cu ildən etibarən Azərbaycan bazarında fəaliyyət göstəririk.
              Dünyaca məşhur italyan markalarının rəsmi nümayəndəsi kimi,
              yüksək keyfiyyətli keramoqranit məhsullarını müştərilərimizə təqdim edirik.
            </p>
            <p className="text-lg text-primary/70 leading-relaxed mb-10">
              Peşəkar komandamız hər mərhələdə - seçimdən quraşdırmaya qədər
              dəstək təmin edir. Məqsədimiz xəyallarınızı reallığa çevirməkdir.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
              {statistics.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="text-center"
                >
                  <div className="heading-md font-bold text-primary mb-1">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="text-sm text-primary/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
