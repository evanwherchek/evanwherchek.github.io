import image from './image.png'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

function App() {
  const styles = {
    backdrop: {
      backgroundColor: '#101C2D',
      width: '100%',
      height: '100vh',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontFamily: 'Poly, serif',
      color: '#FFFFFF',
      fontWeight: 'normal',
      margin: '5px'
    },
    image: {
      width: '25%',
      margin: '15px',
    },
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: '50%',
      margin: '15px'
    }
  }

  return (
    <div style={styles.backdrop}>
    <img src={image} style={styles.image} alt="Picture of Evan Herchek" />
      <h1 style={styles.heading}>
        Evan Herchek
      </h1>
      <h2 style={styles.heading}>
        Software Engineer
      </h2>
      <Stack direction="row" spacing={2}>
        <a href='https://www.linkedin.com/in/evan-herchek/' target="_blank" rel="noopener noreferrer">
          <IconButton style={styles.button} aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </a>
        <a href='https://github.com/evanwherchek' target="_blank" rel="noopener noreferrer">
          <IconButton style={styles.button}
            aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </a>
      </Stack>
    </div>
  );
}

export default App;