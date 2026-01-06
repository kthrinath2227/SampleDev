import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const CitySEO = ({ city, nearby = [] }) => {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const [isActive, setIsActive] = useState(false);

  // ✅ Make HashRouter reactive
  useEffect(() => {
    const checkHash = () => {
      setIsActive(window.location.hash === `#/city/${citySlug}`);
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [citySlug]);

  if (!isActive) return null;

  return (
    <section className="py-16 max-w-5xl mx-auto">
      <Helmet>
        <title>
          Website Design Company in {city} | Web Development, SEO & Digital Marketing
        </title>

        <meta
          name="description"
          content={`TheDevsTechnologies is a professional website design and web development company in ${city} offering SEO-friendly websites, ecommerce website development, Google My Business (GMB) setup, digital marketing, logo design, business card design, mobile app development and social media management. We provide onsite and online services, are open 24/7 and serve ${city}, ${nearby.join(
            ', '
          )} and all major cities in India.`}
        />

        <link
          rel="canonical"
          href={`https://thedevstechnologies.online/#/city/${citySlug}`}
        />

        {/* 🔥 City Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Website Design & Development',
            provider: {
              '@type': 'LocalBusiness',
              name: 'TheDevsTechnologies',
              url: 'https://thedevstechnologies.online/',
              telephone: '+91-9381187905',
            },
            areaServed: {
              '@type': 'Place',
              name: city,
            },
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">
        Website Design Company in{' '}
        <span className="text-blue-600">{city}</span>
      </h1>

      <p className="text-muted-foreground mb-6">
        TheDevsTechnologies is a professional website design and web development
        company in <strong>{city}</strong> offering SEO-friendly websites,
        ecommerce development, Google My Business (GMB) setup, digital marketing,
        logo design, business card design, mobile app development and social
        media management.
      </p>

      <p className="text-muted-foreground mb-8">
        We provide <strong>onsite and online services</strong>, are available{' '}
        <strong>24/7</strong>, and serve startups, small businesses and
        enterprises across <strong>{city}</strong>, {nearby.join(', ')} and
        throughout India.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Our Services in {city}
      </h2>

      <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-muted-foreground">
        <li>Website Design</li>
        <li>Web Development</li>
        <li>Ecommerce Website Development</li>
        <li>SEO & Local SEO</li>
        <li>Google My Business (GMB) Setup</li>
        <li>Digital Marketing</li>
        <li>Social Media Management</li>
        <li>Logo & Business Card Design</li>
        <li>Mobile App Development (Android & iOS)</li>
      </ul>
    </section>
  );
};

export default CitySEO;
