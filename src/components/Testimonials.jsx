
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const testimonials = [
  {
    name: 'Murali Krishna.',
    company: 'Co Founder , HomeShowCase',
    text: 'TheDevsTechnologies transformed our online presence. Their team is professional, creative, and delivered beyond our expectations. Highly recommended!',
    rating: 4,
    avatarName: 'A professional woman with glasses smiling'
  },
  {
    name: 'Vinod K.',
    company: 'Founder, DLuxurio',
    text: 'Working with them was a breeze. They understood our vision perfectly and developed a mobile app that our users love. The entire process was seamless.',
    rating: 5,
    avatarName: 'A man in a suit looking confident'
  },
  {
    name: 'Preetham.',
    company: 'Founder. VijaySri Enterprise',
    text: 'Their design team is top-notch. They created a stunning UI/UX for our new platform that has significantly improved user engagement.',
    rating: 5,
    avatarName: 'A young creative professional with a friendly expression'
  },
];

const Testimonials = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) setActiveSection('testimonials');
  }, [inView, setActiveSection]);

  return (
    <section id="testimonials" ref={ref} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to client satisfaction. See what our partners have to say about their experience with us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-lg flex flex-col h-full border"
            >
              <Quote className="w-12 h-12 text-blue-200 mb-4" />
              <p className="text-muted-foreground mb-6 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mt-auto">
                
                <div>
                  <h4 className="font-bold text-lg text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
