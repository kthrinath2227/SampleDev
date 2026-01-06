import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Layers,
  Users,
  BarChart,
  GitBranch,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast Performance',
    description:
      'Optimized for speed to ensure a great user experience and better SEO.',
  },
  {
    icon: ShieldCheck,
    title: 'Ironclad Security',
    description:
      'Protecting your digital assets with industry-leading security practices.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'Built to grow with your business, handling increased traffic effortlessly.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description:
      'Intuitive and engaging interfaces that delight users and drive conversions.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description:
      'Powerful analytics to track performance and make informed decisions.',
  },
  {
    icon: GitBranch,
    title: 'Agile & Transparent',
    description:
      'An agile methodology with full transparency and regular updates.',
  },
];

const Features = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setActiveSection('features');
    }
  }, [inView, setActiveSection]);

  // ✅ HashRouter-safe helper (future-proof, no UI impact)
  const navigateToSection = (sectionId) => {
    window.location.hash = `/${sectionId}`;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const isMobile = () => window.innerWidth < 768;

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 px-4 bg-white relative"
      role="region"
      aria-label="Core advantages and features of our web development services"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* SEO metadata */}
      <meta
        itemProp="name"
        content="Core advantages of TheDevsTechnologies"
      />
      <meta
        itemProp="description"
        content="Key features including performance, security, scalability, user experience, analytics, and agile development offered by TheDevsTechnologies in Vijayawada."
      />

      {/* Invisible SEO context */}
      <p className="sr-only">
        TheDevsTechnologies offers blazing fast performance, secure architecture,
        scalable systems, user-centric design, data-driven insights, and agile
        development practices for businesses in Vijayawada and across Andhra Pradesh.
      </p>

      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Core <span className="gradient-text">Advantages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the pillars of our development process that guarantee success
            and quality.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-200 -translate-x-1/2 hidden md:block"></div>

          {/* Timeline dots */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full flex-col items-center">
            {features.map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-blue-500 shadow-md flex items-center justify-center my-16"
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Feature items */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex md:items-center w-full my-8 md:my-0 flex-col md:flex-row"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
            >
              {/* Feature Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? 'md:pr-8 md:text-right'
                    : 'md:pl-8 md:text-left md:order-2'
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile()
                      ? 0
                      : index % 2 === 0
                      ? -50
                      : 50,
                    y: isMobile() ? 20 : 0,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card p-6 rounded-2xl shadow-lg border hover:shadow-blue-500/20 transition-shadow mb-8 md:mb-16"
                >
                  <meta itemProp="name" content={feature.title} />
                  <meta
                    itemProp="description"
                    content={feature.description}
                  />

                  <div
                    className={`flex items-center gap-4 ${
                      index % 2 === 0
                        ? 'md:justify-end flex-row-reverse md:flex-row'
                        : 'justify-start'
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center rounded-xl flex-shrink-0">
                      <feature.icon aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for timeline alignment */}
              <div className="md:w-1/2 md:order-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Hidden SEO hash links */}
      <nav className="sr-only">
        <a href="/#/features">Web Development Features</a>
        <a href="/#/services">Website Design & Development Services</a>
        <a href="/#/projects">Web Development Projects</a>
        <a href="/#/contact">Contact Web Developers in Vijayawada</a>
      </nav>
    </section>
  );
};

export default Features;
