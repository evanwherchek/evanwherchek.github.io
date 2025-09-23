import Threads from "./external/Threads";
import {motion} from "motion/react";
import {Button} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Linktree() {
    return (
        <div className="h-screen w-full bg-navy flex flex-col items-center justify-center">
            <Threads
                amplitude={2}
                distance={0}
                enableMouseInteraction={false}
            />
            <div className="absolute flex flex-col items-center justify-center inset-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3 }}>
                        <img className="w-10/12 mx-auto mb-4" src="/images/logo-1.png" alt="logo" />
                    </motion.p>
                </motion.div>
                <Button
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                    sx={{
                        background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                        textTransform: 'none',
                        borderRadius: '10px',
                        width: '33.333%',
                        margin: '0.25rem'
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
                        background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                        textTransform: 'none',
                        borderRadius: '10px',
                        width: '33.333%',
                        margin: '0.25rem'
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

export default Linktree;