// import logo from '../assets/logo-1.png';
import { motion } from "motion/react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Threads from './external/Threads';
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

function Title({ scrollToSection }) {
    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
    };

    return (
        <div className="h-screen w-full bg-navy flex flex-col items-center justify-center">
            <Threads
                amplitude={2}
                distance={0}
                enableMouseInteraction={false}
            />
            <div className="absolute h-screen flex flex-col items-center justify-between">
                <div className="flex-1 flex items-center justify-center">
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
                            <Image src="/images/logo-1.png" alt="logo" />
                        </motion.p>
                    </motion.div>
                </div>
                <IconButton
                    size="small"
                    aria-label="Scroll down"
                    onClick={() => handleNavClick("about")}>
                    <KeyboardArrowDownIcon className="text-white" />
                </IconButton>
            </div>
        </div>
    );
}

export default Title;