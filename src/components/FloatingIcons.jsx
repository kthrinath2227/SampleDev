
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="fixed right-1 bottom-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/919381187905"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/thedevstechnologies/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 group"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </motion.a>
    </div>
  );
};

export default FloatingIcons;
  