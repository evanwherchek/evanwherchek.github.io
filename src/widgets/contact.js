import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div className="w-full py-32 flex flex-col bg-showcase-grey items-center justify-center">
      <h1 className="font-poly text-white font-thin text-3xl text-center mb-6">
        Building something cool? Let&#39;s talk about it!
      </h1>
      <div className="flex flex-row items-center justify-between gap-8">
        <Button
          variant="contained"
          startIcon={<LinkedInIcon />}
          sx={{
            background: 'linear-gradient(to right, #2045FF, #20a6ff)',
            textTransform: 'none',
            borderRadius: '10px',
            width: '250px',
          }}
          onClick={() => {
            window.open('https://www.linkedin.com/in/evan-herchek/', '_blank');
          }}
        >
          Message me on LinkedIn
        </Button>
      </div>
    </div>
  );
}

export default Contact;
