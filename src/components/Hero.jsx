
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const projectImages = [
    { src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195095/HomeSowCase-Premium-Home-Artistry-Bespoke-Interior-Design_wvd7ae.png", alt: "Mobile application interface for a fitness app" },
    { src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195269/D-LUXURIO-Lime-plasters-Premium-Architecture-Interior-Design-Studio_e1pbjp.png", alt: "UI/UX design process with wireframes" },
    { src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195537/D-LUXURIO-Professional-Interior-Design-Premium-Furniture_orr8hy.png", alt: "Corporate website shown on a macbook" },
    { src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760194965/TheDevsTechnologies-Web-Development-Building-Tech-That-Builds-Your-Business_mbzh26.png", alt: "Modern e-commerce website design on a laptop" },

  ];

const Hero = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) setActiveSection('hero');
  }, [inView, setActiveSection]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      <ParticleBackground />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 lg:col-span-3"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">Innovative Digital Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Transform Your
              <span className="gradient-text block mt-2">Digital Vision</span>
              Into Reality
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We craft exceptional web experiences that drive growth and innovation. From stunning websites to powerful applications, we bring your ideas to life with cutting-edge technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white border-2 border-blue-200/50 hover:border-blue-500 text-foreground px-8 py-6 text-lg rounded-xl transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block lg:col-span-2 h-[450px] overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/20"
          >
            <motion.div 
                className="w-full"
                animate={{ y: ['0%', '-100%'] }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }}
            >
                <div className="w-full flex flex-col">
                    {projectImages.concat(projectImages[0]).map((image, index) => (
                        <img 
                            key={index} 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-[450px] object-cover" 
                        />
                    ))}
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
