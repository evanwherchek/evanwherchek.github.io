import logo from "../assets/logo-2.png";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const SiteHeader = ({ scrollToSection, onVisibilityToggle }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        if (onVisibilityToggle) {
            onVisibilityToggle(!isVisible);
        }
    };

    return (
        <header className={`sticky top-0 left-0 h-16 md:h-24 p-2 bg-navy grid grid-cols-[1fr_auto_1fr] items-center w-screen ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
            <div className="flex items-center justify-center">
                <div className="hidden lg:flex items-center">
                    <button
                        className="bg-none border-none cursor-pointer px-2 py-2 text-sm md:px-4 md:text-base font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                        onClick={() => handleNavClick('about')}
                    >
                        About
                    </button>
                    <button
                        className="bg-none border-none cursor-pointer px-2 py-2 text-sm md:px-4 md:text-base font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                        onClick={() => handleNavClick('inspirations')}
                    >
                        Inspirations
                    </button>
                    <button
                        className="bg-none border-none cursor-pointer px-2 py-2 text-sm md:px-4 md:text-base font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                        onClick={() => handleNavClick('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className="bg-none border-none cursor-pointer px-2 py-2 text-sm md:px-4 md:text-base font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                        onClick={() => handleNavClick('background')}
                    >
                        Background
                    </button>
                    <button
                        className="bg-none border-none cursor-pointer px-2 py-2 text-sm md:px-4 md:text-base font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
                        onClick={() => handleNavClick('contact')}
                    >
                        Contact
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <img className="w-48 md:w-64 lg:w-[300px]" src={logo} alt="logo" />
            </div>

            <div className="flex items-center justify-center">
                <Stack direction="row" spacing={1}>
                    <a href='https://www.linkedin.com/in/evan-herchek/' target="_blank" rel="noopener noreferrer">
                        <IconButton size="small" aria-label="LinkedIn">
                            <LinkedInIcon className="text-white text-xl"/>
                        </IconButton>
                    </a>
                    <a href='https://github.com/evanwherchek' target="_blank" rel="noopener noreferrer">
                        <IconButton size="small" aria-label="GitHub">
                            <GitHubIcon className="text-white text-xl"/>
                        </IconButton>
                    </a>
                </Stack>
            </div>
        </header>
    );
}

export default SiteHeader;