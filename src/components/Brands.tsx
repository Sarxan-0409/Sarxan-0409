import { motion } from 'framer-motion';

interface Brand {
  id: string;
  name: string;
}

const brands: Brand[] = [];

export default function Brands() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30 overflow-hidden">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-2 block">
            Partnərlərimiz
          </span>
          <h2 className="heading-sm">Dünyaca Tanınmış Brendlər</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="flex justify-center items-center gap-8 lg:gap-16 flex-wrap">
            {brands.map((brand: Brand, idx: number) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center h-16 px-6 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-xl lg:text-2xl font-bold text-primary tracking-tight">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
