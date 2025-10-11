import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, PenTool, ShoppingCart, BarChart2, Search } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Acquire your place on top of SERP & witness the tangible result! SEO works for any business if you implement it accurately.',
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Develop a full-potential website for your business with the trending technologies. Stand out from the crowd and derive more sales.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging native mobile applications for both iOS and Android platforms to reach more users.',
  },
   {
    icon: BarChart2,
    title: 'Social Media Management',
    description: 'Effective social management will assist you to grow your business, maintain a social presence, and interact with the right audience.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Designing beautiful and user-friendly interfaces that provide an exceptional user experience and boost engagement.',
  },
];

const Services = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) setActiveSection('services');
  }, [inView, setActiveSection]);

  const [selected, setSelected] = useState(0);

  const SelectedIcon = services[selected].icon;

  return (
    <section id="services" ref={ref} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold tracking-widest uppercase">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
            What We Do
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-2xl shadow-blue-500/20 border z-10"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full flex-shrink-0">
                            <SelectedIcon className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 underline decoration-blue-500 decoration-4 underline-offset-8">{services[selected].title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{services[selected].description}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      (index !== selected) && (
                          <motion.div
                              key={index}
                              onClick={() => setSelected(index)}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-card hover:bg-white hover:shadow-lg border"
                          >
                              <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 bg-gray-100 text-gray-600 flex items-center justify-center rounded-full flex-shrink-0">
                                      <ServiceIcon className="w-6 h-6" />
                                  </div>
                                  <div>
                                      <h4 className="text-xl font-bold text-card-foreground">{service.title}</h4>
                                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
                                  </div>
                              </div>
                          </motion.div>
                      )
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;