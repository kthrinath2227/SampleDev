
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Header = ({ activeSection, onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-3 glass-effect shadow-md' : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
  {/* Globe Icon */}
  <img
    src="https://res.cloudinary.com/dtqsqnq4y/image/upload/v1761387612/globe-bg_1_hntiel.png"
    alt="TheDevsTechnologies Logo"
    className="w-10 h-10 object-contain"
  />

  {/* Vertical Line */}
  <div className="w-[2px] h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

  {/* Text Section */}
  <div className="flex flex-col leading-tight">
    <p className="text-xl font-bold text-foreground">TheDevsTechnologies</p>
    <p className="text-xs gradient-text font-semibold">
      Building Tech That Builds Your Business.
    </p>
  </div>
</a>


          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-600'
                    : 'text-foreground/70 hover:text-blue-600'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="active-nav-link"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
              <a href="tel:9381187905" className="flex items-center gap-2 text-foreground/80 hover:text-blue-600 transition-colors">
                  <Phone size={18} />
                  <span className="font-medium text-sm">+91 9381187905</span>
              </a>
              <Button onClick={onQuoteClick} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform">
                  <FileText className="mr-2 h-4 w-4" /> Get a Free Quote
              </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-foreground">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-lg lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)} className="text-foreground">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-semibold transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'gradient-text' : 'text-foreground'}`}
                >
                  {link.name}
                </a>
              ))}
              <Button onClick={() => { setIsMenuOpen(false); onQuoteClick(); }} size="lg" className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full">
                  Get a Free Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
