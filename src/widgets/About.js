import headshot from '../assets/headshot.png';
import { motion } from "motion/react"

function About() {
    return (
        <div className="h-screen w-full flex bg-soft-white items-center justify-center">
            <div className="flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}>
                    <img className="size-80" src={headshot} alt="Evan Herchek" />
                </motion.div>
                <div className="w-12 ml-8"/>
                <div className="w-96">
                    <h2 className="font-poly text-black font-thin text-xl mt-0 text-left">Hello!</h2>
                    <p className="font-poly text-black font-thin text-lg mt-0 text-left">My name is Evan and I am a Software Developer currently based in St. Louis at National Information Solutions Cooperative. Every day, I contribute to a back end Java and SQL program used in the generation of utility billing statements for rural electric cooperatives.</p>
                </div>
            </div>
        </div>
    );
}

export default About;