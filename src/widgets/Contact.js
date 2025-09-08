import GitHubIcon from "@mui/icons-material/GitHub";
import {Button} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
    return (
        <div className="h-screen w-full flex flex-col bg-black items-center justify-center">
            <h1 className="font-poly text-white font-thin text-xl mt-0 text-left m-1">Building something cool? Let's talk about it!</h1>
            <p className="font-poly text-white font-thin text-lg mt-0 text-left m-1">hello@evanherchek.dev</p>
            <div className="flex flex-row items-center justify-between gap-8 m-1">
                <Button
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    sx={{
                        background: 'linear-gradient(to right, #2045FF, #13993B)',
                        textTransform: 'none',
                        borderRadius: '10px',
                        marginTop: '4px',
                        width: '150px'
                    }}
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/evan-herchek/", "_blank");
                    }}
                >
                    LinkedIn
                </Button>
                <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    sx={{
                        background: 'linear-gradient(to right, #2045FF, #13993B)',
                        textTransform: 'none',
                        borderRadius: '10px',
                        marginTop: '4px',
                        width: '150px'
                    }}
                    onClick={() => {
                        window.open("https://github.com/evanwherchek", "_blank");
                    }}
                >
                    GitHub
                </Button>
            </div>
        </div>
    );
}

export default Contact;