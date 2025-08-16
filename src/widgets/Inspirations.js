import { motion } from "motion/react"

function Inspirations() {
    return (
        <div>
            <h2>Things that I enjoy</h2>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div>
                    <p>Software engineering</p><p>Cooking</p><p>Learning</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div>
                    <p>Analytical thinking</p><p>Travel</p><p>Automation</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div>
                    <p>Business strategy</p><p>Gardening</p><p>Fencing</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div>
                    <p>Data science</p><p>Capital management</p><p>Skiing</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div>
                    <p>History</p><p>Design</p><p>Hiking</p>
                </div>
            </motion.div>
        </div>
    );
}

export default Inspirations;