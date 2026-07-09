import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Ana Səhifə', href: '/#hero' },
  { name: 'Haqqımızda', href: '/#about' },
  { name: 'Katalog', href: '/catalog' },
  { name: 'Layihələr', href: '/#projects' },
  { name: 'Əlaqə', href: '/#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
        setTimeout(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-section">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="iConstruction"
              className="h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('/#contact')}
              className="btn-primary text-sm"
            >
              Əlaqə Saxla
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-secondary/30 overflow-hidden"
          >
            <div className="container-section py-6 space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <button
                onClick={() => handleNavClick('/#contact')}
                className="btn-primary w-full text-center"
              >
                Əlaqə Saxla
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}