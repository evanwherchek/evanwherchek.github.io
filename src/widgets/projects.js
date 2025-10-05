import ProjectWindow from "./custom/project-window";

import { motion } from "motion/react";
import {Button} from "@mui/material";

function Projects () {
    return (
        <div className="w-full bg-showcase-grey flex flex-col items-center justify-center">
            <h2 className="font-poly text-white font-thin text-5xl mt-32 mb-8 underline">Featured Projects</h2>
            <div className="flex flex-wrap items-center justify-center gap-[50px]">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
    );
}

export default Projects;