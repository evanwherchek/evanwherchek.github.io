import ProjectWindow from "./custom/ProjectWindow";

import { motion } from "motion/react"

import coatails from '../assets/coatails.png';
import reciperocal from '../assets/reciperocal.png';
import resutailor from '../assets/resutailor.png';

function Projects () {
    return (
        <div className="h-screen w-full bg-showcase-grey flex flex-col items-center justify-center">
            <h2 className="font-poly text-white font-thin text-xl md:text-2xl lg:text-3xl mt-0 text-left underline m-4">Featured Projects</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-[50px]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <ProjectWindow
                        sourceImage={resutailor}
                        projectTitle={"Resutailor"}
                        description={"Generate a fine-tuned resume for any application."}
                        year="2024"
                        link="https://github.com/evanwherchek/resutailor"
                        categories={['Web', 'AI']}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <ProjectWindow
                        sourceImage={coatails}
                        projectTitle={"Coatails"}
                        description={"Make strong professional connections IRL."}
                        year="2021 - 2024"
                        link="https://github.com/evanwherchek/resutailor"
                        categories={['Mobile', 'Full Stack']}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}>
                    <ProjectWindow
                        sourceImage={reciperocal}
                        projectTitle={"RecipeRocal"}
                        description={"Gamify your nutrition and reach your goals."}
                        year="2024"
                        link="https://github.com/evanwherchek/resutailor"
                        categories={['Mobile', 'Team-developed']}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;