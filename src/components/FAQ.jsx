import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqItems = [
  {
    question: 'Do you build websites for businesses in Vijayawada & Andhra Pradesh?',
    answer:
      'Yes! We work with businesses across Vijayawada, Guntur, Amaravati, and all over Andhra Pradesh—offering fast, SEO-optimized websites tailored to local business needs.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most business websites take 5–10 days. More advanced websites, ecommerce stores, or custom dashboards may take 2–4 weeks depending on features.',
  },
  {
    question: 'Do you provide SEO and Google ranking support?',
    answer:
      'Yes! Every website we build comes with on-page SEO, fast loading speed, mobile optimization, and basic technical SEO setup. We also offer full SEO packages for businesses that want top Google rankings.',
  },
  {
    question: 'Do you offer support after website delivery?',
    answer:
      'Absolutely. We provide ongoing support, updates, security monitoring, and maintenance—even after launch.',
  },
  {
    question: 'Can I contact you on WhatsApp directly?',
    answer:
      'Yes! You can message us anytime on WhatsApp for quick responses, project discussions, or support.',
  },
];

const FAQ = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView && setActiveSection) {
      setActiveSection('faq');
    }
  }, [inView, setActiveSection]);

  // ✅ HashRouter-safe helper (future-proof, no UI impact)
  const navigateToSection = (sectionId) => {
    window.location.hash = `/${sectionId}`;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 px-4 bg-secondary"
      aria-labelledby="faq-heading"
      role="region"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* SEO metadata */}
      <meta
        itemProp="name"
        content="FAQ - Website Design & Development Services in Vijayawada, Andhra Pradesh"
      />
      <meta
        itemProp="description"
        content="Frequently asked questions about website design, web development, SEO, and support services offered by TheDevsTechnologies in Vijayawada and across Andhra Pradesh."
      />

      {/* Invisible SEO context */}
      <p className="sr-only">
        Frequently asked questions about website design, web development, SEO,
        maintenance, and contacting TheDevsTechnologies, a professional web
        development company in Vijayawada, Andhra Pradesh.
      </p>

      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          id="faq-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              className="border border-gray-300 rounded-2xl p-6 bg-white shadow-sm"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3
                className="text-xl font-semibold mb-2"
                itemProp="name"
              >
                {item.question}
              </h3>

              <div
                className="text-muted-foreground"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Hidden SEO hash links */}
      <nav className="sr-only">
        <a href="/#/faq">Website Development FAQs</a>
        <a href="/#/services">Website Design & Development Services</a>
        <a href="/#/projects">Web Development Projects</a>
        <a href="/#/contact">Contact Web Developers in Vijayawada</a>
      </nav>
    </section>
  );
};

export default FAQ;
