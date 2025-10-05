import {Button} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
    return (
        <div className="w-full pt-52 pb-52 flex flex-col bg-gray-800 items-center justify-center">
            <h1 className="font-poly text-white font-thin text-xl mt-0 text-left m-1">Building something cool? Let&#39;s talk about it!</h1>
            <div className="flex flex-row items-center justify-between gap-8 m-1">
                <Button
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    sx={{
                        background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                        textTransform: 'none',
                        borderRadius: '10px',
                        marginTop: '4px',
                        width: '250px'
                    }}
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/evan-herchek/", "_blank");
                    }}
                >
                    Message me on LinkedIn
                </Button>
            </div>
        </div>
    );
}

export default Contact;