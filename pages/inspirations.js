import {motion} from "motion/react";
import MobileHeader from "../src/widgets/MobileHeader";

function Inspirations() {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col bg-navy pt-16">
            <MobileHeader />
            <h2 className="font-poly text-white font-thin text-xl md:text-2xl lg:text-3xl mt-0 text-left underline m-4">Things that I enjoy</h2>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Software engineering</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">Cooking</p>
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Learning</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 0.75,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">Gaming</p>
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Travel</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">DevOps</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Business strategy</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">Gardening</p>
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Fencing</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 1.25,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">Data science</p>
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Capital management</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">Skiing</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">History</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg md:text-xl lg:text-2xl m-2">Design</p>
                        <p className="font-poly text-white font-thin text-lg md:text-xl lg:text-2xl m-2">Hiking</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Inspirations;