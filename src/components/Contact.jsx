import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, Zap, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useInView } from 'react-intersection-observer';

const Contact = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) setActiveSection('contact');
  }, [inView, setActiveSection]);

  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappNumber = "919381187905";
    const prefilledText = `Hello TheDevsTechnologies!

I'm interested in your services. Here are my details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledText)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp... 🚀",
      description: "Your message is ready to be sent!",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const whyChooseUs = [
    { icon: Zap, text: 'Agile & Fast Delivery' },
    { icon: Users, text: 'Customer-Centric Approach' },
    { icon: Lightbulb, text: 'Innovative Solutions' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 bg-white"
      role="region"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Hidden but SEO + accessibility friendly local context */}
      <meta
        itemProp="name"
        content="Contact TheDevsTechnologies - Website Design & Development Company in Vijayawada"
      />
      <meta
        itemProp="description"
        content="Get in touch with TheDevsTechnologies in Vijayawada, Andhra Pradesh for website design, web development, ecommerce websites, mobile apps and local SEO services."
      />
      <p className="sr-only">
        Contact TheDevsTechnologies, a website design and development company based in
        Vijayawada, Andhra Pradesh, India. We build business websites, ecommerce stores,
        mobile apps and provide local SEO services for clients in Vijayawada, Guntur,
        Amaravati and across Andhra Pradesh.
      </p>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact info + Why choose us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
            itemScope
            itemType="https://schema.org/ContactPoint"
            itemProp="mainEntity"
          >
            <meta itemProp="contactType" content="Customer Service" />
            <meta itemProp="areaServed" content="Vijayawada, Andhra Pradesh, India" />
            <meta itemProp="availableLanguage" content="en" />

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a
                      href="tel:9381187905"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                      itemProp="telephone"
                    >
                      +91 9381187905
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:info@thedevstechnologies.online"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                      itemProp="email"
                    >
                      info@thedevstechnologies.online
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-effect rounded-2xl p-8 space-y-6"
              aria-label="Contact form to send your project details via WhatsApp"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 1234567890"
                  autoComplete="tel"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-6 text-lg rounded-xl shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Send via WhatsApp
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
