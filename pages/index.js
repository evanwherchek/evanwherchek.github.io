import { useEffect, useRef, useState } from 'react';
import SiteHeader from '../src/widgets/site-header';
import Title from '../src/widgets/title';
import About from '../src/widgets/about';
import Inspirations from '../src/widgets/inspirations';
import Projects from '../src/widgets/projects';
import Qualifications from '../src/widgets/qualifications';
import Contact from '../src/widgets/contact';
import Linktree from '../src/widgets/linktree';
import Head from "next/head";

export const metadata = {
  title: 'Evan Herchek',
  openGraph: {
    title: 'Evan Herchek',
    url: 'https://evanherchek.dev',
    images: [
      {
        url: 'https://evanherchek.dev/public/images/opengraph-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Site preview image'
      }
    ]
  }
}

function Index() {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        'mobile',
        'android',
        'iphone',
        'ipad',
        'tablet',
        'blackberry',
        'windows phone',
      ];

      return (
        mobileKeywords.some((keyword) => userAgent.includes(keyword)) ||
        window.innerWidth <= 768
      );
    };

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show header when Title is NOT intersecting (not in view)
        setShowHeader(!entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 10% of the element enters/leaves viewport
        rootMargin: '-50px 0px 0px 0px', // Add some margin to trigger earlier
      }
    );

    const currentTitleRef = titleRef.current;
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Evan Herchek</title>
      </Head>
      {isMobile ? (
        <Linktree />
      ) : (
        <div>
          <SiteHeader
            scrollToSection={scrollToSection}
            isVisible={showHeader}
          />
          <main>
            <section id="home" ref={titleRef}>
              <Title scrollToSection={scrollToSection} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="inspirations">
              <Inspirations />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="qualifications">
              <Qualifications />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default Index;
