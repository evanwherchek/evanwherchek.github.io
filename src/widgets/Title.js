import logo from '../assets/logo-1.png';
import { motion } from "motion/react"
import Threads from './external/Threads';

function Title() {
    return (
        <div className="h-screen w-full bg-navy flex items-center justify-center">
            <Threads
                amplitude={2}
                distance={0}
                enableMouseInteraction={false}
            />
            <div className="absolute">
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
                        <img src={logo} alt="logo" />
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Title;