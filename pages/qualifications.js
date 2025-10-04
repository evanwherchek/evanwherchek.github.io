import {motion} from "motion/react";
import StatText from "../src/widgets/custom/StatText";
import Image from "next/image";
import {Button} from "@mui/material";
import {Download} from "@mui/icons-material";
import ProjectWindow from "../src/widgets/custom/ProjectWindow";
import MobileHeader from "../src/widgets/MobileHeader";

function Qualifications () {
    return (
        <div>
            <div className="w-full bg-showcase-grey flex flex-col items-center justify-center pt-16">
                <MobileHeader/>
                <h1 className="font-poly text-white font-thin text-3xl mt-8 mb-4 underline">Qualifications</h1>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 3,
                        delay: 1,
                    }}>
                    <div className="flex flex-col align-top justify-center gap-12">
                        <StatText number={1} smallText={"year of full time software engineering experience"}/>
                        <StatText number={6} smallText={"cloud computing provider certifications"}/>
                        <StatText number={8} smallText={"years of building software projects"}/>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        duration: 3,
                        delay: 1.5,
                    }}>
                    <div className="flex flex-col items-center justify-between mt-16 gap-12">
                        <div>
                            <h2 className="font-poly text-white underline font-thin text-2xl text-left w-40">Education</h2>
                            <div className="flex flex-row items-center justify-center mt-1">
                                <Image src="/images/tamu-logo.png" width={40} height={40} className="mr-4"
                                       alt="Texas A&M Logo"/>
                                <div>
                                    <p className="font-poly text-white text-xl">Texas A&M University</p>
                                    <p className="font-poly text-white text-xl">BA in Computing</p>
                                    <p className="font-poly text-white text-xl">2021 - 2024, GPA: 3.3</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-poly text-white underline font-thin text-2xl text-left w-40">Experience</h2>
                            <div className="flex flex-row items-center justify-center mt-1">
                                <Image src="/images/nisc-logo.png" width={40} height={40} className="mr-4"
                                       alt="NISC Logo"/>
                                <div>
                                    <p className="font-poly text-white text-xl">NISC</p>
                                    <p className="font-poly text-white text-xl">Software Developer</p>
                                    <p className="font-poly text-white text-xl">2024 - Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Button
                    variant="contained"
                    startIcon={<Download/>}
                    sx={{
                        background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                        textTransform: 'none',
                        borderRadius: '10px',
                        marginTop: '4rem',
                        marginBottom: '2rem',
                        width: '150px'
                    }}
                    onClick={() => {
                        handleFileDownload();
                    }}
                >
                    Full resume
                </Button>
            </div>

            <div className="w-full bg-showcase-grey flex flex-col items-center justify-center">
                <h2 className="font-poly text-white font-thin text-3xl mt-32 mb-8 underline">Featured Projects</h2>
                <div className="flex flex-row flex-wrap items-center justify-center gap-[50px]">
                    <motion.div
                        initial={{opacity: 0, y: 25}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                        }}>
                        <ProjectWindow
                            sourceImage="/images/resutailor.png"
                            projectTitle={"Resutailor"}
                            description={"Generate a fine-tuned resume for any application."}
                            year="2024"
                            link="https://github.com/evanwherchek/resutailor"
                            categories={['Web', 'AI']}
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 25}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 2,
                            delay: 1,
                        }}>
                        <ProjectWindow
                            sourceImage="/images/coatails.png"
                            projectTitle={"Coatails"}
                            description={"Make strong professional connections IRL."}
                            year="2021 - 2024"
                            link="https://github.com/evanwherchek/resutailor"
                            categories={['Mobile', 'Full Stack']}
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 25}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 2,
                            delay: 1.5,
                        }}>
                        <ProjectWindow
                            sourceImage="/images/reciperocal.png"
                            projectTitle={"RecipeRocal"}
                            description={"Gamify your nutrition and reach your goals."}
                            year="2024"
                            link="https://github.com/evanwherchek/resutailor"
                            categories={['Mobile', 'Team-developed']}
                        />
                    </motion.div>
                </div>
                <Button
                    variant="text"
                    sx={{
                        color: '#ffffff',
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        margin: '4rem'
                    }}
                    onClick={() => {
                        window.open('https://github.com/evanwherchek', "_blank");
                    }}
                >
                    See all projects on my GitHub
                </Button>
            </div>
        </div>
    );
}

export default Qualifications;