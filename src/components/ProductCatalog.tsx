import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Grid3X3, LayoutGrid, X, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  collection: string;
  color: string;
  surface: string;
  category: string;
  images: string[];
  dimensions?: string;
  thickness?: string;
}

const products: Product[] = [
  { id: '1', name: 'Amalfi Antracite', collection: 'Amalfi', color: 'Antracite', surface: 'Parlak', category: 'Daş Effekti', images: ['/src/assets/products/amalfiantracite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '2', name: 'Amalfi Grey', collection: 'Amalfi', color: 'Grey', surface: 'Parlak', category: 'Daş Effekti', images: ['/src/assets/products/amalfigrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '3', name: 'Amalfi White', collection: 'Amalfi', color: 'White', surface: 'Parlak', category: 'Daş Effekti', images: ['/src/assets/products/amalfiwhite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '4', name: 'Antalya Antracite', collection: 'Antalya', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/antalyaantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '5', name: 'Antalya Light Grey', collection: 'Antalya', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/antalyalightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '6', name: 'Aspen Noce', collection: 'Aspen', color: 'Noce', surface: 'Matte', category: 'Taxta Effekti', images: ['/src/assets/products/aspennoce.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '7', name: 'Beirut Beige', collection: 'Beirut', color: 'Beige', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/beirutbeige.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '8', name: 'Beirut Beige Decor', collection: 'Beirut', color: 'Beige', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/beirutbeigedecor.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '9', name: 'Beirut Grey', collection: 'Beirut', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/beirutgrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '10', name: 'Beirut Grey Decor', collection: 'Beirut', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/beirutgreydecor.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '11', name: 'Beirut White', collection: 'Beirut', color: 'White', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/beirutwhite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '12', name: 'Bonita Gold', collection: 'Bonita', color: 'Gold', surface: 'Parlak', category: 'Taxta Effekti', images: ['/src/assets/products/bonitagold.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '13', name: 'Carestone Dark Grey', collection: 'Carestone', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/carestonedarkgrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '14', name: 'Cluster Antracite', collection: 'Cluster', color: 'Antracite', surface: 'Parlak', category: 'Daş Effekti', images: ['/src/assets/products/clusterantracite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '15', name: 'Cluster Grey', collection: 'Cluster', color: 'Grey', surface: 'Parlak', category: 'Daş Effekti', images: ['/src/assets/products/clustergrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '16', name: 'Cluster Ivory', collection: 'Cluster', color: 'Ivory', surface: 'Parlak', category: 'Daş Effekti', images: ['/src/assets/products/clusterivory.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '17', name: 'Cosmopolitan Crystal', collection: 'Cosmopolitan', color: 'Crystal', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/cosmopolitancrystal.jpeg'], dimensions: '120×120cm', thickness: '10mm' },
  { id: '18', name: 'Cosmopolitan Steel', collection: 'Cosmopolitan', color: 'Steel', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/cosmopolitansteel.jpeg'], dimensions: '120×120cm', thickness: '10mm' },
  { id: '19', name: 'Delta Antracite', collection: 'Delta', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/deltaantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '20', name: 'Delta Beige', collection: 'Delta', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/deltabeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '21', name: 'Delta Smoke', collection: 'Delta', color: 'Smoke', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/deltasmoke.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '22', name: 'Ebrue Blue', collection: 'Ebrue', color: 'Blue', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/ebrueblue.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '23', name: 'Fano Black', collection: 'Fano', color: 'Black', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/fanoblack.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '24', name: 'Gisborne Beige', collection: 'Gisborne', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/gisbornebeige.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '25', name: 'Gisborne Dark Grey', collection: 'Gisborne', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/gisbornedarkgrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '26', name: 'Glam White', collection: 'Glam', color: 'White', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/glamwhite.jpeg'], dimensions: '120×120cm', thickness: '10mm' },
  { id: '27', name: 'Glossy White', collection: 'Glossy', color: 'White', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/glossywhite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '28', name: 'Havuz Blue', collection: 'Havuz', color: 'Blue', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/havuzblue.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '29', name: 'Kaizen White', collection: 'Kaizen', color: 'White', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/kaizenwhite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '30', name: 'Lauren Light Grey', collection: 'Lauren', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/laurenlightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '31', name: 'Levante Grey', collection: 'Levante', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/levantegrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '32', name: 'Luton Light Grey', collection: 'Luton', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/lutonlightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '33', name: 'Magnus Grey', collection: 'Magnus', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/magnusgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '34', name: 'Magnus White', collection: 'Magnus', color: 'White', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/magnuswhite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '35', name: 'Matis Blue', collection: 'Matis', color: 'Blue', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/matisblue.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '36', name: 'Mothica Rose', collection: 'Mothica', color: 'Rose', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/mothicarose.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '37', name: 'Nicewood Beige', collection: 'Nicewood', color: 'Beige', surface: 'Matte', category: 'Taxta Effekti', images: ['/src/assets/products/nicewoodbeige.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '38', name: 'Nicewood Cream', collection: 'Nicewood', color: 'Cream', surface: 'Matte', category: 'Taxta Effekti', images: ['/src/assets/products/nicewoodcream.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '39', name: 'Nicewood Grey', collection: 'Nicewood', color: 'Grey', surface: 'Matte', category: 'Taxta Effekti', images: ['/src/assets/products/nicewoodgrey.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '40', name: 'Pinapulpis Beige', collection: 'Pinapulpis', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/pinapulpisbeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '41', name: 'Pinapulpis Dark Grey', collection: 'Pinapulpis', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/pinapulpisdarkgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '42', name: 'Pinapulpis Light Grey', collection: 'Pinapulpis', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/pinapulpislightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '43', name: 'Rec Marmo Calacata', collection: 'Rec Marmo', color: 'Calacata', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/recmarmocalacata.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '44', name: 'Rec Shine Grey', collection: 'Rec Shine', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/src/assets/products/recshinegrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '45', name: 'Rec Shine Grey Relief', collection: 'Rec Shine', color: 'Grey', surface: 'Relief', category: 'Mərmər Effekti', images: ['/src/assets/products/recshinegreyrelief.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '46', name: 'Rec Unica White', collection: 'Rec Unica', color: 'White', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/recunicawhite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '47', name: 'Rec Xtone Antracite', collection: 'Rec Xtone', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/recxtoneantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '48', name: 'Rec Xtone Grey', collection: 'Rec Xtone', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/recxtonegrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '49', name: 'Rio Grande Grey', collection: 'Rio Grande', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/riograndegrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '50', name: 'Social Antracite', collection: 'Social', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/socialantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '51', name: 'Social Beige', collection: 'Social', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/socialbeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '52', name: 'Social Grey', collection: 'Social', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/socialgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '53', name: 'Statue Light Grey', collection: 'Statue', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/statuelightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '54', name: 'Taxim Beige', collection: 'Taxim', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/taximbeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '55', name: 'Taxim Dark Grey', collection: 'Taxim', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/taximdarkgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '56', name: 'Taxim Light Grey', collection: 'Taxim', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/taximlightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '57', name: 'Tropez Antracite', collection: 'Tropez', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/src/assets/products/tropezantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
];

const collections = [...new Set(products.map((p) => p.collection))];
const colors = [...new Set(products.map((p) => p.color))];
const surfaces = [...new Set(products.map((p) => p.surface))];
const categories = [...new Set(products.map((p) => p.category))];

export default function ProductCatalog() {
  const [search, setSearch] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSurface, setSelectedSurface] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [gridView, setGridView] = useState<'large' | 'small'>('large');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = useMemo(() => {
    let result = products.filter((p: Product) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.collection.toLowerCase().includes(search.toLowerCase());
      const matchesCollection = !selectedCollection || p.collection === selectedCollection;
      const matchesColor = !selectedColor || p.color === selectedColor;
      const matchesSurface = !selectedSurface || p.surface === selectedSurface;
      const matchesCategory = !selectedCategory || p.category === selectedCategory;

      return matchesSearch && matchesCollection && matchesColor && matchesSurface && matchesCategory;
    });

    if (sortBy === 'name') {
      result.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
    } else if (sortBy === 'collection') {
      result.sort((a: Product, b: Product) => a.collection.localeCompare(b.collection));
    }

    return result;
  }, [search, selectedCollection, selectedColor, selectedSurface, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSelectedCollection('');
    setSelectedColor('');
    setSelectedSurface('');
    setSelectedCategory('');
    setSearch('');
  };

  const activeFiltersCount = [selectedCollection, selectedColor, selectedSurface, selectedCategory].filter(Boolean).length;

  return (
    <section id="catalog" className="py-24 lg:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
            Kəşf Edin
          </span>
          <h2 className="heading-md sm:heading-lg mb-4">
            Məhsul Kataloqu
          </h2>
          <p className="text-primary/60 max-w-xl mx-auto">
            Premium keramoqranit kolleksiyalarımızı kəşf edin
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
              <input
                type="text"
                placeholder="Məhsul axtar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-secondary/50 rounded-2xl border border-transparent focus:border-primary/20 focus:outline-none transition-all"
              />
            </div>

            <div className="flex gap-3 items-center flex-wrap lg:flex-nowrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-5 py-4 rounded-2xl border transition-all ${
                  showFilters ? 'bg-primary text-white border-primary' : 'bg-secondary/50 border-transparent hover:border-primary/20'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="ml-1 w-5 h-5 bg-accent-beige rounded-full text-xs flex items-center justify-center text-primary font-medium">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="flex rounded-2xl overflow-hidden border border-secondary/50">
                <button
                  onClick={() => setGridView('large')}
                  className={`px-4 py-4 transition-all ${gridView === 'large' ? 'bg-primary text-white' : 'bg-secondary/50 hover:bg-secondary'}`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setGridView('small')}
                  className={`px-4 py-4 transition-all ${gridView === 'small' ? 'bg-primary text-white' : 'bg-secondary/50 hover:bg-secondary'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
              </div>

              
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-secondary/30 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Filter Seçimləri</span>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary/60 hover:text-primary flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    Təmizlə
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Kolleksiya</label>
                  <select
                    value={selectedCollection}
                    onChange={(e) => setSelectedCollection(e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-secondary focus:border-primary/20 focus:outline-none"
                  >
                    <option value="">Hamısı</option>
                    {collections.map((c) => (
                      <option key={c as string} value={c as string}>{c as string}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Rəng</label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-secondary focus:border-primary/20 focus:outline-none"
                  >
                    <option value="">Hamısı</option>
                    {colors.map((c) => (
                      <option key={c as string} value={c as string}>{c as string}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Səth</label>
                  <select
                    value={selectedSurface}
                    onChange={(e) => setSelectedSurface(e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-secondary focus:border-primary/20 focus:outline-none"
                  >
                    <option value="">Hamısı</option>
                    {surfaces.map((s) => (
                      <option key={s as string} value={s as string}>{s as string}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-primary/60 mb-2 block">Kateqoriya</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-secondary focus:border-primary/20 focus:outline-none"
                  >
                    <option value="">Hamısı</option>
                    {categories.map((c) => (
                      <option key={c as string} value={c as string}>{c as string}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="mb-4 text-sm text-primary/60">
          {filteredProducts.length} məhsul tapıldı
        </div>

        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-secondary/30 rounded-3xl"
          >
            <p className="text-lg text-primary/60 mb-4">Heç bir məhsul tapılmadı</p>
            <button
              onClick={clearFilters}
              className="btn-secondary text-sm"
            >
              Filterləri təmizlə
            </button>
          </motion.div>
        ) : (
          <div className={gridView === 'large'
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'grid md:grid-cols-3 lg:grid-cols-4 gap-4'
          }>
            {filteredProducts.map((product: Product, idx: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.01 }}
              >
                <Link
                 to={`/product/${product.id}`}
                  className="card-base card-hover block group"
                >
                  <div className={`relative overflow-hidden ${gridView === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 lg:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary/80 transition-colors">
                        {product.name}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary/60 mb-3">
                      <span className="px-2 py-1 bg-secondary rounded-lg">{product.collection}</span>
                      <span>{product.dimensions}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-primary/40">
                      <span>{product.surface}</span>
                      <span>•</span>
                      <span>{product.thickness}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
