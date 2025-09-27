// import headshot from '../assets/headshot.png';

import Signature from "./custom/Signature";
import Image from "next/image";

function About() {
    return (
        <div className="w-full flex bg-soft-white items-center justify-center">
            <div className="mt-52 mb-52 flex items-center justify-center">
                <Image className="size-80" src="/images/headshot.png" alt="Evan Herchek" />
                <div className="w-12 ml-8"/>
                <div className="w-96">
                    <h2 className="font-poly text-black font-thin text-3xl mt-4 text-left">Hello!</h2>
                    <p className="font-poly text-black font-thin text-lg mt-4 text-left">My name is Evan and I am a recent computer science graduate of Texas A&M University. Currently, I am based in St. Louis at National Information Solutions Cooperative building software to power America&#39;s rural utility and telecom industries.</p>
                    <p className="font-poly text-black font-thin text-lg mt-4 text-left">I have a passion for architecting and creating large projects that improve the lives of my users. I am always exploring new technologies and ideas to figure out how I can adopt them to create something incredible. And the best part is that I&#39;m just getting started. Everyday, I wake up ready to continue building. The future is exciting!</p>
                    <div className="w-1/3 mt-4">
                        <Signature />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;