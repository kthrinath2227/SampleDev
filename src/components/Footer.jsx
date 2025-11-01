
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <ParticleBackground />
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
               <img
    src="https://res.cloudinary.com/dtqsqnq4y/image/upload/v1761387612/globe-bg_1_hntiel.png"
    alt="TheDevsTechnologies Logo"
    className="w-10 h-10 object-contain"
  />
              <h3 className="text-2xl font-bold gradient-text">TheDevsTechnologies</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences with cutting-edge technology and creative excellence.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Projects', 'Process', 'Testimonials', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'E-Commerce', 'Digital Marketing'].map(service => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <a href="tel:9381187905" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  +91 9381187905
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <a href="mailto:info@thedevstechnologies.online" className="text-muted-foreground hover:text-blue-600 transition-colors break-all">
                  info@thedevstechnologies.online
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <a href="https://www.thedevstechnologies.online" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  www.thedevstechnologies.online
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} TheDevsTechnologies. All rights reserved.
            </p>
            <p className="text-muted-foreground text-center text-sm mt-1">
    TheDevsTechnologies is a registered MSME under Udyam Registration No. <strong>UDYAM-AP-06-0106280</strong>.
  </p>
            <div className="flex gap-6 text-sm">
              <span className="text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
