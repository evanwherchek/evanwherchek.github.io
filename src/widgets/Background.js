import tamu from '../assets/tamu-logo.png';
import nisc from '../assets/nisc-logo.png';
import resume from '../assets/resume.pdf';

import {Button} from "@mui/material";
import {Download} from "@mui/icons-material";
import { motion } from "motion/react";

import StatText from "./custom/StatText";

function Background() {
    const handleFileDownload = () => {
        const link = document.createElement("a");

        link.href = resume;
        link.download = 'Resume - Evan Herchek.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="w-full bg-showcase-grey flex flex-col items-center justify-center">
            <h1 className="font-poly text-white font-thin text-5xl text-left underline">Background</h1>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true }}
                transition={{
                    duration: 3,
                    delay: 1,
                }}>
                <div className="flex flex-row align-top justify-center gap-12 m-8">
                    <StatText number={1} smallText={"year of full time software engineering experience"}/>
                    <StatText number={6} smallText={"cloud computing provider certifications"}/>
                    <StatText number={8} smallText={"years of building software projects"}/>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true }}
                transition={{
                    duration: 3,
                    delay: 3,
                }}>
                <div className="flex flex-row items-center justify-between gap-12 m-8">
                    <div>
                        <h2 className="font-poly text-white underline font-thin text-4xl text-center w-40">Education</h2>
                        <div className="flex flex-row items-center justify-center">
                            <img src={tamu} className="w-28" alt="Texas A&M Logo" />
                            <div>
                                <p className="font-poly text-white text-3xl">Texas A&M University</p>
                                <p className="font-poly text-white text-2xl">BA in Computing</p>
                                <p className="font-poly text-white text-2xl">2021 - 2024, GPA: 3.3</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-poly text-white underline font-thin text-4xl text-center w-40">Experience</h2>
                        <div className="flex flex-row items-center justify-center">
                            <img src={nisc} className="w-28" alt="NISC Logo" />
                            <div>
                                <p className="font-poly text-white text-3xl">NISC</p>
                                <p className="font-poly text-white text-2xl">Software Developer</p>
                                <p className="font-poly text-white text-2xl">2024 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Button
                variant="contained"
                startIcon={<Download />}
                sx={{
                    background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                    textTransform: 'none',
                    borderRadius: '10px',
                    marginTop: '4rem',
                    marginBottom: '4rem',
                    width: '150px'
                }}
                onClick={() => {
                    handleFileDownload();
                }}
            >
                Full resume
            </Button>
        </div>
    );
}

export default Background;