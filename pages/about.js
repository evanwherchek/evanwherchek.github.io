import Image from "next/image";
import Signature from "../src/widgets/custom/Signature";
import MobileHeader from "../src/widgets/MobileHeader";

function About () {
    return (
        <div className="w-full min-h-screen bg-soft-white flex flex-col justify-center items-center pt-16">
            <MobileHeader />
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
        </div>
    );
}

export default About;