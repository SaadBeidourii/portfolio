import React from 'react';
import sortedProjects from "../data/projects";
import { educationItems, professionalItems } from '../data/timeline';
import Card from '../components/cards/Card';
import TimelineItem from '../components/timeline/Timeline';
import Techno from "../components/techno/techno";
import { Github } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="px-4 flex-grow space-y-6 p-2">
            <div className="rounded-lg p-6 border border-black">
                <div className="mb-12">
                    <div className="ml-10 mt-10 justify-center items-baseline">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold">Saad Beidouri</h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl ml-4 text-[#8c8c8c]">
                            Full Stack Engineer
                        </h2>
                    </div>
                    <div className="text-justify max-w-[70%] mx-auto mt-10 text-xl relative">
                        <p>
                            Hello, I am Saad Beidouri, a dedicated computer engineering student currently in my fifth year at <a
                            href="https://polytech.univ-cotedazur.fr/"
                            className="text-black font-bold dark:text-bg-[#00df9a] hover:no-underline hover:bg-[#2a6a55] hover:text-white"
                        >
                            Polytech Nice Sophia </a>
                            in France. My academic journey began with a rigorous foundation in mathematics and computer science
                            during my preparatory studies in Saint-Brieuc, France. After completing two years in classes
                            préparatoires aux grandes écoles (CPGE) in Saint-Brieuc, I transitioned to Polytech Nice Sophia to
                            further develop my skills.
                        </p>

                        {/* Social links and CV downloads - positioned at bottom right */}
                        <div className="flex justify-end mt-6">
                            <div
                                className="flex flex-col items-end space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                                <a
                                    href="https://github.com/SaadBeidourii"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-black hover:text-[#2a6a55] transition-colors"
                                >
                                    <Github size={24} className="mr-1"/>
                                    <span>GitHub</span>
                                </a>

                                <div className="flex items-center space-x-3">
                                    <a
                                        href="/cv/CV-Saad%20Beidouri-%20FR.pdf"
                                        download
                                        className="px-4 py-2 bg-black text-white rounded-md hover:bg-[#2a6a55] transition-colors"
                                    >
                                        CV Français
                                    </a>
                                    <a
                                        href="/cv/CV-Saad%20Beidouri-%20EN.pdf"
                                        download
                                        className="px-4 py-2 bg-black text-white rounded-md hover:bg-[#2a6a55] transition-colors"
                                    >
                                        CV English
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="space-y-6 lg:flex lg:space-x-6 lg:space-y-0">

            <div className="space-y-6 lg:flex lg:flex-col lg:space-x-0 lg:space-y-6">
                    <div className="rounded-lg p-6 border border-black flex-grow">
                        <Techno />
                    </div>

                    <div className="rounded-lg p-6 border border-black flex-grow">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">Projects</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {sortedProjects.map((project, index) => (
                                <Card
                                    key={index}
                                    title={project.title}
                                    status={project.status}
                                    description={project.description}
                                    icon={project.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>


                <div className="rounded-lg p-6 border border-black flex-grow">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">TimeLine</h2>
                    <div className="max-w-3xl mx-auto p-3">
                        <ol className="relative space-y-6">
                            <div className="rounded-lg p-6 border border-black">
                                {professionalItems.map((item, index) => (
                                    <TimelineItem
                                        key={index}
                                        icon={item.icon}
                                        title={item.title}
                                        date={item.date}
                                        description={item.description}
                                        tag={item.tag}
                                    />
                                ))}
                            </div>
                            <div className="rounded-lg p-6 border border-black">
                                {educationItems.map((item, index) => (
                                    <TimelineItem
                                        key={index}
                                        icon={item.icon}
                                        title={item.title}
                                        date={item.date}
                                        description={item.description}
                                        tag={item.tag}
                                    />
                                ))}
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;