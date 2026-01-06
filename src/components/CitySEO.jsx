import React from 'react';

const CitySEO = ({ city, nearby = [] }) => {
  return (
    <section
      id={`web-design-${city.toLowerCase()}`}
      className="py-20 px-4 bg-secondary"
      role="region"
      aria-label={`Website Design Company in ${city}`}
    >
      <div className="container mx-auto max-w-5xl">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Website Design Company in <span className="gradient-text">{city}</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-6">
          TheDevsTechnologies is a professional website design and web development
          company in <strong>{city}</strong> offering SEO-friendly websites,
          ecommerce development, Google My Business (GMB) setup, digital marketing,
          logo design, mobile app development and social media management.
        </p>

        <p className="text-lg text-muted-foreground mb-8">
          We provide <strong>onsite and online services</strong>, are available
          <strong> 24/7</strong>, and serve startups, small businesses and enterprises
          across <strong>{city}</strong> and nearby locations.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Our Services in {city}
        </h2>

        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-muted-foreground mb-8">
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

        {nearby.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-3">
              Serving Nearby Areas
            </h3>
            <p className="text-muted-foreground">
              {nearby.join(', ')}
            </p>
          </>
        )}

        {/* Invisible but powerful SEO text */}
        <p className="sr-only">
          Website designers in {city}, web development company {city},
          SEO services in {city}, ecommerce website developers in {city},
          digital marketing agency in {city}, mobile app developers in {city},
          logo designers in {city}, GMB setup services in {city}, open 24/7
          website development services in {city}, India.
        </p>

      </div>
    </section>
  );
};

export default CitySEO;
