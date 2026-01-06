import React, { useState, lazy, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import FAQ from '@/components/FAQ';
import CitySEO from '@/components/CitySEO';

// Lazy-loaded components
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Chatbot = lazy(() => import('@/components/Chatbot'));
const QuoteModal = lazy(() => import('@/components/QuoteModal'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  /* ===========================
     🔥 STRONG LOCAL SEO SCHEMA
  ============================ */

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://thedevstechnologies.online/#localbusiness',
    name: 'TheDevsTechnologies',
    url: 'https://thedevstechnologies.online/#/',
    description:
      'TheDevsTechnologies is a website design, web development, SEO, GMB setup, digital marketing, logo design, mobile app development and social media management company offering onsite and online services, open 24/7, serving Vijayawada, Andhra Pradesh and all major cities across India.',
    logo: 'https://thedevstechnologies.online/logo.png',
    image: 'https://thedevstechnologies.online/og-image.jpg',
    telephone: '+91-9381187905',
    email: 'info@thedevstechnologies.online',
    priceRange: '₹10,000 - ₹50,000',

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vijayawada',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: '16.5062',
      longitude: '80.6480',
    },

    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },

    areaServed: [
      'Vijayawada',
      'Guntur',
      'Amaravati',
      'Machilipatnam',
      'Tenali',
      'Eluru',
      'Visakhapatnam',
      'Tirupati',
      'Kakinada',
      'Rajahmundry',
      'Nellore',
      'Kadapa',
      'Kurnool',
      'Anantapur',
      'Ongole',
      'Andhra Pradesh',

      'Hyderabad',
      'Bengaluru',
      'Chennai',
      'Mumbai',
      'Kolkata',
      'Bhubaneswar',

      'India',
      'Online',
      'Remote',
      'Worldwide',
    ],

    sameAs: [
      'https://www.instagram.com/thedevstechnologies',
      'https://www.facebook.com/thedevstechnologies',
      'https://www.linkedin.com/company/thedevstechnologies',
    ],

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '18',
      bestRating: '5',
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital & IT Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { reminder: 'Website Design', '@type': 'Service', name: 'Website Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google My Business Setup' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logo Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Card Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://thedevstechnologies.online/#website',
    url: 'https://thedevstechnologies.online/#/',
    name: 'TheDevsTechnologies - Website Design & Web Development Company in Vijayawada',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thedevstechnologies.online/#/',
      },
    ],
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <html lang="en" />

          {/* 🔥 PRIMARY SEO */}
          <title>
            Best Website Design Company in Vijayawada | Web Development, SEO & Digital Marketing
          </title>

          <meta
            name="description"
            content="TheDevsTechnologies is a leading website design company in Vijayawada offering SEO-friendly websites, ecommerce development, GMB setup, digital marketing, logo design, mobile app development and social media management. Onsite & online services, open 24/7, serving Andhra Pradesh and all major cities across India."
          />

          <meta
            name="keywords"
            content="
              website design company vijayawada,
              web development company vijayawada,
              seo company vijayawada,
              gmb setup vijayawada,
              digital marketing agency vijayawada,

              website design company andhra pradesh,
              web developers andhra pradesh,
              ecommerce website developers andhra pradesh,

              website design company india,
              web development company india,
              digital marketing services india,
              online website developers india,
              open 24/7 web development,

              website designers hyderabad,
              website designers bangalore,
              website designers chennai,
              website designers mumbai,
              website designers kolkata,
              website designers bhubaneswar,

              mobile app developers india,
              android app development india,
              ios app development india,

              logo design company india,
              business card design services,
              social media management company india,

              onsite website development,
              online website services,
              thedevstechnologies
            "
          />

          <meta name="author" content="TheDevsTechnologies" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />

          {/* ✅ HashRouter-safe canonical */}
          <link rel="canonical" href="https://thedevstechnologies.online/#/" />

          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="TheDevsTechnologies" />
          <meta
            property="og:title"
            content="Website Design & Web Development Company in Vijayawada"
          />
          <meta
            property="og:description"
            content="Professional website designers and developers offering SEO, ecommerce, digital marketing and mobile app development across India."
          />
          <meta
            property="og:image"
            content="https://thedevstechnologies.online/og-image.jpg"
          />
          <meta property="og:url" content="https://thedevstechnologies.online/#/" />

          {/* TWITTER */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Best Website Developers in Vijayawada – TheDevsTechnologies"
          />
          <meta
            name="twitter:description"
            content="SEO-optimized websites, ecommerce development, GMB setup & digital marketing services in India."
          />
          <meta
            name="twitter:image"
            content="https://thedevstechnologies.online/og-image.jpg"
          />

          {/* STRUCTURED DATA */}
          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </Helmet>

        <div className="min-h-screen overflow-x-hidden">
          <Header
            activeSection={activeSection}
            onQuoteClick={() => setIsQuoteModalOpen(true)}
          />

          <main id="main-content">
            <Hero setActiveSection={setActiveSection} />
            <Services setActiveSection={setActiveSection} />
            {/* ================= ANDHRA PRADESH ================= */}
 {/* ========= CITY SEO PAGES ========= */}
            {/* ANDHRA PRADESH */}
            <CitySEO city="Vijayawada" nearby={['Guntur', 'Amaravati', 'Tenali']} />
            <CitySEO city="Visakhapatnam" nearby={['Vizianagaram', 'Anakapalle']} />
            <CitySEO city="Guntur" nearby={['Tenali', 'Chilakaluripet']} />
            <CitySEO city="Tirupati" nearby={['Renigunta', 'Chandragiri']} />
            <CitySEO city="Kurnool" nearby={['Nandyal', 'Adoni']} />
            <CitySEO city="Anantapur" nearby={['Hindupur', 'Dharmavaram']} />

            {/* TELANGANA */}
            <CitySEO city="Hyderabad" nearby={['Secunderabad', 'Gachibowli']} />
            <CitySEO city="Warangal" nearby={['Hanamkonda']} />

            {/* PAN INDIA */}
            <CitySEO city="Bengaluru" nearby={['Whitefield', 'Electronic City']} />
            <CitySEO city="Mumbai" nearby={['Thane', 'Andheri']} />
            <CitySEO city="Chennai" nearby={['Tambaram', 'Velachery']} />
            <CitySEO city="Kolkata" nearby={['Salt Lake', 'Howrah']} />
            <CitySEO city="Bhubaneswar" nearby={['Cuttack']} />

            <Process setActiveSection={setActiveSection} />
            <Projects setActiveSection={setActiveSection} />
            <Features setActiveSection={setActiveSection} />

            <Suspense fallback={null}>
              <Testimonials setActiveSection={setActiveSection} />
            </Suspense>

            <FAQ setActiveSection={setActiveSection} />
            <Contact setActiveSection={setActiveSection} />
          </main>

          <Footer />
          <FloatingIcons />

          <Suspense fallback={null}>
            <Chatbot />
            <QuoteModal
              isOpen={isQuoteModalOpen}
              onOpenChange={setIsQuoteModalOpen}
            />
          </Suspense>

          <Toaster />
        </div>
      </>
    </HelmetProvider>
  );
}

export default App;
