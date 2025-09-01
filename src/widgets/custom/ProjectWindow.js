function ProjectWindow({ sourceImage, projectTitle, description }) {
    return (
        <div className="relative w-60 group">
            <img src={sourceImage} alt="headshot" className="group-hover:opacity-50 transition-opacity" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                    {projectTitle}
                </span>
                <span className="text-white text-center px-4 py-2 rounded">
                    {description}
                </span>
            </div>
        </div>
    );
}

export default ProjectWindow;
