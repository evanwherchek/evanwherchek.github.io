import {useEffect, useRef, useState} from "react";
import SiteHeader from "../src/widgets/SiteHeader";
import Title from "../src/widgets/Title";
import About from "../src/widgets/About";
import Inspirations from "../src/widgets/Inspirations";
import Projects from "../src/widgets/Projects";
import Background from "../src/widgets/Background";
import Contact from "../src/widgets/Contact";

function Index() {
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

export default Index;