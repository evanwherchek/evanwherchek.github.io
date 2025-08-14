import logo from '../assets/logo-1.png';
import { motion } from "motion/react"
import Threads from './Threads';

function Title() {
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#101C2D'}}>
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}>
                    <img src={logo} alt="logo" />
                </motion.p>
            </motion.div>
        </div>
    );
}

export default Title;