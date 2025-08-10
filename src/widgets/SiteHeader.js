import logo from "../assets/logo-2.png";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

const SiteHeader = ({ scrollToSection }) => {
    const styles = {
        navButton: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            fontFamily: 'Inter',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease',
        },
        backdrop: {
            position: 'sticky',
            top: 0,
            left: 0,
            backgroundColor: '#101C2D',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            width: '100vw'
        },
        logo: {
            width: '300px'
        }
    }

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
    };

    return (
        <header style={styles.backdrop}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button
                    style={styles.navButton}
                    onClick={() => handleNavClick('about')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    About
                </button>
                <button
                    style={styles.navButton}
                    onClick={() => handleNavClick('inspirations')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Inspirations
                </button>
                <button
                    style={styles.navButton}
                    onClick={() => handleNavClick('projects')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Projects
                </button>
                <button
                    style={styles.navButton}
                    onClick={() => handleNavClick('background')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Background
                </button>

                <button
                    style={styles.navButton}
                    onClick={() => handleNavClick('contact')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                    Contact
                </button>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={styles.logo} src={logo} alt="logo" />
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Stack direction="row" spacing={2}>
                    <a href='https://www.linkedin.com/in/evan-herchek/' target="_blank" rel="noopener noreferrer">
                        <IconButton style={styles.button} aria-label="LinkedIn">
                            <LinkedInIcon style={{color: 'white'}}/>
                        </IconButton>
                    </a>
                    <a href='https://github.com/evanwherchek' target="_blank" rel="noopener noreferrer">
                        <IconButton style={styles.button} aria-label="GitHub">
                            <GitHubIcon style={{color: 'white'}}/>
                        </IconButton>
                    </a>
                </Stack>
            </div>
        </header>
    );
}

export default SiteHeader;