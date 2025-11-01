import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import { useInView } from 'react-intersection-observer';

const clientLogos = [
  "https://res.cloudinary.com/do5dyebav/image/upload/v1759237702/Logo-home-Photoroom_kxghjw.png",
  "https://res.cloudinary.com/dtqsqnq4y/image/upload/v1761390821/Capture_ouia3r.png",
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757571035/D-luxurio_logo_baqoh0.png",
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758805302/DESIGN_DECOR_1_bmhkp8.png",
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
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 sm:px-8 pt-24 sm:pt-28 pb-20"
    >
      <ParticleBackground />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">Innovative Digital Solutions</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground break-words">
              Transform Your
              <span className="gradient-text block mt-2">Digital Vision</span>
              Into Reality
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We craft exceptional web experiences that drive growth and innovation. From stunning websites to powerful applications, we bring your ideas to life with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-5 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white border-2 border-blue-200/50 hover:border-blue-500 text-foreground px-8 py-5 text-base sm:text-lg rounded-xl transition-all w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Projects
              </Button>
              
            </div>
            <div className="flex justify-center lg:justify-start mt-4">
  <img
    src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1762013371/ChatGPT_Image_Nov_1__2025__09_22_29_PM-removebg-preview_tfoxqh.png"
    alt="MSME Registered"
    className="h-20  opacity-90 hover:opacity-100 transition"
  />
</div>
          </motion.div>

          {/* RIGHT SECTION - Trusted Clients */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center space-y-6 mt-12 lg:mt-0"
          >
            <h3 className="text-base sm:text-lg font-semibold text-center text-muted-foreground uppercase tracking-widest">
              Trusted By Leading Brands
            </h3>

            <div className="overflow-hidden relative w-full h-20 sm:h-24 flex items-center">
              <motion.div
                className="flex gap-10 sm:gap-16 items-center"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <motion.img
                    key={i}
                    src={logo}
                    alt={`Client logo ${i}`}
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
