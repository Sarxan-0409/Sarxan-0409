import { motion } from 'framer-motion';
import { Award, Palette, Truck, ShieldCheck, MessageCircle } from 'lucide-react';

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

const icons = {
  award: Award,
  palette: Palette,
  truck: Truck,
  'shield-check': ShieldCheck,
  'message-circle': MessageCircle,
};

const advantages: Advantage[] = [
  { title: 'Premium Keyfiyyət', description: 'Bütün məhsullar Avropa standartlarına cavab verir', icon: 'award' },
  { title: 'Geniş Seçim', description: '500+ fərqli model və rəng seçimi mövcuddur', icon: 'palette' },
  { title: 'Sürətli Çatdırılma', description: 'Bakı daxilində 1-2 gün ərzində çatdırılma', icon: 'truck' },
  { title: 'Etibarlı Xidmət', description: '10+ il təcrübə ilə peşəkar konsultasiya', icon: 'shield-check' },
  { title: '24/7 Dəstək', description: 'Suallarınız üçün həmişə biz yanında olacağıq', icon: 'message-circle' },
];

export default function Advantages() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
            Bizim Güclü Tərəflərimiz
          </span>
          <h2 className="heading-md sm:heading-lg">
            Nə Üçün Bizi Seçməlisiniz?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((advantage: Advantage, idx: number) => {
            const Icon = icons[advantage.icon as keyof typeof icons] || Award;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="card-base card-hover p-8 text-center group"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
