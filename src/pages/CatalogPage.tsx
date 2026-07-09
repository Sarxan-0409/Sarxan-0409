import { useEffect } from 'react';
import ProductCatalog from '../components/ProductCatalog';
import Header from '../components/Header';

export default function CatalogPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-24">
        <ProductCatalog />
      </main>
    </div>
  );
}
