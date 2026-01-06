import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      Icon: Facebook,
      href: 'https://www.facebook.com/thedevstechnologies',
      label: 'Visit TheDevsTechnologies on Facebook',
    },
    {
      Icon: Twitter,
      href: '#',
      label: 'Visit TheDevsTechnologies on Twitter',
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/company/thedevstechnologies',
      label: 'Visit TheDevsTechnologies on LinkedIn',
    },
    {
      Icon: Instagram,
      href: 'https://www.instagram.com/thedevstechnologies',
      label: 'Visit TheDevsTechnologies on Instagram',
    },
  ];

  return (
    <footer
      className="bg-secondary border-t relative overflow-hidden"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
      aria-labelledby="footer-brand-heading"
    >
      {/* SEO metadata */}
      <meta itemProp="name" content="TheDevsTechnologies" />
      <meta
        itemProp="description"
        content="TheDevsTechnologies is a website design and development company in Vijayawada, Andhra Pradesh, offering web development, ecommerce, mobile apps, UI UX design and local SEO services."
      />
      <meta itemProp="url" content="https://thedevstechnologies.online" />

      {/* Invisible SEO context */}
      <p className="sr-only">
        TheDevsTechnologies is a professional website design and development company
        based in Vijayawada, Andhra Pradesh, India, serving businesses across India
        with SEO-friendly websites, ecommerce stores, mobile apps and digital marketing.
      </p>

      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-50">
        <ParticleBackground />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand + Social */}
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
                itemProp="logo"
              />
              <h3
                id="footer-brand-heading"
                className="text-2xl font-bold gradient-text"
                itemProp="name"
              >
                TheDevsTechnologies
              </h3>
            </div>

            <p
              className="text-muted-foreground mb-6 leading-relaxed"
              itemProp="description"
            >
              Transforming ideas into exceptional digital experiences with
              cutting-edge technology and creative excellence.
            </p>

            <div className="flex gap-3" aria-label="Social media links">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel={href === '#' ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-muted-foreground hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links (HashRouter-safe) */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Footer quick navigation"
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Services', hash: 'services' },
                { name: 'Projects', hash: 'projects' },
                { name: 'Process', hash: 'process' },
                { name: 'Testimonials', hash: 'testimonials' },
                { name: 'Contact', hash: 'contact' },
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={`/#/${link.hash}`}
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Website Development',
                'Ecommerce Websites',
                'UI/UX Design',
                'Mobile App Development',
                'Local SEO & Digital Marketing',
              ].map(service => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <meta itemProp="contactType" content="Customer Service" />
            <meta itemProp="areaServed" content="Vijayawada, Andhra Pradesh, India" />

            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="tel:9381187905"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                  itemProp="telephone"
                >
                  +91 9381187905
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="mailto:info@thedevstechnologies.online"
                  className="text-muted-foreground hover:text-blue-600 transition-colors break-all"
                  itemProp="email"
                >
                  info@thedevstechnologies.online
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <a
                  href="https://thedevstechnologies.online"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                  itemProp="url"
                >
                  www.thedevstechnologies.online
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} TheDevsTechnologies. All rights reserved.
            </p>

            <p className="text-muted-foreground text-sm text-center">
              MSME Registered • UDYAM-AP-06-0106280
            </p>

            <div className="flex gap-6 text-sm">
              <span className="text-muted-foreground hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-muted-foreground hover:text-blue-600 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Hidden SEO hash links */}
      <nav className="sr-only">
        <a href="/#/services">Website Design Services Vijayawada</a>
        <a href="/#/projects">Web Development Projects</a>
        <a href="/#/contact">Contact Website Developers in Vijayawada</a>
        <a href="/#/faq">Website Development FAQs</a>
      </nav>
    </footer>
  );
};

export default Footer;
