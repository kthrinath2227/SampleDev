import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Murali Krishna.',
    company: 'Co Founder, HomeShowCase',
    text: 'TheDevsTechnologies transformed our online presence. Their team is professional, creative, and delivered beyond our expectations. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Vinod K.',
    company: 'Founder, DLuxurio',
    text: 'Working with them was a breeze. They understood our vision perfectly and developed a mobile app that our users love. The entire process was seamless.',
    rating: 5,
  },
  {
    name: 'Preetham.',
    company: 'Founder, VijaySri Enterprise',
    text: 'Their design team is top-notch. They created a stunning UI/UX for our new platform that has significantly improved user engagement.',
    rating: 5,
  },
];

const Testimonials = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setActiveSection('testimonials');
    }
  }, [inView, setActiveSection]);

  // ✅ HashRouter-safe helper (future-proof, no UI impact)
  const navigateToSection = (sectionId) => {
    window.location.hash = `/${sectionId}`;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 px-4 bg-secondary"
      role="region"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* SEO metadata */}
      <meta
        itemProp="name"
        content="Client reviews and testimonials for TheDevsTechnologies"
      />
      <meta
        itemProp="description"
        content="Real client testimonials for TheDevsTechnologies, a website design and development company in Vijayawada, Andhra Pradesh."
      />

      {/* Invisible SEO context */}
      <p className="sr-only">
        Read genuine client reviews and testimonials for TheDevsTechnologies,
        a professional website design and development company in Vijayawada,
        offering web development, ecommerce, mobile apps, and UI UX design services.
      </p>

      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to client satisfaction. See what our partners have
            to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-lg flex flex-col h-full border"
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.company}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Link each review to your business */}
              <meta
                itemProp="itemReviewed"
                content="TheDevsTechnologies - Website Design & Development Company in Vijayawada"
              />
              <meta
                itemProp="name"
                content={`Review by ${testimonial.name}`}
              />

              <Quote
                className="w-12 h-12 text-blue-200 mb-4"
                aria-hidden="true"
              />

              <p
                className="text-muted-foreground mb-6 flex-grow"
                itemProp="reviewBody"
              >
                "{testimonial.text}"
              </p>

              <div className="flex items-center mt-auto">
                <div>
                  <p
                    className="font-bold text-lg text-card-foreground"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{testimonial.name}</span>
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>

                  <div
                    className="flex mt-1"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta
                      itemProp="ratingValue"
                      content={String(testimonial.rating)}
                    />
                    <meta itemProp="bestRating" content="5" />

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Hidden SEO hash links */}
      <nav className="sr-only">
        <a href="/#/testimonials">Client Reviews</a>
        <a href="/#/services">Website Design & Development Services</a>
        <a href="/#/projects">Web Development Projects</a>
        <a href="/#/contact">Contact Web Developers in Vijayawada</a>
      </nav>
    </section>
  );
};

export default Testimonials;
