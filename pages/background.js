import MobileMenu from "../src/widgets/MobileMenu";
import {motion} from "motion/react";
import StatText from "../src/widgets/custom/StatText";
import Image from "next/image";
import {Button} from "@mui/material";
import {Download} from "@mui/icons-material";

function Background () {
    return (
        <div className="w-full bg-showcase-grey flex flex-col items-center justify-center">
            <MobileMenu />
            <h1 className="font-poly text-white font-thin text-3xl mt-8 mb-4 underline">Background</h1>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true }}
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
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true }}
                transition={{
                    duration: 3,
                    delay: 1.5,
                }}>
                <div className="flex flex-col items-center justify-between mt-16 gap-12">
                    <div>
                        <h2 className="font-poly text-white underline font-thin text-2xl text-left w-40">Education</h2>
                        <div className="flex flex-row items-center justify-center mt-1">
                            <Image src="/images/tamu-logo.png" width={40} height={40} className="mr-4" alt="Texas A&M Logo" />
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
                            <Image src="/images/nisc-logo.png" width={40} height={40} className="mr-4" alt="NISC Logo" />
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
                startIcon={<Download />}
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
    );
}

export default Background;