import React from "react";
import projects from "../data/projects";

const Projects = () => {
    return (
        <div className="rounded-lg p-6 flex-grow">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Projects</h2>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-500 hover:border-[#00df9a] group">
                        <div className="flex-shrink-0">
                            <span>
                                {project.icon()}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold group-hover:text-[#00df9a]">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
