import MobileMenu from "../src/widgets/MobileMenu";
import Image from "next/image";
import Signature from "../src/widgets/custom/Signature";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import {motion} from "motion/react";

function About () {
    return (
        <div>
            <div className="w-full min-h-screen bg-soft-white flex flex-col justify-center items-center">
                <MobileMenu />
                <div className="justify-center flex mt-2">
                    <Image width={200} height={200} src="/images/headshot.png" alt="Evan Herchek" />
                </div>
                <div className="m-4">
                    <h2 className="font-poly text-black font-thin text-lg text-left mt-2">Hello!</h2>
                    <p className="font-poly text-black font-thin text-lg text-left mt-2">My name is Evan and I am a recent computer science graduate of Texas A&M University. Currently, I am based in St. Louis at National Information Solutions Cooperative building software to power America&#39;s rural utility and telecom industries.</p>
                    <p className="font-poly text-black font-thin text-lg text-left mt-2">I have a passion for architecting and creating large projects that improve the lives of my users. I am always exploring new technologies and ideas to figure out how I can adopt them to create something incredible. And the best part is that I&#39;m just getting started. Everyday, I wake up ready to continue building. The future is exciting!</p>
                    <div className="w-1/3 mt-2 mb-2">
                        <Signature />
                    </div>
                </div>
                <IconButton
                    size="small"
                    aria-label="Scroll down"
                    onClick={() => handleNavClick("about")}>
                    <KeyboardArrowDownIcon className="text-black" />
                </IconButton>
            </div>
            <div className="w-full bg-navy flex flex-col justify-center items-center">
                <h2 className="font-poly text-white font-thin text-xl text-left underline mt-4 mb-2">Things that I enjoy</h2>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                    }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-white font-thin text-lg m-2">Software engineering</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Cooking</p>
                        <p className="font-poly text-white font-thin text-lg m-2">Learning</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                    }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Gaming</p>
                        <p className="font-poly text-white font-thin text-lg m-2">Travel</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Automation</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                    }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-white font-thin text-lg m-2">Business strategy</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Gardening</p>
                        <p className="font-poly text-white font-thin text-lg m-2">Fencing</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                    }}>
                    <div className="flex items-center justify-center">
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Data science</p>
                        <p className="font-poly text-white font-thin text-lg m-2">Capital management</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Skiing</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                    }}>
                    <div className="flex items-center justify-center mb-4">
                        <p className="font-poly text-white font-thin text-lg m-2">History</p>
                        <p className="font-poly text-comfort-blue font-thin text-lg m-2">Design</p>
                        <p className="font-poly text-white font-thin text-lg m-2">Hiking</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;