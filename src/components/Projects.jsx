import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    imageSrc:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195095/HomeSowCase-Premium-Home-Artistry-Bespoke-Interior-Design_wvd7ae.png",
    link: "https://homeshowcase.co.in",
    description:
      "Custom e-commerce platform for home decor with sleek UI and lightning-fast checkout.",
  },
  {
    title: "VOF Design Studio",
    category: "Web Development",
    imageSrc:
      "https://res.cloudinary.com/dtqsqnq4y/image/upload/v1761391218/vof_kckmpn.png",
    link: "https://vofdesignstudio.com",
    description:
      "Modern portfolio website for an interior design studio showcasing elegant work.",
  },
  {
    title: "Decor & Furniture Store",
    category: "Web / Mobile App",
    imageSrc:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195537/D-LUXURIO-Professional-Interior-Design-Premium-Furniture_orr8hy.png",
    link: "https://designdecor.co.in",
    description:
      "Furniture store with integrated mobile responsiveness and product catalog system.",
  },
  {
    title: "Interior Design Studio",
    category: "Web Development",
    imageSrc:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1760195269/D-LUXURIO-Lime-plasters-Premium-Architecture-Interior-Design-Studio_e1pbjp.png",
    link: "https://dluxurio.in",
    description:
      "Premium architecture website with artistic design and optimized performance.",
  },
];

const gradientClasses = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-green-500 to-lime-400",
  "from-orange-500 to-amber-400",
];

const Projects = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [showAll, setShowAll] = useState(false);
  const { toast } = useToast();

  // 🧠 Basic SEO (Helmet-free)
  useEffect(() => {
    document.title =
      "Our Projects | The Devs Technologies - Web & App Development";
    const metaDesc = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Explore our featured projects at The Devs Technologies — high-performance websites, mobile apps, and digital experiences crafted for excellence."
      );
    if (metaKeywords)
      metaKeywords.setAttribute(
        "content",
        "web development, React, digital marketing, mobile app development, website design, The Devs Technologies, Vijayawada"
      );
  }, []);

  useEffect(() => {
    if (inView) setActiveSection("projects");
  }, [inView, setActiveSection]);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 bg-secondary"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="projects-heading"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our handpicked projects that blend design, performance, and
            innovation.
          </p>
        </motion.header>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group border flex flex-col"
              aria-label={`Project: ${project.title}`}
            >
              <div className="relative overflow-hidden flex-grow">
                <img
                  src={project.imageSrc}
                  alt={project.description}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground truncate">
                    {project.title}
                  </h3>
                </div>
                <Button
                  onClick={() => window.open(project.link, "_blank")}
                  aria-label={`Visit ${project.title} website`}
                  className={`mt-4 text-white text-sm py-2 px-3 rounded-md bg-gradient-to-r ${
                    gradientClasses[index % gradientClasses.length]
                  } shadow-md hover:scale-105 transition-transform`}
                >
                  Visit Site <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            See More Projects
          </Button>
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-3xl p-6 max-w-6xl w-full relative overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setShowAll(false)}
                  aria-label="Close project list"
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-3xl font-bold text-center mb-6">
                  All Projects
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <article
                      key={index}
                      className="bg-card rounded-2xl overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                      aria-label={`Project: ${project.title}`}
                    >
                      <div className="relative overflow-hidden flex-grow">
                        <img
                          src={project.imageSrc}
                          alt={project.description}
                          loading="lazy"
                          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-5 flex flex-col justify-between flex-grow">
                        <div>
                          <p className="text-sm font-semibold text-blue-500 mb-1">
                            {project.category}
                          </p>
                          <h3 className="text-lg md:text-xl font-bold truncate">
                            {project.title}
                          </h3>
                        </div>
                        <Button
                          onClick={() => window.open(project.link, "_blank")}
                          aria-label={`Visit ${project.title} website`}
                          className={`mt-3 text-white text-sm py-2 px-3 rounded-md bg-gradient-to-r ${
                            gradientClasses[index % gradientClasses.length]
                          } shadow-md hover:scale-105 transition-transform`}
                        >
                          Visit Site <ExternalLink className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
