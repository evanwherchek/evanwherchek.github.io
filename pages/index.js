import {useEffect, useRef, useState} from "react";
import SiteHeader from "../src/widgets/SiteHeader";
import Title from "../src/widgets/Title";
import About from "../src/widgets/About";
import Inspirations from "../src/widgets/Inspirations";
import Projects from "../src/widgets/Projects";
import Qualifications from "../src/widgets/Qualifications";
import Contact from "../src/widgets/Contact";
import Linktree from "../src/widgets/Linktree";
import MobileMenu from "../src/widgets/MobileMenu";

function Index() {
    const [showHeader, setShowHeader] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'tablet', 'blackberry', 'windows phone'];

            return mobileKeywords.some(keyword => userAgent.includes(keyword)) ||
                   window.innerWidth <= 768;
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
                rootMargin: '-50px 0px 0px 0px' // Add some margin to trigger earlier
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
                block: 'center'
            });
        }
    };

    return (
        <div>
            {isMobile ? (
                <Linktree />
            ) : (
                <div>
                    <SiteHeader scrollToSection={scrollToSection} isVisible={showHeader} />
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