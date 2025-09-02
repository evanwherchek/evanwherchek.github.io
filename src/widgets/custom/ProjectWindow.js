import {Button} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CategoryChip from "./CategoryChip";

function ProjectWindow({ sourceImage, projectTitle, description, year, categories, link }) {
    const chipItems = categories.map(item => <CategoryChip text={item} />);

    return (
        <div className="w-96 h-96 bg-panel-blue rounded-2xl flex flex-col">
            <h2 className="font-poly underline text-3xl text-white ml-6 mt-8">{projectTitle}</h2>
            <p className="font-poly text-white font-thin text-xl text-left w-3/4 ml-6 mt-2">{description}</p>
            <div className="flex mt-auto">
                <img src={sourceImage} className="bg-background-white w-48 h-48 rounded-tr-2xl rounded-bl-2xl p-5 object-contain" alt={projectTitle}/>
                <div className="m-2" />
                <div className="flex flex-col">
                    <h3 className="text-white underline mb-3">{year}</h3>
                    <ul>{chipItems}</ul>
                    <Button 
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        sx={{ 
                            background: 'linear-gradient(to right, #2045FF, #13993B)',
                            textTransform: 'none',
                            borderRadius: '10px',
                            marginTop: '4px',
                            width: '150px'
                        }}
                        onClick={() => {
                            window.open(link, "_blank");
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
