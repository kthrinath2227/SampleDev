
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Planning',
    description: 'We dive deep into your vision, goals, and requirements to create a comprehensive project roadmap.',
    number: '01',
  },
  {
    icon: Pencil,
    title: 'Design & Prototype',
    description: 'Our designers craft stunning interfaces and interactive prototypes that bring your ideas to visual life.',
    number: '02',
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Expert developers build your solution with clean code, rigorous testing, and quality assurance.',
    number: '03',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your project seamlessly and provide ongoing support to ensure continued success and growth.',
    number: '04',
  },
];

const Process = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) setActiveSection('process');
  }, [inView, setActiveSection]);

  return (
    <section id="process" ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Streamlined <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital products through collaboration and expertise.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -translate-y-1/2"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-blue-200 text-blue-600 font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
