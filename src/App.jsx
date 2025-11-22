import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
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
// Lazy-load non-critical / heavier components for speed
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Chatbot = lazy(() => import('@/components/Chatbot'));
const QuoteModal = lazy(() => import('@/components/QuoteModal'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // MAIN LOCAL BUSINESS / SERVICE SCHEMA
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://thedevstechnologies.online/#localbusiness',
    name: 'TheDevsTechnologies',
    url: 'https://thedevstechnologies.online/',
    description:
      'TheDevsTechnologies is a professional website design and development company in Vijayawada providing fast, SEO-friendly business websites, ecommerce stores, and custom web apps across Andhra Pradesh and India.',
    logo: 'https://thedevstechnologies.online/logo.png',
    image: 'https://thedevstechnologies.online/og-image.jpg',
    telephone: '+91-9381187905',
    email: 'info@thedevstechnologies.online',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '76-11-23/21 Mahendra Nagar, Manava Mandir Rd, Bhavanipuram',
      addressLocality: 'Vijayawada',
      addressRegion: 'Andhra Pradesh',
      postalCode: '520012',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '16.5062',
      longitude: '80.6480',
    },
    sameAs: [
      'https://www.instagram.com/thedevstechnologies',
      'https://www.facebook.com/thedevstechnologies',
      'https://www.linkedin.com/company/thedevstechnologies',
    ],
    areaServed: [
      'Vijayawada',
      'Guntur',
      'Visakhapatnam',
      'Rajahmundry',
      'Kakinada',
      'Nellore',
      'Tirupati',
      'Chittoor',
      'Kurnool',
      'Kadapa',
      'Anantapur',
      'Ongole',
      'Tenali',
      'Bhimavaram',
      'Eluru',
      'Machilipatnam',
      'Amaravati',
      'Andhra Pradesh',
      'India',
      'Worldwide',
      'Remote',
      'Online',
      'Global',
      'Domestic',
      'Local',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web design and development services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Website Design',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://thedevstechnologies.online/#service-website-design',
            name: 'Website Design',
            description:
              'Custom, responsive business websites for startups, SMEs, and local businesses in Vijayawada and Andhra Pradesh.',
            areaServed: 'Vijayawada, Andhra Pradesh',
          },
        },
        {
          '@type': 'Offer',
          name: 'Web Development',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://thedevstechnologies.online/#service-web-development',
            name: 'Web Development',
            description:
              'Full-stack web development using React, Tailwind CSS, Node.js, and MongoDB for high-performance web apps.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Ecommerce Website Development',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://thedevstechnologies.online/#service-ecommerce',
            name: 'Ecommerce Website Development',
            description:
              'Custom ecommerce stores with secure payments, product management, and SEO-friendly structure.',
          },
        },
        {
          '@type': 'Offer',
          name: 'SEO Services',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://thedevstechnologies.online/#service-seo',
            name: 'SEO Services',
            description:
              'On-page SEO, technical SEO, and local SEO for higher Google rankings and more leads.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Branding and UI/UX',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://thedevstechnologies.online/#service-branding',
            name: 'Branding and UI/UX',
            description:
              'Brand identity, logo design, and modern UI/UX for web experiences that convert visitors into customers.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Custom Web App Development',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://thedevstechnologies.online/#service-web-apps',
            name: 'Custom Web App Development',
            description:
              'Custom web applications for automation, dashboards, and scalable business tools.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      ratingCount: '18',
      reviewCount: '18',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Homeshowcase',
        },
        reviewBody:
          'They built a clean, fast ecommerce website for our wall art and brass store. Great communication and support.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'VOF Design Studio',
        },
        reviewBody:
          'Professional team, modern design, and SEO-friendly website. We are very happy with the result.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  };

  // WEBSITE SCHEMA (helps with sitelinks search box etc.)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://thedevstechnologies.online/#website',
    url: 'https://thedevstechnologies.online/',
    name: 'TheDevsTechnologies - Website Design and Development Vijayawada',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://thedevstechnologies.online/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // SERVICE-SPECIFIC SCHEMA
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://thedevstechnologies.online/#service-website-design',
        serviceType: 'Website Design',
        name: 'Website Design Company in Vijayawada',
        provider: { '@id': 'https://thedevstechnologies.online/#localbusiness' },
        areaServed: 'Vijayawada, Andhra Pradesh',
      },
      {
        '@type': 'Service',
        '@id': 'https://thedevstechnologies.online/#service-web-development',
        serviceType: 'Web Development',
        name: 'React and Node.js Web Development',
        provider: { '@id': 'https://thedevstechnologies.online/#localbusiness' },
      },
      {
        '@type': 'Service',
        '@id': 'https://thedevstechnologies.online/#service-ecommerce',
        serviceType: 'Ecommerce Website Development',
        name: 'Ecommerce Website Development in Andhra Pradesh',
        provider: { '@id': 'https://thedevstechnologies.online/#localbusiness' },
      },
      {
        '@type': 'Service',
        '@id': 'https://thedevstechnologies.online/#service-seo',
        serviceType: 'SEO Services',
        name: 'SEO Services in Vijayawada',
        provider: { '@id': 'https://thedevstechnologies.online/#localbusiness' },
      },
      {
        '@type': 'Service',
        '@id': 'https://thedevstechnologies.online/#service-branding',
        serviceType: 'Branding and UI/UX',
        name: 'Branding and UI/UX Design',
        provider: { '@id': 'https://thedevstechnologies.online/#localbusiness' },
      },
      {
        '@type': 'Service',
        '@id': 'https://thedevstechnologies.online/#service-web-apps',
        serviceType: 'Custom Web App Development',
        name: 'Custom Web App Development',
        provider: { '@id': 'https://thedevstechnologies.online/#localbusiness' },
      },
    ],
  };

  // FAQ SCHEMA – make sure these Q&As exist visually on the page (FAQ section)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in Vijayawada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Our website packages usually start around ₹15,000 for a complete business website, including design, development, and on-page SEO. The final price depends on the number of pages, features, and custom requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long will it take to build my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most small business websites take 7–15 days once we receive your content and requirements. Larger ecommerce websites or custom web apps may take longer depending on the scope.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide SEO along with website development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes, every website we build is SEO-friendly with optimized code, mobile responsiveness, fast loading speed, and on-page SEO basics like meta tags, headings, and schema markup.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you redesign my existing website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Absolutely. We can redesign your existing website with a modern UI, better performance, and improved conversions while keeping your brand consistent.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer ongoing maintenance and support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes, we offer ongoing website maintenance, security updates, backups, content updates, and technical support with flexible monthly or yearly plans.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thedevstechnologies.online/',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="en" />

        {/* PRIMARY SEO */}
        <title>
         Best Website Design Company in Vijayawada | Web Development & Local SEO | TheDevsTechnologies
        </title>

        <meta
          name="description"
          content="TheDevsTechnologies is a website design and development company in Vijayawada offering fast, SEO-optimized websites, ecommerce stores, and custom web apps for startups and businesses across Andhra Pradesh and India."
        />

      
       <meta
  name="keywords"
  content="
    best website design in vijayawada,
    best website design company vijayawada,
    web development company vijayawada,
    vijayawada website designers,
    vijayawada web design agency,
    ecommerce website development vijayawada,
    ecommerce developers vijayawada,
    business website design vijayawada,
    small business website vijayawada,
    local business website vijayawada,
    seo services in vijayawada,
    local seo company vijayawada,
    digital marketing and web design vijayawada,
    website design andhra pradesh,
    web development andhra pradesh,
    website designers guntur,
    website development amaravati,
    custom website development vijayawada,
    react js developers vijayawada,
    node js developers vijayawada,
    thedevstechnologies
  "
/>

        <meta name="author" content="TheDevsTechnologies" />
        <link rel="canonical" href="https://thedevstechnologies.online/" />

        {/* PERFORMANCE HINT – preload main hero/OG image */}
        <link
          rel="preload"
          as="image"
          href="https://thedevstechnologies.online/og-image.jpg"
        />

        {/* OPEN GRAPH */}
        <meta property="og:site_name" content="TheDevsTechnologies" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:title"
          content="Website Design & Development Company in Vijayawada | TheDevsTechnologies"
        />
        <meta
          property="og:description"
          content="Modern, fast, mobile-friendly websites, ecommerce stores, and web apps for local businesses in Vijayawada, Guntur, and across Andhra Pradesh."
        />
        <meta property="og:url" content="https://thedevstechnologies.online/" />
        <meta
          property="og:image"
          content="https://thedevstechnologies.online/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="TheDevsTechnologies - Website design and development company in Vijayawada"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thedevstechnologies" />
        <meta
          name="twitter:title"
          content="Top Website Developers in Vijayawada – TheDevsTechnologies"
        />
        <meta
          name="twitter:description"
          content="Custom, SEO-optimized websites, landing pages, ecommerce stores and web applications for local businesses and startups."
        />
        <meta
          name="twitter:image"
          content="https://thedevstechnologies.online/twitter-image.jpg"
        />

        {/* TECHNICAL SEO */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="TheDevsTechnologies" />

        {/* GEO LOCAL SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Vijayawada" />
        <meta name="geo.position" content="16.5062;80.6480" />
        <meta name="ICBM" content="16.5062, 80.6480" />

        {/* HREFLANG */}
        <link
          rel="alternate"
          href="https://thedevstechnologies.online/"
          hreflang="en-in"
        />
        <link
          rel="alternate"
          href="https://thedevstechnologies.online/"
          hreflang="x-default"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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

        <main>
          {/* Make sure Hero has a strong H1 like:
              "Website Design & Development Company in Vijayawada" */}
          <Hero setActiveSection={setActiveSection} />
          <Services setActiveSection={setActiveSection} />
          <Process setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <Features setActiveSection={setActiveSection} />

          {/* Lazy-loaded for better initial load */}
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
  );
}

export default App;
