
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import Chatbot from '@/components/Chatbot';
import QuoteModal from '@/components/QuoteModal';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TheDevsTechnologies",
    "url": "https://www.thedevstechnologies.online",
    "logo": "https://www.thedevstechnologies.online/logo.png",
    "telephone": "+91-9381187905",
    "email": "info@thedevstechnologies.online",
    "description": "TheDevsTechnologies offers premium web development, mobile app creation, and comprehensive digital solutions to elevate your business. Building Tech That Builds Your Business.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com",
      "https://twitter.com",
      "https://instagram.com",
      "https://linkedin.com"
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>TheDevsTechnologies - Web Development | Building Tech That Builds Your Business</title>
        <meta name="description" content="TheDevsTechnologies delivers cutting-edge web development, mobile apps, and digital solutions. Building Tech That Builds Your Business. Contact us at 9381187905." />
        <meta name="keywords" content="web development, mobile app development, digital solutions, software development, TheDevsTechnologies, custom websites, ecommerce development, tech solutions, building business tech" />
        <meta name="author" content="TheDevsTechnologies" />
        <meta property="og:title" content="TheDevsTechnologies - Web Development | Building Tech That Builds Your Business" />
        <meta property="og:description" content="Transform your business with cutting-edge web development and digital solutions from TheDevsTechnologies. Building Tech That Builds Your Business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thedevstechnologies.online" />
        <meta property="og:image" content="https://www.thedevstechnologies.online/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TheDevsTechnologies - Premium Web Development" />
        <meta name="twitter:description" content="Expert web development and digital solutions for modern businesses. Building Tech That Builds Your Business." />
        <meta name="twitter:image" content="https://www.thedevstechnologies.online/twitter-image.jpg" />
        <link rel="canonical" href="https://www.thedevstechnologies.online" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        <Header activeSection={activeSection} onQuoteClick={() => setIsQuoteModalOpen(true)} />
        <main>
          <Hero setActiveSection={setActiveSection} />
          <Services setActiveSection={setActiveSection} />
          <Features setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <Process setActiveSection={setActiveSection} />
          <Testimonials setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </main>
        <Footer />
        <FloatingIcons />
        <Chatbot />
        <QuoteModal isOpen={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
