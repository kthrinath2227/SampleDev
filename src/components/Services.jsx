import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Smartphone,
  PenTool,
  BarChart2,
  Search,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description:
      'Acquire your place on top of SERP & witness the tangible result! SEO works for any business if you implement it accurately.',
  },
  {
    icon: Code,
    title: 'Website Development',
    description:
      'Develop a full-potential website for your business with the trending technologies. Stand out from the crowd and derive more sales.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Building intuitive and engaging native mobile applications for both iOS and Android platforms to reach more users.',
  },
  {
    icon: BarChart2,
    title: 'Social Media Management',
    description:
      'Effective social management will assist you to grow your business, maintain a social presence, and interact with the right audience.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description:
      'Designing beautiful and user-friendly interfaces that provide an exceptional user experience and boost engagement.',
  },
];

const Services = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [selected, setSelected] = useState(0);
  const SelectedIcon = services[selected].icon;

  useEffect(() => {
    if (inView) {
      setActiveSection('services');
    }
  }, [inView, setActiveSection]);

  // ✅ HashRouter-safe helper (future-proof, no UI impact)
  const navigateToSection = (sectionId) => {
    window.location.hash = `/${sectionId}`;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 px-4 bg-secondary"
      role="region"
      aria-label="Website design, web development, SEO, mobile app and UI UX services"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta
        itemProp="name"
        content="Web design, development and digital services"
      />
      <meta
        itemProp="description"
        content="Professional website development, SEO, mobile app development, social media management and UI UX design services by TheDevsTechnologies for businesses in Vijayawada, Guntur, Amaravati and across Andhra Pradesh."
      />

      {/* Invisible but SEO-friendly local content */}
      <p className="sr-only">
        TheDevsTechnologies offers SEO services, website development, mobile app
        development, social media management and UI UX design for businesses in
        Vijayawada, Guntur, Amaravati and throughout Andhra Pradesh.
      </p>

      <div className="container mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold tracking-widest uppercase">
            SERVICES
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2 text-foreground"
            itemProp="headline"
          >
            What We Do
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* SELECTED SERVICE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-2xl shadow-blue-500/20 border z-10"
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content={services[selected].title} />
              <meta
                itemProp="areaServed"
                content="Vijayawada, Guntur, Amaravati, Andhra Pradesh, India"
              />

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full flex-shrink-0">
                  <SelectedIcon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-foreground mb-2 underline decoration-blue-500 decoration-4 underline-offset-8"
                    itemProp="name"
                  >
                    {services[selected].title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    itemProp="description"
                  >
                    {services[selected].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* SERVICE LIST */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              if (index === selected) return null;
              const ServiceIcon = service.icon;

              return (
                <motion.div
                  key={index}
                  onClick={() => setSelected(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-card hover:bg-white hover:shadow-lg border"
                  role="button"
                  aria-label={`View details about ${service.title} service`}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="serviceType" content={service.title} />
                  <meta
                    itemProp="areaServed"
                    content="Vijayawada, Guntur, Amaravati, Andhra Pradesh, India"
                  />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 flex items-center justify-center rounded-full flex-shrink-0">
                      <ServiceIcon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4
                        className="text-xl font-bold text-card-foreground"
                        itemProp="name"
                      >
                        {service.title}
                      </h4>
                      <p
                        className="text-sm text-muted-foreground mt-1 line-clamp-2"
                        itemProp="description"
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🔥 Hidden SEO hash links (crawler-friendly, UI-safe) */}
      <nav className="sr-only">
        <a href="/#/services">Website Design & Development Services</a>
        <a href="/#/projects">Web Development Projects</a>
        <a href="/#/contact">Contact Web Developers in Vijayawada</a>
      </nav>
    </section>
  );
};

export default Services;
