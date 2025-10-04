import {Button} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MobileHeader from "../src/widgets/MobileHeader";

function Contact () {
    return (
        <div className="w-full h-screen flex flex-col bg-gray-800 items-center justify-center pt-16">
            <MobileHeader />
            <h1 className="font-poly text-white font-thin text-xl mt-0 ml-8 mr-8 mb-2 text-center">Building something cool? Let&#39;s talk about it!</h1>
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