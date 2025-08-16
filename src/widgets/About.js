import headshot from '../assets/headshot.png';
import { motion } from "motion/react"

function About() {
    return (
        <div>
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}>
                    <img src={headshot} alt="Evan Herchek" />
                </motion.div>
                <div style={{width: '5vw'}}/>
                <div style={{width: '50vw'}}>
                    <h2>Hello!</h2>
                    <p>My name is Evan and I am a Software Developer currently based in St. Louis at National Information Solutions Cooperative. Every day, I contribute to a back end Java and SQL program used in the generation of utility billing statements for rural electric cooperatives.</p>
                </div>
            </div>
        </div>
    );
}

export default About;