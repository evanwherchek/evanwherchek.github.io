import { useState, useEffect, useRef } from 'react';
import Title from "./widgets/Title";
import About from "./widgets/About";
import Inspirations from "./widgets/Inspirations";
import SiteHeader from "./widgets/SiteHeader";
import Projects from "./widgets/Projects";
import Background from "./widgets/Background";
import Contact from "./widgets/Contact";

// Original background color: #101C2D

function App() {
    const [showHeader, setShowHeader] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show header when Title is NOT intersecting (not in view)
                setShowHeader(!entry.isIntersecting);
            },
            {
                threshold: 0.3, // Trigger when any part of the element enters/leaves viewport
                rootMargin: '0px' // No margin around the viewport
            }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <div>
            {showHeader && <SiteHeader scrollToSection={scrollToSection} />}
            <main>
                <section id="home" ref={titleRef}>
                    <Title />
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
                <section id="background">
                    <Background />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
}

export default App;