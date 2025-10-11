
import { useState, useEffect } from 'react';

export function useActiveSection(navLinks) {
  const [activeSection, setActiveSection] = useState(navLinks[0].href.substring(1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  return activeSection;
}
