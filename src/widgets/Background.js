import tamu from '../assets/tamu-logo.png';
import nisc from '../assets/nisc-logo.png';
import {Button} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Download} from "@mui/icons-material";

function Background() {
    return (
        <div className="h-screen w-full bg-showcase-grey flex flex-col items-center justify-center">
            <h1 className="font-poly text-white font-thin text-5xl m-16 text-left underline">Background</h1>
            <div className="flex flex-row items-center justify-center gap-[50px]">
                <div>
                    <p className="font-poly text-white font-thin text-7xl text-center">1 year</p>
                    <p className="font-poly text-white font-thin text-2xl text-center w-40">of professional software engineering experience</p>
                </div>
                <div>
                    <p className="font-poly text-white font-thin text-7xl text-center">6</p>
                    <p className="font-poly text-white font-thin text-2xl text-center w-40">technology certifications</p>
                </div>
                <div>
                    <p className="font-poly text-white font-thin text-7xl text-center">8 years</p>
                    <p className="font-poly text-white font-thin text-2xl text-center w-40">of building software projects</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[50px]">
                <div>
                    <h2 className="font-poly text-white underline font-thin text-4xl text-center w-40">Education</h2>
                    <div className="flex flex-row items-center justify-center">
                        <img src={tamu} className="w-28" alt="Texas A&M Logo" />
                        <div>
                            <p className="font-poly text-white text-3xl">Texas A&M University</p>
                            <p className="font-poly text-white text-2xl">BA in Computing(Computer Science)</p>
                            <p className="font-poly text-white text-2xl">2021 - 2024, GPA: 3.3</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-poly text-white underline font-thin text-4xl text-center w-40">Experience</h2>
                    <div className="flex flex-row items-center justify-center">
                        <img src={nisc} className="w-28" alt="NISC Logo" />
                        <div>
                            <p className="font-poly text-white text-3xl">National Information Solutions Cooperative</p>
                            <p className="font-poly text-white text-2xl">Software Developer</p>
                            <p className="font-poly text-white text-2xl">2024 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button
                variant="contained"
                startIcon={<Download />}
                sx={{
                    background: 'linear-gradient(to right, #2045FF, #13993B)',
                    textTransform: 'none',
                    borderRadius: '10px',
                    marginTop: '4rem',
                    width: '150px'
                }}
                onClick={() => {

                }}
            >
                Full resume
            </Button>
        </div>
    );
}

export default Background;