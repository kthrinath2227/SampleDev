import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    imageSrc:
      'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195095/HomeSowCase-Premium-Home-Artistry-Bespoke-Interior-Design_wvd7ae.png',
    link: 'https://homeshowcase.co.in',
  },
  {
    title: 'Decor & Furniture Store',
    category: 'Web Development / Mobile App',
    imageSrc:
      'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195537/D-LUXURIO-Professional-Interior-Design-Premium-Furniture_orr8hy.png',
    link: 'https://designdecor.co.in',
  },
  {
    title: 'Interior Design Studio',
    category: 'Web Development',
    imageSrc:
      'https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195269/D-LUXURIO-Lime-plasters-Premium-Architecture-Interior-Design-Studio_e1pbjp.png',
    link: 'https://dluxurio.in',
  },
];

const Projects = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) setActiveSection('projects');
  }, [inView, setActiveSection]);

  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: '🚧 Feature in Progress',
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="projects" ref={ref} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud of our work. Check out some of the projects we've
            delivered for our amazing clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group border max-w-sm mx-auto block h-[500px] flex flex-col"
            >
              <div className="relative overflow-hidden flex-grow">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 mb-1">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={showToast}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
