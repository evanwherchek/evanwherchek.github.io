/* eslint-disable jsx-a11y/img-redundant-alt */
import image from './image.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

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
      backgroundColor: '#808080',
      width: '500px',
      borderRadius: '10px',
      textTransform: 'none',
      fontFamily: [
        'Arial'
      ]
    }
  }

  return (
    <div style={styles.backdrop}>
      <img src={image} style={styles.image} alt="Picture of Evan Herchek" />
      <h1 style={styles.heading}>
        Evan Herchek
      </h1>
      <h2 style={styles.heading}>
        Software Developer
      </h2>
      <Stack direction="column" spacing={1.5}>
        <a href='https://www.linkedin.com/in/evan-herchek/' target="_blank" rel="noopener noreferrer">
          <Button variant="contained" style={styles.button} aria-label="LinkedIn" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </a>
        <a href='https://github.com/evanwherchek' target="_blank" rel="noopener noreferrer">
          <Button variant="contained" style={styles.button} aria-label="GitHub" startIcon={<GitHubIcon />}>
            GitHub
          </Button>
        </a>
      </Stack>
    </div>
  );
}

export default App;