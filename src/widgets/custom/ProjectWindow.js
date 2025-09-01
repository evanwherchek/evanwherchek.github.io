import {Button} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectWindow({ sourceImage, projectTitle, description, year }) {
    return (
        <div className="w-96 bg-panel-blue rounded-2xl">
            <h2 className="font-poly font-bold underline text-2xl text-white pl-4 pt-8">{projectTitle}</h2>
            <p className="font-poly text-white font-thin text-lg text-left pl-4 pb-8">{description}</p>
            <div className="flex items-end">
                <img src={sourceImage} className="bg-white w-40 h-40 rounded-tr-2xl rounded-bl-2xl p-5 object-contain" alt={projectTitle}/>
                <div className="flex flex-col ml-6">
                    <h3 className="text-white underline mt-4 mb-4">{year}</h3>
                    <p className="text-white outline outline-1 text-center rounded-2xl mt-2 inline-block">Web</p>
                    <p className="text-white outline outline-1 text-center rounded-2xl mt-2 inline-block">Artificial Intelligence</p>
                    <Button 
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        sx={{ 
                            marginTop: '1rem', 
                            marginBottom: '1rem',
                            background: 'linear-gradient(to right, #2045FF, #13993B)',
                            textTransform: 'none'
                        }}
                    >
                        See the code
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProjectWindow;
